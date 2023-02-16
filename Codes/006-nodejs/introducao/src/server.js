// Import
import app, { config } from './routes.js';

// Rotas -- express.js

// API Server ----
 app.listen(config.port, () => {
    console.log(`Server is running on port ${config.port}...`);
});

