import { user } from "../model/user.js";

const getUsers = async (req,res) =>{
    try {
        const data = user.find()
        res.status(200).json({data})
    } catch (error) {
        res.status(404).json({message : error})
    }
}

const getUser = async (req,res) =>{
    const {id} = req.params
    try {
        const data = user.findById(id)
        res.status(200).json({data})
    } catch (error) {
        res.status(404).json({message : error})
    }
}

const createUser = async (req,res) =>{
    const body = req.body
    const newUser = user(body)
    try {
        newUser.save()
        res.status(200).json({data : newUser})
    } catch (error) {
        res.status(404).json({message : error})
    }
}

export {getUser, getUsers, createUser}