import { Timestamp } from 'firebase/firestore';

export interface Todo {
  id: string;            // 할 일 고유 ID
  title: string;         // 할 일 제목
  content: string;       // 할 일 내용
  priority: 1 | 2 | 3;   // 우선순위 (1: 높음, 2: 중간, 3: 낮음)
  isCompleted: boolean;  // 완료 여부
  createdAt: Timestamp; // 생성 시간
  updatedAt: Timestamp; // 수정 시간
}

// 우선순위 매핑
export const PRIORITY_MAP = {
  1: 'high',
  2: 'medium',
  3: 'low'
} as const;

export type PriorityNumber = 1 | 2 | 3;
export type PriorityLabel = typeof PRIORITY_MAP[PriorityNumber];

// Todo 생성 시 필요한 타입
export type CreateTodoInput = Omit<Todo, 'id' | 'createdAt' | 'updatedAt'>;

// Todo 수정 시 필요한 타입
export type UpdateTodoInput = Partial<Omit<Todo, 'id' | 'createdAt'>>; 