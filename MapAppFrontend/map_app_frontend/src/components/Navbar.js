//TODO: CONDITIONs FOR REGISTERED USERS
//TODO: ADD EVENT TO LOGOUT
//TODO ROUTER


const Navbar = (props) => {

    let links = <ul className="navbar-nav">
                    <li className="nav-item" style={{"marginLeft":5}}>
					    Home
					</li>
					<li className="nav-item" style={{"marginLeft":5}}>
                        Login
					</li>
					<li className="nav-item" style={{"marginLeft":5}}>
                        Logout
					</li>
                </ul>
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <p className="navbar-brand">Mapplication</p>
            {links}
        </nav>
    )

}

export default Navbar;