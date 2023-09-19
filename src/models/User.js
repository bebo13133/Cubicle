const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        minLength: 3,
        maxLength: 40,
    },
    password: {
        type: String,
        minLength: 3,
        maxLength: 40,

     required: true,
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