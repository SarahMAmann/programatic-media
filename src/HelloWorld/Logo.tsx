import {
	AbsoluteFill,
	interpolate,
	spring,
	useCurrentFrame,
	useVideoConfig,
} from 'remotion';
import {Atom} from './Atom';

export const Logo: React.FC = () => {
	const videoConfig = useVideoConfig();
	const frame = useCurrentFrame();

	const development = spring({
		config: {
			damping: 100,
			mass: 0.5,
		},
		fps: videoConfig.fps,
		frame,
	});

	const rotationDevelopment = spring({
		config: {
			damping: 100,
			mass: 0.5,
		},
		fps: videoConfig.fps,
		frame,
	});

	const scale = spring({
		frame,
		config: {
			mass: 0.5,
		},
		fps: videoConfig.fps,
	});

	const logoRotation = interpolate(
		frame,
		[0, videoConfig.durationInFrames],
		[0, 360]
	);

	return (
		<AbsoluteFill
			style={{
				transform: `scale(${scale}) rotate(${logoRotation}deg)`,
				justifyContent: "center",
        alignItems: "center",
			}}
		>
			<Atom scale={rotationDevelopment} />
		</AbsoluteFill>
	);
};
