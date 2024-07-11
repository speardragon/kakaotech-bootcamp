# Overview

**미션 주제: RDBMS를 활용한 데이터베이스 설계 및 최적화**

학습 계획 정보는 아래와 같음

### Day 1

- [x] 문제 정의: RDBMS를 활용한 데이터베이스 설계 및 최적화의 필요성 및 목적 정의
- [x] 솔루션 도출: MySQL을 활용한 데이터베이스 설계 및 최적화 방안 도출
- [x] 설계: 데이터베이스 스키마 및 CRUD 작업 설계
- [x] MySQL 설치 및 초기 설정
- [x] 데이터베이스 및 테이블 생성
- [x] 데이터 삽입을 위한 스키마 설계 및 구현

### Day 2

- [x] CRUD 작업 구현: 데이터 생성(Create), 읽기(Read), 업데이트(Update), 삭제(Delete) 기능 구현
- [x] 인덱싱 구현: 성능 향상을 위한 인덱스 설정
- [x] 복잡한 쿼리 작성 및 최적화
- [x] 데이터 모델링: 유연한 스키마 설계 및 변경
- [x] 트랜잭션 처리 및 데이터 일관성 유지 방안 적용

### Day 3

- [x] 성능 테스트: 데이터 삽입, 조회, 업데이트, 삭제 작업의 성능 측정
- [x] 성능 분석: 테스트 결과를 바탕으로 성능 병목점 파악 및 최적화
- [x] 데이터 백업 및 복구 방안 설계 및 구현
- [x] 사용자 인터페이스(UI) 구현: 데이터베이스 조작을 위한 간단한 웹 인터페이스 구축
- [x] 보안 설정: 접근 제어 및 인증 설정

### Day 4

- [x] 코드 리뷰 및 피드백 반영
- [ ] 기능 시연 영상 제작: 주요 기능 시연 및 설명
- [x] 성능 테스트 및 분석 결과 보고서 작성
- [x] README 파일 작성: 사용 방법 및 설정 방법 명시
- [ ] 최종 결과물 제출: 소스 코드, 설정 파일, 보고서, 시연 영상, README 파일



# 🔎진행 및 완료 사항

## ❓1. 문제 정의: RDBMS를 활용한 데이터베이스 설계 및 최적화의 필요성 및 목적 정의

애플리케이션은 날이 갈수록 보다 더 많은 데이터를 수용해야 하고 그러한 수많은 데이터를 효율적으로 저장하고 검색할 수 있는 강력한 데이터베이스 시스템에 의존할 수밖에 없다. 그러나 이러한 데이터베이스 시스템 중에서도 관계형 데이터베이스 관리 시스템(RDBMS)은 **데이터의 무결성**, **일관성**, **안정성** 등을 보장하며, 다양한 비즈니스 요구사항을 충족시킬 수 있는 강력한 기능을 제공하여 많이 선택되는 데이터베이스 방식 중 하나이다.

하지만, 데이터베이스의 성능이 떨어지면 전체 시스템의 성능에도 큰 영향을 미치기 때문에 데이터베이스의 설계 및 최적화는 매우 중요한 작업이다.

RDBMS를 활용한 데이터베이스 설계 및 최적화의 필요성은 다음과 같은 것들을 고려해볼 수 있다:

1. 데이터의 효율적인 저장 및 검색:
   - 데이터베이스는 대량의 데이터를 효율적으로 저장하고, 필요한 데이터만을 빠르게 검색할 수 있어야 한다. 잘못된 설계나 최적화가 덜 된 데이터베이스는 데이터 검색 시 불필요한 자원 소비와 시간을 소모한다. 이를 방지하기 위해서는 적절한 스키마 설계와 최적화 기법을 적절히 적용해야 한다.

<img src="https://github.com/speardragon/kakaotech-bootcamp/assets/79521972/d4cd0940-6698-4689-95ca-54a2c6fd91bf" alt="image" style="zoom:50%;" />



2. **시스템 성능 향상**:

- 데이터베이스 성능이 전체 시스템 성능에 큰 영향을 미치므로, 데이터베이스의 설계 및 최적화는 시스템 성능을 극대화하는 데 필수적이다. 빠르고 효율적인 데이터베이스는 애플리케이션의 응답 시간을 단축시키고, 사용자 경험을 향상시킬 수 있다.

3. **데이터 일관성 및 무결성 보장**:

- 관계형 데이터베이스는 데이터의 일관성과 무결성을 보장하기 위한 다양한 제약 조건과 트랜잭션 관리 기능을 제공한다. 이러한 기능들을 효과적으로 활용하기 위해서는 데이터베이스의 설계가 잘 되어 있어야 하며, 데이터의 일관성과 무결성을 유지하기 위한 최적화가 필요하다.

4. **확장성**:

- 데이터베이스 시스템은 데이터가 증가함에 따라 확장 가능해야 한다. 잘 설계된 데이터베이스는 데이터의 양이 늘어나도 성능 저하 없이 운영될 수 있으며, 필요에 따라 수평적 혹은 수직적으로 확장할 수 있다. 이를 위해서는 초기 설계 단계에서부터 확장성을 고려한 데이터베이스 구조가 필요하다.

5. **복잡한 비즈니스 로직 구현**:

- 많은 애플리케이션은 복잡한 비즈니스 로직을 구현해야 한다. 이러한 로직은 데이터베이스의 스키마와 밀접하게 연관되어 있으며, 최적화된 데이터베이스 설계를 통해 효율적으로 구현될 수 있다. 이를 통해 애플리케이션의 성능을 극대화할 수 있다.

따라서, RDBMS를 활용한 데이터베이스 설계 및 최적화의 목적은 단순히 데이터를 저장하는 것에서 그치지 않고, 데이터의 보다 효율적인 관리, 시스템의 성능을 극대화, 데이터의 일관성과 무결성을 유지하는 것들을 모두 수반한다고 볼 수 있다.

이를 통해 전체 시스템의 안정성과 성능을 보장할 수 있으며 이번 미션에서는 RDBMS 중 가장 대표주자라고 할 수 있는 MySQL을 활용하여 앞서 서술한 목적들을 달성하기 위해 데이터베이스 설계 및 최적화 방안을 모색하고, 실질적인 구현을 통해 그 효과를 검증해 보는 것이 목표로 진행해볼 것이다.



## 💡2. 솔루션 도출: MySQL을 활용한 데이터베이스 설계 및 최적화 방안 도출

효율적이고 최적화된 데이터베이스 시스템을 구축하기 위해서는 MySQL을 활용한 다양한 설계 방식 혹은 최적화 방안을 고려해야 한다.

MySQL은 관계형 데이터베이스 관리 시스템(RDBMS) 중 하나로, 높은 성능과 안정성을 제공하면서도 비교적 사용이 용이하여 널리 사용되는 기술 중 하나이다. 이번 미션에서는 MySQL을 활용하여 데이터베이스 설계 및 최적화를 통해 성능을 극대화하는 방안을 도출할 것이다.



### 2-1. 데이터베이스 스키마 설계 고려 사항

- 정규화(Normalization):
  - 데이터 중복을 최소화하고 데이터 무결성을 유지하기 위해 데이터베이스를 정규화한다. 정규화 과정을 통해 데이터를 여러 테이블로 나누어 각 테이블이 하나의 주제에 집중하도록 한다.
  - 예) 고객 정보와 주문 정보를 별도의 테이블로 분리하여 관리한다.
- 비정규화(Denormalization):
  - 정규화된 테이블이 많아질 경우, 조인 연산이 빈번해져 성능 저하가 발생할 수 있다. 이러한 경우, 성능 향상을 위해 일부 데이터를 비정규화하여 중복 저장할 수 있다.
  - 예) 주문 테이블에 고객 이름을 포함시켜 조인 연산을 줄인다.
- ERD(Entity-Relationship Diagram) 작성:
  - 데이터베이스 설계의 기초 단계로, ERD를 작성하여 테이블 간의 관계를 명확히 한다. 이를 통해 데이터 구조를 시각적으로 이해하고 설계 오류를 사전에 방지할 수 있다.



### 2-2. 인덱싱(Indexing)

- 기본 인덱스 생성:
  - 자주 조회되는 컬럼에 인덱스를 생성하여 검색 속도를 향상시킨다. 기본 인덱스는 B-Tree 구조를 사용하여 데이터 접근을 빠르게 한다.
  - 예) 고객 테이블의 '고객 ID' 컬럼에 인덱스를 생성한다.
- 복합 인덱스(Composite Index):
  - 여러 컬럼을 조합한 복합 인덱스를 생성하여 보다 복잡한 쿼리의 성능을 최적화한다.
  - 예) '고객 ID'와 '주문 날짜' 컬럼을 조합한 복합 인덱스를 생성한다.
- 인덱스 유지보수:
  - 인덱스는 데이터를 삽입, 수정, 삭제할 때마다 갱신되므로, 가능한한 불필요한 인덱스를 제거하여 성능을 유지한다.



### 2-3. 쿼리 최적화(Query Optimization)

- 쿼리 작성 시 최적화 기법 적용:
  - 쿼리를 작성할 때, 쿼리 실행 계획을 분석하여 최적화 기법을 적용한다. 쿼리 실행 계획은 EXPLAIN 명령어를 통해 확인할 수 있다.
  - 예를 들어, 불필요한 조인을 제거하고, 서브쿼리를 JOIN으로 대체하는 등의 방법을 사용한다.
- 캐싱(Cache) 활용:
  - 자주 사용되는 쿼리 결과를 캐싱하여 데이터베이스 부하를 줄인다. MySQL의 Query Cache 기능을 활용하거나, 애플리케이션 레벨에서 캐싱을 구현할 수 있다.
- 준비된 쿼리(Prepared Statement) 사용:
  - 준비된 쿼리를 사용하면, 쿼리 컴파일과 최적화 과정을 한 번만 수행하고, 이후에는 컴파일된 쿼리를 재사용할 수 있어 성능이 향상된다.



### 2-4. 데이터베이스 설정 및 튜닝

- 서버 설정 최적화:
  - MySQL 서버의 설정 파일(my.cnf)을 조정하여 메모리 사용량, 캐시 크기, 연결 수 등을 최적화한다.
  - 예를 들어, InnoDB 버퍼 풀 크기, 쿼리 캐시 크기, 연결 타임아웃 등을 조정한다.
- 트랜잭션 설정:
  - 트랜잭션 격리 수준을 적절히 설정하여 데이터 일관성을 유지하면서도 성능을 최적화한다. 기본적으로 InnoDB 스토리지 엔진의 경우 REPEATABLE READ 격리 수준을 사용한다.
- 로그 관리:
  - 슬로우 쿼리 로그를 활성화하여 실행 시간이 긴 쿼리를 모니터링하고, 이를 최적화한다.
  - 예를 들어, 1초 이상의 실행 시간이 소요되는 쿼리를 로그에 기록하고 분석하여 성능을 향상시킨다.



### **2-5. 성능 모니터링 및 분석**

- 모니터링 도구 활용:
  - MySQL 자체의 성능 스키마(Performance Schema)와 외부 모니터링 도구를 활용하여 실시간으로 데이터베이스 성능을 모니터링한다.
  - 예를 들어, MySQL Workbench, Percona Monitoring and Management(PMM) 등을 사용하여 성능 지표를 분석한다.
- 주기적인 성능 테스트:
  - 주기적으로 성능 테스트를 수행하여 데이터베이스의 성능 상태를 점검하고, 필요시 최적화 작업을 수행한다.
  - 예를 들어, 데이터베이스 부하 테스트 도구를 사용하여 대량의 데이터 삽입, 조회, 수정, 삭제 작업을 시뮬레이션한다.



### **2-6. 데이터 모델링 및 스키마 변경**

- 유연한 데이터 모델링:
  - 비즈니스 요구사항 변화에 유연하게 대응할 수 있도록 데이터 모델링을 설계한다.
  - 예를 들어, 테이블 간의 관계를 유연하게 설정하고, 스키마 변경이 용이하도록 설계한다.
