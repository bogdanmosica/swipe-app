import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";
import { Box } from "../components/Box";
import { Line } from "../components/Line";
/**
 ** TODO
 ** extract this in a Box component customizable with animations
 * @param {style} props.style
 * @return {*} A box with a cool animation with borders
 */
export const AuthorName = ({
	style,
	color,
	textColor,
	authorName = "Abraham Lincoln",
}) => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();

	const opacity = interpolate(frame, [0, 30], [0, 1]);
	const scale = spring({
		fps: videoConfig.fps,
		frame: frame,
		config: {
			damping: 200,
		},
	});
	return (
		<Box color={color} frame={frame} width={290} height={105}>
			<span style={{ color: textColor, transform: `scale(${scale})`, opacity }}>
				{authorName}
			</span>
		</Box>
	);
};
