import { IQuiaResult } from './quizResult.interface';
import QuizResult from './quizResult.model';

const createQuizResult = async (payload: IQuiaResult) => {
  const result = await QuizResult.create({ ...payload });
  return result;
};
const getQuizResult = async (resultInfo) => {
  const result = await QuizResult.findOne(resultInfo);
  return result;
};

export const quizResultService = {
  createQuizResult,
  getQuizResult,
};
