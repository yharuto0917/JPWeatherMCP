import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { getWeatherAreaData } from "./functions/getRegionData.js";
import { z } from "zod";

const server = new McpServer({
    name: "jpweathermcp",
    version: "1.0.0"
});

server.registerTool(
    "getWeatherAreaCodeData",
    {
        title:"getWeatherAreaCodeData",
        description: "Get weather area code data"
    },
    async () => {
        const weatherAreaData = await getWeatherAreaData();
        const weatherAreaText = JSON.stringify(weatherAreaData, null, 2);
        return { content: [{ type: "text", text: weatherAreaText }] };
    }
);

async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("Server is running on stdin");
}

main().catch((error) => {
    console.error("Error starting server:", error);
    process.exit(1);
});