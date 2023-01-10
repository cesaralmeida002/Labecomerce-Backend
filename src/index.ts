import express, { Request, response, Response } from 'express'
import { courses, studants } from "./database";
import cors from 'cors'
import { COURSE_STACK } from './types';
import { TCourse } from "./types";
import { TStudants } from "./types";
import { request } from 'http';

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003")
})

app.get('/ping', (req: Request, res: Response) => {
    res.send('Pong!')
})
//----------((Exercício-1))----------consulta

app.get('/courses', (req: Request, res: Response) => {
    res.status(200).send(courses)
})

//----------((Exercício-2))----------filtro

app.get('/course/search', (req: Request, res: Response)=>{
    const q = req.query.q as string 
    
    const result = courses.filter((course)=>{
        return course.name.toLowerCase().includes(q.toLowerCase())
    }) 
    res.status(200).send(result)
})

//----------((Exercício-3))----------criação de um novo usuário

app.post('/courses',(req: Request, res: Response)=>{
    // const id = Request.body.id as string
    // const name = Request.body.name as string
    // const lessons = Request.body.lessons as string
    // const stack = Request.body.stack as COURSE_STACK

    const {id, name, lessons, stack} = req.body as TCourse //É o mesmo código de cima, porém, mais resumido para tipar os objetos.

    const newCourse = {
        id,
        name,
        lessons, // = lessons: lessons, Podemos abreviar, pois o nome da variável é igual ao valor.
        stack,
    }
        courses.push(newCourse)
        res.status(201).send("Adicionado com sucesso!")
})

//-----------------------((FIXAÇÃO-1))--------------------------buscar os estudantes

app.get('/studant', (req: Request, res: Response)=>{
    res.status(200).send(studants)
})

//-----------------------((FIXAÇÃO-2))--------------------------filtrar por nome

app.get('/studants/search', (req: Request, res: Response)=>{
    const q = req.query.q as string 
    
    const result = studants.filter((studant)=>{
        return studant.name.toLowerCase().includes(q.toLowerCase())
    }) 
    res.status(200).send(result)
})

//-------------------------((FIXAÇÃO-3))--------------------------criar um novo estudante

app.post('/newStudants',(req: Request, res: Response)=>{
   
    const {id, name, age} = req.body as TStudants //É o mesmo código de cima, porém, mais resumido para tipar os objetos.

    const newStudant = {
        id,
        name,
        age, // = lessons: lessons, Podemos abreviar, pois o nome da variável é igual ao valor.
    }
        studants.push(newStudant)
        res.status(201).send("Estudante adicionado com sucesso.")
})