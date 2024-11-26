import { FiEdit2, FiTrash2 } from 'react-icons/fi';
import { Badge } from '../UI/Badge.tsx';
import { Button } from '../UI/Button.tsx';
import { PRIORITY_MAP } from '../../types/todo';
import type { Todo } from '../../types/todo';

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onDelete: (id: string) => void;
  onEdit: (id: string, data: Partial<Todo>) => void;
}

export const TodoItem = ({ todo, onToggle, onDelete, onEdit }: TodoItemProps) => {
  return (
    <div className="relative bg-yellow-100 p-6 rounded-lg shadow-md transform transition-transform hover:-rotate-1 hover:scale-[1.02]">
      <div className="absolute top-0 left-0 right-0 h-3 bg-yellow-200 rounded-t-lg">
        <div className="flex justify-between px-2">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="w-1 h-2 bg-yellow-300 rounded-b" />
          ))}
        </div>
      </div>

      <div className="mt-2">
        <div className="flex items-start gap-3 mb-3">
          <input
            type="checkbox"
            checked={todo.isCompleted}
            onChange={() => onToggle(todo.id)}
            className="mt-1.5 h-4 w-4 text-primary-600 rounded border-gray-400 focus:ring-primary-500"
          />
          <div className="flex-1">
            <h3 className={`text-lg font-medium ${todo.isCompleted ? 'line-through text-gray-500' : 'text-gray-800'}`}>
              {todo.title}
            </h3>
            {todo.content && (
              <p className="mt-1 text-sm text-gray-600">
                {todo.content}
              </p>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between mt-4 pt-3 border-t border-yellow-200">
          <div className="flex items-center gap-2">
            <Badge variant={PRIORITY_MAP[todo.priority]}>{PRIORITY_MAP[todo.priority]}</Badge>
            <span className="text-xs text-gray-500">
              📅 {todo.createdAt.toDate().toLocaleDateString()}
            </span>
          </div>
          
          <div className="flex items-center gap-2">
            <Button
              variant="secondary"
              size="sm"
              onClick={() => onEdit(todo.id, { title: todo.title })}
              className="!p-2 !bg-yellow-200 hover:!bg-yellow-300"
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
      </div>
    </div>
  );
}; 