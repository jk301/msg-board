// routes/indexRouter.js

const { Router } = require('express')
const indexRouter = Router()

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  },
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hi there!bhbeq3uhygcyu3gyucg2b4tcr782t3bc98t",
    user: "Amando",
    added: new Date()
  }
];


indexRouter.get('/', (req, res) => {
    res.render('index', { messages: messages })
})

indexRouter.get('/new', (req, res) => {
  res.render('form')
})

indexRouter.post('/new', (req, res) => {
  const message = req.body.msg
  const user = req.body.user

  messages.push({ text: message, user: user, added: new Date() });
  res.redirect('/')
})

module.exports = indexRouter
