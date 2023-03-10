import { TUsers, TProduct, TPurchase } from "./types";
import { MusicalStyle } from "./types";

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
        name: "cd-Metalica",
        price: 22.99,
        category: MusicalStyle.ROCK
    },
    {
        id: "pr002",
        name: "cd-Aviões",
        price: 19.90,
        category: MusicalStyle.FORRO
    },
    {
        id: "pr003",
        name: "cd-ArtBlakey",
        price: 59.90,
        category: MusicalStyle.JAZZ
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
