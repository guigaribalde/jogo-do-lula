import { useEffect, useState } from 'react';

export default function useAudio(audio_path: string) {
  const [audio] = useState(new Audio(audio_path));
  const [playing, setPlaying] = useState<boolean>(false);

  const togglePlay = () => {
    return setPlaying((oldState: boolean) => {
      return !oldState;
    });
  };

  const pause = () => {
    return setPlaying(false);
  };

  const play = () => {
    return setPlaying(true);
  };

  // handle play and pause
  useEffect(() => {
    if (playing) audio.play();
    else audio.pause();
  }, [playing]);

  // handle audio end
  useEffect(() => {
    audio.addEventListener('ended', () => {
      setPlaying(false);
    });

    return () => {
      audio.removeEventListener('ended', () => {
        return setPlaying(false);
      });
    };
  }, []);

  return { togglePlay, pause, play };
}
