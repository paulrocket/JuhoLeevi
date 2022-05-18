//TODO: CONDITIONs FOR REGISTERED USERS
//TODO: ADD EVENT TO LOGOUT
//TODO ROUTER
import {Link} from 'react-router-dom';


const Navbar = (props) => {

    let links = <ul className="navbar-nav">
                    <li className="nav-item" style={{"marginLeft":5}}>Home</li>
          					<li className="nav-item" style={{"marginLeft":5}}>
                      <Link to ="/LoginPage">Login</Link>
                    </li>
          					<li className="nav-item" style={{"marginLeft":5}}>Logout</li>
                </ul>

                return (
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <p className="navbar-brand">Mapplication</p>
                        {links}
                    </nav>
                )

}

export default Navbar;
