#!/usr/bin/env node

const fs = require('fs');

const config = JSON.parse(fs.readFileSync('./.babelrc'));
require('babel-core/register')(config);
require('../src/server/server.js');
