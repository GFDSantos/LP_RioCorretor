import "../styles/footer.css";

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
            WhatsApp
          </a>

          <a
            href="https://www.linkedin.com/in/gilberto-santos-45565825/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
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