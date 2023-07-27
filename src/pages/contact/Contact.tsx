import Header from "../../components/Header";
import HeaderImage from "../../images/header_bg_2.jpg";
import { FaWhatsapp, FaFacebookMessenger, FaEnvelope } from "react-icons/fa6";
import "./Contact.css";

function Contact() {
  return (
    <>
      <Header title="Get In Touch" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
        veniam doloribus inventore praesentium velit ex iure eaque ab recusandae
        quia expedita ad illum, odio, odit culpa repellat voluptate ratione
        eveniet!
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a
              href="mailto:dian@mail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://wa.me/628123456789"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp />
            </a>
            <a
              href="https://m.me/dian"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookMessenger />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;
