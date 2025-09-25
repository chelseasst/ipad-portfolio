export interface Tech {
    image: string,
    logo: string
    name: string,
    info: TechInfo[]
    colors: [string, string]
}

export interface TechInfo {
    title: string;
    list: string[]
    text: string;
}