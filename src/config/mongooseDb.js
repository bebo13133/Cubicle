const mongoose = require('mongoose')

const uri = `mongodb://127.0.0.1:27017/cubes`

async function connectDb(){

await mongoose.connect(uri)

}
module.exports = connectDb