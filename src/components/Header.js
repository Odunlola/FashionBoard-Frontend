import { Link } from 'react-router-dom';


function Header() {
    return (
        <div>
            <nav className="navbar">
                <Link to="/" className="logo"><img src="https://i.imgur.com/vfw1git.png" alt="ol" display='flex'
                    justifycontent='Right' alignitems='Right' /> </Link>
                <Link to="/" className="nav-item"> Home </Link>
                <Link to='/brands' className="nav-item"> Brands </Link>
                <Link to='/' className="nav-item"> Sign In </Link>
                <Link to='/' className="nav-item"> Sign Up</Link>
            </nav>
            <h2>Home for African & Black-Owned Fashion Brands</h2>
        </div>
    )
}

export default Header;