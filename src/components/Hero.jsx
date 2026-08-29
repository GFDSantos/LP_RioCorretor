import { useState, useEffect } from "react";
import "../Styles/Hero.css";
import construtoras from "../data/construtoras";

const INTERVALO_MS = 4000;

function Hero() {
  const [indiceAtual, setIndiceAtual] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndiceAtual((prev) => (prev + 1) % construtoras.length);
    }, INTERVALO_MS);

    return () => clearInterval(timer);
  }, []);

  const construtoraAtual = construtoras[indiceAtual];

  return (
    <section id="hero" className="hero">
      <div className="container hero-container">

        {/* Texto — fixo */}
        <div className="hero-texto">
          <h2 className="hero-tag">
            Soluções Digitais para o Mercado Imobiliário
          </h2>
          <h1>Transformando empreendimentos em experiências digitais.</h1>
          <p>
            Landing Pages, Sites e Portais Imobiliários desenvolvidos para
            construtoras, incorporadoras, imobiliárias e corretores de imóveis.
          </p>
          <a href="#portfolio" className="btn">Conheça meus projetos</a>
        </div>

        {/* Carrossel — lado direito */}
        <div className="hero-carrossel">
          <div className="carrossel-slide" key={construtoraAtual.id}>
            <img
              src={construtoraAtual.logo}
              alt={construtoraAtual.alt}
              className="carrossel-logo"
            />
            <ul>
              {construtoraAtual.empreendimentos.map((nome) => (
                <li key={nome}>{nome}</li>
              ))}
            </ul>
          </div>

          <div className="carrossel-dots">
            {construtoras.map((c, i) => (
              <button
                key={c.id}
                type="button"
                aria-label={`Ver ${c.alt}`}
                className={`dot ${i === indiceAtual ? "ativo" : ""}`}
                onClick={() => setIndiceAtual(i)}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

export default Hero;