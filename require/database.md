# Firebase Firestore 데이터베이스 구조

## 컬렉션 구조

### todos (컬렉션)
- 문서 ID: 자동 생성 (uuid 사용)
  ```typescript
  interface Todo {
    id: string;            // 할 일 고유 ID
    title: string;         // 할 일 제목
    content: string;       // 할 일 내용
    priority: number;      // 우선순위 (1: 높음, 2: 중간, 3: 낮음)
    isCompleted: boolean;  // 완료 여부
    createdAt: Timestamp; // 생성 시간
    updatedAt: Timestamp; // 수정 시간
  }
  ```

## 사용 방법

### 1. Firebase 초기화

typescript
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
const firebaseConfig = {
// Firebase 콘솔에서 가져온 설정
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

### 2. CRUD 작업

#### 할 일 생성

typescript
import { collection, addDoc } from 'firebase/firestore';
const addTodo = async (todo: Omit<Todo, 'id'>) => {
await addDoc(collection(db, 'todos'), todo);
};


#### 할 일 조회

typescript
import { collection, getDocs, query, orderBy } from 'firebase/firestore';
const getTodos = async () => {
const q = query(collection(db, 'todos'), orderBy('createdAt', 'desc'));
const querySnapshot = await getDocs(q);
return querySnapshot.docs.map(doc => ({
id: doc.id,
...doc.data()
}));
};


#### 할 일 수정
typescript
import { doc, updateDoc } from 'firebase/firestore';
const updateTodo = async (id: string, data: Partial<Todo>) => {
const todoRef = doc(db, 'todos', id);
await updateDoc(todoRef, data);
};


#### 할 일 삭제
typescript
import { doc, deleteDoc } from 'firebase/firestore';
const deleteTodo = async (id: string) => {
await deleteDoc(doc(db, 'todos', id));
};

## 데이터베이스 규칙

### 보안 규칙

javascript
rules_version = '2';
service cloud.firestore {
match /databases/{database}/documents {
// todos 컬렉션에 대한 규칙
match /todos/{todoId} {
// 읽기 허용
allow read: if true;
// 생성 규칙
allow create: if
// 필수 필드 검증
request.resource.data.title is string &&
request.resource.data.title.size() > 0 &&
request.resource.data.title.size() <= 100 &&
request.resource.data.content is string &&
request.resource.data.priority in [1, 2, 3] &&
request.resource.data.isCompleted is bool &&
request.resource.data.createdAt is timestamp &&
request.resource.data.updatedAt is timestamp;
// 수정 규칙
allow update: if
// 수정 불가능한 필드 검증
!request.resource.data.diff(resource.data).affectedKeys()
.hasAny(['createdAt']) &&
// 필수 필드 유효성 검증
request.resource.data.title is string &&
request.resource.data.title.size() > 0 &&
request.resource.data.title.size() <= 100 &&
request.resource.data.priority in [1, 2, 3];
// 삭제 허용
allow delete: if true;
}
}
}


### 데이터베이스 사용 규칙
1. 모든 시간 관련 필드는 서버 타임스탬프 사용
2. 우선순위는 1, 2, 3 값만 사용 가능
3. 제목은 1자 이상 100자 이하로 제한
4. createdAt은 생성 후 수정 불가
5. 실시간 업데이트가 필요한 경우 onSnapshot 사용
6. 대량의 데이터 쿼리 시 페이지네이션 구현
7. 인덱스가 필요한 복합 쿼리의 경우 Firebase 콘솔에서 인덱스 생성

이 설계는 PRD에서 요구하는 모든 기능을 구현할 수 있도록 구성되었습니다. 특히 할 일의 CRUD 작업, 우선순위 설정, 완료 상태 관리 등을 효율적으로 처리할 수 있습니다. 보안 규칙을 통해 데이터의 무결성을 보장하고, 사용 규칙을 통해 일관된 데이터 관리가 가능합니다.