// app.js

const express = require('express')
const path = require('node:path')
const app = express()

const assetPath = path.join(__dirname, 'public')
app.use(express.static(assetPath))

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));


const indexRouter = require('./routes/indexRouter.js')

app.use('/', indexRouter)

const PORT = process.env.PORT || 3000

app.listen(PORT, (error) => {
  if (error) {
    throw error
  }
  console.log('localhost PORT: ' + PORT)
})



// app.use((err, req, res, next) => {
//   console.error(err);
//   // We can now specify the `err.statusCode` that exists in our custom error class and if it does not exist it's probably an internal server error
//   res.status(err.statusCode || 500).send(err.message);
// });