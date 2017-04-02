'use strict'

const hapi = require('hapi');
const server = new hapi.Server();
const inert = require('inert');
const routes = require('./routes');
const vision = require('vision');
const configureHandlebars = require('./configure-handlebars');

server.connection({
  host: 'localhost',
  port: process.env.PORT || 3000
});

server.register([inert,vision], err => {
  if (err) throw err;
  server.route(routes);
});

server.views(configureHandlebars);

module.exports = server;
