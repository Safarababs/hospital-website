import img1 from "./images/img9.jpeg";
import img2 from "./images/img10.webp";
import img3 from "./images/img11.webp";




function Review(){
    return (
        <section className="review" id="review">

        <div className="container">
            <h1 className="heading"><span>'</span>people's review<span>'</span></h1>

            <div className="box-container">

                <div className="box" data-aos="fade-right">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur accusantium error numquam dolore atque. Atque totam ad sint ducimus! Maxime!</p>
                    <h3>someone's review</h3>
                    <span>jan 5, 2022</span>
                    <img src={img1} alt="not supported for your browser contact to developer" />
                </div>

                <div className="box" data-aos="fade-right">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur accusantium error numquam dolore atque. Atque totam ad sint ducimus! Maxime!</p>
                    <h3>someone's review</h3>
                    <span>jan 5, 2022</span>
                    <img src={img2} alt="not supported for your browser contact to developer" />
                </div>

                <div className="box" data-aos="fade-right">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consectetur accusantium error numquam dolore atque. Atque totam ad sint ducimus! Maxime!</p>
                    <h3>someone's review</h3>
                    <span>jan 5, 2022</span>
                    <img src={img3} alt="not supported for your browser contact to developer" />
                </div>

            </div>
        </div>
        </section>
    )
}

export default Review;