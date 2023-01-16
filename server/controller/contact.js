import { contact } from "../model/contact.js";

const getContacts = async (req,res)=>{
    try {
        const data = await contact.find()
        res.status(200).json({data})
    } catch (error) {
        res.status(404).json({message : error.message})
    }
}

const getContact = async (req,res) =>{
    const {id} = req.params

    try {
        const data = contact.findById(id)
        res.status(200).json({data})
    } catch (error) {
        res.status(404).json({message : error.message})
    }
}

const createContact = async (req,res) =>{
    const body = req.body
    const newContact = contact(body)
    try {
        newContact.save()
        res.status(200).json({data : newContact})
    } catch (error) {
        res.status(404).json({message : error.message})

    }
}

export {getContact, getContacts, createContact}