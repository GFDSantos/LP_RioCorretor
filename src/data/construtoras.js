import logoCury from "../assets/logos/logo_cury.png";
import logoRiva from "../assets/logos/logo_rivavendas.png";
import logoNovolar from "../assets/logos/logo_novolar.png";
import logoMrv from "../assets/logos/logomrv.png";
import logoPatrimar from "../assets/logos/logo_patrimar.png";
import logoTenda from "../assets/logos/logotenda.png";

const construtoras = [
  {
    id: "cury",
    logo: logoCury,
    alt: "Cury Vendas",
    empreendimentos: [
      "Orla Central",
      "Caminhos da Guanabara",
      "Saudosa Praça XI",
      "Nova Leopoldina",
    ],
  },
  {
    id: "riva",
    logo: logoRiva,
    alt: "Riva Vendas",
    empreendimentos: ["Portal Riva Vendas"],
  },
  {
    id: "novolar",
    logo: logoNovolar,
    alt: "Novolar",
    empreendimentos: ["Novolar", "Village Park"],
  },
  {
    id: "mrv",
    logo: logoMrv,
    alt: "MRV",
    empreendimentos: ["Ritmos de Pilares"],
  },
  {
    id: "patrimar",
    logo: logoPatrimar,
    alt: "Patrimar",
    empreendimentos: ["Connect Square"],
  },
  {
    id: "tenda",
    logo: logoTenda,
    alt: "Tenda",
    empreendimentos: ["Elevato Bonsucesso"],
  },
];

export default construtoras;