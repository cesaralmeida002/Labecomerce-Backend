import express, { Request, Response } from 'express';
import cors from 'cors';
import { users, product, purchase } from "./database";
import { TUsers, TProduct, TPurchase, MusicalStyle } from "./types";

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

app.get('/users', (req: Request, res: Response) =>{
    res.status(200).send(users)
})

app.get('/users/:id', (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const result = users.find((user) => user.id === id)
        if (!result) {
            res.status(404)
            throw new Error("Conta não encontrada. Verifique a 'ID'")
        }
        res.status(200).send(result)
    } catch (error: any) {
        console.log(error)
        if (res.statusCode === 200) {
            res.status(500)
        }
        res.send(error.message)
    }
})

app.get('/product/:id', (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const result = product.find((product1) => product1.id === id)
        if (!result) {
            res.status(404)
            throw new Error("Produto não encontrada. Verifique a 'ID'")
        }
        res.status(200).send(result)
    } catch (error: any) {
        console.log(error)
        if (res.statusCode === 200) {
            res.status(500)
        }
        res.send(error.message)
    }
})

app.get('/product/search', (req: Request, res: Response) => {
    const q = req.query.q as string
    res.status(200).send(q)
})

app.post('/users/:id', (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const email = req.params.email
        
        if (id[0] !== id) {
            res.status(400)
            throw new Error("'ID' ja existente, Digite um novo ID")
        }
        if (email[0] !== email) {
            res.status(400)
            throw new Error("'E-MAIL' já existe. Digite um novo E-MAIL")
        }
        const userIndex = users.findIndex((user) => user.id === id)
        const userIndex1 = users.findIndex((user) => user.email === email)
    if (userIndex >= 0) {
        users.splice(userIndex)
        
    }
    if (userIndex1 >= 0) {
        users.splice(userIndex1)
        
    }
    res.status(201).send("Name cadastro realizado com sucesso!!")

    } catch (error: any) {
        console.log(error)
        if (res.statusCode === 200) {
            res.status(500)
        }
        res.send(error.message)
    }
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

app.get('/product/:id', (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const result = product.find((product1) => product1.id === id)
        if (!result) {
            res.status(404)
            throw new Error("Produto não encontrada. Verifique a 'ID'")
        }
        res.status(200).send(result)
    } catch (error: any) {
        console.log(error)
        if (res.statusCode === 200) {
            res.status(500)
        }
        res.send(error.message)
    }
})

app.get('/users/:id/purchase', (req: Request, res: Response) => {
        try {
            const id = req.params.id
            const result = product.find((user) => user.id === id)
            if (!result) {
                res.status(404)
                throw new Error("Usuário não encontrado. Verifique a 'ID'")
            }
            res.status(200).send(result)
        } catch (error: any) {
            console.log(error)
            if (res.statusCode === 200) {
                res.status(500)
            }
            res.send(error.message)
        }
    })


app.delete('/users/:id', (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const result = product.find((user) => user.id === id)
        if (!result) {
            res.status(404)
            throw new Error("Usuário não encontrado. Verifique a 'ID'")
        }
        res.status(200).send(result)
    } catch (error: any) {
        console.log(error)
        if (res.statusCode === 200) {
            res.status(500)
        }
        res.send(error.message)
    }
})

app.delete('/products/:id', (req: Request, res: Response) => {
    try {
        const id = req.params.id
        const result = product.find((product1) => product1.id === id)
        if (!result) {
            res.status(404)
            throw new Error("Usuário não encontrado. Verifique a 'ID'")
        }
        res.status(200).send(result)
    } catch (error: any) {
        console.log(error)
        if (res.statusCode === 200) {
            res.status(500)
        }
        res.send(error.message)
    }
})

app.put('/users/:id', (req: Request, res: Response) => {
    const id = req.params.id
    const newEmail = req.body.email as string
    const newPassword = req.body.password as string

    const user = users.find((user) => user.id === id)
    if (user) {
        user.email = newEmail || user.email
        user.password = newPassword || user.password
    }
    res.status(200).send("Item atualizado com sucesso!")
})

app.put('/products/:id', (req: Request, res: Response) => {
    const id = req.params.id
    const newName = req.body.name as string | undefined
    const newPrice = req.body.price as number
    const newCategory = req.body.category as MusicalStyle | undefined

    const product1 = product.find((product1) => product1.id === id)

    if (product1) {
        product1.name = newName || product1.name
        product1.category = newCategory || product1.category

        product1.price = isNaN(newPrice) ? product1.price : newPrice
    }
    res.status(200).send("Produto atualizado com sucesso!")
})