import React from "react";

const Header = () => {

    const navbarStyle = {
        padding: "20px",
    }

    return (
        <nav class="navbar navbar-light bg-light" style={navbarStyle}>
            <span class="navbar-brand mb-0 h1">Anthony Reedy</span>
        </nav>
    );
};

export default Header;
