import { Response } from 'express';

export const sendSuccessResponse = <T>(res: Response, data: T, message: string = 'Success', statusCode: number = 200) => {
  return res.status(statusCode).json({
    message,
    status: statusCode,
    data,
  });
};

export const sendErrorResponse = (res: Response, error: Error, message: string = 'Internal server error', statusCode: number = 500) => {
  return res.status(statusCode).json({
    message,
    status: statusCode,
    error: error.message,
  });
};