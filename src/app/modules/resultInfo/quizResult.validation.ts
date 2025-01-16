import { z } from 'zod';

const quizResultValidationSchema = z.object({
  body: z.object({
    // userId: z.string({required_error:"userId required"}),
    quizId: z.string({required_error:"quizId required"}),
    userAnswer: z.array(z.string()), // Array of strings
    // moreResultInfo: z.boolean(),
    // quizComplete: z.boolean(),
  }),
});

export const quizResultValidation = {
   quizResultValidationSchema,
};
