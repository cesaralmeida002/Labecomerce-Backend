import { COURSE_STACK, TCourse, TStudants } from "./types"

export const courses: TCourse[] = [
    {
        id: "c001",
        name: "React",
        lessons: 12,
        stack: COURSE_STACK.FRONT
    },
    {
        id: "c002",
        name: "Styled Components",
        lessons: 4,
        stack: COURSE_STACK.FRONT
    },
    {
        id: "c003",
        name: "Express",
        lessons: 5,
        stack: COURSE_STACK.BACK
    },
]

export const studants: TStudants[] = [
    {
        id: "a001",
        name: "Joao",
        age: 25
    },
    {
        id: "a002",
        name: "Maria",
        age: 22
    }
]