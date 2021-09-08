import { Request, Response } from 'express';

export const convertExcelController = (
  request: Request,
  response: Response
) => {
  return response.json({
    message: 'converted',
  });
};
