require('babel-polyfill');

const environment = {
  development: {
    isProduction: false,
  },
  production: {
    isProduction: true,
  },
}[process.env.NODE_ENV || 'development'];

module.exports = Object.assign({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT,
  app: {
    title: 'Garden Aid',
    description: 'Garden Assistant',
    head: {
      titleTemplate: '%s',
      meta: [
        { name: 'description', content: 'Garden Assistant' },
        { charset: 'utf-8' },
        { property: 'og:site_name', content: 'Garden Aid' },
        { property: 'og:locale', content: 'en_AU' },
        { property: 'og:title', content: 'Garden Aid' },
        { property: 'og:description', content: 'Garden Assistant' },
        { property: 'og:card', content: 'summary' },
        { property: 'og:site', content: '@johncmckim' },
        { property: 'og:creator', content: '@johncmckim' },
        { property: 'og:image:width', content: '200' },
        { property: 'og:image:height', content: '200' },
      ],
    },
  },
}, environment);
