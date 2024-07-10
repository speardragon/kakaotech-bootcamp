## 성능 테스트: 데이터 삽입, 조회, 업데이트, 삭제 작업의 성능 측정

### 테스트 목적

성능 테스트는 데이터베이스의 주요 작업(삽입, 조회, 업데이트, 삭제)의 성능을 측정하여 시스템의 효율성을 평가하고 최적화할 수 있는 지점을 파악하는 데 목적이 있다.

### 테스트 환경 설정

- 데이터베이스: MySQL
- 데이터베이스 테이블: User, Post, Comment
- 성능 측정 도구: MySQL 자체 기능(예: `EXPLAIN`, `ANALYZE`) 및 타임스탬프를 활용한 시간 측정

### 테스트 시나리오

- 각 작업에 대해 반복적인 성능 테스트를 수행하여 평균 실행 시간을 기록

### 성능 측정

#### 데이터 삽입(Create) 성능 측정

- 사용자(User) 데이터 삽입

  ```sql
  INSERT INTO User (username, email, password) VALUES ('user1', 'user1@example.com', 'password1');
  ```

- 게시글(Post) 데이터 삽입

  ```sql
  INSERT INTO Post (title, content, user_id) VALUES ('First Post', 'This is the content of the first post', 1);
  ```

- 댓글(Comment) 데이터 삽입

  ```sql
  INSERT INTO Comment (content, user_id, post_id) VALUES ('First comment', 1, 1);
  ```

#### 데이터 조회(Read) 성능 측정

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

#### 데이터 업데이트(Update) 성능 측정

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

#### 데이터 삭제(Delete) 성능 측정

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

| 작업             | 데이터 유형   | 평균 실행 시간 (ms) |
| ---------------- | ------------- | ------------------- |
| 삽입(Create)     | 사용자(User)  | 32                  |
| 삽입(Create)     | 게시글(Post)  | 27                  |
| 삽입(Create)     | 댓글(Comment) | 18                  |
| 조회(Read)       | 사용자(User)  | 35                  |
| 조회(Read)       | 게시글(Post)  | 467                 |
| 조회(Read)       | 댓글(Comment) | 34                  |
| 업데이트(Update) | 사용자(User)  | 32                  |
| 업데이트(Update) | 게시글(Post)  | 635                 |
| 업데이트(Update) | 댓글(Comment) | 17                  |
| 삭제(Delete)     | 사용자(User)  | 18                  |
| 삭제(Delete)     | 게시글(Post)  | 682                 |
| 삭제(Delete)     | 댓글(Comment) | 15                  |

![image](https://github.com/speardragon/kakaotech-bootcamp/assets/79521972/7f5426c7-0b1c-4913-bd7b-bd2586f971fd)

## 성능 분석: 테스트 결과를 바탕으로 성능 병목점 파악 및 최적화

데이터베이스에 레코드가 많이 존재하지 않은 상태에서 진행하다 보니 성능 병목점을 찾기가 힘들어 데이터베이스에 데이터가 많은 상황을 가정하기 위해 120만개의 레코드를 추가하는 작업을 진행했다.

위에 정리한 표를 보면 알 수 있듯이 데이터가 많은 Post 테이블과 관련된 쿼리를 처리할 때 병목 현상이 있는 것을 확인했고 각 테이블 별 레코드 수를 비교해봤을 때 120,000배 차이가 나는 테이블끼리 약 20배 차이의 평균 실행 시간 차이를 갖는 것을 확인할 수 있었다.

**인덱스 생성**

앞서 title에 대한 단일 인덱스는 생성했었으나 병목 현상을 확인하기 위해 인덱스가 없는 Post와 있는 Post를 다시 만들어 둘 간의 성능을 비교해볼 것이다. content에 대한 인덱스가 없기 때문에 content 필드를 조건으로 쿼리를 날리는 경우 O(N)의 시간 복잡도가 발생할 수 있다. 그렇기 때문에 title과 content를 모두 포함하는 인덱스들도 새로 생성하도록 한다.

```sql
CREATE INDEX title_content_idx ON Post(title, content);
```

UNIQUE INDEX로 만들 수도 있겠지만 title과 content 모두 동일한 게시글이 있을 수도 있기 때문에 UNIQUE 조건은 따로 추가해주지 않았다.

**인덱스 생성 후**

| 시도     | 실행 시간 (ms) |
| -------- | -------------- |
| 1        | 45             |
| 2        | 40             |
| 3        | 44             |
| 4        | 39             |
| 5        | 50             |
| 6        | 37             |
| 7        | 34             |
| 8        | 40             |
| 9        | 31             |
| **평균** | **36**         |

![image](https://github.com/speardragon/kakaotech-bootcamp/assets/79521972/062717da-4462-4951-8c70-134afdb2b57c)

또한 조회 쿼리가 인덱스를 잘 활용하고 있는지 확인하기 위해 EXPLAIN 구문을 사용할 수 있다.

![image](https://github.com/speardragon/kakaotech-bootcamp/assets/79521972/e7e06344-5f3f-47bc-bbeb-d80268463841)

위 사진을 보면 알겠지만 key 컬럼 값에 title_idx가 적혀 있고 이는 title_idx 인덱스를 활용하여 검색에 사용했다는 것을 의미한다.

| 작업             | 데이터 유형   | 평균 실행 시간 (ms) |
| ---------------- | ------------- | ------------------- |
| 삽입(Create)     | 사용자(User)  | 32                  |
| 삽입(Create)     | 게시글(Post)  | 27                  |
| 삽입(Create)     | 댓글(Comment) | 18                  |
| 조회(Read)       | 사용자(User)  | 35                  |
| 조회(Read)       | 게시글(Post)  | 36                  |
| 조회(Read)       | 댓글(Comment) | 34                  |
| 업데이트(Update) | 사용자(User)  | 32                  |
| 업데이트(Update) | 게시글(Post)  | 37                  |
| 업데이트(Update) | 댓글(Comment) | 17                  |
| 삭제(Delete)     | 사용자(User)  | 18                  |
| 삭제(Delete)     | 게시글(Post)  | 32                  |
| 삭제(Delete)     | 댓글(Comment) | 15                  |

# 결론

성능 테스트 및 분석을 통해 데이터베이스의 주요 작업(삽입, 조회, 업데이트, 삭제)에 대한 성능을 측정하고 최적화 방안을 모색하였습니다. 특히 예상했던 것과 같이 데이터가 많은 Post 테이블에서 성능 병목 현상이 발견되었습니다. 이를 해결하기 위해 적절한 인덱스를 생성한 결과, 조회 작업의 평균 실행 시간이 크게 개선되었습니다.

## 주요 결과:

인덱스 생성 후 Post 테이블 조회의 평균 실행 시간이 467ms에서 36ms로 감소하였습니다.
