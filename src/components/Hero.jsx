import "../Styles/Hero.css";

import logoCury from "../assets/logos/logo_cury.png";
import logoRiva from "../assets/logos/logo_rivavendas.png";

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
            </ul>

          </div>

          <hr />

          <div className="empresa">

            <img
              src={logoRiva}
              alt="Riva Vendas"
              className="logo-riva"
            />

            <p>Portal Imobiliário</p>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;