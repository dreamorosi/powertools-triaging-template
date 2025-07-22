import { readFileSync } from 'node:fs';
import { expect, test } from 'vitest';
import { handler } from '../src/index.js';
import { context } from './context.js';

test('Stack has a function', () => {
  // Prepare
  const event = JSON.parse(readFileSync('../events/payload.json', 'utf-8'));

  // Act
  const result = handler(event, context);

  // Assess
  expect(result).toEqual({
    statusCode: 200,
    body: JSON.stringify('Hello, World!'),
  });
});
