# HTTP 1_1

> 클라이언트와 서버사이 데이터 교환 방식
- 요청(Requests)
- 응답(Responses)

- Start line : start line 에는 요청이나 응답상태를 나타냅니다.
- HTTP header: 요청을 지정하거나 메시지에 포함된 본문을 설명하는 헤더의 집단입니다.
- empty line: 헤더와 본문을 구분하는 빈 줄이 있습니다.
- body : 요청과 응답의 유형에 따라 선택적으로 사용합니다.

## STateless 
- Stateless 는 말 그대로 상태를 가지지 않는다는 뜻입니다.
- HTTP로 클라이언트와 서버가 통신을 주고받는 과정에서, HTTP 클라이언트나 서버의 상태를 확인하지 않습니다.
- Stateless (무상태성)가 HTTP의 큰 특징이라고 기억하는 것으로 충분합니다.

## HTTP Requests
### Start line  
- HTTP Requests는 클라이언트가 서버에게 보내는 메세지 입니다. Start line 에는 세 가지 요소가 있습니다.
1. 수행할 작업(GET,PUP,POST)을 설명하는 HTTP method를 나타냅니다.
2. 요청대상 ,프로토콜 ,포트,도메인의 절대 경로는 요청 컨텍스트에 작성됩니다. 이 요청 형식은 HTTP method마다 다릅니다.
 - origin 형식 : '?'와 쿼리 문자열이 붙는 절대 경로입니다. GET, POST, HEAD, OPTIONS 등의 method와 함께 사용합니다.
POST / HTTP 1.1
GET /background.png HTTP/1.0
HEAD /test.html?query=alibaba HTTP/1.1
OPTIONS /anypage.html HTTP/1.0
 - absolute 형식 : 완전한 URL 형식으로, 프록시에 연결하는 경우 대부분 GET method와 함께 사용합니다.
GET http://developer.mozilla.org/en-US/docs/Web/HTTP/Messages HTTP/1.1
 - authority 형식 : 도메인 이름과 포트 번호로 이루어진 URL의 일부분 입니다. HTTP 터널을 구축하는 경우, CONNECT와 함께 사용할 수 있습니다.
CONNECT developer.mozilla.org:80 HTTP/1.1
 - asterisk 형식 : OPTIONS 와 함께 별표(*) 하나로 서버 전체를 표현합니다.
OPTIONS * HTTP/1.1