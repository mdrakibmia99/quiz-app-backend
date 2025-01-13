export interface IQuiz {
  title: string;
  description: string;
  questions: {
    question: string;
    options: string[];
    correctAnswer: string;
  }[];
}
