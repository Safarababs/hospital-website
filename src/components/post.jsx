import img1 from "./images/img1.jpg";
import img2 from "./images/img5.jpg";
import img3 from "./images/img3.jpg";




function Post(){
    return (
        <section id="post" className="post">
            <div className="container min-vh-100">

                <h1 className="heading"><span>'</span>our posts<span></span></h1>

                <div className="box-container">

                    <div className="box" data-aos="fade-right">
                        <img src={img1} alt="your browser not supported this image" />
                        <div className="content">
                            <span>jan 5, 2022</span>
                            <a href="#home"><h3>post titles goes here</h3></a>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ex porro libero at veniam molestias facere quo necessitatibus ipsum ad?</p>
                            <a href="#"><button className="button">learn more</button></a>
                        </div>
                    </div>

                    <div className="box" data-aos="fade-up">
                        <img src={img2} alt="your browser not supported this image" />
                        <div className="content">
                            <span>jan 5, 2022</span>
                            <a href="#home"><h3>post titles goes here</h3></a>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ex porro libero at veniam molestias facere quo necessitatibus ipsum ad?</p>
                            <a href="#"><button className="button">learn more</button></a>
                        </div>
                    </div>

                    <div className="box" data-aos="fade-left">
                        <img src={img3} alt="your browser not supported this image" />
                        <div className="content">
                            <span>jan 5, 2022</span>
                            <a href="#home"><h3>post titles goes here</h3></a>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ex porro libero at veniam molestias facere quo necessitatibus ipsum ad?</p>
                            <a href="#"><button className="button">learn more</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Post;