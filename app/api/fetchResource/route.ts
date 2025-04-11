import fs from 'fs';
import path from 'path';
import { isString, isArray, isObject, isNumber } from 'lodash-es';
import db from '@/lib/database';

// 定义请求体的类型
interface RequestBody {
  wegicUrl: string;
  cookie: string;
  isSave?: boolean;
  isSaveDB?: boolean; // 👈 新增字段
}


// 定义响应数据的类型
interface ApiResponse {
  message: string;
  data?: unknown;
  error?: string;
}


const fetchPageData = async (blockUrl: string) => {
  const blockResponse = await fetch(blockUrl,
    {
      "headers": {
        "accept": "application/json, text/plain, */*",
        "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
        "sec-ch-ua": "\"Chromium\";v=\"134\", \"Not:A-Brand\";v=\"24\", \"Google Chrome\";v=\"134\"",
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": "\"macOS\"",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site",
        "Referer": "https://wegic.ai/",
        "Referrer-Policy": "strict-origin-when-cross-origin"
      },
      "body": null,
      "method": "GET"
    }
  );
  return await blockResponse.json();
}


function writeTsxFile(block: any) {
  if (!block) return
  const blockId = block.id.replaceAll('-', '_');
  const blockName = block.name.split('_')[0];
  const prefix = blockName + '_' + blockId;

  // 处理JSON 为对应的customComponent
  const customComponentLibPath = path.join(process.cwd(), `customComponent/@${blockName.toLowerCase()}`);
  // 如果 resourceLibrary 文件夹不存在，则创建它
  if (!fs.existsSync(customComponentLibPath)) {
    fs.mkdirSync(customComponentLibPath, { recursive: true });
  }


  const compPath = path.join(customComponentLibPath, `${prefix}.tsx`);
  // 表头
  fs.writeFileSync(compPath, `
import React from "react";
import AnimateInView from "../@base/AnimateInView";
import EditableButton from "../@base/EditableButton";
import EditableIcon from "../@base/EditableIcon";
import EditableImg from "../@base/EditableImg";
import EditableText from "../@base/EditableText";
import Overflow from "../@base/Overflow";
import Marquee from "../@base/Marquee";
import { getComConfigByType, getCompTypeOptions } from "../config";
import { motion } from "framer-motion";
import {
  UICompBuilder,
  withDefault,
  withExposingConfigs,
  StringControl,
  jsonArrayControl,
  ArrayStringControl,
  ArrayNumberControl,
  jsonObjectControl,
  Section,
  Dropdown,
  globalEventEmitter
} from "lowcoder-sdk";\n`, 'utf8');
  // withDefault 处理
  fs.appendFileSync(compPath, `export const ${prefix}_childrenMap = {\n`, 'utf8');
  // TODO: 添加类型 type
  fs.appendFileSync(compPath, `type: withDefault(StringControl, ${JSON.stringify(prefix)}),\n`, 'utf8');

  Object.keys(block.props).forEach((key) => {
    const prop = block.props[key];
    if (isString(prop)) {
      fs.appendFileSync(compPath, `${key}:withDefault(StringControl, ${JSON.stringify(prop)}),\n`, 'utf8');
    } else if (isArray(prop)) {
      if (isNumber(prop[0])) {
        fs.appendFileSync(compPath, `${key}:withDefault(ArrayNumberControl, JSON.stringify(${JSON.stringify(prop)})),\n`, 'utf8');
      } else if (isString(prop[0])) {
        fs.appendFileSync(compPath, `${key}:withDefault(ArrayStringControl, JSON.stringify(${JSON.stringify(prop)})),\n`, 'utf8');
      } else if (isObject(prop[0])) {
        fs.appendFileSync(compPath, `${key}:jsonArrayControl(${JSON.stringify(prop)}),\n`, 'utf8');
      }
    } else if (isObject(prop)) {
      fs.appendFileSync(compPath, `${key}:jsonObjectControl(${JSON.stringify(prop)}),\n`, 'utf8');
    }
  })
  fs.appendFileSync(compPath, `}\n`, 'utf8');

  // 写入处理
  fs.appendFileSync(compPath, 'export ' + block.code.replace(block.name, prefix), 'utf8');


  fs.appendFileSync(compPath, `
  export function ${prefix}_PropertyViewFn(children: any) {
    return (
        <Section name="Basic">
            <Dropdown
              lineHeight={300}
              value={children.type.getView()}
              options={getCompTypeOptions('${blockName}')}
              label={'type'}
              onChange={async (value) => {
                // 处理
                  children.type.dispatchChangeValueAction(value)
                  globalEventEmitter.emit("updateCompFactory", getComConfigByType('${blockName}')[value].exposingConfigs);
              }}
            />
           ${Object.keys(block.props).map((key) => {
    return `{children.${key}?.propertyView({ label: '${key}' })}\n`
  }).join('')}
        </Section>
    );
} `, 'utf8');
  fs.appendFileSync(compPath, `
export const ${prefix}_Builder = new UICompBuilder(${prefix}_childrenMap, (props: any) => {
  // 从映射表中获取对应的组件
  const Component = getComConfigByType('${blockName}')[props.type].comp;
  console.log('props', props)
  // 日志输出，方便调试
  if (Component) {
    return <Component {...props} />;
  } else {
    // 如果没有匹配的组件，可以返回一个默认的占位组件或空值
    return <div>Component not found for type: {props.type}</div>;
  }
}).setPropertyViewFn(${prefix}_PropertyViewFn)
  .build();


export const ${prefix}_ExposingConfigs = withExposingConfigs(${prefix}_Builder, [])`, 'utf8');
}


