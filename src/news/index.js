import { Router } from 'express';
import newsControler from './controler.js'

const newsRouter = new Router();

//роути 
newsRouter.post('/', newsControler.post);

export default newsRouter;