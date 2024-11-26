import { Select } from '../UI/Select.tsx';
import type { PriorityNumber } from '../../types/todo';

interface TodoFilterProps {
  priority: PriorityNumber | 'all';
  onPriorityChange: (priority: PriorityNumber | 'all') => void;
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
        label="🔍 필터"
        className="w-40"
        value={priority.toString()}
        onChange={(e) => {
          const value = e.target.value;
          onPriorityChange(value === 'all' ? 'all' : Number(value) as PriorityNumber);
        }}
        options={[
          { value: 'all', label: '📋 모든 우선순위' },
          { value: '1', label: '❗ 높음' },
          { value: '2', label: '⚠️ 중간' },
          { value: '3', label: '✅ 낮음' },
        ]}
      />
      
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          checked={showCompleted}
          onChange={(e) => onShowCompletedChange(e.target.checked)}
          className="h-4 w-4 text-primary-600 rounded border-gray-300 focus:ring-primary-500"
        />
        <span className="text-sm text-gray-700">
          {showCompleted ? '✅ 완료된 항목 표시' : '❌ 완료된 항목 숨기기'}
        </span>
      </label>
    </div>
  );
}; 