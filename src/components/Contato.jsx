import "../Styles/Contato.css";

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
            📱 WhatsApp
          </a>

          <a
            href="https://www.linkedin.com/in/gilberto-santos-45565825/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secundario"
          >
            💼 LinkedIn
          </a>
        </div>

      </div>
    </section>
  );
}

export default Contato;