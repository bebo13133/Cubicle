const mongoose = require('mongoose');

const cubeSchema = new mongoose.Schema({
   
    name: {
        
        type: String,
        required: true,
        minLength: 3,
        maxLength: 25,
    
    },
    description: String,
    imageUrl: String,
    difficultyLevel: {
        type: Number,
        required: true,
        minLength: 1,   
    },
    accessories:[{
        type: mongoose.Types.ObjectId,
        ref:"Accessory"
    }],

})

const Cube = mongoose.model('Cube', cubeSchema);
module.exports = Cube;