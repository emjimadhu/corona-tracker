module.exports = {
  name: 'web-components-table',
  preset: '../../../../jest.config.js',
  transform: {
    '^.+\\.[tj]sx?$': [
      'babel-jest',
      {
        cwd: __dirname,
        configFile: './babel-jest.config.json'
      }
    ]
  },
  moduleFileExtensions: [
    'ts',
    'tsx',
    'js',
    'jsx',
    'html'
  ],
  coverageDirectory: '../../../../coverage/libs/web/components/table'
};
