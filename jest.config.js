module.exports = {
  setupFiles: ['jest-canvas-mock'],
  transformIgnorePatterns: ['/node_modules/', '/src/.umi/'],
  collectCoverageFrom: [
    './src/**/*.{ts,tsx}',
    '!./**/*.d.ts',
    '!src/.umi/**/*.ts',
  ],
  coverageReporters: ['json', 'text', 'lcov', 'clover', 'cobertura'],
  testEnvironment: 'jsdom',
}
