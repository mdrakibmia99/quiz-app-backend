import { StatusCodes } from "http-status-codes";
import catchAsync from "../../utils/catchAsync";
import { quizService } from "./quiz.service";

const createQuiz = catchAsync(async (req, res) => {
    const data = req.body;
  

    const result = await quizService.createQuiz(data)
   
    res.status(StatusCodes.CREATED).json({
      success: true,
      message: 'Blog created successfully',
      statusCode: StatusCodes.CREATED,
      data: result,
    });
  });

  export const quizController={
    createQuiz
  }