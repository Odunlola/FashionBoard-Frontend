import { Link } from 'react-router-dom';


function Header() {
    return(
        <div>
            <nav class="navbar">
            <a href="https://freecodecamp.org" class="logo"><img src="https://i.imgur.com/vfw1git.png" alt="ol" display='flex' 
        justifyContent= 'Right' alignItems= 'Right'/> </a>
                <Link to="/" class="nav-item"> Home </Link>
                <Link to= '/brands'class="nav-item"> Brands </Link>
                <Link to= '/brands'class="nav-item"> Sign In </Link>
                <Link to= '/brands'class="nav-item"> Sign Up</Link>
            </nav>
        <h2>Home for African & Black-Owned Fashion Brands</h2>
        </div>
    )
}

export default Header;