- 스키마 변경 시 영향 분석:
  - 스키마 변경이 필요한 경우, 변경 사항이 기존 시스템에 미치는 영향을 분석하고, 변경 작업을 신중하게 수행한다.
  - 예를 들어, 테이블 구조 변경 시 데이터 마이그레이션 계획을 세우고, 변경 작업을 단계적으로 수행한다.

이와 같은 다양한 설계 및 최적화 방안을 통해 MySQL 데이터베이스의 성능을 극대화하고, 안정적이고 효율적인 데이터 관리를 실현할 수 있다.



## 3. 설계: 데이터베이스 스키마 및 CRUD 작업 설계

이번 프로젝트에서는 간단한 블로그 시스템을 만든다고 가정하고 데이터베이스 스키마와 CRUD 작업을 설계해볼 것이다. 블로그 시스템은 다음과 같은 주요 기능을 포함한다: 

- 사용자 관리, 게시글 작성 및 조회, 댓글 작성 및 조회 ...

이러한 기능을 구현하기 위해 데이터베이스 스키마를 설계하고, 각 기능에 필요한 CRUD 작업을 정의합니다.



### **3-1. 데이터베이스 스키마 설계**

1. **사용자(User) 테이블**
   - 사용자 정보를 저장하는 테이블입니다.
   - 주요 컬럼: 사용자 ID(user_id), 사용자 이름(username), 이메일(email), 비밀번호(password), 가입일자(created_at)
2. **게시글(Post) 테이블**
   - 블로그 게시글 정보를 저장하는 테이블입니다.
   - 주요 컬럼: 게시글 ID(post_id), 제목(title), 내용(content), 작성자 ID(user_id), 작성일자(created_at), 수정일자(updated_at)
3. **댓글(Comment) 테이블**
   - 게시글에 대한 댓글 정보를 저장하는 테이블입니다.
   - 주요 컬럼: 댓글 ID(comment_id), 내용(content), 작성자 ID(user_id), 게시글 ID(post_id), 작성일자(created_at)



### **3-2. CRUD 작업 설계**

1. 사용자(User) 관리
   - Create (사용자 등록):
     - 새로운 사용자를 등록한다.
     - 요구사항: 사용자 이름, 이메일, 비밀번호를 입력받아 새로운 사용자를 생성한다. 이메일은 고유해야 하며, 비밀번호는 안전하게 저장되어야 한다.
   - Read (사용자 조회):
     - 특정 사용자의 정보를 조회한다.
     - 요구사항: 사용자 ID나 이메일을 입력받아 해당 사용자의 정보를 반환한다.
   - Update (사용자 정보 수정):
     - 기존 사용자의 정보를 수정한다.
     - 요구사항: 사용자 이름, 이메일, 비밀번호를 수정할 수 있으며, 이메일은 고유성을 유지해야 한다.
   - Delete (사용자 삭제):
     - 특정 사용자를 삭제한다.
     - 요구사항: 사용자 ID를 입력받아 해당 사용자를 삭제한다. 관련된 게시글 및 댓글도 함께 삭제된다.
2. 게시글(Post) 관리
   - Create (게시글 작성):
     - 새로운 게시글을 작성한다.
     - 요구사항: 제목, 내용, 작성자 ID를 입력받아 새로운 게시글을 생성한다. 작성자는 등록된 사용자여야 한다.
   - Read (게시글 조회):
     - 게시글 목록 및 특정 게시글의 상세 정보를 조회한다.
     - 요구사항: 모든 게시글의 목록을 조회할 수 있으며, 특정 게시글 ID를 입력받아 해당 게시글의 제목, 내용, 작성자 정보 및 작성일자를 반환한다.
   - Update (게시글 수정):
     - 기존 게시글을 수정한다.
     - 요구사항: 게시글 ID와 새로운 제목, 내용을 입력받아 해당 게시글을 수정한다. 수정일자를 갱신한다.
   - Delete (게시글 삭제):
     - 특정 게시글을 삭제한다.
     - 요구사항: 게시글 ID를 입력받아 해당 게시글을 삭제한다. 관련된 댓글도 함께 삭제된다.
3. 댓글(Comment) 관리
   - Create (댓글 작성):
     - 특정 게시글에 댓글을 작성한다.
     - 요구사항: 댓글 내용, 작성자 ID, 게시글 ID를 입력받아 새로운 댓글을 생성한다. 작성자와 게시글은 각각 등록된 사용자와 게시글이어야 한다.
   - Read (댓글 조회):
     - 특정 게시글에 대한 댓글 목록을 조회한다.
     - 요구사항: 게시글 ID를 입력받아 해당 게시글에 달린 모든 댓글의 목록을 반환한다. 각 댓글의 내용, 작성자 정보 및 작성일자를 포함한다.
   - Update (댓글 수정):
     - 기존 댓글을 수정한다.
     - 요구사항: 댓글 ID와 새로운 내용을 입력받아 해당 댓글을 수정한다. 수정일자는 갱신하지 않는다(최초 작성일만 유지).
   - Delete (댓글 삭제):
     - 특정 댓글을 삭제한다.
     - 요구사항: 댓글 ID를 입력받아 해당 댓글을 삭제한다.



## 4. MySQL 설치 및 초기 설정

이 작업에서는 MySQL 설치, 보안 설정, 초기 사용자 및 더미 데이터베이스 생성 등의 작업을 포함한다.

먼저 시작하기에 앞서 실습을 진행한 노트북 환경은 다음과 같다.

- MacBook Pro 14
- macOS: Sonoma 14.5
- 일시: 2024-07-02
- 터미널: iTerm2
- MySQL: 8.3.0



### [Step 1] 터미널을 켠다.

