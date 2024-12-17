import { Router } from "express";
import { createUser,getUsers,deleteUser } from "../controllers/usersController";

const router: Router = Router();

router.get("/users");

router.post("/users", createUser);

router.delete("/users");

export default router;