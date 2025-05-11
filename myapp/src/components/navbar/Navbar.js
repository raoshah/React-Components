import {useRef} from 'react';
import './Navbar.css'


const Navbar = () => {
    const checkBoxRef = useRef(null);

    const handleLinkClick = () => {
        if (checkBoxRef.current) {
            checkBoxRef.current.checked = false;
        }
    }
    const navLinks = [
        {path:"#", title:"Home"},
        {path:"/", title:"About"},
        {path:"/", title:"Services"},
        {path:"/", title:"Contact"}
    ]
    return <nav class="navbar">
        <div class="logo">MyBrand</div>

        <input type="checkbox" id="toggle" class="checkbox" ref={checkBoxRef} />
        <label for="toggle" class="hamburger">
            <span></span>
            <span></span>
            <span></span>
        </label>

        <ul class="nav-links">
            {navLinks.map(obj => <li><a href={obj.path} onClick={handleLinkClick}>{obj.title}</a></li>)}
        </ul>
    </nav>
}

export default Navbar;