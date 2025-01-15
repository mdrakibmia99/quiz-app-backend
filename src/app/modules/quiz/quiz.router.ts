import { Router } from "express";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { quizValidation } from "./quiz.validation";
import { quizController } from "./quiz.controller";

const quizRouter = Router();
quizRouter.get(
    '/:id',
    quizController.getSingleQuiz,
  );
quizRouter.delete(
    '/:id',
    quizController.deleteQuiz,
  );
quizRouter.get(
    '/',
    // auth('admin'),
    quizController.getAllQuiz,
  );
quizRouter.post(
    '/',
    auth('admin'),
    validateRequest(quizValidation.quizValidationSchema),
    quizController.createQuiz,
  );

  export default quizRouter