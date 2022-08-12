import express from "express";
import {createCard, updatedCard, deleteCard, getCard, getCards } from "../controllers/card.js"
import Card from "../models/Card.js";
import {verifyAdmin, verifyToken} from "../utils/verifyToken.js"


const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createCard);
//UPDATE
router.put("/:id", verifyAdmin, updatedCard );

//DELETE
router.delete("/:id", verifyAdmin, deleteCard)
//GET

router.get("/:id", verifyToken, getCard);

// GET ALL

router.get("/", verifyToken, getCards);


export default router