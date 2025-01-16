import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import { quizResultService } from "./quizResult.service";



const createQuizResult = catchAsync(async (req, res) => {
    console.log(req.body);
   const result = await quizResultService.createQuizResult(req.body)
   res.status(StatusCodes.OK).json({
     success: true,
     message: 'Quiz retrieve successfully',
     statusCode: StatusCodes.OK,
     data: result,
   });
 });
const getQuizResult = catchAsync(async (req, res) => {
  const quizId=req.params.quizId;
    const userId = req?.user?.userId;
    console.log({userId},{quizId})
   const result = await quizResultService.getQuizResult({userId,quizId})
   res.status(StatusCodes.OK).json({
     success: true,
     message: 'user Answer retrieve successfully',
     statusCode: StatusCodes.OK,
     data: result,
   });
 });

 export const quizResultController={
    getQuizResult,
    createQuizResult
 }