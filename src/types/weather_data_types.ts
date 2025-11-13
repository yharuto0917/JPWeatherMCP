export interface description {
    publicTime: string;
    publicTimeFormatted: string;
    headlineText: string;
    bodyText: string;
    text: string;
}

export interface forecastDetail {
    weather: string;
    wind: string;
    wave: string;
}

export interface temperature {
    min: {
        celsius: number;
    },
    max: {
        celsius: number;
    }
}

export interface chanceOfRain{
    T00_06: string;
    T06_12: string;
    T12_18: string;
    T18_24: string;
}

export interface forecast {
    data: string;
    dataLabel: string;
    telop: string;
    detail: forecastDetail;
    temperature: temperature;
    chanceOfRain: chanceOfRain;
}

export interface location {
    area: string;
    prefecture: string;
    district: string;
    city: string;
}

export interface weatherData {
    publicTime: string;
    publicTimeFormatted: string;
    publishingOffice: string;
    title: string;
    link: string;
    description: description;
    forecasts: forecast[];
    location: location;
}