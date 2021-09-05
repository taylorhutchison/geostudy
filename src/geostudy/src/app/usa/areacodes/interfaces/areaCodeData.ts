export interface AreaCodeData {
    states: StateAreaCodeData[]
}

export interface StateAreaCodeData {
    name: string;
    areaCodes: string[];
}