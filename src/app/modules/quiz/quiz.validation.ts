import { z } from 'zod';

const quizValidationSchema = z.object({
  body: z.object({
    title: z.string({ required_error: 'quiz title is required' }),
    description: z.string({ required_error: 'quiz description is required' }),

    questions: z.array(
      z.object({
        question: z.string({ required_error: 'question is required' }),
        options: z
          .array(z.string({ required_error: 'options are required' }))
          .min(2),
        correctAnswer: z.string({
          required_error: 'correct answer is required',
        }),
      }),
    ),
  }),
});

export const quizValidation = {
  quizValidationSchema,
};
