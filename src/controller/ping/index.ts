import { Request, Response } from 'express';

export const pingController = (request: Request, response: Response) => {
  return response.json({
    message: 'pong',
  });
};
