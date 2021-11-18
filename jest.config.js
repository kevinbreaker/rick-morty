module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom',

  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
    '^@icons/(.*)$': '<rootDir>/src/assets/icons/$1',
    '^@atoms/(.*)$': '<rootDir>/src/components/atoms/$1',
    '^@molecules/(.*)$': '<rootDir>/src/components/molecules/$1',
    '^@organisms/(.*)$': '<rootDir>/src/components/organisms/$1',
    '^@templates/(.*)$': '<rootDir>/src/components/templates/$1',
  },
  transform: {
    '^.+\\.vue$': 'vue3-jest',
  },

  // collectCoverage: true,
  // collectCoverageFrom: ['<rootDir>/src/components/**/*.vue'],

  testMatch: [
    '**/src/components/**/(*.)+spec.[jt]s?(x)',
  ],
}
