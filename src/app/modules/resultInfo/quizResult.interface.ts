import { Types } from "mongoose";

export interface IQuiaResult {
    userId:Types.ObjectId;
    quizId:Types.ObjectId;
    userAnswer:string[];
    moreResultInfo:boolean;
    quizComplete:boolean
  }
  