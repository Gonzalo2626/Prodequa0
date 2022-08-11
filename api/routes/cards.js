import express from "express";
import {createCard, updatedCard, deleteCard, getCard, getCards } from "../controllers/card.js"
import Card from "../models/Card.js";
import {verifyAdmin} from "../utils.js/verifyToken.js"


const router = express.Router();

//CREATE
router.post("/", verifyAdmin, createCard);
//UPDATE
router.put("/:id", verifyAdmin, updatedCard );

//DELETE
router.delete("/:id", verifyAdmin, deleteCard)
//GET

router.get("/:id", getCard);

// GET ALL

router.get("/", getCards);


export default router