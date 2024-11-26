import { useState, useEffect, ChangeEvent } from 'react';
import { Input } from '../UI/Input';
import { useDebounce } from '../../hooks/useDebounce';

interface TodoSearchProps {
  onSearch: (query: string) => void;
}

export const TodoSearch = ({ onSearch }: TodoSearchProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const debouncedQuery = useDebounce(searchQuery, 300);

  useEffect(() => {
    onSearch(debouncedQuery);
  }, [debouncedQuery, onSearch]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  return (
    <Input
      placeholder="할 일 검색..."
      value={searchQuery}
      onChange={handleChange}
      className="max-w-md"
    />
  );
}; 