![image](https://github.com/speardragon/kakaotech-bootcamp/assets/79521972/78aa7740-9eca-41e7-97c9-ae5d5fb98989)



### [Step 2] brew install mysql

`brew install mysql` 명령어를 입력하여 컴퓨터에 MySQL을 설치한다.

- 만약 homebrew가 설치되어 있지 않다면? → https://brew.sh/ko/

설치를 완료하면 아래와 같은 문구들이 나온다.

![image](https://github.com/speardragon/kakaotech-bootcamp/assets/79521972/7eca5056-a721-48c7-be39-2d14926db5eb)

Caveats(주의 사항)을 보면 root 계정 비밀번호 설정 없이 mysql만 설치되어 경고를 하고 있다.

이를 해결하기 전에 먼저 다음 사진과 같이 `brew services start mysql` 명령어를 통해 mysql을 실행시킨다.

- 해당 명령어를 통해서는 시작프로세스에 등록하여 컴퓨터가 부팅 시에 mysql도 자동으로 실행해 주는 역할을 한다.

  ![image](https://github.com/speardragon/kakaotech-bootcamp/assets/79521972/aedf31ce-795a-4f72-9196-3c7e12847670)

그 다음, 앞서 안내된 명령어인 `mysql_secure_installation`을 통해 설정을 마쳐 mysql 설정을 완료할 수 있다.



- mysql_secure_installation

  해당 명령어를 통해선 비밀번호를 설정하고 초기에 세팅되어 있던 익명 유저, 더미 테이블 등을 삭제할지 등을 물어본다.

  나는 개인적으로 가이드를 따라 웬만하면 yes 선택지를 선택했지만 각자 기호에 따라 설정을 마치면 된다.

  **1. 비밀번호 복잡도 검사**

  ```
  VALIDATE PASSWORD COMPONENT can be used to test passwords
  
  and improve security. It checks the strength of password
  
  and allows the users to set only those passwords which are
  
  secure enough.
  
  Would you like to setup VALIDATE PASSWORD component?
  
  Press y|Y for Yes, any other key for No
  ```

  비밀번호 복잡도 검사를 적용할 것인지 설정하는 과정이다. 복잡도 검사를 적용하게 된다면 다음과 같은 비밀번호 조건이 붙는다.
  
  - 최소 8자리 이상의 비밀번호
  - 최소 1개의 영문자
  - 최소 1개의 특수문자
  - 최소 1개의 숫자

  간단하게 비밀번호를 설정해 두실 분들은 No로 진행하면 된다.

  이후 설정할 비밀번호 입력이 나오는데 입력해도 보이지 않는 것이 정상이다.

  ***

  **2. 익명의 사용자 삭제**

  ```
  By default, a MySQL installation has an anonymous user,
  
  allowing anyone to log into MySQL without having to have
  
  a user account created for them. This is intended only for
  
  testing, and to make the installation go a bit smoother.
  
  You should remove them before moving into a production
  
  environment.
  
  Remove anonymous users? (Press y|Y for Yes, any other key for No)
  ```

  익명의 사용자를 삭제할 것인지 물어본다.

  설치 과정에서 테스트와 설치를 좀 더 원활하게 진행하기 위해 생성되었던 계정인데 Yes로 삭제해 준다.

  ***

  **3. root 계정 원격 접속 차단**

  ```
  Normally, root should only be allowed to connect from
  
  'localhost'. This ensures that someone cannot guess at
  
  the root password from the network.
  
  Disallow root login remotely? (Press y|Y for Yes, any other key for No)
  ```

  root 계정을 원격(외부)에서의 접속을 차단할 것인지 묻는다. 일반적인 경우라면 root 계정은 원격 접속은 차단해 두는 것이 권장된다. Yes로 차단을 하여 주시면 된다. 원격작업이 필요한 경우는 root 말고 db 계정을 따로 생성하여 원격 권한을 주는 것이 가장 바람직하다.

  ***

  **4. 테스트 데이터베이스 삭제**

  ```
  By default, MySQL comes with a database named 'test' that
  
  anyone can access. This is also intended only for testing,
  
  and should be removed before moving into a production
  
  environment.
  
  Remove test database and access to it? (Press y|Y for Yes, any other key for No)
  ```

  테스트 데이터베이스를 삭제할 것인지 물어본다.

  필요 없으니 과감히 Yes로 버려줘도 된다.

  ***

  **5. 현재까지의 변경사항 즉시 적용**
  
  ```
  Reloading the privilege tables will ensure that all changes
  
  made so far will take effect immediately.
  
  Reload privilege tables now? (Press y|Y for Yes, any other key for No)
  ```
  
  Yes를 통해 변경사항을 즉시 적용시켜 준다.



### [Step 3] mysql 로그인

이제 설치가 되었으니 기본 설정이 완료된 root 계정으로 로그인을 할 수 있다.

- ```
  mysql -u root -p
  ```

  - -u 뒤에는 접속할 계정의 이름이 오며, -p 옵션은 해당 계정의 비밀번호를 이용하여 접속하겠다는 의미이다.

![image](https://github.com/speardragon/kakaotech-bootcamp/assets/79521972/cf56df3b-8c49-45ea-b289-ccc191e5ed6a)

초기에 설정한 비밀번호를 맞게 입력하면 터미널에 `mysql>` 에 커서가 깜빡이는 것을 볼 수 있고 이는 mysql 터미널에 들어왔음을 의미한다.

만약 mysql 터미널을 나오고 싶다면 `exit`을 입력하면 된다. mysql 서버 자체를 종료하고 싶다면 먼저 mysql 터미널이 종료된 상태에서 `mysql.server stop`을 입력하면 된다.

- 반대로 mysql 서버를 시작할 때는 `mysql.server start`를 입력한다.





## 5. 데이터베이스 및 테이블 생성

이제 mysql을 사용할 수 있게 되었으니 데이터베이스 및 테이블을 생성할 수 있게 되었다.



### 5-1. 데이터베이스 보기

```
SHOW DATABASES;
```

이 명령어는 현재 mysql 서버에 생성되어 있는 모든 데이터베이스들을 볼 수 있는 명령어이다.

반드시 세미콜론을 붙여주어야 명령어가 정상적으로 실행되며, 실수로 붙이지 못한 경우 그 다음 입력에서 세미콜론만 입력 후 엔터를 눌러주면 명령어를 실행할 수 있다.

<img src="https://github.com/speardragon/kakaotech-bootcamp/assets/79521972/0ec97a93-6522-42a1-896c-1a0435de2e47" alt="image" style="zoom: 33%;" />

위에 이미 생성된 데이터베이스들은 기본적으로 생성되어 있는 것들이며, 주로 설정, 계정 등과 관련된 정보를 담은 데이터베이스로 현재 mysql의 설정이나 계정 및 권한이 궁금하다면 저 중 알맞은 데이터베이스로 쿼리를 날려 정보를 확인할 수 있다.



### 5-2. 데이터베이스 생성

```
CREATE DATABASES (데이터베이스 이름)
```

이 명령어는 새로운 데이터베이스를 하나 생성하는 명령어이다.



### 5-3. 데이터베이스 사용

데이터베이스를 만들기만 했다고 바로 사용할 수 있는 것은 아니다. 내가 특정 데이터베이스를 사용하겠다고 mysql 터미널에 알린 후 쿼리를 날려야 해당 데이터베이스의 정보를 가져올 수 있다.

```
use (데이터베이스 이름)
```



### 5-4. 블로그를 위한 데이터베이스 생성 및 데이터베이스 사용

<img src="https://github.com/speardragon/kakaotech-bootcamp/assets/79521972/d0922c53-172d-4fbd-a375-0bab3fbc325d" alt="image" style="zoom:50%;" />

각 명령어를 입력해 blogDB라는 이름의 데이터베이스를 만들고(create) 사용 명령어(use)까지 입력한다.



### 5-5. 데이터베이스 테이블 생성

블로그 시스템을 위해 사용자(User), 게시글(Post), 댓글(Comment) 테이블을 생성한다.



1. **사용자(User) 테이블 생성**:

   - 사용자 정보를 저장하는 테이블을 생성한다.

     ```sql
     CREATE TABLE User (
       user_id INT AUTO_INCREMENT PRIMARY KEY,
       username VARCHAR(50) NOT NULL,
       email VARCHAR(100) NOT NULL UNIQUE,
       password VARCHAR(255) NOT NULL,
       created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
     );
     ```



2. **게시글(Post) 테이블 생성**:

- 블로그 게시글 정보를 저장하는 테이블을 생성한다.

  ```sql
  CREATE TABLE Post (
    post_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    content TEXT NOT NULL,
    user_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES User(user_id)
  );
  ```



3. **댓글(Comment) 테이블 생성:**

- 게시글에 대한 댓글 정보를 저장하는 테이블을 생성한다.

  ```sql
  CREATE TABLE Comment (
    comment_id INT AUTO_INCREMENT PRIMARY KEY,
    content TEXT NOT NULL,
    user_id INT,
    post_id INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES User(user_id),
    FOREIGN KEY (post_id) REFERENCES Post(post_id)
  );
  ```



## 6. 데이터 삽입을 위한 스키마 설계 및 구현

이제 데이터 삽입을 위해 각 테이블 별로 스키마를 세부적으로 설계하고 실제로 삽입까지 해볼 것이다.



### 6-1. 사용자(User) 테이블 스키마 설계

- **목적**: 사용자 정보를 저장하고 관리하기 위한 테이블입니다.

- 컬럼:

  - **`user_id`**: 정수형, 자동 증가, 기본 키
  - **`username`**: 문자열, 사용자 이름
  - **`email`**: 문자열, 고유, 이메일 주소
  - **`password`**: 문자열, 암호화된 비밀번호
  - **`created_at`**: 타임스탬프, 사용자가 가입한 날짜와 시간



### 6-2. 게시글(Post) 테이블 스키마 설계

- **목적**: 블로그 게시글 정보를 저장하고 관리하기 위한 테이블입니다.

- 컬럼:

  - **`post_id`**: 정수형, 자동 증가, 기본 키
  - **`title`**: 문자열, 게시글 제목
  - **`content`**: 텍스트, 게시글 내용
  - **`user_id`**: 정수형, 작성자 ID, 외래 키 (User 테이블 참조)
  - **`created_at`**: 타임스탬프, 게시글 작성 날짜와 시간
  - **`updated_at`**: 타임스탬프, 게시글 수정 날짜와 시간



### 6-3. 댓글(Comment) 테이블 스키마 설계

- **목적**: 게시글에 대한 댓글 정보를 저장하고 관리하기 위한 테이블입니다.

- 컬럼:

  - **`comment_id`**: 정수형, 자동 증가, 기본 키
  - **`content`**: 텍스트, 댓글 내용
  - **`user_id`**: 정수형, 작성자 ID, 외래 키 (User 테이블 참조)
  - **`post_id`**: 정수형, 게시글 ID, 외래 키 (Post 테이블 참조)
  - **`created_at`**: 타임스탬프, 댓글 작성 날짜와 시간



### 6-4. 데이터베이스 ERD 설계

<img width="952" alt="image" src="https://github.com/kakaotech-bootcamp-11/personal_mission/assets/79521972/fad8da0d-2c96-4084-bb4b-cb215659fde1">



### 6-5. 데이터 삽입 스키마 구현

이제 각 테이블에 데이터를 삽입하는 SQL 스크립트를 작성하여 데이터베이스에 데이터를 삽입합니다.

**1. 사용자(User) 데이터 삽입**

```sql
-- 사용자 데이터 삽입
INSERT INTO User (username, email, password) VALUES
('alice', 'alice@example.com', 'password123'),
('bob', 'bob@example.com', 'password456'),
('charlie', 'charlie@example.com', 'password789');
```



**2. 게시글(Post) 데이터 삽입**

```sql
-- 게시글 데이터 삽입
INSERT INTO Post (title, content, user_id) VALUES
('First Post', 'This is the content of the first post', 1),
('Second Post', 'This is the content of the second post', 2),
('Third Post', 'This is the content of the third post', 1);
```



**3. 댓글(Comment) 데이터 삽입**

```sql
-- 댓글 데이터 삽입
INSERT INTO Comment (content, user_id, post_id) VALUES
('This is a comment on the first post', 2, 1),
('Another comment on the first post', 3, 1),
('Comment on the second post', 1, 2);
```



### 6-6. 데이터 확인

데이터가 제대로 삽입되었는지 확인하기 위해 각 테이블의 데이터를 조회한다.

```sql
-- 사용자 데이터 조회
SELECT * FROM User;

-- 게시글 데이터 조회
SELECT * FROM Post;

-- 댓글 데이터 조회
SELECT * FROM Comment;
```

![image](https://github.com/speardragon/kakaotech-bootcamp/assets/79521972/127635f3-cb03-45c2-ba39-fb728515d3d5)

이 과정을 통해 데이터 삽입, 조회, 수정, 삭제와 같은 CRUD 작업을 수행할 수 있는 기반을 마련하였다.



## 7. CRUD 작업 구현: 데이터 생성(Create), 읽기(Read), 업데이트(Update), 삭제(Delete)

이 단계에서는 블로그 시스템의 사용자(User), 게시글(Post), 댓글(Comment) 테이블에 대해 데이터 생성(Create), 읽기(Read), 업데이트(Update), 삭제(Delete) 작업을 구현할 것이다.



### 7-1. 사용자(User) 관리

**Create (사용자 등록)**

- **요구사항**: 새로운 사용자를 등록한다. 사용자 이름, 이메일, 비밀번호를 입력받아 새로운 사용자를 생성한다. 이메일은 고유해야 하며, 비밀번호는 안전하게 저장되어야 한다.

- SQL 쿼리:

  ```sql
  INSERT INTO User (username, email, password) VALUES ('alice', 'alice@example.com', 'password123');
  ```



**Read (사용자 조회)**

- **요구사항**: 특정 사용자의 정보를 조회한다. 사용자 ID나 이메일을 입력받아 해당 사용자의 정보를 반환한다.

- SQL 쿼리:

  ```sql
  -- 사용자 ID로 조회
  SELECT * FROM User WHERE user_id = 1;
  
  -- 이메일로 조회
  SELECT * FROM User WHERE email = 'alice@example.com';
  ```



**Update (사용자 정보 수정)**

- **요구사항**: 기존 사용자의 정보를 수정한다. 사용자 이름, 이메일, 비밀번호를 수정할 수 있으며, 이메일은 고유성을 유지해야 한다.

- SQL 쿼리:

  ```sql
  UPDATE User SET username = 'Alice Wonderland', email = 'alice.w@example.com', password = 'newpassword123' WHERE user_id = 1;
  ```



**Delete (사용자 삭제)**

- **요구사항**: 특정 사용자를 삭제한다. 사용자 ID를 입력받아 해당 사용자를 삭제한다. 관련된 게시글 및 댓글도 함께 삭제된다.

- SQL 쿼리:

  ```sql
  DELETE FROM User WHERE user_id = 1;
  ```



### 7-2. 게시글(Post) 관리

**Create (게시글 작성)**

- **요구사항**: 새로운 게시글을 작성한다. 제목, 내용, 작성자 ID를 입력받아 새로운 게시글을 생성한다. 작성자는 등록된 사용자여야 한다.

- SQL 쿼리:

  ```sql
  INSERT INTO Post (title, content, user_id) VALUES ('First Post', 'This is the content of the first post', 1);
  ```



**Read (게시글 조회)**

- **요구사항**: 게시글 목록 및 특정 게시글의 상세 정보를 조회한다. 모든 게시글의 목록을 조회할 수 있으며, 특정 게시글 ID를 입력받아 해당 게시글의 제목, 내용, 작성자 정보 및 작성일자를 반환한다.

- SQL 쿼리:

  ```sql
  -- 모든 게시글 조회
  SELECT * FROM Post;
  
  -- 특정 게시글 조회
  SELECT * FROM Post WHERE post_id = 1;
  ```



모델을 재학습 할 필요가



**Update (게시글 수정)**

- **요구사항**: 기존 게시글을 수정한다. 게시글 ID와 새로운 제목, 내용을 입력받아 해당 게시글을 수정한다. 수정일자를 갱신한다.

- SQL 쿼리:

  ```sql
  UPDATE Post SET title = 'Updated First Post', content = 'This is the updated content of the first post' WHERE post_id = 1;
  ```



**Delete (게시글 삭제)**

- **요구사항**: 특정 게시글을 삭제한다. 게시글 ID를 입력받아 해당 게시글을 삭제한다. 관련된 댓글도 함께 삭제된다. 관리자거나 게시글을 올린 사용자만 삭제할 수 있다.

- SQL 쿼리:

  ```sql
  DELETE FROM Post WHERE post_id = 1;
  ```



### 7-3. 댓글(Comment) 관리

**Create (댓글 작성)**

- **요구사항**: 특정 게시글에 댓글을 작성한다. 댓글 내용, 작성자 ID, 게시글 ID를 입력받아 새로운 댓글을 생성한다. 작성자와 게시글은 각각 등록된 사용자와 게시글이어야 한다.

- SQL 쿼리:

  ```sql
  INSERT INTO Comment (content, user_id, post_id) VALUES ('This is a comment on the first post', 2, 1);
  ```



**Read (댓글 조회)**

- **요구사항**: 특정 게시글에 대한 댓글 목록을 조회한다. 게시글 ID를 입력받아 해당 게시글에 달린 모든 댓글의 목록을 반환한다. 각 댓글의 내용, 작성자 정보 및 작성일자를 포함한다.

- SQL 쿼리:

  ```sql
  SELECT * FROM Comment WHERE post_id = 1;
  ```



**Update (댓글 수정)**

- **요구사항**: 기존 댓글을 수정한다. 댓글 ID와 새로운 내용을 입력받아 해당 댓글을 수정한다. 수정일자는 갱신하지 않는다(최초 작성일만 유지).

- SQL 쿼리:

  ```sql
  UPDATE Comment SET content = 'This is the updated comment' WHERE comment_id = 1;
  ```



**Delete (댓글 삭제)**

- **요구사항**: 특정 댓글을 삭제한다. 댓글 ID를 입력받아 해당 댓글을 삭제한다. 댓글을 단 사용자거나 관리자만 지울 수 있다.

- SQL 쿼리:

  ```sql
  DELETE FROM Comment WHERE comment_id = 1;
  ```





## 8. 인덱싱 구현: 성능 향상을 위한 인덱스 설정

인덱스는 데이터베이스 성능 향상을 위해 사용되는 중요한 도구이다. 

인덱스를 쓰는 이유는 조건을 만족하는 튜플을 빠르게 조회하기 위함이다.

인덱스는 테이블에서 데이터를 빠르게 검색할 수 있도록 돕는 자료 구조이기 때문에 인덱스를 적절히 사용하면 데이터 검색 속도를 크게 향상시킬 수 있지만, 그렇다고 인덱스를 과도하게 사용하면 데이터 삽입, 삭제, 업데이트 성능이 저하될 수도 있다. 



### 8-1. 인덱스 개요

- **기본 인덱스**: 기본 키(primary key)는 자동으로 인덱스가 생성되며, 유니크 키(unique key)도 인덱스가 생성된다.
- **보조 인덱스**: 검색 속도를 향상시키기 위해 추가로 생성하는 인덱스이다.
- **복합 인덱스**: 두 개 이상의 컬럼을 조합한 인덱스입니다.



### 8-2. 인덱싱 설계

인덱스를 설계할 때는 테이블에서 자주 사용되는 쿼리와 검색 조건을 분석하여 효율적인 인덱스를 설정해야 한다. 블로그 시스템에서 다음과 같은 인덱스를 고려해볼 수 있다:

- User 테이블
  - `email`: 사용자 이메일을 자주 검색하므로 인덱스를 설정한다.
- Post 테이블
  - `user_id`: 작성자별로 게시글을 검색할 때 유용하다.
  - `title`: 게시글 제목을 자주 검색하는 경우에 유용하다.
- Comment 테이블
  - `user_id`: 사용자별로 댓글을 검색할 때 유용하다.
  - `post_id`: 게시글별로 댓글을 검색할 때 유용하다.



### 8-3. 인덱스 설정 SQL

각 테이블에 대한 인덱스를 설정하는 SQL 쿼리는 다음과 같다:

```sql
-- 데이터베이스 사용
USE blogDB;

-- User 테이블에 인덱스 설정
CREATE INDEX idx_user_email ON User (email);

-- Post 테이블에 인덱스 설정
CREATE INDEX idx_post_user_id ON Post (user_id);
CREATE INDEX idx_post_title ON Post (title);

-- Comment 테이블에 인덱스 설정
CREATE INDEX idx_comment_user_id ON Comment (user_id);
CREATE INDEX idx_comment_post_id ON Comment (post_id);
```



#### 인덱스 설계 원칙

- **검색 속도 향상**: 자주 검색되는 컬럼에 인덱스를 설정하여 데이터 검색 속도를 향상시킵니다.
- **데이터 무결성 유지**: 기본 키와 유니크 키는 자동으로 인덱스가 생성되며, 데이터의 무결성을 유지합니다.
- **적절한 인덱스 사용**: 과도한 인덱스 사용을 지양하고, 데이터 삽입, 삭제, 업데이트 성능 저하를 방지합니다.



#### 인덱스 설정

1. **User 테이블 인덱스 설정**

   - **목적**: 사용자 이메일로 빠르게 검색하기 위해 인덱스를 설정합니다.

   - 쿼리:

     ```sql
     CREATE INDEX idx_user_email ON User (email);
     ```

2. **Post 테이블 인덱스 설정**

   - **목적**: 작성자별로 게시글을 검색하고, 게시글 제목으로 검색할 때 성능을 향상시키기 위해 인덱스를 설정합니다.

   - 쿼리:

     ```sql
     CREATE INDEX idx_post_user_id ON Post (user_id);
     CREATE INDEX idx_post_title ON Post (title);
     ```

3. **Comment 테이블 인덱스 설정**

   - **목적**: 사용자별로 댓글을 검색하고, 게시글별로 댓글을 검색할 때 성능을 향상시키기 위해 인덱스를 설정합니다.

   - 쿼리:

     ```sql
     CREATE INDEX idx_comment_user_id ON Comment (user_id);
     CREATE INDEX idx_comment_post_id ON Comment (post_id);
     ```



### 8-4. 인덱스 적용

#### 1. DataGrip에서 데이터베이스 연결

1. **DataGrip 실행**:
   - DataGrip을 실행한다.
2. **데이터베이스 연결 설정**:
   - 왼쪽 상단의 `Database` 탭을 클릭한다.
   - `+` 버튼을 클릭하고, `Data Source` > `MySQL`을 선택한다.
   - `Host`, `Port`, `User`, `Password` 등을 입력하여 MySQL 데이터베이스에 연결한다.
   - 연결 테스트(Test Connection) 버튼을 눌러 연결이 성공적으로 이루어졌는지 확인한다.
   - `OK` 버튼을 눌러 연결을 저장한다.



#### 2. SQL 콘솔 열기

연결된 데이터베이스를 오른쪽 클릭하고, `Jump to Data Source` > `Console` > `New Console`을 선택하여 SQL 콘솔을 엽니다.



#### 3. 인덱스 설정 SQL 실행

아래 SQL 쿼리를 SQL 콘솔에 입력하고 실행하여 인덱스를 설정한다.

```sql
-- 데이터베이스 사용
USE blogDB;

-- User 테이블에 인덱스 설정
CREATE INDEX idx_user_email ON User (email);

-- Post 테이블에 인덱스 설정
CREATE INDEX idx_post_user_id ON Post (user_id);
CREATE INDEX idx_post_title ON Post (title);

-- Comment 테이블에 인덱스 설정
CREATE INDEX idx_comment_user_id ON Comment (user_id);
CREATE INDEX idx_comment_post_id ON Comment (post_id);
```



#### 4. SQL 쿼리 실행

1. **SQL 쿼리 입력**:
   - 위의 SQL 쿼리를 SQL 콘솔 창에 복사하여 붙여넣는다.
2. **쿼리 실행**:
   - 쿼리를 선택한 상태에서 실행버튼을 눌러 해당 쿼리를 실행한다.
   - 쿼리가 성공적으로 실행되면, 아래쪽의 `Output` 창에서 결과를 확인할 수 있다.



#### 5. 인덱스 확인

- 데이터베이스 구조를 탐색하여 `User`, `Post`, `Comment` 테이블을 찾아본다.
- 각 테이블을 클릭하여 테이블 구조를 확인하고, 설정된 인덱스를 확인한다.



혹은 인덱스를 확인할 수 있는 쿼리를 통해 각 테이블마다의 상세 정보를 확인하여 Index 설정 관련 정보를 볼 수 있다.

```sql
SELECT
    TABLE_NAME,
    INDEX_NAME,
    COLUMN_NAME,
    SEQ_IN_INDEX,
    NON_UNIQUE,
    INDEX_TYPE
FROM
    information_schema.STATISTICS
WHERE
    TABLE_SCHEMA = 'blogDB'
ORDER BY
    TABLE_NAME, INDEX_NAME, SEQ_IN_INDEX;
```



<img width="1020" alt="image" src="https://github.com/speardragon/kakaotech-bootcamp/assets/79521972/86663361-10fe-4f80-a1e7-1123d2843157">





## 9. 복잡한 쿼리 작성 및 최적화

### 9-1. 복잡한 쿼리

#### 요구 사항 정리

1. 작성자 이름과 각 게시글의 제목 및 내용 조회
2. 가장 많은 게시글을 작성한 사용자의 정보 조회
3. 작성자별 게시글 수 조회
4. 게시글 작성 날짜별로 정렬하여 조회
5. 각 사용자별로 작성한 게시글 수와 댓글의 수를 계산하고, 게시글과 댓글의 수가 모두 상위 10%에 속하는 사용자를 조회



#### 작성자 이름과 각 게시글의 제목 및 내용 조회

**쿼리 목표**: 여러 테이블 간의 관계를 이용하여 데이터를 결합하는 JOIN 연산을 사용해보기

**사용 예시**: 게시글 리스트에서 게시글을 표시할 때 작성자 이름, 제목, 본문 내용(요약)을 표시한다.

```sql
SELECT
    User.username,
    Post.title,
    Post.content
FROM
    Post
JOIN
    User ON Post.user_id = User.user_id;
```

<img width="673" alt="image" src="https://github.com/kakaotech-bootcamp-11/personal_mission/assets/79521972/b4793709-fb03-4c5b-ba3f-4904d3ecfc02">



#### 가장 많은 게시글을 작성한 사용자의 정보 조회

**쿼리 목표**: 데이터 필터링 및 집계를 위해 서브쿼리를 활용해보기

**사용 예시**: 배움 일기를 가장 많이 작성한 사용자를 표시한다.

```sql
SELECT
    User.user_id,
    User.username,
    User.email
FROM
    User
WHERE
    User.user_id = (
        SELECT
            Post.user_id
        FROM
            Post
        GROUP BY
            Post.user_id
        ORDER BY
            COUNT(Post.post_id) DESC
        LIMIT 1
    );
```

<img width="484" alt="image" src="https://github.com/kakaotech-bootcamp-11/personal_mission/assets/79521972/5fa6bad5-b4e3-4933-ab42-8c0506a67924">



#### 작성자별 게시글 수 조회

**쿼리 목표**: 그룹화 및 집계 함수를 사용하여 데이터를 요약해보기

**사용 예시**: 사용자별로 아이스브레이킹 카테고리에 작성한 글 수를 확인한다.

```sql
SELECT
    User.username,
    COUNT(Post.post_id) AS post_count
FROM
    Post
JOIN
    User ON Post.user_id = User.user_id
GROUP BY
    User.username;
```

<img width="332" alt="image" src="https://github.com/kakaotech-bootcamp-11/personal_mission/assets/79521972/bd5e7ec8-8591-4c83-918f-285b901e731f">



#### 게시글 작성 날짜별로 정렬하여 조회

**쿼리 목표**: 데이터를 정렬하여 출력해보기

**사용 예시**: 공지사항을 가장 최신 것이 앞에 오도록 표시한다.

```sql
SELECT
    title,
    content,
    created_at
FROM
    Post
ORDER BY
    created_at DESC;
```

<img width="733" alt="image" src="https://github.com/kakaotech-bootcamp-11/personal_mission/assets/79521972/57d8d0ab-c5cf-4034-9185-b3043b12e4cf">



#### 각 사용자별로 작성한 게시글 수와 댓글의 수를 계산하고, 게시글과 댓글의 수가 모두 상위 3명에 속하는 사용자들을 조회

쿼리 목표: 모든 쿼리를 활용하여 매우 복잡한 데이터를 만들어 출력해보기

사용 예시: 참여도가 높은 상위 3명의 인원을 랭킹에 표시한다.

```sql
WITH UserPostCounts AS (
    SELECT
        P.user_id,
        COUNT(P.post_id) AS post_count
    FROM
        Post P
    GROUP BY
        P.user_id
),
UserCommentCounts AS (
    SELECT
        C.user_id,
        COUNT(C.comment_id) AS comment_count
    FROM
        Comment C
    GROUP BY
        C.user_id
),
Top3PostUsers AS (
    SELECT
        user_id,
        post_count,
        ROW_NUMBER() OVER (ORDER BY post_count DESC) AS post_rank
    FROM
        UserPostCounts
    WHERE
        post_count > 0
    ORDER BY
        post_count DESC
    LIMIT 3
),
Top3CommentUsers AS (
    SELECT
        user_id,
        comment_count,
        ROW_NUMBER() OVER (ORDER BY comment_count DESC) AS comment_rank
    FROM
        UserCommentCounts
    WHERE
        comment_count > 0
    ORDER BY
        comment_count DESC
    LIMIT 3
),
TopUsers AS (
    SELECT
        P.user_id
    FROM
        Top3PostUsers P
    JOIN
        Top3CommentUsers C
    ON
        P.user_id = C.user_id
)
SELECT
    U.user_id,
    U.username,
    U.email
FROM
    User U
JOIN
    TopUsers T
ON
    U.user_id = T.user_id;
```



## 9-2. 쿼리 최적화

### 쿼리 최적화 방식 고안

1. 인덱스 활용
2. 쿼리 리팩토링
3. 캐싱



### 인덱스 활용

인덱스 확인

```sql
SHOW INDEX FROM Post;
```



필요한 인덱스 추가

```sql
CREATE INDEX idx_post_user_id ON Post (user_id);
CREATE INDEX idx_user_email ON User (email);
```





### 쿼리 리팩토링

- 비효율적인 서브쿼리 제거
  - 서브 쿼리를 JOIN으로 대체하여 성능을 향상시킬 수 있다.



- 가장 많은 게시글을 작성한 사용자의 정보 조회

```sql
-- Before
SELECT
    User.user_id,
    User.username,
    User.email
FROM
    User
WHERE
    User.user_id = (
        SELECT
            Post.user_id
        FROM
            Post
        GROUP BY
            Post.user_id
        ORDER BY
            COUNT(Post.post_id) DESC
        LIMIT 1
    );
```



```sql
-- After
SELECT
    User.user_id,
    User.username,
    User.email
FROM
    User
JOIN
    (
        SELECT
            Post.user_id,
            COUNT(Post.post_id) AS post_count
        FROM
            Post
        GROUP BY
            Post.user_id
        ORDER BY
            post_count DESC
        LIMIT 1
    ) AS TopUser ON User.user_id = TopUser.user_id;
```



### 캐싱

Query Cache 설정

```sql
SET GLOBAL query_cache_size = 1048576; -- 1MB
SET GLOBAL query_cache_type = ON;
```



## 10. 데이터 모델링: 유연한 스키마 설계 및 변경

### 유연한 스키마란?

유연한 데이터베이스 스키마 설계는 시스템의 요구사항이 변화하더라도 쉽게 확장 및 변경할 수 있도록 하는 것을 목표로 한다. 이는 데이터 무결성을 유지하면서도 효율적인 데이터 관리를 가능하게 한다.



#### 1. 유연한 스키마 설계 원칙

- 정규화(Normalization)
  - 데이터 중복을 최소화하고, 데이터 무결성을 유지하기 위해 테이블을 정규화한다.
  - ex) 1NF, 2NF, 3NF
- 비정규화 (Denormalization)
  - 성능 최적화를 위해 필요에 따라 비정규화를 적용한다. 이는 데이터 중복을 허용하여 읽기 성능을 향상 시킬 수 있다.
  - 예: 자주 조회되는 데이터를 조인 없이 조회할 수 있도록 테이블에 중복 저장
- 확장성(Scalability)
  - 데이터의 증가를 고려하여 테이블을 설계한다.
  - 파티셔닝, 샤딩
- 유연성(Flexibility)
  - 새로운 요구사항을 쉽게 반영할 수 있도록 테이블 설계를 유연하게 유지한다.
  - 예: JSON 컬럼 사용, 별도의 속성 테이블 사용
- 참조 무결성 (Referential Integrity)
  - 데이터 간의 관계를 유지하기 위해 외래 키를 사용한다.
  - 예: 외래 키 제약 조건을 통해 부모-자식 관계를 보장



#### 2. 유연한 스키마 설계

##### 2.1. 사용자(User) 테이블

- 설계:
  - `user_id`, `username`, `email`, `password`, `created_at` 컬럼을 포함합니다.
  - `email` 컬럼에 고유 제약 조건을 설정하여 중복을 방지합니다.
    - 같은 이메일을 가진 사용자는 없어야 하기 때문

```sql
CREATE TABLE User (
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```



##### 2.2. 게시글(Post) 테이블

- 설계:
  - `post_id`, `title`, `content`, `user_id`, `created_at`, `updated_at` 컬럼을 포함합니다.
  - `user_id` 컬럼에 외래 키 제약 조건을 설정하여 참조 무결성을 유지합니다.
    - user_id는 User 테이블의 주키 속성임

```sql
CREATE TABLE Post (
  post_id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  content TEXT NOT NULL,
  user_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES User(user_id)
);
```



##### 2.3. 댓글(Comment) 테이블

- 설계:
  - `comment_id`, `content`, `user_id`, `post_id`, `created_at` 컬럼을 포함합니다.
  - `user_id`와 `post_id` 컬럼에 외래 키 제약 조건을 설정하여 참조 무결성을 유지합니다.

```sql
CREATE TABLE Comment (
  comment_id INT AUTO_INCREMENT PRIMARY KEY,
  content TEXT NOT NULL,
  user_id INT,
  post_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES User(user_id),
  FOREIGN KEY (post_id) REFERENCES Post(post_id)
);
```



#### 3. 스키마 변경 방안

유연한 스키마 설계의 핵심 중 하나는 시스템 요구사항 변화에 따라 스키마를 쉽게 변경할 수 있는 것입니다.



##### 3.1. 컬럼 추가

새로운 기능을 추가하기 위해 테이블에 컬럼을 추가합니다.

**예제**: 사용자 테이블에 `last_login` 컬럼 추가

```sql
ALTER TABLE User ADD COLUMN last_login TIMESTAMP;
```



##### 3.2. 컬럼 삭제

불필요한 데이터를 제거하기 위해 테이블에서 컬럼을 삭제합니다.

**예제**: 게시글 테이블에서 `updated_at` 컬럼 삭제

```sql
ALTER TABLE Post DROP COLUMN updated_at;
```



##### 3.3. 컬럼 변경

컬럼의 데이터 타입이나 제약 조건을 변경합니다.

**예제**: 댓글 테이블의 `content` 컬럼 크기 변경

```sql
ALTER TABLE Comment MODIFY COLUMN content VARCHAR(500);
```



##### 3.4. 인덱스 추가 및 제거

인덱스를 추가하거나 제거하여 성능을 최적화합니다.

**예제**: 게시글 테이블에 `created_at` 컬럼에 인덱스 추가

```sql
CREATE INDEX idx_post_created_at ON Post (created_at);
```

**예제**: 게시글 테이블에서 `title` 컬럼 인덱스 제거

```sql
DROP INDEX idx_post_title ON Post;
```



#### 4. 참조 무결성을 위한 수정

```sql
CREATE TABLE User (
  user_id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(50) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE Post (
  post_id INT AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  content TEXT NOT NULL,
  user_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES User(user_id) ON DELETE CASCADE
);

CREATE TABLE Comment (
  comment_id INT AUTO_INCREMENT PRIMARY KEY,
  content TEXT NOT NULL,
  user_id INT,
  post_id INT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES User(user_id) ON DELETE CASCADE,
  FOREIGN KEY (post_id) REFERENCES Post(post_id) ON DELETE CASCADE
);
```

물론 기존의 테이블에서도 외래 키 제약 조건을 통해 참조 무결성을 유지하고 있었지만, 삭제 시 동작을 명확히 정의하는 것은 꽤 중요하다.



CASCADE로써 얻을 수 있는 이득은 다음과 같은 것들이 있다.

1. **데이터 무결성 유지**

참조 무결성을 유지하지 않으면 데이터베이스 내에 orphan(고아) 레코드(참조하는 외래 키가 없는 레코드)가 생길 수 있다. 이러한 orphan 레코드는 데이터 일관성을 해치고 예기치 않은 오류를 발생시킬 수 있다. 예를 들어, 삭제된 사용자가 작성한 포스트나 댓글이 남아 있는 경우, 이들은 더 이상 유효하지 않은 데이터를 참조하게 된다.



2. **예기치 않은 오류 방지**

삭제 시 동작을 명확히 정의하지 않으면, 애플리케이션에서 데이터베이스를 조작할 때 예기치 않은 오류가 발생할 수 있는데 예를 들어, 사용자가 삭제된 후에도 해당 사용자의 포스트나 댓글을 조회하려고 하면 오류가 발생할 수 있다.



3. **데이터베이스 성능 최적화**

불필요한 데이터가 남아 있으면 데이터베이스의 성능이 저하될 수 있다. 예를 들어, 사용자가 삭제된 후에도 해당 사용자가 작성한 포스트나 댓글이 남아 있으면, 이 데이터들이 계속해서 쿼리 성능에 영향을 미칠 수 있다. 삭제 시 연쇄적으로 관련 데이터를 함께 삭제함으로써, 데이터베이스의 성능을 최적화할 수 있는 것이다.



4. **유지보수 용이성**

삭제 시 동작을 명확히 정의하면 데이터베이스 유지보수가 용이해진다. 데이터베이스 구조와 동작이 명확하면, 유지보수 작업 시 일관성 있게 데이터를 처리할 수 있다. 이는 특히 대규모 데이터베이스 시스템에서 중요한 요소이다.



5. **사용자 경험 개선**

데이터베이스의 삭제 동작이 명확히 정의되어 있으면, 애플리케이션의 사용자 경험도 개선됩니다. 예를 들어, 사용자가 계정을 삭제할 때, 해당 사용자가 작성한 모든 포스트와 댓글이 자동으로 삭제되면, 사용자 입장에서 불필요한 데이터가 남아 있지 않다는 확신을 가질 수 있습니다.



## 11. 트랜잭션 처리 및 데이터 일관성 유지 방안 적용

### 11-1. 트랜잭션이란?

트랜잭션은 데이터 무결성을 지킴으로써 데이터베이스를 일관된 상태 (consistent state)을 유지하기 위한 핵심 개념이다.



예를 들어, 하나의 쿼리 안에서 데이터의 쓰기(Write) 혹은 업데이트(Update), 삭제(Delete) 작업이 여러 번 일어나야 하는 상황에서 오류가 발생한 작업 이전에 이미 진행된 작업의 내용을 다시 쿼리를 실행하기 전 상태로 되돌려야 데이터가 안정화될 수 있다.



### 11-2. 트랜잭션의 ACID 특성

- Atomicity(원자성): 트랜잭션의 모든 작업이 성공적으로 완료되거나, 하나라도 실패하면 모든 작업이 취소됩니다.
- Consistency(일관성): 트랜잭션이 완료되면 데이터베이스는 일관된 상태를 유지합니다.
- Isolation(격리성): 트랜잭션 간의 독립성을 보장하여 동시에 실행되는 트랜잭션이 서로 영향을 미치지 않도록 합니다.
- Durabilit(지속성): 트랜잭션이 커밋되면 해당 작업의 결과는 영구적으로 저장됩니다.



### 11-3. 트랜잭션 명령어

- `START TRANSACTION` : 트랜잭션을 시작합니다.
- `COMMIT`: 트랜잭션을 커밋하여 모든 변경 사항을 영구적으로 반영합니다.
- `ROLLBACK`: 트랜잭션을 롤백하여 모든 변경 사항을 취소합니다.



### 11-4. 트랜잭션 적용

- 게시글과 댓글을 동시에 추가하는 트랜잭션

```sql
START TRANSACTION;

-- 게시글 추가
INSERT INTO Post (title, content, user_id) VALUES ('New Post', 'Content of the new post', 1);

-- 댓글 추가
INSERT INTO Comment (content, user_id, post_id) VALUES ('This is a comment', 2, LAST_INSERT_ID());

COMMIT;
```



### 11-5. 데이터 일관성 유지 방안

#### 외래 키 제약

외래 키 제약을 사용하여 테이블 간의 참조 무결성을 유지한다.



Post 테이블의 user_id와 Comment 테이블의 user_id, post_id에 외래 키 제약 설정

```sql
ALTER TABLE Post ADD CONSTRAINT fk_post_user FOREIGN KEY (user_id) REFERENCES User(user_id);

ALTER TABLE Comment ADD CONSTRAINT fk_comment_user FOREIGN KEY (user_id) REFERENCES User(user_id);
ALTER TABLE Comment ADD CONSTRAINT fk_comment_post FOREIGN KEY (post_id) REFERENCES Post(post_id);
```



#### 트랜잭션 격리 수준 (Transaction Isolation Levels)

트랜잭션 간의 격리 수준을 설정하여 동시에 실행되는 트랜잭션이 서로 영향을 미치지 않도록 한다. MySQL에서는 다음과 같은 격리 수준을 제공한다.

- **READ UNCOMMITTED**: 다른 트랜잭션에서 아직 커밋되지 않은 변경 사항도 읽을 수 있다.
- **READ COMMITTED**: 다른 트랜잭션에서 커밋된 변경 사항만 읽을 수 있다.
- **REPEATABLE READ**: 트랜잭션이 시작된 시점의 데이터 일관성을 보장한다.
- **SERIALIZABLE**: 트랜잭션을 직렬화하여 동시 실행을 방지한다.



```sql
SET GLOBAL TRANSACTION ISOLATION LEVEL REPEATABLE READ;
```



#### 데이터 무결성 제약(Integrity Constraints)

데이터 무결성 제약을 사용하여 데이터의 정확성과 일관성을 유지합니다. 주요 제약 조건은 다음과 같다:

- **NOT NULL**: 컬럼에 NULL 값을 허용하지 않는다.
- **UNIQUE**: 컬럼 값이 고유해야 한다
- **CHECK**: 컬럼 값이 특정 조건을 만족해야 한다.
- **DEFAULT**: 컬럼의 기본값을 설정한다.



- User 테이블의 email 컬럼에 NOT NULL 및 UNIQUE 제약 설정

```sql
ALTER TABLE User MODIFY COLUMN email VARCHAR(100) NOT NULL UNIQUE;
```



### 11-6. 트랜잭션 처리 예제

목표: 블로그 시스템에서 트랜잭션을 사용하여 데이터 일관성을 유지하는 예제

시나리오: 사용자가 게시글을 작성하고, 동시에 여러 댓글을 추가하는 경우를 트랜잭션으로 처리한다.

```sql
START TRANSACTION;

-- 게시글 추가
INSERT INTO Post (title, content, user_id) VALUES ('Complex Transaction Post', 'Content for complex transaction post', 1);

-- 마지막으로 삽입된 게시글 ID 가져오기
SET @post_id = LAST_INSERT_ID();

-- 댓글 추가
INSERT INTO Comment (content, user_id, post_id) VALUES ('First comment', 2, @post_id);
INSERT INTO Comment (content, user_id, post_id) VALUES ('Second comment', 3, @post_id);
INSERT INTO Comment (content, user_id, post_id) VALUES ('Third comment', 2, @post_id);

COMMIT;
```



만약 트랜잭션 내에서 오류가 발생하면, 모든 작업을 롤백하여 데이터 일관성을 유지할 수 있다.

**예제(롤백)**:

```sql
START TRANSACTION;

-- 게시글 추가
INSERT INTO Post (title, content, user_id) VALUES ('Transaction with Error', 'Content for transaction with error', 1);

-- 마지막으로 삽입된 게시글 ID 가져오기
SET @post_id = LAST_INSERT_ID();

-- 댓글 추가 (여기서 의도적으로 오류 발생, user_id = 999는 존재하지 않는 사용자 ID)
INSERT INTO Comment (content, user_id, post_id) VALUES ('First comment', 2, @post_id);
INSERT INTO Comment (content, user_id, post_id) VALUES ('Second comment', 999, @post_id); -- 오류 발생
INSERT INTO Comment (content, user_id, post_id) VALUES ('Third comment', 2, @post_id);

-- 오류 발생 시 롤백
ROLLBACK;
```



<img width="1023" alt="image" src="https://github.com/speardragon/kakaotech-bootcamp/assets/79521972/89caadb6-ebd7-420c-875a-4231ac04765e">

<img width="977" alt="image" src="https://github.com/speardragon/kakaotech-bootcamp/assets/79521972/e54192f7-062f-414d-8333-c6578f983c9d">

위 이미지를 보면 첫번째 쿼리인 'First comment'를 삽입하는 연산은 정상적으로 진행이 되었지만 그 다음 쿼리는 user_id가 999인 사용자를 찾지 못해 오류가 발생해 트랜잭션이 종료되고 앞서 진행한 삽입 쿼리를 롤백하여 원래의 상태로 되돌린 모습을 볼 수 있다.





## 12. 성능 테스트: 데이터 삽입, 조회, 업데이트, 삭제 작업의 성능 측정

### 12-1. 테스트 목적

성능 테스트는 데이터베이스의 주요 작업(삽입, 조회, 업데이트, 삭제)의 성능을 측정하여 시스템의 효율성을 평가하고 최적화할 수 있는 지점을 파악하는 데 목적이 있다.



### 12-2. 테스트 환경 설정

- 데이터베이스: MySQL
- 데이터베이스 테이블: User, Post, Comment
- 성능 측정 도구: MySQL 자체 기능(예: `EXPLAIN`, `ANALYZE`) 및 타임스탬프를 활용한 시간 측정



### 12-3. 테스트 시나리오

- 각 작업에 대해 반복적인 성능 테스트를 수행하여 평균 실행 시간을 기록



### 12-4. 성능 측정

#### 4.1 데이터 삽입(Create) 성능 측정

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




#### 4.2 데이터 조회(Read) 성능 측정

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




#### 4.3 데이터 업데이트(Update) 성능 측정

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




#### 4.4 데이터 삭제(Delete) 성능 측정

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







## 13. 성능 분석: 테스트 결과를 바탕으로 성능 병목점 파악 및 최적화

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





## 14. 데이터 백업 및 복구 방안 설계 및 구현

### 14-1. 데이터 백업 설계

데이터 백업을 설계하기 위해 다음과 같은 몇 가지 사항들을 고려해야 한다.

- 백업 빈도: 데이터 변경 빈도에 따라 백업 빈도를 설정한다. 예를 들어, 매일, 매주 또는 실시간으로 백업할 수 있다.
- 백업 유형: 전체 백업, 차등 백업, 증분 백업 중 적절한 유형을 선택한다.
- 백업 위치: 로컬 디스크, 외장 하드, 네트워크 스토리지 또는 클라우드 스토리지 등 백업 파일을 저장할 위치를 결정한다.
- 자동화: 백업 작업을 자동화하여 주기적으로 백업이 이루어지도록 설정한다.
- 복구 전략: 백업 파일을 통해 데이터를 신속하게 복구할 수 있는 절차를 마련한다.



### 14-2. MySQL 데이터 백업 방법

MySQL에서 데이터를 백업하는 방법은 여러 가지가 있지만, 가장 일반적인 방법은 mysqldump 유틸리티를 사용하는 것이다.



1. 전체 데이터베이스 백업

`mysqldump`를 사용하여 전체 데이터베이스를 백업한다.

```sql
mysqldump -u root -p blogDB > blogDB_backup.sql
```



2. 특정 테이블 백업

물론, 특정 테이블만을 백업할 수도 있다.

```
mysqldump -u root -p blogDB User Post Comment > blogDB_tables_backup.sql
```



3. 자동 백업 설정 (크론 잡 사용)

리눅스 환경에서 크론 잡을 사용하여 백업 작업을 자동화할 수 있습니다.

- 크론 잡 편집:

```
crontab -e
```



- 크론 잡 추가:
  - 매일 자정에 데이터베이스를 백업하는 크론 잡을 추가합니다.

```
0 0 * * * /usr/bin/mysqldump -u root -pYourPassword blogDB > /path/to/backup/blogDB_backup_$(date +\%F).sql
```



### 14-3. MySQL 데이터 복구 방법

앞선 과정을 통해 백업한 데이터베이스를 복구하는 방법은 다음과 같다.



1. **전체 데이터베이스 복구**

백업 파일을 사용하여 전체 데이터베이스를 복구한다.

- 기존 데이터베이스 삭제 (선택사항):

```sql
DROP DATABASE blogDB;
CREATE DATABASE blogDB;
```

- 백업 파일을 사용하여 데이터베이스 복구:

```sql
mysql -u root -p blogDB < blogDB_backup.sql
```



2. **특정 테이블 복구**

특정 테이블만 복구할 수도 있다.

- 기존 테이블 삭제(선택사항)

```
DROP TABLE User, Post, Comment;
```

- 백업 파일을 사용하여 테이블 복구:

```s
mysql -u root -p blogDB < blogDB_tables<blogDB_backup.sql
```



### 데이터 백업 및 복구 실습

[데이터 백업]

1. 전체 데이터베이스 백업

```
mysqldump -u root -p blogDB > blogDB_backup.sql
```



2. 백업 파일 확인

- 백업 파일이 생성되었는지 확인한다.

```
ls -lh blogDB_backup.sql
```



[데이터 복구]

1. 기존 데이터베이스 삭제 및 생성:

```
DROP DATABASE blogDB;
CREATE DATABASE blogDB;
```



2. 백업 파일을 사용하여 데이터베이스 복구:

```
mysql -u root -p blogDB < blogDB_backup.sql
```



3. 복구된 데이터 확인:

- MySQL 클라이언트를 사용하여 데이터베이스에 접속하고, 복구된 데이터를 확인한다.

```
USE blogDB;
SHOW TABLES;
SELECT * FROM User;
SELECT * FROM Post;
SELECT * FROM Comment;
```





복귀된 데이터 확인

MySQL 클라이언트를 사용하여 데이터베이스에 접속하여, 복구된 데이터를 확인합니다.

```
USE blogDB;
SHOW TABLES;
SELECT * FROM USER;
SELECT * FROM Post;
SELECT * FROM Comment;
```



### 정리

이렇게 백업 및 복구 과정을 통해 데이터 손실에 대비할 수 있게되었다. 주기적인 백업은 데이터 손실 위험을 최소화할 뿐 아니라, 신속한 복구 절차는 시스템 가용성까지 높여줄 수 있기 때문에 굉장히 중요한 요소 중 하나이다. 또한, 백업 파일을 여러 위치에 저장하여 데이터 유실에 대비하는 것도 중요하다.



## 15. 사용자 인터페이스(UI) 구현: 데이터베이스 조작을 위한 간단한 웹 인터페이스 구축



화면을 구성한 방식은 다음과 같다.



먼저 Post 테이블의 레코드를 가져오는 API를 구축하였는데 Post 테이블은 인덱스가 있는 Post_With_Index 테이블과 인덱스가 없는 Post_Without_Index 테이블로 나눠놨기 때문에 두 테이블로부터 조회를 한 결과 데이터를 한 눈에 볼 수 있도록 배치하였다.



이 때 데이터를 가져오는 데 걸린 응답 시간을 응답에 포함하여 이를 리스트 상단에 배치하여 둘 간의 속도 차이가 어느 정도 나는지 파악하여 성능 비교를 쉽게 할 수 있도록 UI 및 API 설계를 하였다.



아래 사진은 구현을 마친 페이지의 모습이다.

![image](https://github.com/speardragon/kakaotech-bootcamp/assets/79521972/f6c7f947-a405-46ba-9aa9-1bbeec2d3622)



API는 인덱스가 있는 테이블과 없는 테이블로 각각의 API 요청을 날릴 수 있도록 나눠놨으며 둘 간의 로직은 테이블명에 대한 부분만 다르고 나머지는 완전히 같기 때문에 예시로 인덱스가 있는 테이블로 부터 정보를 조회하는 API 코드를 아래와 같이 작성했다.

- /api/post_with_index
- /api/post_without_index

```typescript
// app/api/posts_with_index/route.ts
import type { NextApiRequest } from "next";
import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest) {
  const url = new URL(req.url!);
  const searchParams = new URLSearchParams(url.searchParams);
  const title = searchParams.get("title") || "";

  const start = Date.now();
  let posts;

  if (title) {
    posts = await prisma.postWithoutIndex.findMany({
      where: {
        title: {
          contains: title as string,
        },
      },
      orderBy: {
        title: "asc",
      },
    });
  } else {
    posts = await prisma.postWithoutIndex.findMany({
      orderBy: {
        title: "asc",
      },
      take: 20,
    });
  }

  const end = Date.now();
  const responseTime = end - start;
  // console.log({ posts, responseTime });
  return NextResponse.json({ posts, responseTime });
}

```



중요한 점은 기본적으로는 120만 건의 데이터를 다 가져온다고 이를 배치하기 위해선 Pagination까지 구현해야 하기 때문에 title로 정렬을 하여 상위 20개의 레코드만 조회하도록 구성을 했다.

또한 같은 API에서 title로 검색을 할 수도 있게 해야하기 때문에 api 로직에서 볼 수 있듯 URL로부터 search parameter를 파싱하여 title이 있다면 해당 Title값이 포함된 데이터를 조회하고 만약 없는 경우에는 앞서 말한 것과 같이 상위 20개의 데이터만 가져오도록 구성을 했다.

- 검색할 경우 url 예시: /api/post_with_index?title='1000'



![image](https://github.com/speardragon/kakaotech-bootcamp/assets/79521972/e4ea3c8c-9033-423c-8ca3-8bf67136703b)

먼저 검색어 없이 데이터를 불러올 때의 모습이다.



![image](https://github.com/speardragon/kakaotech-bootcamp/assets/79521972/a0b1c914-7368-4ec5-8675-576e2e650d18)

신기하게도 검색어가 존재하는 경우에 두 테이블 간의 성능 차이가 앞서 진행한 경우와 다르게 그렇게 크지 않게 나왔다.



### 테스트 결과

#### 검색 쿼리 없이

- 인덱스가 있는 테이블:
  - **평균 응답 시간:** 2ms
- 인덱스가 없는 테이블:
  - **평균 응답 시간:** 550ms

#### 검색 쿼리와 함께

- 인덱스가 있는 테이블:
  - **평균 응답 시간:** 454ms
- 인덱스가 없는 테이블:
  - **평균 응답 시간:** 600ms



### 분석

#### 인덱스가 있는 테이블의 성능

1. 검색 쿼리 없이:
   - **응답 시간:** 2ms
   - **설명:** 검색 매개변수 없이 쿼리할 때, 데이터베이스는 첫 20개의 게시글을 알파벳 순서로 가져온다. 인덱스는 데이터로의 직접 경로를 제공하기 때문에 매우 빠르게 데이터를 검색할 수 있다.
2. 검색 쿼리와 함께:
   - **응답 시간:** 400ms
   - **설명:** 제목으로 검색할 때, 인덱스는 검색해야 할 레코드를 좁히는 데 도움을 준다. 검색이 단순한 가져오기보다 더 복잡하지만, 인덱스는 일치하는 레코드를 찾는 데 걸리는 시간을 크게 줄여준다.

#### 인덱스가 없는 테이블의 성능

1. 검색 쿼리 없이:
   - **응답 시간:** 550ms
   - **설명:** 인덱스가 없는 경우, 데이터베이스는 첫 20개의 게시글을 가져오기 위해 전체 테이블을 스캔해야 한다. 이 과정은 모든 레코드를 검사해야 하므로 상당히 느리다.
2. 검색 쿼리와 함께:
   - **응답 시간:** 600ms
   - **설명:** 인덱스 없이 제목으로 검색할 때, 전체 테이블을 스캔하여 일치하는 레코드를 찾아야 한다. 이 스캔은 각 레코드에 대한 추가 비교 단계가 필요하여 단순한 가져오기보다 응답 시간이 더 길어진다.



### 성능 격차가 다른 이유

인덱스가 있는 테이블과 없는 테이블의 성능 차이는 단순 가져오기 쿼리(2ms vs. 550ms)보다 검색 쿼리(400ms vs. 600ms)에서 덜 두드러진다. 이러한 차이는 다음과 같은 이유에서 발생한다:

1. **전체 테이블 스캔 영향:**
   - 인덱스가 없는 테이블에서는 가져오기와 검색 모두 전체 테이블 스캔을 필요로 한다. 그러나 검색은 각 레코드에 대한 추가 비교 단계를 필요로 하므로 응답 시간이 약간 증가하는 것이다.
2. **인덱스 효율성:**
   - 인덱스는 빠른 조회를 위해 최적화되어 있으며, 데이터베이스가 검사해야 할 레코드 수를 크게 줄여준다. 그래서 단순 가져오기 작업에서는 거의 즉각적인 응답 시간을 제공한다. 검색 중에도 인덱스는 프로세스를 가속화하지만, 검색어 일치의 복잡성이 추가적인 오버헤드를 도입한다.
3. **데이터 볼륨과 분포:**
   - 인덱스의 성능 이점은 데이터 세트가 크고 잘 분포되어 있을 때 더 크다. 인덱스가 있는 테이블은 검색 공간을 빠르게 좁힐 수 있는 반면, 인덱스가 없는 테이블의 성능은 데이터 볼륨이 증가함에 따라 저하될 수 있다.



가장 예상되었던 이유는 데이터베이스에서 Post 테이블로 where 절을 통해서 검색을 한 데이터를 가져오는데 내가 구성한 API에서는 prisma의 contains라는 속성을 활용했는데 이는 쿼리문의 like 연산으로 equal(=) 연산과는 차이가 있기 때문에 아마 여기서 큰 차이가 날 수 있지 않나 생각을 했고 이에 대한 추가적인 실습을 진행해보았다.



### where 절의 비교 연산을 Like에서 Equal로 변경

![image](https://github.com/speardragon/kakaotech-bootcamp/assets/79521972/95ae2293-6ba3-4757-a2c1-f732ceaf383c)

변경 후에 다시 진행을 해보았을 때 예상대로 역시 둘 간의 차이가 굉장히 크게 벌어진 것을 다시 확인할 수 있었다.



그렇다면 왜 like 연산에서는 인덱스가 있음에도 크게 성능적 이득을 보지 못하는 것일까? GPT를 통해 다음과 같은 답변을 얻을 수 있었다.

```
1. LIKE 연산자의 영향:
   - LIKE 연산자를 사용하여 부분 문자열을 검색할 때는, 인덱스가 있어도 전체 문자열을 검사해야 하기 때문에 동등 비교(=)보다 시간이 더 걸립니다. 인덱스는 검색 범위를 좁히는 데 도움을 주지만, 부분 일치를 위해 여전히 많은 레코드를 검사해야 합니다.

2. 전체 테이블 스캔 영향:
   - 인덱스가 없는 테이블에서는 가져오기와 검색 모두 전체 테이블 스캔을 필요로 합니다. 그러나 검색에서는 각 레코드에 대해 추가적인 문자열 비교가 필요하여 응답 시간이 약간 증가합니다.

3. 인덱스 효율성:
   - 인덱스는 빠른 조회를 위해 최적화되어 있으며, 데이터베이스가 검사해야 할 레코드 수를 크게 줄입니다. 그러나 LIKE 연산자를 사용한 부분 문자열 검색에서는 인덱스의 효율성이 상대적으로 감소합니다.
```



그렇다면 실제로 인덱스를 잘 활용하지 못하고 있는지 확인해보기 위해 EXPLAIN으로 쿼리 구문을 분석해보았다.

<img width="821" alt="image" src="https://github.com/speardragon/kakaotech-bootcamp/assets/79521972/211264af-29a1-4881-be59-73fa828d92b5">



<img width="816" alt="image" src="https://github.com/speardragon/kakaotech-bootcamp/assets/79521972/99b7a220-030f-4db0-b181-2dc609734245">

첫 번째 사진이 equal 연산을 사용한 것이고 실제로 type을 보면 알 수 있듯이 title_idx 인덱스를 참조(reference)하여 데이터를 조회하겠다고 선언한 반면에 두 번째 사진인 Like 연산을 활용한 구문 계획에는 type이 ALL로 되어있어 Full Scan으로 조회하겠다고 명시가 되어있다.



실행 계획(EXPLAIN)에 대한 내용은 아래 링크에서 자세히 볼 수 있다.

- https://velog.io/@ddongh1122/MySQL-%EC%8B%A4%ED%96%89%EA%B3%84%ED%9A%8D2-EXPLAIN





## 16. 보안 설정: 접근 제어 및 인증 설정

### 데이터베이스 접근 제어

데이터베이스 접근 제어는 사용자 권한을 설정하여 데이터베이스의 무단 접근을 방지한다.



보안 설정을 할 때 몇 가지를 주의해야 한다.

1. **MySQL은 시스템의 root 계정으로 구동하지 않는다.**

앞으로 설명할 MySQL(3306/tcp) 뿐만 아니라 Oracle(1521/tcp)이나 msql(1114/tcp), MS-SQL(1433/tcp)등 대부분의 DataBase는 시스템 관리자인 root와는 별개의 계정으로 작동하도록 하여야 한다.



이와 같은 이유에서 모두 기본적으로 1024 이후의 비 특권 포트를 사용하고 있다.



만약 MySQL을 root로 구동할 경우 다음과 같은 위험이 있다.

- buffer overflow 등 MySQL 자체의 취약성이 발생할 경우 MySQL을 구동하는 유저 즉, 시스템의 root 권한을 뺴앗길 수 있다.
- FILE 권한을 가진 유저의 경우 root 권한으로 /root/.bashrc와 같은 파일을 생성할 수 있다.



따라서 일부 DATABASE의 경우 root로 구동하면 에러를 내며, 아예 실행되지 않도록 설계된 경우도 종종 있다. MySQL의 경우에는 일반적으로 mysql이라는 특정 계정으로만 구동해야만 정상적인 실행이 되도록 되어있다.



또한 자동으로 mysql 계정으로 작동하려면 

```
su mysql -c "/usr/local/mysql/share/mysql/mysql.server start"
```

위 부분을 rc.local 파일에 정의해 주면 된다.



또는 `/etc/my.cnf`에 다음과 같이 추가하면 root가 아닌 다른 유저(아래의 경우 mysql)로 작동하게 된다.

```
[mysqld]
user=mysql
```



2. **쉬운 암호를 사용하지 않는다.**

다른 응용 프로그램과 마찬가지로 쉬운 암호를 사용하지 않는 것은 보안의 가장 기본이라 할 수 있다.

특히 MySQL의 경우 "mysql -u root"로 실행할 경우 암호만 알고 있다면 누구나 MySQL의 root 권한으로 접근할 수 있으므로 반드시 root 암호는 추측하기 어려운 암호로 설정하고 정기적으로 변경하도록 하여야 한다.

brute force(무작위 입력) 방식으로 MySQL의 root 암호를 해독할 수 있는 방법이 있으므로 각별히 신경 써야 한다.

특히 사전에 나오는 단어를 사용하지 말고 영문 자판으로 한글을 입력하는 방식의 암호를 사용하는 것도 좋은 방법이다.

아울러 관리자가 변경되었거나 퇴사하였을 경우 root 암호를 변경하는 것이 좋은데, 암호를 변경하려면 아래와 같이 실행하면 된다.

```
$ mysql -u root mysql

mysql> UPDATE user SET Password=PASSWORD('xxxxxxx')

WHERE user='root';

mysql> FLUSH PRIVILEGES;
```



또한 설치 시 기본적으로 설치되는 test DataBase는 삭제하도록 하고, root이외 모든 MySQL 사용자 정보도 삭제하도록 한다.

이는 MySQL 서비스를 시작하기 전에 실행하도록 한다.

```
mysql> drop database test;

mysql> use mysql;

mysql> delete from db;

mysql> delete from user where not (host="localhost" and user="root");

mysql> flush privileges;
```



3. **방화벽을 사용하여 MySQL port를 엄격히 제한한다.**

MySQL은 기본적으로 3306/tcp를 사용하는데, 외부에서 이 포트로 직접 접근 하지 못하도록 차단해야 한다.

이를 위해 MySQL 앞단에 방화벽을 설치하는 것이 좋은데, 외부에서 MySQL에 직접 접근 가능한지를 파악해야 한다.

- 외부에서 nmap으로 스캔(scan)해 본다.

- 외부에서 telnet hostname 3306으로 접속해 본다.

- 외부에서 mysql -h hostname으로 접속해 본다.



또한, local에서만 MySQL을 구동한다면 3306/tcp에서 구동하지 않고 유닉스 도메인 소켓을 통해 서비스하도록 하는 것이 보안적인 측면에서 그리고 성능적인 측면에서 더 좋다.

 

이러한 경우 3306/tcp를 통하지 않으므로 굳이 방화벽을 설치하지 않아도 될 것이다.



이를 위해서는 두 가지 방법이 있는데, 첫 번째로 /etc/my.cnf 파일에서 아래와 같이 설정 후 MySQL을 재구동하는 방법이 있다.

``` 
[mysqld]
skip-networking
```



두 번째는 MySQL 구동 시 `--skip-networking`을 추가하면 된다.

- 참고로 이는 3.23.27 이하 버전에서는 작동하지 않는다.



4. **인터넷을 통해 평문 데이터를 전송하지 않도록 한다.**

원격지의 웹-DB 연동 시 DataBase에 접속하기 위해서는 아이디/암호로 인증을 하게 되는데, 이러한 경우 평문(plain text)으로 전송된다면 아이디/암호가 그대로 유출 되는 문제가 발생할 수 있으므로 인터넷을 통해 전송할 때에는 SSL 또는 SSH를 통해 암호화 하도록 한다.

특히 SSH port forwarding을 이용할 경우 암호화뿐만 아니라 패킷의 터널링(tunneling)을 통해 패킷 압축 효과도 기대할 수 있다.

그리고 MySQL 4.0 이상에서는 자체적으로 OpenSSL을 지원하므로 MySQL을 업그레이드하는 것도 고려할 수 있다.



물론 뒤에서 살펴볼 VPN으로 상호 연동하는 것도 좋은 방법이다. 실제, 스니핑을 통해 아이디/암호 등이 노출되는지는 다음과 같이 확인해 볼 수 있다.

```
#tcpdump -l -i eth0 -w - src or dst port 3306 | strings
```



5. 접근 권한을 엄격하게 제한한다.

- MySQL 관리자가 아닌 일반 유저에게 **process** 권한을 주지 않도록 한다.

만약 이 권한 이 주어질 경우 “show processlist;”를 실행하면 현재 실행되는 query를 모니터링 할 수 있으며 이 중에는 `UPDATE user SET password=PASSWORD('xxxxx')`과 같은 query도 직접 볼 수 있으며 결국 암호도 쉽게 유출될 수 있게 된다.



- MySQL 관리자가 아닌 일반 유저에게 **SUPER** 권한을 부여하지 않도록 한다.

만약 이 권한이 주어질 경우 client의 connection을 종료하거나 서버의 시스템 변수를 변경할 수 있게 된다.



- MySQL 관리자가 아닌 일반 유저에게 FILE 권한을 부여하지 않도록 한다.

만약 이 권한이 주어질 경우 mysqld가 실행되는 권한으로 파일을 생성할 수 있게 될 것이다.



- 각 유저 당 허용되는 동시 접속자수를 제한하려면 mysqld 가동 시

`max_user_connections` 옵션을 사용하도록 한다.



- 만약 mysqld를 mysql 권한으로 실행할 경우 mysql 디렉토리 이하에 대한 읽고 쓰기 권한은 mysql로 제한한다.



#### 데이터베이스 사용자 생성 및 권한 부여

1. 새로운 사용자 생성:

```mysql
CREATE UESR 'ray'@'localhost' IDENTIFIED BY 'securepassword';
```

<img width="251" alt="image" src="https://github.com/speardragon/kakaotech-bootcamp/assets/79521972/1d22659c-1936-43ed-b0d2-c3351c7fef77">



2. 권한 부여:

- 특정 데이터베이스에 대한 권한을 부여한다.

```mysql
GRANT SELECT, INSERT, UPDATE, DELETE ON blogDB.* TO 'ray'@'localhost';
```



3. 권한 적용:

```
FLUSH PRIVILEGES;
```



#### 권한 확인

- 권한이 제대로 부여되었는지 확인합니다.

```mysql
SHOW GRANTS FOR 'ray'@'localhost';
```

<img width="533" alt="image" src="https://github.com/speardragon/kakaotech-bootcamp/assets/79521972/87027b1d-5aee-4bf1-a9d8-5d974e5ce4ba">



## 17. 코드 리뷰 및 피드백 반영

1. **app/api/posts_with_index/route.ts**

- 에러 처리가 없다. try-catch 블록을 사용하여 예외를 처리하는 것이 좋다.
- title 파라미터가 있을 때와 없을 때의 쿼리 로직이 중복되는데 이를 개선할 수 있을 것 같다.

```typescript
...
// 변경 전
export async function GET(req: NextApiRequest) {
  const url = new URL(req.url!);
  const searchParams = new URLSearchParams(url.searchParams);
  const title = searchParams.get("title") || "";

  const start = Date.now();
  let posts;

  if (title) {
    posts = await prisma.postWithoutIndex.findMany({
      where: {
        title: title,
      },
      orderBy: {
        title: "asc",
      },
    });
  } else {
    posts = await prisma.postWithoutIndex.findMany({
      orderBy: {
        title: "asc",
      },
      take: 20,
    });
  }

  const end = Date.now();
  const responseTime = end - start;
  // console.log({ posts, responseTime });
  return NextResponse.json({ posts, responseTime });
}
```



```typescript
...
// 변경 후
export async function GET(req: NextApiRequest) {
  try {
    const url = new URL(req.url!);
    const searchParams = new URLSearchParams(url.searchParams);
    const title = searchParams.get("title") || "";

    const start = Date.now();

    const posts = await prisma.postWithIndex.findMany({
      where: title ? { title: title } : undefined,
      orderBy: {
        title: "asc",
      },
      take: title ? undefined : 20,
    });

    const end = Date.now();
    const responseTime = end - start;

    return NextResponse.json({ posts, responseTime });
  } catch (error) {
    console.error("Error fetching posts:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

```



2. **app/components/PostList.tsx**

- fetchInitialPosts와 fetchPosts 함수의 로직이 유사하다. 이를 하나의 함수로 통합할 수 있을 것 같다.
- 데이터 로딩 중 상태를 표시하는 기능이 없다. 로딩 인디케이터를 추가하면 좋을 것 같다.
- 불필요한 렌더링을 줄이는 최적화를 위해 사용되는 함수를 useCallback으로 만들 수 있다.

```typescript
// 변경 전
...

const PostList: React.FC<PostListProps> = ({ endpoint, label }) => {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);
  const [responseTime, setResponseTime] = useState<number | null>(null);

  useEffect(() => {
    const fetchInitialPosts = async () => {
      const res = await fetch(`/api/${endpoint}`);
      const data = await res.json();
      setPosts(data.posts);
      setResponseTime(data.responseTime);
    };
    fetchInitialPosts();
  }, [endpoint]);

  const fetchPosts = async () => {
    const res = await fetch(`/api/${endpoint}?title=${title}`);
    const data = await res.json();
    setPosts(data.posts);
    setResponseTime(data.responseTime);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">{label}</h2>
      <div className="flex space-x-2 mb-4">
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Search by title"
          className="flex-grow"
        />
        <Button onClick={fetchPosts} className="flex items-center">
          <Search className="mr-2" /> 검색
        </Button>
      </div>
      {responseTime !== null && (
        <p className="text-sm text-gray-500">응답 속도: {responseTime} ms</p>
      )}
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="border-b pb-4">
            <h3 className="text-lg font-medium">{post.title}</h3>
            <p className="text-gray-700">{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
```





```typescript
// 변경 후
...

const PostList: React.FC<PostListProps> = ({ endpoint, label }) => {
...
  const fetchPosts = useCallback(
    async (searchTitle: string = "") => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/${endpoint}?title=${searchTitle}`);
        if (!res.ok) {
          throw new Error("서버에서 데이터를 가져오는데 실패했습니다.");
        }
        const data = await res.json();
        setPosts(data.posts);
        setResponseTime(data.responseTime);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "알 수 없는 에러가 발생했습니다."
        );
      } finally {
        setIsLoading(false);
      }
    },
    [endpoint]
  );

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handleSearch = useCallback(() => {
    fetchPosts(title);
  }, [fetchPosts, title]);

  return (
...
      {isLoading && (
        <div className="flex h-full w-full justify-center items-start mt-10">
          <Loading />
        </div>
      )}
...
  );
};

export default PostList;

```



## 18. 기능 시연 영상 제작: 주요 기능 시연 및 설명







## 19. 성능 테스트 및 분석 결과 보고서 작성

보고서 작성 완료. (performance.md)





## 20. README 파일 작성: 사용 방법 및 설정 방법 명시

README 파일 작성 완료. (README.md)





## 21: 최종 결과물 제출: 소스 코드, 설정 파일, 보고서, 시연 영상, README 파일

- [ ] 소스코드
- [ ] 보고서
- [ ] 설정 파일
- [ ] 시연 영상
- [ ] README 파일





# ❗️작업 중 발생한 이슈/해결 방법

## MySQL 설치

![image](https://github.com/speardragon/kakaotech-bootcamp/assets/79521972/6869a82a-bbef-4330-ab69-4144e25776d8)

homebrew를 재설치 해주었더니 해결됨

```bash
/bin/bash -c "$(curl -fsSL <https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh>)"
```



## Next.js API Route 오류

![image](https://github.com/speardragon/kakaotech-bootcamp/assets/79521972/aac42434-7597-4dab-98f9-b82eee770307)



Next 14 기준으로 API Route를 작성할 때(특히 쿼리 스트링이 있는) 다음과 같은 구조로 작성하도록 해야 한다.

```typescript
// app/api/posts_with_index/route.ts
import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: NextApiRequest, res: NextApiResponse) {
  const url = new URL(req.url!);
  const searchParams = new URLSearchParams(url.searchParams);
  const title = searchParams.get("title") || "";

  // ... 응답 처리 부분
  
  return NextResponse.json({ posts, responseTime });
}

```



응답을 반환할 때는 반드시 next/server 패키지의 NextResponse 객체로 응답을 만들어 반환하도록 해야 아래와 같은 오류가 발생하지 않을 수 있다.

![image](https://github.com/speardragon/kakaotech-bootcamp/assets/79521972/ac7f4d08-f7a1-44e6-b49e-8a1a11f087e1)







# 새롭게 알게 된 내용

- 외래키 설정 시 CASCADE는 무조건 적용하는 것이 좋은가?

### CASCADE의 장점

1. **데이터 무결성 유지**: 부모 레코드가 삭제될 때 연관된 자식 레코드도 자동으로 삭제되므로, 고아 레코드가 생기지 않아 데이터 무결성을 유지할 수 있습니다.
2. **편의성**: 애플리케이션 로직에서 일일이 자식 레코드를 삭제하는 코드를 작성하지 않아도 되므로 편리합니다.
3. **일관성**: 일관된 데이터 상태를 유지할 수 있으며, 예기치 않은 데이터 참조 오류를 방지할 수 있습니다.

### CASCADE의 단점

1. **예기치 않은 데이터 손실**: 부모 레코드를 삭제할 때 자식 레코드도 자동으로 삭제되므로, 실수로 중요한 데이터를 잃을 위험이 있습니다.
2. **성능 문제**: 대량의 자식 레코드를 가진 부모 레코드를 삭제할 때, 모든 자식 레코드를 함께 삭제하므로 성능 저하가 발생할 수 있습니다.
3. **복잡성 증가**: CASCADE 옵션을 남용하면 데이터베이스 동작이 복잡해져서 예기치 않은 부작용을 초래할 수 있습니다.

### 대안과 상황별 고려사항

- **SET NULL**: 부모 레코드가 삭제될 때 자식 레코드의 외래 키를 NULL로 설정합니다. 이는 고아 레코드를 허용하지만, 참조 무결성을 유지할 수 없는 경우에 사용됩니다.
- **RESTRICT**: 부모 레코드가 자식 레코드에 의해 참조되고 있으면 삭제를 거부합니다. 이는 명시적으로 먼저 자식 레코드를 삭제하도록 강제합니다.
- **NO ACTION**: RESTRICT와 유사하게 부모 레코드 삭제 시 아무 동작도 하지 않지만, 트랜잭션 끝날 때 참조 무결성을 체크합니다.
- **SET DEFAULT**: 부모 레코드가 삭제될 때 자식 레코드의 외래 키를 기본값으로 설정합니다. 이는 잘 사용되지 않지만, 특정 시나리오에서는 유용할 수 있습니다.

### 사례별 권장사항

1. **중요한 데이터의 무결성 보장**: 금융 거래 기록이나 중요한 로그 데이터와 같은 경우에는 CASCADE 삭제를 사용하지 않는 것이 좋습니다. 이 경우 RESTRICT 또는 NO ACTION을 사용하는 것이 더 안전합니다.
2. **관련 데이터의 자동 정리**: 게시판 시스템처럼 사용자가 삭제되면 해당 사용자의 모든 게시글과 댓글을 함께 삭제하는 것이 자연스러운 경우에는 CASCADE를 사용하는 것이 좋습니다.
3. **복잡한 관계**: 여러 테이블이 서로 복잡하게 얽혀 있는 경우에는 CASCADE를 신중하게 사용해야 합니다. 필요한 경우만 적용하고, 데이터베이스 동작을 충분히 이해하고 있는지 확인합니다.



- DELETE 하는 기준?



# Reference

.





# Takeaway

.





