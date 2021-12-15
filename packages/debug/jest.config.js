const config = {
  testEnvironment: 'node',
  collectCoverage: process.env.CI ? true : false,
  coverageReporters: ['clover'],
  coverageDirectory: 'src/__tests__/coverage',
  collectCoverageFrom: ['src/**/*.ts', '!**/__tests__/**/*'],
  testMatch: ['**/src/__tests__/**/*.test.ts'],
}

if (process.env.TEST_USE_SWC) {
  config.transform = {
    '^.+\\.ts$': [
      '@swc/jest',
      {
        jsc: {
          parser: {
            syntax: 'typescript',
          },
          target: 'es2018',
        },
      },
    ],
  }
} else {
  config.preset = 'ts-jest'
}

module.exports = config
