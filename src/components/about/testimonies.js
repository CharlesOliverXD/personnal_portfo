export default function Testimonies( {name ,poste ,text}) {
    return (

        <div className="swiper-slide">
            <div className="testimonial-item">
                <p>
                    <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                   {text}
                    <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src="/img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                <h3>{name}</h3>
                <h4>{poste}</h4>
            </div>
        </div>
    );

}