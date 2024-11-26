import { Button } from './components/UI/Button'
import { Input } from './components/UI/Input'
import { Select } from './components/UI/Select'
import { Badge } from './components/UI/Badge'

function App() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Todo App</h1>
      
      {/* UI 컴포넌트 테스트 */}
      <div className="space-y-4">
        <Button>Click me</Button>
        
        <Input label="Todo" placeholder="Enter your todo" />
        
        <Select 
          label="Priority" 
          options={[
            { value: 'high', label: 'High' },
            { value: 'medium', label: 'Medium' },
            { value: 'low', label: 'Low' },
          ]} 
        />
        
        <div className="space-x-2">
          <Badge variant="high">High</Badge>
          <Badge variant="medium">Medium</Badge>
          <Badge variant="low">Low</Badge>
        </div>
      </div>
    </div>
  )
}

export default App 