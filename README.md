# 🌦️ JPWeatherMCP

日本の気象庁のデータを利用して、指定した地域の天気情報を取得するためのMCP (Model Context Protocol) サーバーです。

## 📝 概要

このプロジェクトは、AIアシスタントやその他のエージェントが日本の天気予報データに簡単にアクセスできるようにするためのツールを提供します。
`@modelcontextprotocol/sdk` を使用して構築されており、2つの主要な機能を提供します。

## 🛠️ 主な機能

このMCPサーバーは、以下のツールを登録・提供します。

### 1. `getWeatherAreaCodeData`

気象情報を取得するために必要となる、各地域のエリアコードを取得します。

- **📜 説明:** 全国のエリアコードデータを取得します。
- **📥 入力:** なし
- **📤 出力:** JSON形式のエリアコードデータ

### 2. `getWeather`

指定したエリアコードに基づいて、その地域の天気予報データを取得します。

- **📜 説明:** 指定した`cityCode`の天気予報を取得します。`cityCode`が不明な場合は、まず`getWeatherAreaCodeData`ツールを使用してください。
- **📥 入力:** `cityCode` (string)
- **📤 出力:** JSON形式の天気予報データ

## 🚀 セットアップと実行方法

### ✅ 前提条件

- Node.js
- npm

### 📦 インストール

GitHubからソースコードを取得し、プロジェクトのルートディレクトリに移動します。

```bash
git clone https://github.com/yharuto0917/JPWeatherMCP.git
cd JPWeatherMCP
```

プロジェクトの依存関係をインストールします。

```bash
npm install
```

### 🔨 ビルド

TypeScriptソースコードをJavaScriptにコンパイルします。

```bash
npm run build
```

### 💻 実装

- **Claude Desktop**
1. `~/Library/Application Support/Claude`へ移動します。
```bash
cd ~/Library/Application Support/Claude
```
2. `claude_desktop_config.json`を編集します。
```bash
code claude_desktop_config.json
```
3. 以下の内容を追加します。
```json
{
    "mcpServers": {
        "jpweathermcp": {
            "command": "node",
            "args": [
                "＜ディレクトリの絶対パスで指定＞/build/index.js"
            ]
        }
    }
}
```
- **Gemini CLI**
1. GeminiCLIのルートディレクトリへ移動します。
2. `settings.json`を編集します。
```bash
code settings.json
```
1. 以下の内容を追加します。
```json
{
    "mcpServers": {
        "jpweathermcp": {
            "command": "node",
            "args": [
                "＜ディレクトリの絶対パスで指定＞/build/index.js"
            ]
        }
    }
}
```

## 🔧 使用技術

- [TypeScript](https://www.typescriptlang.org/)
- [Node.js](https://nodejs.org/)
- [@modelcontextprotocol/sdk](https://www.npmjs.com/package/@modelcontextprotocol/sdk) - MCPサーバー構築用SDK
- [Zod](https://zod.dev/) - 型スキーマの定義とバリデーション

## 🙏 API提供

- [天気予報 API（livedoor 天気互換）](https://weather.tsukumijima.net/)