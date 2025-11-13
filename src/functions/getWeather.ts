import { weatherData } from "../types/weather_data_types.js";

const LIVEDOOR_WEATHER_URL = 'https://weather.tsukumijima.net/api/forecast/city/';

export async function getWeather(cityCode: string): Promise<weatherData | null> {
    const response = await fetch(`${LIVEDOOR_WEATHER_URL}${cityCode}`);
    if(!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json() as weatherData;
    return data;
}