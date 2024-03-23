var express = require('express');
var multer = require('multer');

const { login } = require('../controller/alogincontroller');
const { add, select, remove, update } = require('../controller/admincontroller');
const { mainpage } = require('../controller/mainuser');

var router = express.Router();


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/images')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
const upload = multer({ storage: storage })

router.post('/',upload.single('img'),add)
router.post('/login',login)
router.get('/select/:id',select)
router.get('/remove',remove)
router.get('/main',mainpage)
router.post('/update/:id',update)

module.exports = router;
