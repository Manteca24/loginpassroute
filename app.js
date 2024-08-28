const express = require('express');
const app = express();
const PORT = 4000;
const dotenv = require('dotenv');
const routes = require('./routes');
const middlewares = require('./middlewares');

dotenv.config();
middlewares.setupAPP(app);
routes.setup(app);

app.listen(PORT, () => {
    console.log(`Servidor en ejecución en http://localhost:${PORT}`);
});
