import { RouterProvider } from 'react-router'
import { router } from './routing/router.jsx'
import './App.css'
import { UserContextProvider } from './context/UserContext.jsx'

function App() {
  return (
    <>
      <UserContextProvider>
        <RouterProvider router={router} />
      </UserContextProvider>
    </>
  )
}

export default App
