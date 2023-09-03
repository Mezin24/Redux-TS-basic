import { TodoList } from "components/TodoList"
import { UserList } from "components/UserList"

const App = () => {
  return (
    <div className="mt-5">
      <TodoList/>
      <div className="divider"></div> 
      <UserList/>
    </div>
  )
}
export default App