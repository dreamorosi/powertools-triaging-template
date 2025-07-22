import type { Context } from 'aws-lambda';

export const handler = async (_event: unknown, _context: Context) => {
  return {
    statusCode: 200,
    body: JSON.stringify('Hello, World!'),
  };
};
