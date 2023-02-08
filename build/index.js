"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const database_1 = require("./database");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003!");
});
app.get('/ping', (req, res) => {
    res.status(200).send('Pong');
});
app.get('/users', (req, res) => {
    res.status(200).send(database_1.users);
});
app.get('/users/:id', (req, res) => {
    try {
        const id = req.params.id;
        const result = database_1.users.find((user) => user.id === id);
        if (!result) {
            res.status(404);
            throw new Error("Conta não encontrada. Verifique a 'ID'");
        }
        res.status(200).send(result);
    }
    catch (error) {
        console.log(error);
        if (res.statusCode === 200) {
            res.status(500);
        }
        res.send(error.message);
    }
});
app.get('/product/:id', (req, res) => {
    try {
        const id = req.params.id;
        const result = database_1.product.find((product1) => product1.id === id);
        if (!result) {
            res.status(404);
            throw new Error("Produto não encontrada. Verifique a 'ID'");
        }
        res.status(200).send(result);
    }
    catch (error) {
        console.log(error);
        if (res.statusCode === 200) {
            res.status(500);
        }
        res.send(error.message);
    }
});
app.get('/product/search', (req, res) => {
    const q = req.query.q;
    res.status(200).send(q);
});
app.post('/users/:id', (req, res) => {
    try {
        const id = req.params.id;
        const email = req.params.email;
        if (id[0] !== id) {
            res.status(400);
            throw new Error("'ID' ja existente, Digite um novo ID");
        }
        if (email[0] !== email) {
            res.status(400);
            throw new Error("'E-MAIL' já existe. Digite um novo E-MAIL");
        }
        const userIndex = database_1.users.findIndex((user) => user.id === id);
        const userIndex1 = database_1.users.findIndex((user) => user.email === email);
        if (userIndex >= 0) {
            database_1.users.splice(userIndex);
        }
        if (userIndex1 >= 0) {
            database_1.users.splice(userIndex1);
        }
        res.status(201).send("Name cadastro realizado com sucesso!!");
    }
    catch (error) {
        console.log(error);
        if (res.statusCode === 200) {
            res.status(500);
        }
        res.send(error.message);
    }
});
app.post('/products', (req, res) => {
    const { id, name, price, category } = req.body;
    const newProduct = {
        id,
        name,
        price,
        category,
    };
    database_1.product.push(newProduct);
    res.status(201).send("Product cadastro realizado com sucesso!!");
});
app.post('/purchase', (req, res) => {
    const { userId, productId, quantity, totalPrice } = req.body;
    const newPurchase = {
        userId,
        productId,
        quantity,
        totalPrice,
    };
    database_1.purchase.push(newPurchase);
    res.status(201).send("Compra realizada com sucesso!!");
});
app.get('/product/:id', (req, res) => {
    try {
        const id = req.params.id;
        const result = database_1.product.find((product1) => product1.id === id);
        if (!result) {
            res.status(404);
            throw new Error("Produto não encontrada. Verifique a 'ID'");
        }
        res.status(200).send(result);
    }
    catch (error) {
        console.log(error);
        if (res.statusCode === 200) {
            res.status(500);
        }
        res.send(error.message);
    }
});
app.get('/users/:id/purchase', (req, res) => {
    try {
        const id = req.params.id;
        const result = database_1.product.find((user) => user.id === id);
        if (!result) {
            res.status(404);
            throw new Error("Usuário não encontrado. Verifique a 'ID'");
        }
        res.status(200).send(result);
    }
    catch (error) {
        console.log(error);
        if (res.statusCode === 200) {
            res.status(500);
        }
        res.send(error.message);
    }
});
app.delete('/users/:id', (req, res) => {
    try {
        const id = req.params.id;
        const result = database_1.product.find((user) => user.id === id);
        if (!result) {
            res.status(404);
            throw new Error("Usuário não encontrado. Verifique a 'ID'");
        }
        res.status(200).send(result);
    }
    catch (error) {
        console.log(error);
        if (res.statusCode === 200) {
            res.status(500);
        }
        res.send(error.message);
    }
});
app.delete('/products/:id', (req, res) => {
    try {
        const id = req.params.id;
        const result = database_1.product.find((product1) => product1.id === id);
        if (!result) {
            res.status(404);
            throw new Error("Usuário não encontrado. Verifique a 'ID'");
        }
        res.status(200).send(result);
    }
    catch (error) {
        console.log(error);
        if (res.statusCode === 200) {
            res.status(500);
        }
        res.send(error.message);
    }
});
app.put('/users/:id', (req, res) => {
    const id = req.params.id;
    const newEmail = req.body.email;
    const newPassword = req.body.password;
    const user = database_1.users.find((user) => user.id === id);
    if (user) {
        user.email = newEmail || user.email;
        user.password = newPassword || user.password;
    }
    res.status(200).send("Item atualizado com sucesso!");
});
app.put('/products/:id', (req, res) => {
    const id = req.params.id;
    const newName = req.body.name;
    const newPrice = req.body.price;
    const newCategory = req.body.category;
    const product1 = database_1.product.find((product1) => product1.id === id);
    if (product1) {
        product1.name = newName || product1.name;
        product1.category = newCategory || product1.category;
        product1.price = isNaN(newPrice) ? product1.price : newPrice;
    }
    res.status(200).send("Produto atualizado com sucesso!");
});
//# sourceMappingURL=index.js.map