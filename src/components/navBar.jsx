import "./navBar.css";

function NavBar(){
    return(
        <div className="navbar">
            <a href="/home"> Home </a>
            <a href="/catalog"> Catalog </a>
            <a href="/contact"> Contact Us </a>
            <form class="search-form"/>
    <input type="text" placeholder="Search" />
    <button type="submit">Search</button>
        </div>
    );
}

export default NavBar;