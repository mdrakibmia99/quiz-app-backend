import { IQuiaResult } from './quizResult.interface';
import QuizResult from './quizResult.model';

const createQuizResult = async (payload: IQuiaResult) => {
  const result = await QuizResult.create({ ...payload });
  return result;
};
const getQuizResult = async (quizInfo: { userId: string; quizId: string }) => {
  const result = await QuizResult.findOne(quizInfo).select(
    '-createdAt -updated -__v',
  );
  return result;
};

export const quizResultService = {
  createQuizResult,
  getQuizResult,
};
