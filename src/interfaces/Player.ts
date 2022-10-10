export interface ApiPlayer {
	id: string;
	name: string;
	number: number;
	image: string;
}

export interface Player {
	id: string;
	name: string;
	number: number;
	image: string;
	status: "alive" | "dead";
}
