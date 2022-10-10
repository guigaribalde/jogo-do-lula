import React, { createContext, useEffect, useState } from "react";
import api from "@/lib/api";
import { ApiPlayer, Player } from "@/interfaces/Player";
import { shuffle } from "@/utils";

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
	const { data }: { data: ApiPlayer[] } = await api.get("/players");

	const players: Player[] = data.map((player) => ({
		id: player.id,
		name: player.name,
		number: Number(player.number),
		image: player.image,
		status: "alive",
	}));

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
				.then((players) => setPlayers(shuffle(players)))
				.finally(() => {
					setGeneratePlayers(false);
					setLoading(false);
				});
		}
	}, [generatePlayers]);

	const generateNewPlayers = () => setGeneratePlayers(true);
	const kill = (ids: string[]) => {
		setPlayers((players) =>
			players.map((player) => {
				if (ids.includes(player.id)) {
					return {
						...player,
						status: "dead",
					};
				}
				return player;
			})
		);
	};
	const alivePlayers = players.filter((player) => player.status === "alive");
	const deadPlayers = players.filter((player) => player.status === "dead");

	return (
		<PlayersContext.Provider
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
