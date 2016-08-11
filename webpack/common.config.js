const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const merge = require('webpack-merge');
const development = require('./dev.config.js');
const production = require('./prod.config.js');

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

const TARGET = process.env.npm_lifecycle_event;
process.env.BABEL_ENV = TARGET;

const folders = {
  OUTPUT: path.resolve(__dirname, '../public'),
  SRC: path.resolve(__dirname, '../src'),
  STATIC: path.resolve(__dirname, '../static'),
  CONFIG: path.resolve(__dirname, '../_config'),
  BUILD: path.resolve(__dirname, '../build'),
  BOWER: path.resolve(__dirname, '../bower_components'),
  NPM: path.resolve(__dirname, '../node_modules')
};

const common = {
  output: {
    path: folders.OUTPUT + '/dist',
    publicPath: '/dist/',
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
  },

  resolve: {
    extensions: ['', '.jsx', '.js', '.json', '.scss'],
    modulesDirectories: ['node_modules'],
    // alias for beautiful import
    alias: {
      'app-config': path.join(folders.SRC, 'config.js'),
      components: path.join(folders.SRC, 'components'),
      constants: path.join(folders.SRC, 'constants'),
      'redux/modules': path.join(folders.SRC, '../app/redux/modules/'),
      static: folders.STATIC,
    },
  },

  module: {
    loaders: [{
      test: /\.json$/,
      loader: 'json',
    }, {
      test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/font-woff',
    }, {
      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/font-woff2',
    }, {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/octet-stream',
    }, {
      test: /\.otf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=application/font-otf',
    }, {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file',
    }, {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'url?limit=10000&mimetype=image/svg+xml',
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
    }, {
      test: /\.css$/,
      loader: 'style-loader!css!postcss-loader',
    }, {
      test: /\.png$/,
      loader: 'file?name=[name].[ext]',
    }, {
      test: /\.jpg$/,
      loader: 'file?name=[name].[ext]',
    }, {
      test: /\.gif$/,
      loader: 'file?name=[name].[ext]',
    }, {
      test: /packery/,
      loader: 'imports?define=>false&this=>window',
    }],
  },

  plugins: [
    // generate bundle.css for server-side-rendering
    new ExtractTextPlugin('bundle.css'),

    // define global constants
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: process.env.NODE_ENV === 'development' ? '"development"' : '"production"',
      },
      __DEVELOPMENT__: process.env.NODE_ENV === 'development',
      __PRODUCTION__: process.env.NODE_ENV === 'production',
      __CLIENT__: true,
    }),

    // chunks for generate vendor bundle
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: (module) => {
        return module.resource &&
          module.resource.indexOf('node_modules') !== -1 &&
          module.resource.indexOf('.css') === -1;
      },
    }),
  ],

  postcss: (wp) => {
    return [
      autoprefixer({
        browsers: ['last 2 versions'],
      }),
    ];
  },
};

if (process.env.NODE_ENV === 'development') {
  module.exports = merge(development, common);
}

if (process.env.NODE_ENV === 'production') {
  module.exports = merge(production, common);
}
