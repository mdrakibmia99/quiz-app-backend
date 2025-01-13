import { IQuiz } from './quiz.interface';
import Quiz from './quiz.model';

const createQuiz = async (payload: IQuiz) => {
  const result = await Quiz.create({ ...payload });
  return result;
};
const getSingleQuiz = async (quizId: string):Promise<IQuiz | null > => {
  const result = await Quiz.findById(quizId);
  return result?  result.toObject<IQuiz>() : null
};
const getAllQuiz = async () => {
  const result = await Quiz.find({});
  return result
};

export const quizService = {
  createQuiz,
  getSingleQuiz,
  getAllQuiz
};
