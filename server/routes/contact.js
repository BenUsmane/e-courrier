import  express  from "express";
import { getContact, getContacts, createContact } from "../controller/contact.js";

const router = express.Router()

router.get('/',getContacts)
router.get('/:id',getContact)
router.post('/',createContact)

export {router}