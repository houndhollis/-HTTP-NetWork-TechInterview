const express = require('express')
const router = express.Router();

router.get('/',(req,res)=>{
    res.send('컨트롤러 임!')
})

router.get('/flight' , (req,res)=>{
    res.send('컨트롤 이후 플라이트')
})

module.exports = router