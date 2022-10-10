import useWindowDimensions from '@hooks/useWindowDimensions';
import { Player } from '@interfaces/Player';
import { useState } from 'react';
import List from './List';

function RenderPlayerList({ players }: { players: Player[] }) {
  return (
    <div className="gap-2 flex flex-col">
      {players.map((player) => {
        return (
          <div
            key={player.id}
            className="border border-gray-300 rounded-md flex gap-2 max-h-12 overflow-hidden"
          >
            <img
              className="w-12 min-h-full "
              src={player.image}
              alt={player.name}
              loading="lazy"
            />
            <div>
              <span className="text-[#FF2d74]">
                {String(player.number).padStart(3, '0')}
              </span>{' '}
              <p>{player.name}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default function PlayerList({
  players,
  title,
}: {
  players: Player[];
  title: string;
}) {
  const { width } = useWindowDimensions();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    return setIsOpen(!isOpen);
  };

  return (
    <>
      {/* layer for responsivness */}
      {width > 1200 ? (
        <List title={`${String(players.length).padStart(2, '0')} ${title}`}>
          <RenderPlayerList players={players} />
        </List>
      ) : (
        <>
          {/* eslint-disable-next-line */}
          <div
            className="w-10 h-10 rounded bg-white flex justify-center items-center cursor-pointer text-[#FF2d74]"
            onClick={toggleOpen}
          >
            {players.length}
          </div>
          {isOpen && (
            <div className="absolute top-0 bottom-0 left-0 right-0 bg-stone-200 z-10 h-full">
              <div className="p-5">
                {/* eslint-disable-next-line */}
                <span
                  className="text-red-500 cursor-pointer"
                  onClick={toggleOpen}
                >
                  x
                </span>
              </div>
              <div className="flex justify-center bg-stone-200">
                <List
                  title={`${String(players.length).padStart(2, '0')} ${title}`}
                >
                  <RenderPlayerList players={players} />
                </List>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
