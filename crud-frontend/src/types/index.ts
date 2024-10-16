export interface IUser {
    id: number;
    name: string;
    email: string;
    password: string;
    createdAt: string;
}


export interface IStore {
    mode: string;
    user: any;
    isCreate: boolean;
}

export interface INavbar {
    mode: string;
}

export interface IFunctionProp {
    fetchData: () => void
}