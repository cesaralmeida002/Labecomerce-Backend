import express, { Request, Response } from 'express';
import cors from 'cors';
import { users, product, purchase } from "./database";
import { TUsers, TProduct, TPurchase } from "./types";

import { clear } from 'console';

// console.log(users)
// console.log(product)
// console.log(purchase)


const app = express()
app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003!")
})

app.get('/ping', (req: Request, res: Response) => {
    res.status(200).send('Pong')
});

app.get('/users', (req: Request, res: Response) => {
    res.status(200).send(users)
})

app.get('/product', (req: Request, res: Response) => {
    res.status(200).send(product)
})

app.get('/product/search', (req: Request, res: Response) => {
    const q = req.query.q as string
    res.status(200).send(q)
})

app.post('/users', (req: Request, res: Response) => {
    const { id, email, password } = req.body as TUsers

    const newUsers = {
        id,
        email,
        password,
    }
    users.push(newUsers)
    res.status(201).send("Name cadastro realizado com sucesso!!")
})

app.post('/products', (req: Request, res: Response) => {
    const { id, name, price, category } = req.body as TProduct

    const newProduct = {
        id,
        name,
        price,
        category,
    }
    product.push(newProduct)
    res.status(201).send("Product cadastro realizado com sucesso!!")
})

app.post('/purchase', (req: Request, res: Response) => {
    const { userId, productId, quantity, totalPrice } = req.body as TPurchase

    const newPurchase = {
        userId,
        productId,
        quantity,
        totalPrice,
    }
    purchase.push(newPurchase)
    res.status(201).send("Compra realizada com sucesso!!")
})