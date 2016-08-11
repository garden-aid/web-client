#!/usr/bin/env node

const express = require('express');
const http = require('http');
const path = require('path');

const app = express();
const server = new http.Server(app);

const port = process.env.PORT || 3000;

app.use(express.static(path.resolve(__dirname, '../public')));

app.listen(port, () => {
  const address = server.address();
  const host = address ? address.address : 'unknown';
  console.log('Server is listening on http://%s:%s', host, port);
});
