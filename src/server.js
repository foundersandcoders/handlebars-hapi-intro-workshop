'use strict'

const hapi = require('hapi');
const server = new hapi.Server();
const inert = require('inert');
const vision = require('vision');
const Handlebars = require('./configure-handlebars.js');
const routes = require('./routes');

server.connection({
  host: process.env.HOST || 'localhost',
  port: process.env.PORT || 3000
});

server.register([inert, vision], err => {
  if (err) throw err;
  server.route(routes);
});

Handlebars(server);

module.exports = server;
