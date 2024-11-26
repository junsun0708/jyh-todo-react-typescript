import { Select } from '../UI/Select';
import type { TodoPriority } from '../../types/todo';

interface TodoFilterProps {
  priority: TodoPriority | 'all';
  onPriorityChange: (priority: TodoPriority | 'all') => void;
  showCompleted: boolean;
  onShowCompletedChange: (show: boolean) => void;
}

export const TodoFilter = ({
  priority,
  onPriorityChange,
  showCompleted,
  onShowCompletedChange,
}: TodoFilterProps) => {
  return (
    <div className="flex items-center gap-4">
      <Select
        className="w-40"
        value={priority}
        onChange={(e) => onPriorityChange(e.target.value as TodoPriority | 'all')}
        options={[
          { value: 'all', label: '모든 우선순위' },
          { value: 'high', label: '높음' },
          { value: 'medium', label: '중간' },
          { value: 'low', label: '낮음' },
        ]}
      />
      
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={showCompleted}
          onChange={(e) => onShowCompletedChange(e.target.checked)}
          className="h-4 w-4 text-primary-600 rounded border-gray-300 focus:ring-primary-500"
        />
        <span className="text-sm text-gray-700">완료된 항목 표시</span>
      </label>
    </div>
  );
}; 