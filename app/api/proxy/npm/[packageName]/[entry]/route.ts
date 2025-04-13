import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';
import * as fs from 'fs';
import * as path from 'path';
import * as tar from 'tar';

const ALIYUN_NPM_REGISTRY = process.env.ALIYUN_NPM_REGISTRY!;
const USERNAME = process.env.ALIYUN_NPM_USERNAME!;
const PASSWORD = process.env.ALIYUN_NPM_PASSWORD!;
const CACHE_DIR = path.join(process.cwd(), "npm_cache");

export async function GET(
    req: NextRequest,
    { params }: { params: Promise<{ packageName: string; entry: string }> }
) {
    const { packageName, entry } = await params;
    const packageUrl = `${ALIYUN_NPM_REGISTRY}${packageName}`;

    try {
        const authHeader = "Basic " + btoa(`${USERNAME}:${PASSWORD}`);
        const response = await axios.get(packageUrl, {
            headers: { Authorization: authHeader },
        });

        const latestVersion = response.data['dist-tags'].latest;
        const tarballUrl = response.data.versions[latestVersion].dist.tarball;

        const packageCachePath = path.join(CACHE_DIR, `${packageName}-${latestVersion}`);
        const cacheFilePath = path.join(packageCachePath, 'package.tgz');
        const packageJsonPath = path.join(packageCachePath, 'package', 'package.json');

        if (!fs.existsSync(CACHE_DIR)) {
            fs.mkdirSync(CACHE_DIR, { recursive: true });
        }

        if (fs.existsSync(packageCachePath)) {
            const cacheVersion = JSON.parse(fs.readFileSync(packageJsonPath, 'utf-8')).version;
            if (cacheVersion !== latestVersion) {
                fs.rmSync(packageCachePath, { recursive: true, force: true });
            }
        }

        if (!fs.existsSync(packageCachePath)) {
            fs.mkdirSync(packageCachePath, { recursive: true });

            const downloadResponse = await axios({
                url: tarballUrl,
                headers: { Authorization: authHeader },
                responseType: "stream",
            });

            const writer = fs.createWriteStream(cacheFilePath);
            downloadResponse.data.pipe(writer);

            await new Promise((resolve, reject) => {
                writer.on("finish", () => resolve(undefined));
                writer.on("error", reject);
            });

            await tar.x({ file: cacheFilePath, cwd: packageCachePath });
        }

        const modulePath = path.join(packageCachePath, 'package', entry);

        if (fs.existsSync(modulePath)) {
            const content = fs.readFileSync(modulePath, 'utf-8');
            return new NextResponse(content, {
                status: 200,
                headers: {
                    "Content-Type": "application/javascript"
                }
            });
        } else {
            return NextResponse.json({ error: `File ${entry} not found in the package.` }, { status: 404 });
        }
    } catch (error: any) {
        console.error("代理出错:", error.message);
        return NextResponse.json({ error: "请求失败", details: error.message }, { status: error.response?.status || 500 });
    }
}
