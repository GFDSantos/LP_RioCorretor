import "../Styles/Contato.css";
import { FaWhatsapp } from "react-icons/fa";

function Contato() {
  return (
    <section id="contato" className="contato">
      <div className="container">

        <h2>Pronto para divulgar seu empreendimento?</h2>

        <p className="contato-subtitulo">
          Desenvolvo Landing Pages, Sites e Portais Imobiliários que valorizam empreendimentos e fortalecem a presença digital de construtoras, incorporadoras, imobiliárias e corretores de imóveis.
        </p>

        <div className="contato-botoes">

          <a
            href="https://wa.me/5521972973535"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            <FaWhatsapp />
            {" "}WhatsApp
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contato;