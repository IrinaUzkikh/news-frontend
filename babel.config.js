/* const presets = [
  [
    '@babel/env',
    {
      targets: {
        edge: '17',
        ie: '11',
        firefox: '50',
        chrome: '64',
        safari: '11.1',
        ChromeAndroid: '42'
      },
      useBuiltIns: 'usage',
      corejs: '3.4.1',
    },
  ],
]; */

const presets = [
  [
    '@babel/env',
    {
      targets: [
        'last 2 Chrome versions',
        'last 2 ChromeAndroid versions',
        'last 2 Firefox versions',
        'last 2 Safari versions',
        'Edge >= 15',
      ],
      useBuiltIns: 'usage',
      corejs: '3.4.1',
    },
  ],
];
module.exports = { presets };
