import { useState, useCallback, useEffect } from 'react';
import { Layout } from './components/Layout/Layout.tsx';
import { TodoList } from './components/Todo/TodoList.tsx';
import { TodoForm } from './components/Todo/TodoForm.tsx';
import { TodoFilter } from './components/Todo/TodoFilter.tsx';
import { TodoSearch } from './components/Todo/TodoSearch.tsx';
import { TodoSort } from './components/Todo/TodoSort.tsx';
import { useTodos } from './hooks/useTodos.ts';
import type { PriorityNumber } from './types/todo.ts';

export default function App() {
  const { todos, loading, error, addTodo, toggleTodo, deleteTodo, updateTodo } = useTodos();
  const [searchQuery, setSearchQuery] = useState('');
  const [priorityFilter, setPriorityFilter] = useState<PriorityNumber | 'all'>('all');
  const [showCompleted, setShowCompleted] = useState(true);
  const [sortBy, setSortBy] = useState<'createdAt' | 'priority' | 'completed'>('createdAt');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('desc');

  // 필터링된 할 일 목록
  const filteredTodos = todos
    .filter(todo => {
      if (!showCompleted && todo.isCompleted) return false;
      if (priorityFilter !== 'all' && todo.priority !== priorityFilter) return false;
      if (searchQuery && !todo.title.toLowerCase().includes(searchQuery.toLowerCase())) return false;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === 'createdAt') {
        return sortDirection === 'asc' 
          ? a.createdAt.toDate().getTime() - b.createdAt.toDate().getTime()
          : b.createdAt.toDate().getTime() - a.createdAt.toDate().getTime();
      }
      return 0;
    });

  if (error) {
    return <div className="text-center text-red-500 p-4">{error}</div>;
  }

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
        
        {loading ? (
          <div className="text-center py-8">로딩 중...</div>
        ) : (
          <TodoList
            todos={filteredTodos}
            onToggle={toggleTodo}
            onDelete={deleteTodo}
            onEdit={updateTodo}
          />
        )}
      </div>
    </Layout>
  );
} 