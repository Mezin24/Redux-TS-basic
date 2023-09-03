import { useActions } from "hooks/useActions"
import { useTypedSelector } from "hooks/useTypedSelector"
import { useEffect } from "react"
import { getUserState } from "store/selectors/userSelectors"

export const UserList = () => {
  const {error, isLoading, users} = useTypedSelector(getUserState)
  const {fetchUsers} = useActions()

  useEffect(() => {
    fetchUsers()
  }, []);

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
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <tr key={user.id}>
          <th>{index + 1}</th>
          <td>{user.name}</td>
          <td>{user.email}</td>
        </tr>
        ))}
        </tbody>
      </table>
    </div>
  )
}