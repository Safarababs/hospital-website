import doctor from "./images/doctor.png";

function Home(){
    return (
    <section className="home" id="home">
    <div className="container">
        <div className="row min-vh-100 align-items-center text-center text-md-left">

        <div className="col-md-6 pr-md-5" data-aos="zoom-in">
            <img src={doctor} width="100%" alt="not supported in your browser" />
        </div>

        <div className="col-md-6 pl-md-5 content" data-aos="fade-left">
            <h1><span>stay</span> safe, <span>stay</span> healthy.</h1>
            <h3>caring for you.</h3>
            <a href="#about"><button className="button">learn more</button></a>
        </div>

        </div>
    </div>
    </section>
)}

export default Home;