// import { Router } from "express";
// import { createUser,getUsers,deleteUser } from "../controllers/usersController";
// import auth from "../middlewares/auth";

// const router: Router = Router();

// router.post("/users", createUser);

// router.get("/users", auth, getUsers);

// router.delete("/users", deleteUser);

// export default router;

import { Router } from "express";
import { createUser,getUsers,getUsersById, deleteUser } from "../controllers/usersController";

const router: Router = Router();

router.post("/users",createUser);
router.get("/users", getUsers);
router.get("/users/:id", getUsersById);
router.delete("/users", deleteUser);

export default router;