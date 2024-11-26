import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import { Badge } from '../UI/Badge';
import { Button } from '../UI/Button';
import type { Todo } from '../../types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string) => void;
}

export const TodoItem = ({ todo, onToggle, onDelete, onEdit }: TodoItemProps) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
      <div className="flex items-center space-x-4">
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={() => onToggle(todo.id)}
          className="h-4 w-4 text-primary-600 rounded border-gray-300 focus:ring-primary-500"
        />
        <div>
          <h3 className={`text-lg ${todo.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>
            {todo.title}
          </h3>
          <div className="flex items-center space-x-2 mt-1">
            <Badge variant={todo.priority}>{todo.priority}</Badge>
            <span className="text-sm text-gray-500">
              {todo.createdAt.toLocaleDateString()}
            </span>
          </div>
        </div>
      </div>
      
      <div className="flex items-center space-x-2">
        <Button
          variant="secondary"
          size="sm"
          onClick={() => onEdit(todo.id)}
          className="!p-2"
        >
          <FiEdit2 className="h-4 w-4" />
        </Button>
        <Button
          variant="danger"
          size="sm"
          onClick={() => onDelete(todo.id)}
          className="!p-2"
        >
          <FiTrash2 className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}; 