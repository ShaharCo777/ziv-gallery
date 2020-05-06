const express   = require('express'),
      connectDB = require("./src/lib/init-db"),
      path = require('path'),
      cors = require('cors'),
      bodyParser = require('body-parser')




const app = express()
//conect to DB
connectDB()

//Middleware ofbodyParser
// app.use(express.json({extended: false}))
app.use(bodyParser.json({ limit: '50mb', extended: true }))
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }))



//fix CROS 
app.use(cors({'origin': 'http://localhost:3000'}));


//Define Routes
app.use('/api/photos', require('./src/routes/photos/index'))
// app.use('/api/auth', require('./Routes/api/auth'))
// app.use('/api/posts', require('./Routes/api/posts'))
// app.use('/api/pets', require('./Routes/api/pets'))
// app.use('/api/profile', require('./Routes/api/profile'))

  
// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client-side/build'))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client-side', 'build', 'index.html'));
  })
}


const PORT = process.env.PORT || 5000


app.listen(PORT, () =>
 console.log(`Server started on port ${PORT}`))
