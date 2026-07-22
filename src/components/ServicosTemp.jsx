import "../styles/servicos.css";

function Servicos() {
  const servicos = [
    "Landing Pages Imobiliárias",
    "Sites Institucionais",
    "Atualizações e Manutenção",
    "Hospedagem e Publicação",
    "Domínio Personalizado",
    "Responsividade",
    "Otimização de Desempenho",
    "Integração com WhatsApp",
  ];

  return (
    <section id="servicos" className="servicos">
      <div className="container">

        <h2>Serviços</h2>

        <p className="servicos-subtitulo">
          Soluções para destacar empreendimentos e fortalecer a presença digital
          de corretores, imobiliárias e construtoras.
        </p>

        <div className="servicos-grid">
          {servicos.map((servico, index) => (
            <div className="servico-card" key={index}>
              <h3>{servico}</h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Servicos;