import { useState, useCallback } from 'react';
import { Layout } from './components/Layout/Layout.tsx';
import { TodoList } from './components/Todo/TodoList.tsx';
import { TodoForm } from './components/Todo/TodoForm.tsx';
import { TodoFilter } from './components/Todo/TodoFilter.tsx';
import { TodoSearch } from './components/Todo/TodoSearch.tsx';
import { TodoSort } from './components/Todo/TodoSort.tsx';
import type { Todo, TodoPriority } from './types/todo.ts';

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [priorityFilter, setPriorityFilter] = useState<TodoPriority | 'all'>('all');
  const [showCompleted, setShowCompleted] = useState(true);
  const [sortBy, setSortBy] = useState<'createdAt' | 'priority' | 'completed'>('createdAt');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  const addTodo = useCallback((title: string, priority: TodoPriority) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      title,
      priority,
      completed: false,
      createdAt: new Date(),
    };
    setTodos(prev => [newTodo, ...prev]);
  }, []);

  const toggleTodo = useCallback((id: string) => {
    setTodos(prev => prev.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  }, []);

  const deleteTodo = useCallback((id: string) => {
    setTodos(prev => prev.filter(todo => todo.id !== id));
  }, []);

  const editTodo = useCallback((id: string) => {
    // 수정 기능은 나중에 구현
    console.log('Edit todo:', id);
  }, []);

  // 필터링된 할 일 목록
  const filteredTodos = todos
    .filter(todo => {
      if (!showCompleted && todo.completed) return false;
      if (priorityFilter !== 'all' && todo.priority !== priorityFilter) return false;
      if (searchQuery && !todo.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'createdAt') {
        return sortDirection === 'asc' 
          ? a.createdAt.getTime() - b.createdAt.getTime()
          : b.createdAt.getTime() - a.createdAt.getTime();
      }
      return 0;
    });

  return (
    <Layout>
      <div className="space-y-6">
        <TodoForm onSubmit={addTodo} />
        
        <div className="flex items-center justify-between gap-4">
          <TodoSearch onSearch={setSearchQuery} />
          <TodoSort
            sortBy={sortBy}
            direction={sortDirection}
            onSortChange={setSortBy}
            onDirectionChange={setSortDirection}
          />
        </div>
        
        <TodoFilter
          priority={priorityFilter}
          onPriorityChange={setPriorityFilter}
          showCompleted={showCompleted}
          onShowCompletedChange={setShowCompleted}
        />
        
        <TodoList
          todos={filteredTodos}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
          onEdit={editTodo}
        />
      </div>
    </Layout>
  );
} 