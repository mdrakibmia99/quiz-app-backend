import { IQuiz } from './quiz.interface';
import Quiz from './quiz.model';

const createQuiz = async (payload: IQuiz) => {
  const result = await Quiz.create({ ...payload });
  return result;
};
const getSingleQuiz = async (quizId: string):Promise<IQuiz | null > => {
  const result = await Quiz.findById(quizId).select('description title questions');
  return result?  result.toObject<IQuiz>() : null
};
const getAllQuiz = async () => {
  const result = await Quiz.find({});
  return result
};

const deleteQuiz = async (quizId: string) => {
  return  await Quiz.findByIdAndDelete(quizId);
};

export const quizService = {
  createQuiz,
  getSingleQuiz,
  getAllQuiz,
  deleteQuiz
};
