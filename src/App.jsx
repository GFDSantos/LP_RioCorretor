import "./styles/global.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import Servicos from "./components/Servicos";
import Contato from "./components/Contato";
import Footer from "./components/Footer";
import BotaoWhatsApp from "./components/BotaoWhatsApp";

function App() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Portfolio />
        <Servicos />
        <Contato />
      </main>

      <Footer />
      <BotaoWhatsApp />
    </>
  );
}

export default App;