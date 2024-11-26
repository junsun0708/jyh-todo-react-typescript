import { initializeApp } from 'firebase/app';
import { 
  getFirestore, 
  collection, 
  addDoc, 
  updateDoc,
  deleteDoc,
  doc,
  query,
  orderBy,
  Timestamp,
  DocumentData,
  QueryDocumentSnapshot
} from 'firebase/firestore';
import type { Todo, CreateTodoInput, UpdateTodoInput } from '../types/todo';

const firebaseConfig = {
  apiKey: "AIzaSyC8Wq94kAXsIKDnBhzHtMb-ilVj512Gl2k",
  authDomain: "jyh-todo-react-typescript.firebaseapp.com",
  projectId: "jyh-todo-react-typescript",
  storageBucket: "jyh-todo-react-typescript.firebasestorage.app",
  messagingSenderId: "720900392913",
  appId: "1:720900392913:web:48f95e915a52285c2a82f0"
};

// Firebase 초기화
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Firestore 컬렉션 레퍼런스
export const todosRef = collection(db, 'todos');

// Firestore 문서를 Todo 타입으로 변환하는 함수
export const convertToTodo = (doc: QueryDocumentSnapshot<DocumentData>): Todo => {
  const data = doc.data();
  return {
    id: doc.id,
    title: data.title,
    content: data.content,
    priority: data.priority,
    isCompleted: data.isCompleted,
    createdAt: data.createdAt,
    updatedAt: data.updatedAt,
  };
};

// Todo CRUD 작업
export const todoService = {
  // 할 일 생성
  async create(input: CreateTodoInput): Promise<string> {
    const docRef = await addDoc(todosRef, {
      ...input,
      createdAt: Timestamp.now(),
      updatedAt: Timestamp.now(),
    });
    return docRef.id;
  },

  // 할 일 수정
  async update(id: string, input: UpdateTodoInput): Promise<void> {
    const todoRef = doc(db, 'todos', id);
    await updateDoc(todoRef, {
      ...input,
      updatedAt: Timestamp.now(),
    });
  },

  // 할 일 삭제
  async delete(id: string): Promise<void> {
    const todoRef = doc(db, 'todos', id);
    await deleteDoc(todoRef);
  },

  // 기본 쿼리 (생성일 기준 내림차순)
  getDefaultQuery() {
    return query(todosRef, orderBy('createdAt', 'desc'));
  },
}; 