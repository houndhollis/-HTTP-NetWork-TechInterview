# URL 과 URI 

> URL 이란 
- 브라우저의 주소창에 입력한 URL은 서버가 제공되는 환경에 위치를 나타냅니다.
- CLI 환경에서 폴더와 파일의 위치를 찾아 이동하듯, **/** 를 이용해 서버의 폴더에 진입하거나 파일을 요청할수 있다.

```
# username에는 사용자 이름을 입력합니다.
# Ubuntu: 
file://127.0.0.1/home/username/Desktop/

# macOS: 
file://127.0.0.1/Users/username/Desktop/
```
순서대로 본다면 :scheme: :hosts: :url-path: :query: 이다.

## URL은 scheme, hosts, url-path로 구분할 수 있다
scheme 은 통신방식을 결정한다. 일반적인 웹 브라우저에서는 http(s)를 사용한다. hosts는 웹 서버의 이름이나 도메인,ip를 사용하여 주소를 나타내고 url-path는 웹 서버에서 지정한 루트 디렉토리부터 시작하여 이미지,동영상 경로와 이름을 나타낸다.

## URI 는 scheme, hosts, url-path에 더해 query, bookmark를 포함한다.
qurey는 웹 서버에 보내는 추가적인 질문이다.
- 추가로 port 는 서버로 진입할 수 있는 통로다.