function saveBlockToDB(block: any) {
  if (!block || !block.id || !block.name || !block.code) return;

  const stmt = db.prepare(`
    INSERT OR REPLACE INTO blocks (id, name, code, props)
    VALUES (@id, @name, @code, @props)
  `);
  const blockId = block.id.replaceAll('-', '_');
  const blockName = block.name.split('_')[0];
  const prefix = blockName + '_' + blockId;

  stmt.run({
    id: block.id,
    name: prefix,
    code: block.code,
    props: JSON.stringify(block.props || {}),
  });
}

async function fetchWegicInfo(assistantThreadUrl: string, cookie: string) {
  const wegicResponse = await fetch(assistantThreadUrl, {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
      "baggage": "sentry-environment=builder-aibuild-tencent-zprod,sentry-public_key=2fd59afed8e24931852a1bf5c508cc26,sentry-trace_id=1caa03d42f37472b949e3553a1194dc7,sentry-sample_rate=0.05,sentry-sampled=false",
      "priority": "u=1, i",
      "sec-ch-ua": "\"Chromium\";v=\"134\", \"Not:A-Brand\";v=\"24\", \"Google Chrome\";v=\"134\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"macOS\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "sentry-trace": "1caa03d42f37472b949e3553a1194dc7-b0242e9dcb793a7f-0",
      "cookie": cookie,
      "Referer": "https://wegic.ai/app/1904820318146498562",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": null,
    "method": "GET"
  })
  return await wegicResponse.json()
}

