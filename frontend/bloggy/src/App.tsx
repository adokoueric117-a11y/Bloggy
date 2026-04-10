import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"
import Articles from "./Pages/Articles"

export default function App() {
  return (
    <div>
      <nav><Navbar/></nav>

      <main><Outlet/></main>
      
    </div>
  )
}
