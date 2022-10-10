import { GameContext, GameProps } from '@contexts/GameProvider';
import { useContext } from 'react';

export default function useGame() {
  const context = useContext(GameContext);
  return context as GameProps;
}
