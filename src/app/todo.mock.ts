import { ITodo } from "./todo";

export const TODOLIST : ITodo [] = [
    {
        id:1,
        content: "Nettoyer les vitres",
        category: "cleaning",
        picture: "cleaning-icon.png",
        isUrgent: false,
        doneDate: null
    },
    {
        id:2,
        content: "Acheter un nouveau sac",
        category: "shopping",
        picture: "shopping-icon.png",
        isUrgent: false,
        doneDate: null
    },
    {
        id:3,
        content: "Préparer planning de la semaine prochaine",
        category: "work",
        picture: "work-icon.png",
        isUrgent: true,
        doneDate: null
    }
]