function Contact(){
    return (
        <section className="contact" id="contact">
            
            <div className="container min-vh-100">

                <div className="row justify-content-center">

                    <h1 className="heading"><span>'</span>make an appoinment<span>'</span></h1>

                    <div className="col-md-10" data-aos="flip-down">

                        <form action ="">

                            <div className="inputBox">
                                <input type="text" placeholder="full name"></input>
                                <input type="number" placeholder="phone"></input>
                            </div>

                            <div className="inputBox">
                                <input type="email" placeholder="your email"></input>
                                <select name="" id="">
                                    <option value="" disabled selected>make an appointment</option>
                                    <option value="09-11 am">09-11 am</option>
                                    <option value="11-03 pm">11-03 pm</option>
                                    <option value="03-06 pm">03-06 pm</option>
                                    <option value="06-09 pm">06-09 pm</option>

                                </select>
                            </div>

                            <textarea name="" id="" cols="30" rows="10" placeholer="message ( optional )"></textarea>
                            <input type="submit" name="" id="" value= "make appoinment" class="button"></input>
                        </form>
                    </div>
                </div>
            </div>


        </section>
    )
}

export default Contact;