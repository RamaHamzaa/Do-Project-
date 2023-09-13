const  express= require('express')
const router = express.Router()

const infocontrollers= require('../controllers/infocontrollers')


router.get('/',infocontrollers.index)
router.post('/show',infocontrollers.show)
router.post('/store',infocontrollers.store)
router.post('/update',infocontrollers.update)
router.post('/delete',infocontrollers.destroy)
router.post('/deleteall',infocontrollers.deletAll)


module.exports=router