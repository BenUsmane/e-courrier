import { getUser, getUsers, createUser } from "../controller/user.js";
import express  from "express";

const router = express.Router()

router.get('/',getUsers)
router.get('/:id',getUser)
router.post('/',createUser)

export {router}