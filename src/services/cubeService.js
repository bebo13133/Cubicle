const crypto = require('crypto');
// const uuid4 = crypto.randomUUID()
const cubes =[]


exports.getAll =()=> cubes.slice()

exports.create =(dateCube)=>{
const userID = crypto.randomUUID()
const newCube = {
    userID,
    ...dateCube,
}

cubes.push(newCube)
return newCube
}