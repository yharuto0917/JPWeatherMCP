import { RegionCode } from "../types/region_code_types.js";
import { XMLParser } from "fast-xml-parser";

const LIVEDOOR_WEATHER_AREA_URL = 'https://weather.tsukumijima.net/primary_area.xml';

export async function getWeatherAreaData(): Promise<RegionCode | null> {
    console.error(`データを取得しています...`);

    try {
        // APIからXMLデータを取得
        const response = await fetch(LIVEDOOR_WEATHER_AREA_URL);
        if(!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const xmlData = await response.text();

        // XMLデータをJSONに変換
        const parserOptions = {
            ignoreAttributes: false,
            attributeNamePrefix: '@_',

            isArray: (name: string, jpath: string): boolean => {
                if (jpath === "rss.channel['ldWeather:source'].pref") {
                    return true; // <pref> を常に配列に
                }
                if (jpath.endsWith('.pref.city')) {
                return true; // <city> を常に配列に
                }
                return false;
            },
        };

        const parser = new XMLParser(parserOptions);
        const jsonObj = parser.parse(xmlData) as RegionCode;
        console.error(`データの取得が完了しました。`);
        return jsonObj;
    } catch (error) {
        console.error(`データの取得に失敗しました: ${error}`);
        return null;
    } finally {
        console.error(`データの取得が完了しました。`);
    }
}