import { Router } from "express";
import authRoutes from './authroute.js'


const routes = Router();

routes.use('/auth', authRoutes);
// routes.use('/', authRoutes);

export default routes;