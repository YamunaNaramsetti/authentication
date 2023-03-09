// Write your JS code here
import {Link} from 'react-router-dom'

const Header = () => (
  <div className="head-cont">
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
    </ul>
  </div>
)
export default Header
