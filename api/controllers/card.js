import Card from "../models/Card.js";
export const createCard = async (req,res,next) =>{
    const newCard = new Card(req.body)
    try {
        const savedCard = await newCard.save()
        res.status(200).json(savedCard)
    } catch (err) {
        next(err);
    }
}
export const updatedCard = async (req,res,next) =>{
    try {
        const updatedCard = await Card.findByIdAndUpdate(req.params.id, { $set: req.body}, {new:true}) 
        res.status(200).json(updatedCard)
    } catch (err) {
        next(err);
    }
}
export const deleteCard = async (req,res,next) =>{
    try {
        await Card.findByIdAndDelete(req.params.id);
        res.status(200).json("Card has been deleted");
    } catch (err) {
        next(err);
    }
}
export const getCard = async (req,res,next) =>{
    try {
        const card = await Card.findById(req.params.id);
        res.status(200).json(card);
    }catch (err) {
        next(err);
    }
}
export const getCards = async (req,res,next) =>{
    try {
        const cards = await Card.find();
        res.status(200).json(cards);
    }catch (err) {
        next(err);
    }
}