module.exports = {
  moduleNameMapper: {
    '@core/(.*)': '<rootDir>/src/app/core/$1',
  },
  testMatch: ['**/stories/storyshot.spec.ts'],
  preset: 'jest-preset-angular'
};

