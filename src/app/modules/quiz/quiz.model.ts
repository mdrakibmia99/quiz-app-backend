import { model, Schema } from "mongoose";

// Quiz Schema (with embedded questions)
const quizSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String },
    questions: [
      {
        question: { type: String, required: true },
        options: [{ type: String, required: true }],
        correctAnswer: { type: String, required: true },
      },
    ],

  },{
    timestamps: true
  });
  
  const Quiz = model('Quiz', quizSchema);

export default Quiz;
