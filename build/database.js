"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.purchase = exports.product = exports.users = void 0;
const types_1 = require("./types");
exports.users = [
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
];
exports.product = [
    {
        id: "pr001",
        price: 22.99,
        category: types_1.MusicalStyle.ROCK
    },
    {
        id: "pr002",
        price: 19.90,
        category: types_1.MusicalStyle.FORRO
    },
    {
        id: "pr003",
        price: 59.90,
        category: types_1.MusicalStyle.JAZZ
    }
];
exports.purchase = [
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
];
//# sourceMappingURL=database.js.map