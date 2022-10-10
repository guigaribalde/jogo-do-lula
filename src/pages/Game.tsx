import { PlayerProvider } from "@contexts/PlayerContext";
import usePlayer from "@hooks/usePlayer";
import RedButton from "@components/RedButton";
import useAudio from "@hooks/useAudio";
import { useEffect } from "react";
import Spinner from "@components/Spinner";
import PlayerList from "@components/PlayerList/PlayerList";
import { GameProvider } from "@/contexts/GameProvider";
import useGame from "@/hooks/useGame";
import InfoCard from "@components/InfoCard";
import PrizePool from "@components/PrizePool";

function GameCore() {
  const { alivePlayers, deadPlayers, loading, kill } = usePlayer();
  const {
    getPrizePool,
    quittersAmount,
    gameOver,
    startNewRound,
    round,
    maxPrizePool,
  } = useGame();

  const prizePool = getPrizePool(deadPlayers);

  const handleStartNewRound = () => {
    startNewRound(alivePlayers, kill);
  };

  if (loading)
    return (
      <div className="flex items-center justify-center h-screen p-5 ">
        <Spinner />
      </div>
    );

  if (gameOver) {
    return (
      <div className="flex items-center justify-between h-screen p-5 ">
        <PlayerList players={alivePlayers} title="VIVOS" />
        <div className="flex flex-col justify-between items-center h-full">
          <PrizePool prizePool={prizePool} maxPrizePool={maxPrizePool} />
          <div className='flex flex-col items-center'>
            <text className="text-3xl text-white">FIM DE JOGO!</text>
            {alivePlayers.length > 1 ? (
              <div className="flex flex-col items-center">
                <div className="flex flex-col">
                  {alivePlayers.map((player, index) => {
                    const separator = index === alivePlayers.length - 1 ? '' : index === alivePlayers.length - 2 ? ' e' : ','
                    return (
                      <text className="text-[#FF2d74]">{player.name}{separator} </text>
                    )
                  })}</div>
                <text className="text-stone-200">FORAM OS VENCEDORES!</text>
              </div>
            ) : alivePlayers.length === 1 ? (
              <text className="text-stone-200">JOGADOR <span className="text-[#FF2d74]">{alivePlayers[0].name}</span> FOI O VENCEDOR!</text>
            ) : (
              <text className="text-stone-200">TODOS OS JOGADORES ESTÃO MORTOS</text>
            )}
          </div>
          <InfoCard
            info={`${String(quittersAmount).padStart(2, "0")} DESISTENTES`}
            description={`RODADA ${String(round).padStart(2, "0")}`}
          />
        </div>
        <PlayerList players={deadPlayers} title="MORTOS" />
      </div>
    );
  }

  return (
    <div className="flex items-start justify-between h-screen p-5 ">
      <PlayerList players={alivePlayers} title="VIVOS" />
      <div className="flex flex-col justify-between items-center  h-full">
        <PrizePool prizePool={prizePool} maxPrizePool={maxPrizePool} />
        <RedButton onClick={handleStartNewRound} />
        <InfoCard
          info={`${String(quittersAmount).padStart(2, "0")} DESISTENTES`}
          description={`RODADA ${String(round).padStart(2, "0")}`}
        />
      </div>
      <PlayerList players={deadPlayers} title="MORTOS" />
    </div>
  );
}

function Game() {
  const { play: playMainTheme } = useAudio("main-theme.mp3");

  useEffect(() => {
    playMainTheme();
  }, []);

  return (
    <PlayerProvider generateNew>
      <GameProvider>
        <GameCore />
      </GameProvider>
    </PlayerProvider>
  );
}

export default Game;
