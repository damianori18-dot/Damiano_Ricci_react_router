import { Outlet } from 'react-router'
import Navbar from './Navbar'
export default function Layout() { 
  return (
    <div>
      <Navbar />
      <main>
        <Outlet />
      </main>
    </div>
  )
}
