export interface Todo {
  id: string;
  title: string;
  completed: boolean;
  priority: 'high' | 'medium' | 'low';
  createdAt: Date;
}

export type TodoPriority = 'high' | 'medium' | 'low'; 