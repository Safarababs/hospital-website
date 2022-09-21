import img1 from "./images/img1.jpg";
import img2 from "./images/img2.webp";
import img3 from "./images/img3.jpg";
import img4 from "./images/img4.webp";
import img5 from "./images/img5.jpg";
import img6 from "./images/img6.jpg";
import img7 from "./images/img7.webp";
import img8 from "./images/img8.webp";










function Facility(){
    return(
        <section className="facility" id="facility">
        <div className="container">
        <h1 class="heading"><span>'</span> our facilities <span>'</span></h1>
            <div className="box-container">
            <div className="box" data-aos="zoom-in">
                <a href={img1} title="our team"></a>
                <img src={img1} alt="not supported in your browser contact developer" />
            </div>

            <div className="box" data-aos="zoom-in">
                <a href={img2} title="our team"></a>
                <img src={img2} alt="not supported in your browser contact developer" />
            </div>

            <div className="box" data-aos="zoom-in">
                <a href={img3} title="our team"></a>
                <img src={img3} alt="not supported in your browser contact developer" />
            </div>

            <div className="box" data-aos="zoom-in">
                <a href={img4} title="our team"></a>
                <img src={img4} alt="not supported in your browser contact developer" />
            </div>

            <div className="box" data-aos="zoom-in">
                <a href={img5} title="our team"></a>
                <img src={img5} alt="not supported in your browser contact developer" />
            </div>

            <div className="box" data-aos="zoom-in">
                <a href={img6} title="our team"></a>
                <img src={img6} alt="not supported in your browser contact developer" />
            </div>

            <div className="box" data-aos="zoom-in">
                <a href={img7} title="our team"></a>
                <img src={img7} alt="not supported in your browser contact developer" />
            </div>

            <div className="box" data-aos="zoom-in">
                <a href={img8} title="our team"></a>
                <img src={img8} alt="not supported in your browser contact developer" />
            </div>

            </div>
        
        </div>
        </section>
    )


}

export default Facility;