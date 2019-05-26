const path = require('path');
const dotenv = require('dotenv');
const { version, description, homepage, author: { email } } = require('./package');

dotenv.config();

module.exports = {
  openapi: '3.0.0',
  info: {
    // API informations (required)
    title: 'Bank Account API - DOCS', // Title (required)
    version, // Version (required)
    description, // Description (optional)
    contact: { email }
  },
  externalDocs: {
    description: "Find out more about Bank Account API",
    url: homepage
  },
  servers: [
    { url: `http://localhost:${process.env.PORT}` },
    { url: 'https://node-bank-account-api.herokuapp.com/' }
  ],
  apis: [path.join(__dirname, './src/**/**/*.ts')]
};