function replaceIdsInUrl(url: string, assistantId: string, pageId: string) {
  return url.replace(
    /\/(\d+)\/(\d+)\.json(\?[^#]*)?$/, // 改进的正则，允许有查询参数
    `/${assistantId}/${pageId}.json$3`   // 保留查询参数
  );
}
function savePageDataToDB(pageData: any) {
  const { footer, navigation, blocksMap, children } = pageData
  saveBlockToDB(footer)
  saveBlockToDB(navigation)
  children.forEach((childId: any) => {
    saveBlockToDB(blocksMap[childId])
  })
}


function savePageDataToTsx(pageData: any) {
  // 保存数据到本地 JSON 文件
  const resourceLibraryPath = path.join(process.cwd(), 'resourceLibrary'); // 保存到 resourceLibrary 文件夹

  // 如果 resourceLibrary 文件夹不存在，则创建它
  if (!fs.existsSync(resourceLibraryPath)) {
    fs.mkdirSync(resourceLibraryPath, { recursive: true });
  }

  const { footer, navigation, blocksMap, children } = pageData

  writeTsxFile(footer)
  writeTsxFile(navigation)
  children.forEach((childId: any) => {
    writeTsxFile(blocksMap[childId])
  })
}

async function fetchSitePage(url: string, cookie: string) {
  const sitePageResponse = await fetch(url, {
    "headers": {
      "accept": "application/json, text/plain, */*",
      "accept-language": "en-US,en;q=0.9,zh-CN;q=0.8,zh;q=0.7",
      "baggage": "sentry-environment=builder-aibuild-tencent-zprod,sentry-public_key=2fd59afed8e24931852a1bf5c508cc26,sentry-trace_id=1caa03d42f37472b949e3553a1194dc7,sentry-sample_rate=0.05,sentry-sampled=false",
      "priority": "u=1, i",
      "sec-ch-ua": "\"Chromium\";v=\"134\", \"Not:A-Brand\";v=\"24\", \"Google Chrome\";v=\"134\"",
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": "\"macOS\"",
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-origin",
      "sentry-trace": "1caa03d42f37472b949e3553a1194dc7-b0242e9dcb793a7f-0",
      "cookie": cookie,
      "Referer": "https://wegic.ai/app/1904820318146498562",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    },
    "body": null,
    "method": "GET"
  })
  return await sitePageResponse.json()
}


export async function POST(request: Request): Promise<Response> {
  try {
    // 从请求体中解析 JSON 数据
    const body: RequestBody = await request.json();

    const { isSave, isSaveDB, wegicUrl, cookie } = body;
    let pageData: any = {}

    if (wegicUrl) {

      const appId = wegicUrl.match(/\d+/);
      const assistantThreadUrl = `https://wegic.ai/api/onepage/assistantThread/${appId}`

      const wegicData = await fetchWegicInfo(assistantThreadUrl, cookie)


      if (wegicData.data) {
        // 获取页面信息
        //  https://wegic.ai/api/onepage/assistant_site_page?assistantThreadId=1896430208263827457
        const assistantSitePageUrl = `https://wegic.ai/api/onepage/assistant_site_page?assistantThreadId=${appId}`
        const mainData = await fetchPageData(wegicData.data.mainFile)
        const pageInfo = await fetchWegicInfo(assistantSitePageUrl, cookie)
        
        for (const info of pageInfo.data.list) {
          const sitePage = await fetchSitePage(`https://wegic.ai/api/onepage/assistant_site_page/${info.id}`, cookie)
          const dslPageUrl = sitePage.data.dslFile
          const pageDslData = await fetchPageData(dslPageUrl)
          if (info.id === wegicData.data.defaultPage.id) {

            pageData = { ...mainData, ...pageDslData }
          }
          info.blocksData = pageDslData
          if (isSaveDB) {
            savePageDataToDB(pageDslData)
          }
          if (isSave) {
            savePageDataToTsx(pageDslData)
          }
        }
        pageData.pageInfo = pageInfo
      }
    }

    if (isSave) {
      savePageDataToTsx(pageData)
    }

    if (isSaveDB) {
      savePageDataToDB(pageData)
    }

    // 返回成功响应
    const successResponse: ApiResponse = {
      message: 'Data fetched and saved successfully!',
      data: pageData,
    };

    return new Response(JSON.stringify(successResponse), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error: unknown) {
    console.error('Error fetching or saving data:', error);

    const errorResponse: ApiResponse = {
      message: 'Error fetching or saving data',
      error: error instanceof Error ? error.message : String(error),
    };

    return new Response(JSON.stringify(errorResponse), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}