const cubes =[]

exports.getAll =()=> cubes.slice()

exports.create =(dateCube)=>{

const newCube = {
    id: cubes.length +1,
    ...dateCube,
}

cubes.push(newCube)
return newCube
}