const express=require('express')
const multer  = require('multer')
const{ home,signup,signIn,addItems,searchFood,Allitem}=require('./controller')
const router=express.Router()
//all routes
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public')
  },
  filename: function (req, file, cb) {
    cb(null,Date.now() + '-' + file.originalname)
  }
})
  const upload = multer({ storage: storage });
router.route('/').post(home)
router.route('/signin').post(signIn)
router.route('/signup').post(signup)
router.route('/additems').post(upload.single('foodimg'),addItems);
router.route('/searchfood').post(searchFood)
router.route('/allitem').get(Allitem)


module.exports=router;
