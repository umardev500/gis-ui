module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'],
        alias: {
          '@components': './src/components',
          '@assets': './assets',
          '@constants': './src/constants',
          '@context': './src/context',
          '@hooks': './src/hooks',
          '@helpers': './src/helpers',
        },
      },
    ],
    ['module:react-native-dotenv'],
    [
      'react-native-reanimated/plugin',
      {
        relativeSourceLocation: true,
      },
    ],
  ],
};
