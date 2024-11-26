import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID
};

// Firebase 초기화
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// Firestore 컬렉션 레퍼런스
export const todosRef = collection(db, 'todos');

// Firebase 연결 테스트
export const testConnection = async () => {
  try {
    const snapshot = await getDocs(todosRef);
    console.log('Firebase 연결 성공:', snapshot.size, '개의 문서 확인');
    return true;
  } catch (error) {
    console.error('Firebase 연결 실패:', error);
    return false;
  }
}; 