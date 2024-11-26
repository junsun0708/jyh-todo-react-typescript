import { useState, FormEvent } from 'react';
import { Input } from '../UI/Input';
import { Select } from '../UI/Select';
import { Button } from '../UI/Button';
import type { TodoPriority } from '../../types/todo';

interface TodoFormProps {
  onSubmit: (title: string, priority: TodoPriority) => void;
  initialTitle?: string;
  initialPriority?: TodoPriority;
  submitLabel?: string;
}

export const TodoForm = ({
  onSubmit,
  initialTitle = '',
  initialPriority = 'medium',
  submitLabel = '추가'
}: TodoFormProps) => {
  const [title, setTitle] = useState(initialTitle);
  const [priority, setPriority] = useState<TodoPriority>(initialPriority);
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (!title.trim()) {
      setError('할 일을 입력해주세요.');
      return;
    }

    onSubmit(title.trim(), priority);
    setTitle('');
    setPriority('medium');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        label="할 일"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="할 일을 입력하세요"
        error={error}
      />
      
      <Select
        label="우선순위"
        value={priority}
        onChange={(e) => setPriority(e.target.value as TodoPriority)}
        options={[
          { value: 'high', label: '높음' },
          { value: 'medium', label: '중간' },
          { value: 'low', label: '낮음' },
        ]}
      />
      
      <Button type="submit" className="w-full">
        {submitLabel}
      </Button>
    </form>
  );
}; 