import fs from 'fs';
import path from 'path';
import prettier from 'prettier'

// 定义请求体的类型
interface RequestBody {
  wegicUrl: string
  cookie: string;
  isSave?: boolean;
}

// 定义响应数据的类型
interface ApiResponse {
  message: string;
  data?: unknown;
  error?: string;
}


const fetchPageData = async (mainUrl: string, blockUrl: string) => {
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
  const mainResponse = await fetch(mainUrl,
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

  const blockData = await blockResponse.json();
  const mainData = await mainResponse.json();
  return { ...blockData, ...mainData }
}



export async function POST(request: Request): Promise<Response> {
  try {
    // 从请求体中解析 JSON 数据
    const body: RequestBody = await request.json();

    const { isSave, wegicUrl, cookie } = body;
    let pageData: any = {}
    let pageName = 'default'

    if (wegicUrl) {

      const appId = wegicUrl.match(/\d+/);
      const assistantThreadUrl = `https://wegic.ai/api/onepage/assistantThread/${appId}`

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
      const wegicData = await wegicResponse.json();

      if (wegicData.data) {
        pageData = await fetchPageData(wegicData.data.mainFile, wegicData.data.defaultPage.dslFile)
        pageName = wegicData.data.assistantSite.title + '-' + appId
      }

    }


    if (isSave) {
      // 保存数据到本地 JSON 文件
      const resourceLibraryPath = path.join(process.cwd(), 'resourceLibrary'); // 保存到 resourceLibrary 文件夹

      // 如果 resourceLibrary 文件夹不存在，则创建它
      if (!fs.existsSync(resourceLibraryPath)) {
        fs.mkdirSync(resourceLibraryPath, { recursive: true });
      }

      const { footer } = pageData
      // 处理JSON 为对应的customComponent
      const customComponentLibPath = path.join(process.cwd(), `customComponent/@${footer.name.split('_')[0].toLowerCase()}`);
      // 如果 resourceLibrary 文件夹不存在，则创建它
      if (!fs.existsSync(customComponentLibPath)) {
        fs.mkdirSync(customComponentLibPath, { recursive: true });
      }

      const compPath = path.join(customComponentLibPath, `${footer.name}-${footer.id}.tsx`); // 文件名为 data.json
      // 表头
      fs.writeFileSync(compPath, footer.code, 'utf8');
      // withDefault 处理

      // 写入处理
      fs.appendFileSync(compPath, footer.code, 'utf8');

      const filePath = path.join(resourceLibraryPath, `${pageName}.json`); // 文件名为 data.json
      fs.writeFileSync(filePath, JSON.stringify(pageData, null, 2), 'utf8');
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