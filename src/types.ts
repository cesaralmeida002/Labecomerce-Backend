//Tipagem

export type TUsers = {
    id: string,
    email: string,
    password: string,
}

export type TProduct = {
    id: string,
    price: number,
    category: string,
}

export type TPurchase = {
    userId: string,
    productId: string,
    quantity: number,
    totalPrice: number,
}

export enum MusicalStyle {
    ROCK = "ROCK",
    FORRO = "FORRO",
    JAZZ = "JAZZ",
}