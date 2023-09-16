const app = require('express')();
const { log } = require('console')
const connectDb = require('./config/mongooseDb')


const PORT = 5000
connectDb()
.then(()=>log('Connect to MongoDb'))
.catch(err =>log("Database error!!",err))


require('./config/express')(app);
require('./config/routes')(app)


//routes 
app.listen(PORT, () => log(`Server running on ${PORT}`))
