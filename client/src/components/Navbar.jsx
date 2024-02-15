import { Link } from "react-router-dom"



export default function Navbar() {
  return (
    <div className="buttons-container">
      <Link to='/'>
        <button className="nav-buttons" type="button">
            Home
        </button>
      </Link>
      <Link to='/register'>
        <button className="nav-buttons" type="button">
            Register
        </button>
      </Link>
      <Link to='/login'>
        <button className="nav-buttons" type="button">
            Login
        </button>
      </Link>
    </div>
  )
}
