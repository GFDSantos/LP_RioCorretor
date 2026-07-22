import "../Styles/Portfolio.css";
import projetos from "../data/projetos";

function Portfolio() {
  return (
    <section id="portfolio">
      <div className="container">
        <h2>Projetos Desenvolvidos</h2>
        <p className="portfolio-subtitulo">
          Alguns dos projetos desenvolvidos para o mercado imobiliário.
        </p>

        <div className="cards">
          {projetos.map((projeto) => (
            <div className="card" key={projeto.id}>
              <div className="card-imagem">
                <img 
                  src={projeto.imagem}
                  alt={projeto.nome}
              />
              </div>
              <h3>{projeto.nome}</h3>
              <h4>{projeto.empresa}</h4>
              <p>{projeto.descricao}</p>
              <a
                href={projeto.link}
                target="_blank"
                rel="noreferrer"
                className="btn"
              >
                Ver Projeto
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;