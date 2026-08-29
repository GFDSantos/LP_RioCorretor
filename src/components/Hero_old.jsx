import "../Styles/Hero.css";

import logoCury from "../assets/logos/logo_cury.png";
import logoRiva from "../assets/logos/logo_rivavendas.png";
import logoNovolar from "../assets/logos/logo_novolar.png";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="container hero-container">

        {/* Texto */}
        <div className="hero-texto">

          <h2 className="hero-tag">
            Soluções Digitais para o Mercado Imobiliário
          </h2>

          <h1>
            Transformando empreendimentos em experiências digitais.
          </h1>

          <p>
            Landing Pages, Sites e Portais Imobiliários desenvolvidos para
            construtoras, incorporadoras, imobiliárias e corretores de imóveis.
          </p>

          <a href="#portfolio" className="btn">
            Conheça meus projetos
          </a>

        </div>

        {/* Logos */}
        <div className="hero-imagem">

          {/* CURY */}
          <div className="empresa">

            <img
              src={logoCury}
              alt="Cury Vendas"
              className="logo-cury"
            />

            <ul>
              <li>Orla Central</li>
              <li>Caminhos da Guanabara</li>
              <li>Saudosa Praça XI</li>
              <li>Nova Leopoldina</li>
            </ul>

          </div>

          <hr />

          {/* RIVA */}
          <div className="empresa">

            <img
              src={logoRiva}
              alt="Riva Vendas"
              className="logo-riva"
            />

            <p>Portal Imobiliário</p>

          </div>

          <hr />

          {/* NOVOLAR */}
          <div className="empresa">

            <img
              src={logoNovolar}
              alt="Novolar"
              className="logo-novolar"
            />

            <ul>
              <li>Novolar</li>
              <li>Village Park</li>
            </ul>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;
