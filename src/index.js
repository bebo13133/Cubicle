const app = require('express')();
const { log } = require('console')



const PORT = 5000
require('./config/express')(app);
 require('./config/routes')(app)


//routes 
app.listen(PORT, () => log(`Server running on ${PORT}`))
