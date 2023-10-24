import express from 'express';
import routes from "./routes/routes";

const app = express();

// configuration
app.set('port', process.env.PORT || 3000);

// routes
app.use('/api', routes)

export default app;