import React from "react";
import ElementCount from "../components/about/elementCount";
import Skills from "../components/about/skills";
import Interests from "../components/about/interests";
import Testimonies from "../components/about/testimonies";

function About() {
    return (
        <section id="about" className="about">


            <div className="about-me container">

                <div className="section-title">
                    <h2>About</h2>
                    <p>Learn more about me</p>
                </div>

                <div className="row">
                    <div className="col-lg-4" data-aos="fade-right">
                        <img src="/img/me.jpg" className="img-fluid" alt="" />
                    </div>
                    <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
                        <h3>UI/UX &amp; Graphic Designer</h3>
                        <p className="fst-italic">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore
                            magna aliqua.
                        </p>
                        <div className="row">
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Birthday:</strong> <span>1 May
                                        1995</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Website:</strong>
                                        <span>www.example.com</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Phone:</strong> <span>+123 456
                                        7890</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>City:</strong> <span>New York,
                                        USA</span></li>
                                </ul>
                            </div>
                            <div className="col-lg-6">
                                <ul>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Age:</strong> <span>30</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Degree:</strong> <span>Master</span>
                                    </li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>PhEmailone:</strong>
                                        <span>email@example.com</span></li>
                                    <li><i className="bi bi-chevron-right"></i> <strong>Freelance:</strong>
                                        <span>Available</span></li>
                                </ul>
                            </div>
                        </div>
                        <p>
                            Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci
                            omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
                            Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque
                            neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni
                            laudantium dolores.
                        </p>
                    </div>
                </div>

            </div>

            <div className="counts container">

                <div className="row">

                    <ElementCount icon="bi bi-emoji-smile" text="Happy Clients" purecounterend="232" />
                    <ElementCount icon="bi bi-journal-richtext" text="Projects" purecounterend="521" />
                    <ElementCount icon="bi bi-headset" text="Hours Of Support" purecounterend="1463" />
                    <ElementCount icon="bi bi-award" text="Awards" purecounterend="24" />

                </div>

            </div>

            <div className="skills container">

                <div className="section-title">
                    <h2>Skills</h2>
                </div>

                <div className="row skills-content">

                    <div className="col-lg-6">

                        <Skills name="HTML" value="100%" />
                        <Skills name="CSS" value="90%" />
                        <Skills name="JavaScript" value="75%" />


                    </div>

                    <div className="col-lg-6">

                        <Skills name="PHP" value="80%" />
                        <Skills name="WordPress/CMS" value="90%" />
                        <Skills name="Photoshop" value="55%" />

                    </div>

                </div>

            </div>


            <div className="interests container">

                <div className="section-title">
                    <h2>Interests</h2>
                </div>

                <div className="row">
                    <Interests icon="ri-store-line" text="Dolor rutomnalo" />
                    <Interests icon="ri-bar-chart-box-line" text="Dolor Sitema" />
                    <Interests icon="ri-calendar-todo-line" text="Sed perspiciatis" />
                    <Interests icon="ri-paint-brush-line" text="Magni Dolores" />
                    <Interests icon="ri-database-2-line" text="Nemo Enim" />
                    <Interests icon="ri-gradienter-line" text="Eiusmod Tempor" />
                    <Interests icon="ri-file-list-3-line" text="Midela Teren" />
                    <Interests icon="ri-price-tag-2-line" text="Pira Neve" />
                    <Interests icon="ri-anchor-line" text="Dirada Pack" />
                    <Interests icon="ri-disc-line" text="Moton Ideal" />
                    <Interests icon="ri-base-station-line" text="Verdo Park" />
                    <Interests icon="ri-fingerprint-line" text="Flavor Nivelanda" />

                </div>

            </div>


            <div className="testimonials container">

                <div className="section-title">
                    <h2>Testimonials</h2>
                </div>

                <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
                    <div className="swiper-wrapper">

                        <Testimonies name="Saul Goodman" poste="Ceo &amp; Founder" text="Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit
                                    rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                                    risus at semper." />

                        <Testimonies name="Sara Wilsson" poste="Designer" text="Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid
                                    cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet
                                    legam anim culpa." />


                        <Testimonies name="Jena Karlis" poste="Store owner" text="Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam
                                    duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim." />


                        <Testimonies name="Matt Brandon" poste="Freelancer" text="Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat
                                    minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore
                                    labore illum veniam." />


                        <Testimonies name="John Larson" poste="Entrepreneur" text="Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster
                                    veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam
                                    culpa fore nisi cillum quid." />


                    </div>
                    <div className="swiper-pagination"></div>
                </div>

                <div className="owl-carousel testimonials-carousel">

                </div>

            </div>

        </section>


    );
}

export default About;