import express from "express";
import { 
    getUser,
    getUserFriends,
    addRemoveFriend,
} from "../controllers/users.js";

import { verifyToken } from "../middleware/auth";

const router = express.Router();

/* Read */
/* When the frontend sends userid, grabs id and calls the database
using that particular id
  */
router.get("/:id", verifyToken, getUser);
router.get("/:id/friends", verifyToken, getUserFriends);

/* Update */
router.patch("/:id/:friendId"/ verifyToken, addRemoveFriend)

export default router;