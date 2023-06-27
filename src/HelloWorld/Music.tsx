import { useAudioData, visualizeAudio } from "@remotion/media-utils";
import { Audio, useCurrentFrame, useVideoConfig } from "remotion";
import music from "../../public/religious_trauma_track.wav";
 
export const Music: React.FC = () => {
  const frame = useCurrentFrame();
  const { width, height, fps } = useVideoConfig();
  const audioData = useAudioData(music);
 
  if (!audioData) {
    return null;
  }
 
  const visualization = visualizeAudio({
    fps,
    frame,
    audioData,
    numberOfSamples: 16,
  }); // [0.22, 0.1, 0.01, 0.01, 0.01, 0.02, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
 
  // Render a bar chart for each frequency, the higher the amplitude,
  // the longer the bar
  return (
    <div>
      <Audio src={music} />
      {visualization.map((v) => {
        return (
          <div
            style={{ width: 2000 * v, height: 15, backgroundColor: "blue" }}
          />
        );
      })}
    </div>
  );
};