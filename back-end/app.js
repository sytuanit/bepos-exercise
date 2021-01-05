const fs = require('fs');
const yenv = require('yenv');
const express = require('express');
const useMiddlewares = require('./setup/middlewares');
const startServer = require('./setup/start-server');

// Init environment variables
if (fs.existsSync('./env.yaml')) {
    process.env = yenv('env.yaml', { strict: false });
}

// Create express server
const app = express();
app.enable('trust proxy');
useMiddlewares(app);
startServer(app);