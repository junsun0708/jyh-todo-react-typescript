import { Select } from '../UI/Select';

type SortOption = 'createdAt' | 'priority' | 'completed';
type SortDirection = 'asc' | 'desc';

interface TodoSortProps {
  sortBy: SortOption;
  direction: SortDirection;
  onSortChange: (sortBy: SortOption) => void;
  onDirectionChange: (direction: SortDirection) => void;
}

export const TodoSort = ({
  sortBy,
  direction,
  onSortChange,
  onDirectionChange,
}: TodoSortProps) => {
  return (
    <div className="flex items-center gap-4">
      <Select
        className="w-40"
        value={sortBy}
        onChange={(e) => onSortChange(e.target.value as SortOption)}
        options={[
          { value: 'createdAt', label: '생성일' },
          { value: 'priority', label: '우선순위' },
          { value: 'completed', label: '완료 상태' },
        ]}
      />
      
      <Select
        className="w-32"
        value={direction}
        onChange={(e) => onDirectionChange(e.target.value as SortDirection)}
        options={[
          { value: 'asc', label: '오름차순' },
          { value: 'desc', label: '내림차순' },
        ]}
      />
    </div>
  );
}; 