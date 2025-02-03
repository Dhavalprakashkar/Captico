import { Router } from "express";
import { Login, Register } from "../controller/authcontroller.js";

const routes = Router()

routes.post("/login", Login)
routes.post("/register",Register)

export default routes