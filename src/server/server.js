import path from 'path';
import Express from 'express';
import http from 'http';
import { renderFullPage } from './utils/render';

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackConfig = require('../../webpack/common.config');

const compiler = webpack(webpackConfig);
const app = new Express();
const server = new http.Server(app);

// Port for web-dev-server and server app (bundle.js, bundle.css, dist, static)
const port = process.env.NODE_ENV === 'development'
  ? 3000
  : 80;

app.use(require('morgan')('short'));

if (process.env.NODE_ENV === 'development') {
  app.use(webpackDevMiddleware(compiler, {
    noInfo: true, publicPath: webpackConfig.output.publicPath,
  }));

  app.use(webpackHotMiddleware(compiler, {
    log: console.log,
    path: '/__webpack_hmr',
    heartbeat: 10 * 1000,
  }));
}

// Static directory for express
const publicDir = path.resolve(__dirname, '../../public');

app.use('/static', Express.static(`${publicDir}/static/`));
app.use('/dist', Express.static(`${publicDir}/dist/`));

app.get(/.*/, (req, res) => {
  const domain = req.get('host').replace(/:.*/, '');
  res.end(renderFullPage('', port, domain));
});

server.listen(port, () => {
  const host = server.address().address;
  console.log('Server is listening on http://%s:%s', host, port);
});
