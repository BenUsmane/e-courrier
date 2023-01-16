import { getCourrier, getCourriers, createCourrier } from "../controller/courrier.js";
import express  from "express";

const router = express.Router()

router.get('/',getCourriers)
router.get('/:id',getCourrier)
router.post('/',createCourrier)

export {router}
