const express = require('express') //llamamos a Express
const router = express()           
const cors = require('cors')
router.use(cors())

router.use(express.json())
router.use(express.urlencoded({ extended: true}));

const userController = require('./controllers/user');

var port = process.env.PORT || 8080  // establecemos nuestro puerto

router.get("/", userController.edit)

router.post("/api/user/create", userController.create)

// router.get('/', function(req, res) {
//   const edit = user;
//   res.json({ edit: 'edit' })   
// })

//https://mfikri.com/en/blog/restful-api-express-sequelize
//https://cloudnweb.dev/2019/08/building-rest-api-using-node-express-and-sequelize/

router.get('/cervezas', function(req, res) {
  res.json({ mensaje: '¡A beber cerveza!' })  
})

router.post('/', function(req, res) {
  res.json({ mensaje: 'Método post' })   
})

router.delete('/', function(req, res) {
  res.json({ mensaje: 'Método delete' })  
})

// iniciamos nuestro servidor
router.listen(port)
console.log('API escuchando en el puerto ' + port)