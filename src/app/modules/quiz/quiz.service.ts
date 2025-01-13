import { IQuiz } from './quiz.interface';
import Quiz from './quiz.model';

const createQuiz = async (payload: IQuiz) => {
  const result = await Quiz.create({ ...payload });
  return result;
};
const getSingleQuiz = async (quizId: string) => {
  const result = await Quiz.findById(quizId);
  return result;
};

export const quizService = {
  createQuiz,
  getSingleQuiz
};
