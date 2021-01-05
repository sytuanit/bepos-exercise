const customConsole = require('../utils/custom-console');

module.exports = (app) => {
    try {
        const port = process.env.PORT;
        const nodeEnv = process.env.NODE_ENV;
        app.listen(port);
        if (nodeEnv !== 'test') {
            customConsole.info(`Server running on host: http://localhost:${port}, nodeEnv: ${nodeEnv}`);
        }
    } catch (ex) {
        customConsole.error(`Error starting app:${ex.message}`);
        process.exit(2);
    }
};
