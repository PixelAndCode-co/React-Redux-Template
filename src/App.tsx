import { Link, Route, Routes } from "react-router-dom"
import "./App.css"
import { About } from "./pages/About"
import { Home } from "./pages/Home"

export const App = () => (
  <div className="App p-4">
    <nav className="mb-4">
      <ul className="flex gap-4">
        <li>
          <Link to="/" className="text-blue-600 hover:underline">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-blue-600 hover:underline">
            About
          </Link>
        </li>
      </ul>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </div>
)
