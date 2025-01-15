import { Router } from "express";
import authRouter from "../modules/Auth/auth.router";
import adminRouter from "../modules/Admin/admin.router";
import quizRouter from "../modules/quiz/quiz.router";
import quizResultRouter from "../modules/resultInfo/quizResult.router";

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
    },
    {
        path:"/quiz/result",
        route:quizResultRouter
    }
]

moduleRoutes.forEach(route=>router.use(route.path,route.route))

export default router;