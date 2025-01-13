import { Router } from "express";
import authRouter from "../modules/Auth/auth.router";
import adminRouter from "../modules/Admin/admin.router";
import quizRouter from "../modules/quiz/quiz.router";

const router= Router()
const moduleRoutes=[
    {
        path:"/auth",
        route:authRouter
    },
    {
        path:"/admin",
        route:adminRouter
    },
    {
        path:"/quizzes",
        route:quizRouter
    }
]

moduleRoutes.forEach(route=>router.use(route.path,route.route))

export default router;