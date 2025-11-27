import express from 'express';
import type { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import { rateLimit } from 'express-rate-limit';

const app = express();
app.use(express.json());
app.use(morgan('combined'));
app.use(cors());
app.use(helmet());
app.use(rateLimit({
  windowMs: 15 * 60 * 1000,
}));

app.use(async (req: Request, res: Response, next: NextFunction) => {
  // Handle authentication
});

app.post('/v1/', async (req: Request, res: Response, next: NextFunction) => {

});

app.get('/v1/', async (req: Request, res: Response, next: NextFunction) => {

});

app.get('/v1/', async (req: Request, res: Response, next: NextFunction) => {

});

app.put('/v1/', async (req: Request, res: Response, next: NextFunction) => {

});

app.delete('/v1/', async (req: Request, res: Response, next: NextFunction) => {

});

app.use((req: Request, res: Response, next: NextFunction) => {
  return res.sendStatus(404);
});

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err);
  return res.sendStatus(500);
});

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Microservice started at http://localhost:${port}`);
});
