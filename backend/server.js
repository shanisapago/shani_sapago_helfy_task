import express from 'express'
import cors from 'cors'
import tasks_router from './routes/tasks.js'
const server = express();
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));
server.use('/api',tasks_router);
server.listen(4000)