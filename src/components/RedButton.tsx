import ButtonPressed from "@assets/svg/ButtonPressed.svg";
import ButtonNormal from "@assets/svg/ButtonNormal.svg";
import { useEffect, useState } from "react";
import useAudio from "@/hooks/useAudio";

interface RedButtonProps {
	onClick: () => void;
}

export default function RedButton({ onClick }: RedButtonProps) {
	const [pressed, setPressed] = useState<boolean>(false);
	const { play: buttonSound } = useAudio("buttonClickSound.mp3");
	const { play: soundFX } = useAudio("red-light-sound.mp3");

	useEffect(() => {
		if (pressed) {
			buttonSound();
			soundFX();

			setTimeout(() => {
				onClick();
				setPressed(false);
			}, 1000 * 7); // 7 seconds
		}
	}, [pressed]);

	const handleClick = () => {
		setPressed(true);
	};

	return (
		<div onClick={handleClick} className="flex  items-end h-48">
			<img src={pressed ? ButtonPressed : ButtonNormal} alt="button" />
		</div>
	);
}
