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
const getSingleQuiz = catchAsync(async (req, res) => {
     const quizId = req.params.id;
    const result = await quizService.getSingleQuiz(quizId)
    res.status(StatusCodes.OK).json({
      success: true,
      message: 'Quiz retrieve successfully',
      statusCode: StatusCodes.OK,
      data: result,
    });
  });
const getAllQuiz = catchAsync(async (req, res) => {
  // console.log(req.cookies)
    const result = await quizService.getAllQuiz()
    res.status(StatusCodes.OK).json({
      success: true,
      message: 'All Quiz retrieve successfully',
      statusCode: StatusCodes.OK,
      data: result,
    });
  });
const deleteQuiz = catchAsync(async (req, res) => {
  // console.log(req.cookies)
  const quizId = req.params.id;
     await quizService.deleteQuiz(quizId)
    res.status(StatusCodes.OK).json({
      success: true,
      message: 'Delete quiz successfully',
      statusCode: StatusCodes.OK,
      data: null,
    });
  });

  export const quizController={
    createQuiz,
    getSingleQuiz,
    getAllQuiz,
    deleteQuiz
  }