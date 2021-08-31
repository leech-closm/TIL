# 웹표준

W3C : HTML5

WHATWG : HTML Living Standard

# HTML

- Hyper Text Markup Language

1. Hyper : 텍스트 드으이 정보가 다중으로 연결되
2. Hyper Text : 참조를 통해 다른문서로 즉시 이동가능한 텍스트
3. Markup : <h1> <p> 등으로 표현

## 기본구조

### head요소

문서제목 문자코드(인코딩)의정보 브라우저에 나타나지 않음

css선언 혹은 외부파일지정

Open Graph Protocol 로 미리보기 가능

### body 요소

DOM 트리구조

<ul>
    <li> HTML </li>
    <li> CSS </li>
</ul>

내용이 없는 태그들 : br, hr, img, input, link, meta

<a href="dsa"></a>

####  속성

- 부가적인 정보 설정
- 요소는 속성을 가질수 있음
- 시작태그에 작성

## 시맨틱 태그

HTML5 에서 등장

태그에 의미가 담김

header, nav, aside, section, article, footer

#### 그룹 컨텐츠

p, hr, ol, ul, pre, div

#### 텍스트 관련 요소

a, b vs strong, i vs em, span, br, img

#### table 관련요소

tr, td, th, thead, tbody, tfoot, col

form 은 서버에서 처리될 데이터를 제공

input <label> 

# CSS

스타일 레이아웃 등으로 문서를 표시하는 방법을 지정하는 언어

ex.

h1 {

​	color: blue:

​	font-size: 15px;

}

css 구문은 선택자와 함께 열림

지정할 HTML요소를 선택

중괄호 안에서는 속성과 값 하나의 쌍으로 이뤄진 선언을 진행

## 정의방법

1. 인라인(inline)
2. 내부참조(embedding)-<style>
3. 외부참조 -분리된 css파일

1. < h1 style="color:blue;">  hello</h1>

2. <head>
       <style>
           h1{

           }
       </style>
   </head>

3. <link rel="stylesheet" href="css"> 

## 선택자

- 기본선택자 : 전체선택자, 요소선택자, 클래스선택자, 아이디 선택자, 속성선택자
- 결합자 : 자손결합자, 자식결합자, 일반형제결합자, 인접형제결합자
- 의사클래스 요소: 링크 동적

요소선택자 : HTML 태그를 직접 선택

클래스선택자 : 마침표(.)로 시작하며 클래스 전부선택

id선택자 : #으로 시작하며 아이디 전부선택 ,일반적으로 한번만 사용

우선순위***

1. !importance
2. 인라인>id>class >요소
3. 소스순서

## css 상속

상속되는것: text 관련

상속되지 않는것 : box model 관련

## 크기단위

px : 픽셀기준, 고정적인 단위

% : 백분율단위 가변적인곳에서 주로사용

em : 부모의 상속에 영향을 받음, 배수단위 요소에 상대적인 사이즈를 가짐

rem : 부모의 영향을 받지 않음, 최상위 요소의 사이즈를 기준으로 배수단위를 가짐

viewport

### 색상단위

1. 이름
2. rgb-#000000, rgb(0, 0, 0)
3. hsl

## 결합자

자손결합자 : A 하위의 모든B요소 div span

자식결합자 : A 바로아래의 B요소 div > span

일반형제결합자 : A의 형제요소중 뒤에존재하는 모든B요소 p~span

인접형제결합자 : A의 형제요소중 바로뒤에 존재하는 B요소p+span

## box model

### 구성

content

padding

border

margin

## position

static : 기본값 

relative : 상대위치

absolute : 절대위치 static이 아닌 가까이있는 부모요소를 기준으로 이동

fixed : 고정위치, 스크롤시에도 같은위치에 있음

# float

본래는 이미지 좌, 우측으로 텍스트를 둘러싸기위해 도입

이미지가 아닌 다른요소에도 적용해 전체 레이아웃을 만드는데 사용\

## 속성

none : 기본값

left : 왼쪽으로 띄움

right : 오른쪽으로 띄움

# flexbox

요소 : Flex Container, Flex Item

축 : main axis, cros axis

## 속성

방향설정 : flex-direction

메인축 방향정렬 : justify-content

교차축 방향정렬 : align-items, algin-self, align-content

기타 : flex-wrap, flex-flow, flex-grow, order(남는 공간을 분배)