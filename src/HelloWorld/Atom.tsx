import {useState} from 'react';
import {random, useVideoConfig} from 'remotion';
import {COLOR_1, COLOR_2} from './constants';
import { Img, staticFile } from "remotion";

export const Atom: React.FC<{
	scale: number;
}> = ({scale}) => {
	const config = useVideoConfig();

	const [gradientId] = useState(() => String(random(null)));

	return (
		<Img 
			src={staticFile("brainskull.png")} 
			height={840}
			width={650}
		/>
	);
};
