import { Outlet } from "react-router-dom"
import Navbar from "./components/Navbar"

export default function App() {
  return (
    <div>
      <nav><Navbar/></nav>

      <main><Outlet/></main>

    </div>
  )
}
