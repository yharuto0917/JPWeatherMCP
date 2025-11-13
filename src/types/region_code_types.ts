export interface City {
    '@_title': string;
    '@_id': string;
    '@_source': string;
}

export interface Pref {
    '@_title': string;
    warn :{
        '@_title': string;
        '@_source': string;
    };
    city: City[];
}

export interface RegionCode {
    res: {
        channel: {
            title: string;
            link: string;
            description: string;
            'ldWeather:source':{
                '@_title': string;
                '@_source': string;
                pref: Pref[];
            }
        }
    }
}