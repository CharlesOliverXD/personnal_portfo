import ServicesElement from "../components/services/services";

function Services() {
    return (
        <section id="services" className="services">
            <div className="container">

                <div className="section-title">
                    <h2>Services</h2>
                    <p>My Services</p>
                </div>

                <div className="row">

                    <ServicesElement title="Lorem Ipsum" icon="bx bxl-file"  description="Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi"/>
                    <ServicesElement title="Sed ut perspiciatis" icon="bx bxl-dribbble"  description="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore"/>
                    <ServicesElement title="Magni Dolores" icon="bx bxl-tachometer"  description="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia"/>
                    <ServicesElement title="Nemo Enim" icon="bx bxl-world"  description="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis"/>
                    <ServicesElement title="Dele cardo" icon="bx bxl-slideshow"  description="Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur"/>
                    <ServicesElement title="Divera don" icon="bx bxl-arch"  description="Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur"/>
                   

                </div>

            </div>
        </section>
    );
}

export default Services ;