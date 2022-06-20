const express = require('express')
const router = express.Router(); //규칙이다 

// function testMiddleWare()

// 미들웨어란 중간 요청을 가로채는 개념이다

router.get('/' , (req,res)=>{
    res.send('어드민 이후 url')
})

router.get('/products' , (req,res)=>{
    // if(로그인안되어있을때) res.redirect() // 이동

    // res.send('어드민 products')
    res.render('admin/products.html' ,{
        message : `<h1>태그가 출력됩니다.</h1>`
    }) //app.js 설정한 템플릿 폴더 이후 지정해주면된다.
})

module.exports = router //내보내면 이제 app.js 에서 불러와야한다.