module.exports = {
  testEnvironment: 'jsdom',
  testPathIgnorePatterns: ['/node_modules/', '/dist/', '/.next/'],
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{js,jsx, ts, tsx}'],
  setupFilesAfterEnv: ['<rootDir>/.jest/setup.ts']
}
