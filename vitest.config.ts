/// <reference types="vitest" />

import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'node',
    testTimeout: 10000,
    env: {
      POWERTOOLS_DEV: 'true',
    },
  },
});
