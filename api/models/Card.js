import mongoose from 'mongoose';


const CardSchema = new mongoose.Schema({
    dni:{
        type: 'number',
        required: true,
    },
    names:{
        type: 'string',
        required: true,
    },
    lastnames:{
        type: 'string',
        required: true,
    },
    birthday:{
        type: 'Date',
        required: true,
    },
    gender : {
        type: 'string',
        values: ["Male", "Female"],
        required: true,
    },
    age: {
        type: 'number',
        required: 'true'
    },    
    state : {
        type: 'string',
        required: true,
    },
});

export default mongoose.model("Card", CardSchema);  