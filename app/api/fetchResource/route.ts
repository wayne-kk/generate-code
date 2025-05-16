import { insertBlock } from '@/_lib/database';

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

function savePageDataToDB(pageData: any) {
  const { footer, navigation, blocksMap, children } = pageData
  insertBlock(footer)
  insertBlock(navigation)
  children.forEach((childId: any) => {
    insertBlock(blocksMap[childId])
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
          } else {
            if (isSaveDB) {
              savePageDataToDB(pageDslData)
            }
            // if (isSave) {
            //   savePageDataToTsx(pageDslData)
            // }
          }
          info.blocksData = pageDslData

        }
        pageData.pageInfo = pageInfo
      }
    }

    // if (isSave) {
    //   savePageDataToTsx(pageData)
    // }

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