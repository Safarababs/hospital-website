function Header(){
    return (
        <header>

        <div className="container">
            <a href="#home" className="logo"><span>H</span>ealth<span>C</span>are.</a>

            <nav className="nav">
                <ul>
                    <li><a href="#home">home</a></li>
                    <li><a href="#about">about</a></li>
                    <li><a href="#facility">facility</a></li>
                    <li><a href="#review">review</a></li>
                    <li><a href="#contact">contact</a></li>
                    <li><a href="#post">post</a></li>
                </ul>
            </nav>

            <div className="fas fa-bars"></div>
        </div>
            
        </header>
    )
}

export default Header;