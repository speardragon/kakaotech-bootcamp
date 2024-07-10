# 프로젝트 이름

## 개요

이 프로젝트는 Next.js와 Prisma를 사용하여 기본 CRUD 기능을 제공하는 웹 애플리케이션입니다. 데이터베이스는 PostgreSQL을 사용하며, 서버 성능 테스트도 포함되어 있습니다.

## 환경 구축

### 요구사항

- Node.js 14.x 이상
- PostgreSQL 12.x 이상
- npm 또는 yarn 패키지 관리자

### 설치

1. 레포지토리를 클론합니다.

   ```bash
   git clone https://github.com/your-repo/project.git
   cd project
   ```

2. 필요한 패키지를 설치합니다.

   ```bash
   npm install
   # 또는
   yarn install
   ```

3. 환경 변수 파일을 설정합니다. `.env.example` 파일을 복사하여 `.env` 파일을 만들고, 필요한 값을 채워넣습니다.
   ```bash
   cp .env.example .env
   ```

### 데이터베이스 설정

1. PostgreSQL 데이터베이스를 생성합니다.

   ```sql
   CREATE DATABASE your_database_name;
   ```

2. Prisma 스키마를 적용합니다.
   ```bash
   npx prisma migrate dev --name init
   ```

## 서버 실행

1. 개발 서버를 시작합니다.

   ```bash
   npm run dev
   # 또는
   yarn dev
   ```

2. 브라우저에서 [http://localhost:3000](http://localhost:3000)으로 접속하여 애플리케이션을 확인합니다.

## 성능 테스트

### 데이터 삽입(Create) 성능 측정

- 사용자 데이터 삽입

  ```sql
  INSERT INTO User (username, email, password) VALUES ('user1', 'user1@example.com', 'password1');
  ```

- 게시글 데이터 삽입

  ```sql
  INSERT INTO Post (title, content, user_id) VALUES ('First Post', 'This is the content of the first post', 1);
  ```

- 댓글 데이터 삽입
  ```sql
  INSERT INTO Comment (content, user_id, post_id) VALUES ('First comment', 1, 1);
  ```

### 데이터 조회(Read) 성능 측정

- 사용자 조회

  ```sql
  SELECT * FROM User WHERE username='charlie';
  ```

- 게시글 조회

  ```sql
  SELECT * FROM Post WHERE title like '%First%';
  ```

- 댓글 조회
  ```sql
  SELECT * FROM Comment WHERE post_id = 1;
  ```

### 데이터 업데이트(Update) 성능 측정

- 사용자 업데이트

  ```sql
  UPDATE User SET username = 'UpdatedUser' WHERE user_id = 1;
  ```

- 게시글 업데이트

  ```sql
  UPDATE Post SET title = 'Updated Post' WHERE title like '%ost%';
  ```

- 댓글 업데이트
  ```sql
  UPDATE Comment SET content = 'Updated Comment' WHERE comment_id = 1;
  ```

### 데이터 삭제(Delete) 성능 측정

- 사용자 삭제

  ```sql
  DELETE FROM User WHERE user_id = 1;
  ```

- 게시글 삭제

  ```sql
  DELETE FROM Post WHERE post_id = 1;
  ```

- 댓글 삭제
  ```sql
  DELETE FROM Comment WHERE comment_id = 1;
  ```

## 참고사항

- 외래키 설정 시 CASCADE 옵션의 장단점을 이해하고 상황에 맞게 사용해야 합니다.
- 중요 데이터의 무결성을 보장하기 위해 상황에 따라 적절한 옵션을 선택합니다.

## 결론

이 프로젝트는 기본적인 CRUD 기능을 제공하는 웹 애플리케이션으로, 성능 테스트와 데이터 무결성 유지를 위한 다양한 옵션을 제공합니다. 환경을 구축하고 서버를 실행하는 방법을 따라 애플리케이션을 손쉽게 시작할 수 있습니다.
