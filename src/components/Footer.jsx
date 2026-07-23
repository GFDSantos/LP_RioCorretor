import "../Styles/Footer.css";
import { FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">

        <h3>RioCorretor<span>.dev</span></h3>

        <div className="footer-links">
          <a
            href="https://wa.me/5521972973535"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
            {" "}WhatsApp
          </a>
        </div>

        <div className="footer-copy">
          <p>© 2026 RioCorretor. Todos os direitos reservados.</p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;