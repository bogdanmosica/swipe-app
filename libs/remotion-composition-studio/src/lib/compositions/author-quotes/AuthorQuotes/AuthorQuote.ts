import { interpolate, spring, useCurrentFrame, useVideoConfig } from "remotion";

import { FontFamilies } from "../components/constants";
/**
 ** TODO
 ** extract this in a Box component customizable with animations
 * @param {style} props.style
 * @return {*} A box with a cool animation with borders
 */
export const AuthorQuote = ({
	style,
	textColor,
	authorQuote = "Give me six hours to chop down a tree and I will spend the first four sharpening the axe.",
}) => {
	const frame = useCurrentFrame();
	const videoConfig = useVideoConfig();

	const fromBottom = interpolate(frame, [0, 10], [-80, 0], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});

	const opacity = interpolate(frame, [0, 30], [0, 1]);
	return (
		<div
			style={{
				fontFamily: FontFamilies.CinzelDecorative,
				fontSize: "75px",
				fontWeight: 700,
				width: "50%",
				textAlign: "center",
				left: "50%",
				transform: "translateX(-50%)",
				top: "350px",
				position: "absolute",
				color: textColor,
			}}>
			{authorQuote.split(" ").map((t, i) => {
				const delay = i * 5;

				const scale = spring({
					fps: videoConfig.fps,
					frame: frame - delay,
					config: {
						damping: 200,
					},
				});

				return (
					<span
						key={`${t}_${i}`}
						style={{
							marginLeft: 10,
							marginRight: 10,
							display: "inline-block",
							transform: `scale(${scale})`,
							opacity,
						}}>
						{t}
					</span>
				);
			})}
		</div>
	);
};
