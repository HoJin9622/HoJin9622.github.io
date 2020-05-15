---
title: Hexo로 github.io 블로그 생성
date: 2020-05-01 17:40:56
category: JavaScript
draft: false
---

## Hexo 란?

Hexo 는 블로그 프레임워크이다.

Jekyll, Hexo, Hugo 등의 프레임워크들이 있지만, Hexo는 자바스크립트 기반이어서 선택하게 되었다.

Hexo를 이용하여 github.io 페이지에 쉽게 블로그를 만드는 방법을 소개하려고 한다.

[>> Hexo Hompage](https://hexo.io/ko/index.html)

## How to use?

### github 저장소 생성

1. github에 로그인 후 우측 상단에 New repository를 클릭하여 저장소를 생성해준다.

   <img src="http://drive.google.com/uc?export=view&id=1NT1Rfytub32UKZqOdN8MV4brDVrdWrTR" />

2. Repository name은 <계정이름>.github.io 로 설정해준다.

   <img src="http://drive.google.com/uc?export=view&id=1FqcbGS4cpqQZsWB3YKhR_kr0ezOzQJjx" />

3. Create Repository를 끝내면 완료!

   <img src="http://drive.google.com/uc?export=view&id=1fhxqctrI5Z3MaxinNcuifc0xLshQ7R0l" />

### Hexo 설치

Hexo의 설치에는 두가지 요구사항이 있다.

<ul>
    <li>Node.js</li>
    <li>Git</li>
</ul>
컴퓨터에 이것들이 설치되었다면, npm을 이용하여 Hexo를 설치 할 수 있다.

```sh
$ npm install hexo-cli -g
$ hexo init <name>
$ cd <name>
$ npm install
```

### \_config.yml

\_config.yml은 환경설정 파일이다.
대부분의 설정을 이 파일에서 할 수 있다.

```yml
# Site
title: 웹 사이트의 제목.
subtitle: 웹 사이트의 부제.
description: 웹 사이트에 대한 설명.
author: 작성자 이름.
language: 웹 사이트의 주 사용언어.
```

자신의 블로그의 타이틀, 서브타이틀, 설명, 작성자 등을 입력해준다.

그 후 #URL 부분의 url: 을 자신의 깃허브 주소로 입력한다.

```yml
# URL
## If your site is put in a subdirectory, set url as 'http://yoursite.com/child' and root as '/child/'
url: https://<your_github_url>.github.io/
```

그 후 Deployment 부분의 type을 git, repo는 자신의 github.io를 만들 저장소의 주소를 넣어준다.

```yml
# Deployment
## Docs: https://hexo.io/docs/deployment.html
deploy:
type: git
repo: <repository url> #https://github.com/HoJin9622/HoJin9622.github.io
branch: master
message: [message]
```

### Deploy

먼저 git에 deploy하기 위한 라이브러리를 설치해준다.

```sh
$ npm install hexo-deployer-git --save
```

아래는 Deploy를 하기위한 명령어다.
generate는 정적파일을 생성하고
deploy는 정적 생성한 파일을 github master branch로 push 해준다.

```sh
$ hexo generate
$ hexo deploy
```

한꺼번에 하기위해선 아래와 같이 가능하다.

```sh
$ hexo deploy --generate
```

### 포스트 작성

아래 명령어로 새 글을 작성할 수 있다.

```sh
$ hexo new post [file_title]
```

생성된 글은 아래 경로에 생성된다.

```
source
    └── _posts
        └── file_title.md
```

아래 예시처럼 글을 제목, 날짜, 내용 등을 넣을 수 있다.

```
---
title: 'Github Blog 만들기'
date: 2020-05-01 18:01:44
---

Github Blog 만들기!
테스트입니다.
```
