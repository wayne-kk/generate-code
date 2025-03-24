import mcpServer from "@/lib/mcp-server";

export async function POST(req: {
  json: () =>
    | PromiseLike<{ toolName: any; params: any }>
    | { toolName: any; params: any };
}) {
  const { toolName, params } = await req.json();
  const tool = mcpServer(toolName, () => {
    new Response(JSON.stringify(result), { status: 200 });
  });

  const result = await tool.handler(params);
  const 
  return new Response(JSON.stringify(result), { status: 200 });
}
