  // routes/indexRouter.js

  const { Router } = require('express')
  const indexRouter = Router()

  let msgCounter = 2

  const messages = [
    {
      id: 2,
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      id: 1,
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
  ];


  indexRouter.get('/', (req, res) => {
      res.render('index', { messages: messages })
  })

  indexRouter.get('/new', (req, res) => {
    res.render('form')
  })

  indexRouter.get('/messages/:id', (req, res) => {
    res.render('message', { msg: messages.find((m) => m.id === Number(req.params.id))  })
  })

  indexRouter.post('/new', (req, res) => {
    const message = req.body.msg
    const user = req.body.user

    msgCounter++
    messages.unshift({id: msgCounter, text: message, user: user, added: new Date() });
    res.redirect('/')
  })

  module.exports = indexRouter
