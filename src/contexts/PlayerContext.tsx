// eslint-disable-next-line
import shuffle from '@/utils';
import { ApiPlayer, Player } from '@interfaces/Player';
import api from '@lib/api';
import React, { createContext, useEffect, useState } from 'react';

export interface PlayerProps {
  players: Player[];
  generateNewPlayers: () => void;
  alivePlayers: Player[];
  deadPlayers: Player[];
  loading: boolean;
  kill: (ids: string[]) => void;
}

export const PlayersContext = createContext({} as PlayerProps);

const fetchPlayers = async () => {
  const { data }: { data: ApiPlayer[] } = await api.get('/players');

  const players: Player[] = data.map((player) => {
    return {
      id: player.id,
      name: player.name,
      number: Number(player.number),
      image: player.image,
      status: 'alive',
    };
  });

  return players;
};

export function PlayerProvider({
  children,
  generateNew,
}: {
  children: React.ReactNode;
  generateNew?: boolean;
}): JSX.Element {
  const [generatePlayers, setGeneratePlayers] = useState<boolean>(
    generateNew || false
  );
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (generatePlayers) {
      setLoading(true);
      fetchPlayers()
        .then((fetchedPlayers) => {
          return setPlayers(shuffle(fetchedPlayers));
        })
        .finally(() => {
          setGeneratePlayers(false);
          setLoading(false);
        });
    }
  }, [generatePlayers]);

  const generateNewPlayers = () => {
    return setGeneratePlayers(true);
  };

  const kill = (ids: string[]) => {
    setPlayers((oldPlayers) => {
      return oldPlayers.map((player) => {
        if (ids.includes(player.id)) {
          return {
            ...player,
            status: 'dead',
          };
        }

        return player;
      });
    });
  };

  const alivePlayers = players.filter((player) => {
    return player.status === 'alive';
  });
  const deadPlayers = players.filter((player) => {
    return player.status === 'dead';
  });

  return (
    <PlayersContext.Provider
      // eslint-disable-next-line
      value={{
        players,
        generateNewPlayers,
        alivePlayers,
        deadPlayers,
        loading,
        kill,
      }}
    >
      {children}
    </PlayersContext.Provider>
  );
}

PlayerProvider.defaultProps = {
  generateNew: false,
};
