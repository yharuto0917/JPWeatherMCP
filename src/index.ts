import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { XMLParser } from "fast-xml-parser";

const server = new McpServer({
    name: "jpweathermcp",
    version: "1.0.0"
})