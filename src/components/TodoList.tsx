import { useActions } from "hooks/useActions"
import { useTypedSelector } from "hooks/useTypedSelector"
import { useEffect } from "react"
import { getTodoState } from "store/selectors/todoSelectors"

export const TodoList = () => {
  const {error, isLoading, limit, page, todos} = useTypedSelector(getTodoState)
  const {fetchTodo, setPage} = useActions()

  useEffect(() => {
    fetchTodo(page, limit)
  }, [page]);

  const nextPage = () => { 
    if (page === 5) return 
    setPage(page + 1)
   }
  const prevPage = () => { 
    if (page === 1) return 
    setPage(page - 1)
   }

  if (isLoading) {
    return <div className="flex justify-center items-center">
      <span className="loading loading-spinner loading-lg"></span>
    </div>
  }
  
  if (error) {
    return <h1>{error}.</h1>
  }
  
  return (
    <div className="mt-5 max-w-4xl w-5/6 mx-auto overflow-x-auto">
      <table className="table">
        <thead>
        <tr>
          <th></th>
          <th>Todo</th>
          <th>ID</th>
        </tr>
      </thead>
      <tbody>
        {todos.map((todo, index) => (
          <tr key={todo.id}>
          <th>{index + 1}</th>
          <td>{todo.title}</td>
          <td>{todo.id}</td>
        </tr>
        ))}
        </tbody>
      </table>
      <div className="join grid grid-cols-2 w-52 mt-4 mx-auto">
        <button 
          onClick={prevPage} 
          disabled={page === 1} 
          className="join-item btn btn-outline btn-primary">
            Previous page
          </button>
        <button 
          onClick={nextPage} 
          disabled={page === 5} 
          className="join-item btn btn-outline btn-primary">
            Next
          </button>
      </div>
    </div>
  )
}