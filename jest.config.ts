import type { Config } from '@jest/types'

const config: Config.InitialOptions = {
  modulePaths: ["<rootDir>/"],
  testEnvironment: 'jest-environment-jsdom',
  transform: {
    /* fixme: maybe not support js(x) at all ? */
    '.(ts|tsx)$': require.resolve('ts-jest/dist'),
    '.(js|jsx)$': require.resolve('babel-jest'), // jest's default
    '.+\\.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub'
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/components/**/*.{js,jsx,ts,tsx}',
    '!**/*.stories.tsx',
    '!**/*.types.ts',
    '!**/index.ts'
  ],
  coverageDirectory: './coverage',
  coverageReporters: ['html', 'text', 'cobertura', 'lcov'],
  reporters: [
    'default',
    ['jest-junit', {
      outputDirectory: 'test-reports',
      outputName: 'jest-junit.xml',
      addFileAttribute: 'true',
      suiteNameTemplate: '{filename}',
      classNameTemplate: '{classname}',
      titleTemplate: '{title}'
    }]
  ],
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node', 'scss'],
  testMatch: ['<rootDir>/**/*.(spec|test).{ts,tsx,js,jsx}'],
  snapshotResolver: '<rootDir>/snapshotResolver.cjs',
  moduleNameMapper: {
    '^@styles(.*)$': '<rootDir>/src/styles$1',
    // let 'import *.scss' works in the tests
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy'
  }
}

export default config
