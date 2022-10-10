import { useEffect } from "react";
import Logo from "@assets/svg/logo.svg";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate()

  useEffect(() => {
  }, []);

  const handleExit = () => {
    window.close();
  }

  const handleStartNewGame = () => {
    navigate('/game')
  }

  return (
    <div className="w-full h-full min-h-screen flex justify-center items-center flex-col gap-20">
      <img src={Logo} alt="logo jogo do lula" className="logo" />
      <section className="gap-6 flex flex-col">
        <button className="text-6xl text-white hover:text-gray-500" onClick={handleStartNewGame}>INICIAR</button>
        <button className="text-6xl text-white hover:text-gray-500" onClick={handleExit}>SAIR</button>
      </section>
    </div>
  );
}

export default HomePage;
