import { model, Schema } from 'mongoose';


// Quiz Schema (with embedded questions)
const quizResultSchema = new Schema(
  {
    quizComplete: { type: Boolean, required: true },
    moreResultInfo: { type: Boolean, required: true },
    userAnswer: [{ type: String, required: true }],
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    quizId: {
      type: Schema.Types.ObjectId,
      ref: 'Quiz',
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const QuizResult = model('QuizResult', quizResultSchema);

export default QuizResult;
