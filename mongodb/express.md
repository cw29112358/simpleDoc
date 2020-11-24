# summary

/** ==============================================================================================*/

const express = require('express');
const app = express();

/** ==============================================================================================*/

路由语法：app.METHOD(PATH, HANDLER)

app.all('/example/b', function (req, res, next) {
  console.log('the response will be sent by the next function ...')
  next()
}, function (req, res) {
  res.send('Hello from B!')
})

app.get('/users/:userId/books/:bookId', function (req, res) {
  res.send(req.params)
})

app.post('/example/d', [handle0, handle1], function (req, res, next) {
  console.log('the response will be sent by the next function ...')
  next()
}, function (req, res) {
  res.send('Hello from D!')
})

app.put('/ab*cd', function (req, res) {
  res.send('')
})

app.delete('/ab(cd)?', function (req, res) {
  res.send('')
})

app.route('/book')
  .get(function (req, res) {
    res.send('Get a random book')
  })
  .post(function (req, res) {
    res.send('Add a book')
  })
  .put(function (req, res) {
    res.send('Update the book')
  })

path可以是字符串，字符串模式或正则表达式

method可以是
Response methods：res.download(), res.end(), res.json(), res.jsonp(), res.redirect(), res.render(), res.send(), res.sendFile(), res.sendStatus()

/** ==============================================================================================*/
express.Router

const express = require('express')
const router = express.Router()

// 使用该中间件，注意顺序
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

router.get('/user/:id', function (req, res, next) {
  if (req.params.id === '0') next('route') // 使用下一个路由
  else next() // 使用下一个中间件
}, function (req, res, next) {
、  res.render('regular')
})

router.get('/user/:id', function (req, res, next) {
  console.log(req.params.id)
  res.render('special')
})

module.exports = router

app.use('/path', router)

// 错误处理
app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

/** ==============================================================================================*/

静态文件语法：express.static(root, [options])

app.use(express.static('public'))

app.use('/static', express.static('public'))

app.use('/static', express.static(path.join(__dirname, 'public')))

/** ==============================================================================================*/

