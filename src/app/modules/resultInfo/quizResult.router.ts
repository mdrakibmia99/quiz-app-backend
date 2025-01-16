import { Router } from "express";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { quizResultValidation } from "./quizResult.validation";
import { quizResultController } from "./quizResult.controller";


const quizResultRouter = Router();
quizResultRouter.get(
    '/:quizId',
    auth('admin','user'),
    quizResultController.getQuizResult,
  );


  quizResultRouter.post(
    '/',
    // auth('admin','user'),
    validateRequest(quizResultValidation.quizResultValidationSchema),
    quizResultController.createQuizResult,
  );

  export default quizResultRouter