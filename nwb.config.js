
const path = require('path');

const srcPath = path.resolve('src');
const nodeModulesPath = path.resolve('./node_modules');
const themePath = path.resolve(srcPath, 'theme/_theme.scss');

module.exports = {
  type: 'react-app',
  webpack: {
    aliases: {
      src: srcPath,
      constants: path.resolve(srcPath, 'constants'),
    },
    resolve: {
      extensions: ['', '.js', '.jsx', '.json', '.scss', '.css'],
    },
    extractText: {
      allChunks: true,
    },
    // loaders: {
    //   babel: {
    //     exclude: /node_modules\/(?![react\-dazzle])/
    //   }
    // },
    sassLoader: {
      data: `@import "${themePath}";`,
      includePaths: [
        nodeModulesPath,
        path.resolve(nodeModulesPath, 'material-design-lite/src'),
      ],
    },
  },
};
