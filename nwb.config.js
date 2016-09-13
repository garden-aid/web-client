
const path = require('path');

const srcPath = path.resolve('src');
const nodeModulesPath = path.resolve('./node_modules');

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
      includePaths: [
        nodeModulesPath,
      ],
    },
  },
};
