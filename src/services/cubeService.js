const crypto = require('crypto');
// const uuid4 = crypto.randomUUID()
const cubes =[
    { 
        userID:'faf66b03-31e0-4e2a-9ce0-a2b6a521e975',
        name: 'Test1',
        description:"Lorem21867321", 
        imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHo-RaxG2ivrsB0isq_8m99O1WKAMzTHFUAQ&usqp=CAU',
        difficultyLevel:3
     }
]


exports.getAll =()=> cubes.slice()
exports.getOne = (userID)=> cubes.find(x=>x.userID === userID)

exports.create =(dateCube)=>{
const userID = crypto.randomUUID()
const newCube = {
    userID,
    ...dateCube,
}

cubes.push(newCube)
return newCube
}