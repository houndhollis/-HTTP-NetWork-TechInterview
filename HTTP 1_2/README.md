# HTTP 1_2

## Headers

- 요청의 Headers 는 기본 구조를 따릅니다. 헤더이름( 대소문자 구분이 없는 문자열),콜론(:) 값을 입력합니다.
- 값은 헤더에 따라 다릅니다. 여러 종류의 헤더가 있다

1. General headers : 메시지 전체에 적용되는 헤더로, body를 통해 전송되는 데이터와는 관련이 없는 헤더이다.
2. Request headers : fetch를 통해 가져올 리소스나 클라이언트 자체에 대한 자세한 정보를 포함하는 헤더를 의미한다. User-Agent, Accept-Type, Accept-Language와 같은 헤더는 요청을 보다 구체화한다. Referer처럼 컨텍스트를 제공하거나 If-None과 같이 조건에 따라 제약을 추가할 수 있다.
3. Representation headers : 이전에는 Entity headers로 불렀으며, body에 담긴 리소스의 정보(콘텐츠 길이, MIME 타입 등)를 포함하는 헤더입니다.

## Body 
- 요청의 본문은 HTTP messages 구조의 마지막에 위치합니다.
- body 는 다음과 같이 두 종류로 나눌 수 있습니다.
- Single-resource bodies(단일-리소스 본문):헤더 두 개(Content-Type과 Content-Length)로 정의된 단일 파일로 구성된다.
- Multiple-resource bodies(다중-리소스 본문) : 여러 파트로 구성된 본문에서는 각 파트마다 다른 정보를 지닌다.

## HTTP Responses
> Status line
- HTTP Responses는 서버가 클라이언트에게 보내는 메세지 입니다. 응답의 첫 줄을 Status line이라고 부른다.
1. 현재 프로토콜의 버전(HTTP/1.1)
2. 상태코드 - 요청의 결과를 나타냅니다.
3. 상태 텍스트 - 상태코드에 대한 설명이다.

> Headers 
- 응답에 들어가는 HTTP headers는 요청 헤더와 동일한 구조를 가진다.
- 요청의 헤더와 마찬가지로 몇가지 그룹을 나눌수 있습니다

1. General headers : 메시지 전체에 적용되는 헤더로, body를 통해 전송되는 데이터와는 관련이 없는 헤더이다.
2. Response headers : 위치 또는 서버 자체에 대한 정보(이름, 버전 등)와 같이 응답에 대한 부가적인 정보를 갖는 헤더로, Vary, Accept-Ranges와 같이 상태 줄에 넣기에는 공간이 부족했던 추가 정보를 제공한다.
3. Representation headers : 이전에는 Entity headers로 불렀으며, body에 담긴 리소스의 정보(콘텐츠 길이, MIME 타입 등)를 포함하는 헤더이다.

> Body
- 응답의 본문은 HTTP messages 구조의 마지막에 위치한다. 모든 응답에 body 가 필요하진 않는다.
- Single-resource bodies(단일리소스본문)
 - 길이가 알려진 단일-리소스 본문은 두 개의 헤더로 정의합니다.
 - 길이를 모르는 단일 파일로 구성된 단일 - 리소스 본문은 Transfer-Encoding이 chunked로 설정되어 있으며 파일은 chunk로 나뉘어 인코딩 되어있다.
- Multiple-resource bodies(다중-리소스 본문) : 서로 다른 정보를 담고 있는 body다.