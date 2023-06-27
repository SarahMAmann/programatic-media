import {spring} from 'remotion';
import {
	AbsoluteFill,
	interpolate,
	Sequence,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {Logo} from './HelloWorld/Logo';
import { NoiseComp } from './HelloWorld/Noise';
import { Music } from './HelloWorld/Music';

export const HelloWorld: React.FC<{
	titleText: string;
	titleColor: string;
}> = ({titleText, titleColor}) => {
	const frame = useCurrentFrame();
	const {durationInFrames, fps} = useVideoConfig();

	// Fade out the animation at the end
	const opacity = interpolate(
		frame,
		[durationInFrames - 25, durationInFrames - 15],
		[1, 0],
		{
			extrapolateLeft: 'clamp',
			extrapolateRight: 'clamp',
		}
	);

	return (
		<AbsoluteFill style={{backgroundColor: 'black'}}>
			<NoiseComp
			speed={5}
			circleRadius={2}
			maxOffset={47} />
			<AbsoluteFill style={{opacity}}>
				<AbsoluteFill>
					<Logo />
				</AbsoluteFill>
			</AbsoluteFill>
			<Music />
		</AbsoluteFill>
	);
};
