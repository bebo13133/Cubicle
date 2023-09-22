const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 40,
        match: /^[A-Za-z0-9]+$/,
        unique: true,
    },
    password: {
        type: String,
        minLength: 3,
        maxLength: 40,
     required: true,
     validate:{
        validator: function(value) {
            return /^[A-Za-z0-9]+$/.test(value)
        },
        messages: 'Изтрезней и опитай пак !!!! '
     }
    },

});

userSchema.virtual('repeatPassword').set(function(value){
    if(value !== this.password) throw new mongoose.MongooseError('The password is not correct')
})


userSchema.pre('save', async function() {
const hash = await bcrypt.hash(this.password,9)
this.password = hash;
})

const User = mongoose.model('User', userSchema)
module.exports = User;