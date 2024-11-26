import { useState, FormEvent } from 'react';
import { Input } from '../UI/Input.tsx';
import { Select } from '../UI/Select.tsx';
import { Button } from '../UI/Button.tsx';
import type { CreateTodoInput, PriorityNumber } from '../../types/todo';

interface TodoFormProps {
  onSubmit: (input: CreateTodoInput) => void;
  initialData?: Partial<CreateTodoInput>;
  submitLabel?: string;
}

export const TodoForm = ({
  onSubmit,
  initialData = {},
  submitLabel = '추가'
}: TodoFormProps) => {
  const [title, setTitle] = useState(initialData.title || '');
  const [content, setContent] = useState(initialData.content || '');
  const [priority, setPriority] = useState<PriorityNumber>(initialData.priority || 2);
  const [error, setError] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    
    if (!title.trim()) {
      setError('할 일을 입력해주세요.');
      return;
    }

    onSubmit({
      title: title.trim(),
      content: content.trim(),
      priority,
      isCompleted: false,
    });

    if (!initialData.title) {
      setTitle('');
      setContent('');
      setPriority(2);
    }
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

      <Input
        label="내용"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="상세 내용을 입력하세요"
      />
      
      <Select
        label="우선순위"
        value={priority.toString()}
        onChange={(e) => setPriority(Number(e.target.value) as PriorityNumber)}
        options={[
          { value: '1', label: '높음' },
          { value: '2', label: '중간' },
          { value: '3', label: '낮음' },
        ]}
      />
      
      <Button type="submit" className="w-full">
        {submitLabel}
      </Button>
    </form>
  );
}; 