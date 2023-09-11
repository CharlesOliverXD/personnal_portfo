import Adress from "../components/contact/adress";
import Call from "../components/contact/call";
import Email from "../components/contact/email";
import Form from "../components/contact/form/form";
import Name from "../components/contact/form/form";
import Social from "../components/contact/social";


function Contact() {
  return (

    <section id="contact" className="contact">
      <div className="container">

        <div className="section-title">
          <h2>Contact</h2>
          <p>Contact Me</p>
        </div>

        <div className="row mt-2">

          <Adress />

          <Social />

          <Email/>
          
          <Call/>
        </div>

        <Form/>

      </div>
    </section>
  );
}

export default Contact;