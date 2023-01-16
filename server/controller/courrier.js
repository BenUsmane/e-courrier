import { courrier } from "../model/courrier.js";

const getCourriers = async (req,res)=>{
    try {
        const courrier = await courrier.find()
        res.status(200).json({data : courrier})
    } catch (error) {
        res.status(404).json({message : error.message})
    }
}

const getCourrier = async (req,res) =>{
    const {id} = req.params
    try {
        const data = await courrier.findById(id)
        res.status(200).json({data})
    } catch (error) {
        res.status(404).json({message : error.message})   
    }
}

const createCourrier = async (req,res) =>{
    const body = req.body
    const courrierAdd = courrier(body)
    try {
        await courrierAdd.save()
        res.status(200).json({data : courrierAdd})
    } catch (error) {
        res.status(404).json({message : error.message})   
    }
}

export {getCourrier, getCourriers , createCourrier}