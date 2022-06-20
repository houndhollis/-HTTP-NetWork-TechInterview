const express = require('express') 
const nunjucks = require('nunjucks');
const looger = require('morgan')

const admin = require('./routes/admin')
const control = require('./routes/control')

const app = express() //익스프레스 설정
const PORT = 3000; // 포트설정

// 템플레이트 폴더 말하는거다 폴더명 따라하기 
nunjucks.configure('template' , {
    autoescape : true, // 보완상 트루 admin.js 에서 message 부분 html 가능
    express : app // 6번재 줄이랑 같이
}) 

// 미들웨어 셋팅 
app.use( looger ('dev'))

app.get('/', (req,res) => {
    res.send('hello express');
})

app.get('/fastcampus', (req,res) => {
    res.send('fastcampus express11');
}) //새로 추가 할 경우 다시 열어줘야한다. 노드몬쓰면 해결가능

// use 는 미들웨어다
app.use( '/admin' , admin) //뒤에는 이후에 참조해라 라는뜻.

app.use('/control', control)


app.listen(PORT , () => {
    console.log('Express listening on port',PORT)
})

//node app.js 서버 열기 
// 계속 수정할때마다 열었다 내렸다가 귀찮을경우
// => nodemon 이다 소스의 변화를 모니터링
// 패키지.json 에서 start:'nodemon app.js' 를 입력하여
// npm start 만 쳐도 npm이 실행된다.

// 왜! Express 를 사용해야 하는가?
// 1. 웹 서비스 관점
// 2. 프레임워크 선정시 고려해야 될점
// -> 가장 대중적이고 많이 사용된다.

// 눈적스 사용 방법!
// npm install nunjucks