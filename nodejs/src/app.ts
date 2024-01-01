import express from 'express';
import routes from "./routes/routes";
import cors from 'cors';

// main express configuration
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cors(
    {origin: 'http://localhost:4200', optionsSuccessStatus: 200, methods: ['GET', 'PUT', 'POST', 'DELETE']}
));

// other configurations
app.set('port', process.env.PORT || 3000);

// routes
app.use('/api', routes)

export default app;