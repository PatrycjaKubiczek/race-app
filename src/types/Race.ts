export interface Race {
    id: number;
    name: string;
    active: boolean;
    participants: []   
}

export interface Races {
    results: Race[];
}
