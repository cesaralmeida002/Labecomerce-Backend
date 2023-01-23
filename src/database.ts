import { TUsers, TProduct, TPurchase } from "./types";

export const users: TUsers[] = [
    {
        id: "us001",
        email: "jose@email.com",
        password: "jose123",
    },
    {
        id: "us002",
        email: "maria@email.com",
        password: "maria123",
    },
    {
        id: "us003",
        email: "joao@email.com",
        password: "joao123",
    }
]

export const product: TProduct[] = [
    {
        id: "pr001",
        price: 22.99,
        category: "rock",
    },
    {
        id: "pr002",
        price: 19.90,
        category: "forro",
    },
    {
        id: "pr003",
        price: 59.90,
        category: "jazz",
    }
]
export const purchase: TPurchase[] = [
    {
        userId: "us001",
        productId: "pr001",
        quantity: 2,
        totalPrice: 43.98
    },
    {
        userId: "us002",
        productId: "pr002",
        quantity: 1,
        totalPrice: 19.90
    },
    {
        userId: "us003",
        productId: "pr003",
        quantity: 4,
        totalPrice: 239.60
    },
]