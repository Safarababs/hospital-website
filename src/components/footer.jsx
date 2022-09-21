function Footer(){
    return (
        <section className="footer" >
            <div className="container">

            <div className="row">

                <div className="col-md-4 text-left" data-aos="fade-right">
                    <a href="#" className="logo"><span>H</span>ealth<span>C</span>are.</a>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tenetur nemo porro quasi minima consequuntur dolorum, quas amet in autem id?</p>
                </div>

                <div className="col-md-4 text-left" data-aos="fade-up">

                    <h3>links</h3>
                    <a href="#home">home</a>
                    <a href="#about">about</a>
                    <a href="#facility">facility</a>
                    <a href="#review">review</a>
                    <a href="#contact">contact</a>
                    <a href="#post">post</a>
                </div>

                <div className="col-md-4 text-left icons" data-aos="fade-left">
                    <h3>share</h3>
                    <a href="#home"><i className="fab fa-facebook"></i>facebook</a>
                    <a href="#home"><i className="fab fa-twitter"></i>twitter</a>
                    <a href="#home"><i className="fab fa-instagram"></i>instagram</a>
                    <a href="#home"><i className="fab fa-github"></i>github</a>
                </div>
                </div>
            </div>

            <h1 className="credit text-center mx-auto">© copyright @ {new Date().getFullYear()} by <span>mr. safar abbas</span> | all rights reserved</h1>
        </section>
    )
}

export default Footer;