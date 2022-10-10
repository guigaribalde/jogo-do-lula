import { Player } from '@interfaces/Player';
import React, { createContext, useState } from 'react';

export interface GameProps {
  failInGame: (alivePlayers: Player[]) => string[];
  getPrizePool: (deadPlayers: Player[]) => number;
  isGameOver: (alivePlayers: Player[]) => boolean;
  startNewRound: (
    alivePlayers: Player[],
    kill: (ids: string[]) => void
  ) => void;
  quittersAmount: number;
  gameOver: boolean;
  round: number;
  maxPrizePool: number;
}

export const GameContext = createContext({} as GameProps);

export function GameProvider({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  const [quittersAmount, setQuittersAmount] = useState(0);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [round, setRound] = useState(0);

  const failChance = 42;
  const forfeitChance = 30;
  const prizePerDead = 420_000;
  const quitterPercentToGameOver = 0.5;
  const players = 69;
  const maxPrizePool = players * prizePerDead;

  const failInGame = (alivePlayers: Player[]): string[] => {
    const failPlayersIds: string[] = [];

    alivePlayers.forEach((player) => {
      const random = Math.floor(Math.random() * 100);

      if (random <= failChance) {
        failPlayersIds.push(player.id);
      }

      return failPlayersIds;
    });

    if (failPlayersIds.length === alivePlayers.length) {
      setGameOver(true);
    }

    return failPlayersIds;
  };

  const getPrizePool = (deadPlayers: Player[]): number => {
    return deadPlayers.length * prizePerDead;
  };

  const isGameOver = (alivePlayers: Player[]): boolean => {
    const quitterPlayersIds: string[] = [];

    alivePlayers.forEach((player) => {
      const random = Math.floor(Math.random() * 100);

      if (random <= forfeitChance) {
        quitterPlayersIds.push(player.id);
      }
    });

    setQuittersAmount(quitterPlayersIds.length);

    return (
      alivePlayers.length === 1 ||
      alivePlayers.length === 0 ||
      quitterPlayersIds.length / alivePlayers.length >= quitterPercentToGameOver
    );
  };

  const startNewRound = (
    alivePlayers: Player[],
    kill: (ids: string[]) => void
  ) => {
    if (isGameOver(alivePlayers)) {
      setGameOver(true);
    } else {
      setRound(round + 1);
      kill(failInGame(alivePlayers));
    }
  };

  return (
    <GameContext.Provider
      // eslint-disable-next-line
      value={{
        failInGame,
        getPrizePool,
        isGameOver,
        quittersAmount,
        gameOver,
        round,
        startNewRound,
        maxPrizePool,
      }}
    >
      {children}
    </GameContext.Provider>
  );
}
