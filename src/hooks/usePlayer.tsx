import { PlayerProps, PlayersContext } from '@contexts/PlayerContext';
import { useContext } from 'react';

export default function usePlayer() {
  const context = useContext(PlayersContext);
  return context as PlayerProps;
}
