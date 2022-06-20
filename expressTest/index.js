const http = require('http'); //node.js 모듈 내장모듈

http.createServer( (request, response) => {  
    response.writeHead(200, {'Content-Type' : 'text/plain'}); //200번은 응답성공
    //                        문서형식이다
    response.write('Hello 3000 Server');
    response.end();
}).listen(3000); // 3000번인걸로 뛰워달라.

// http 상태코드
// 1XX 조건부응답
// 2XX 응답성공
// 3XX 리다이렉션
// 4XX 요청오류
// 5XX 서버오류

// 1. npm init -y
// 2. npm install express