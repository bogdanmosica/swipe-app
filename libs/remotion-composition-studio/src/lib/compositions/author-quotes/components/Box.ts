import { interpolate } from "remotion";
import { Line } from "./Line";

import { FontFamilies } from "./constants";

import "../../font.css";

export const Box = ({
	style,
	className,
	frame,
	width,
	height,
	color,
	children,
}) => {
	const bottomLine = interpolate(frame, [0, 8], [0, width], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});

	const topLine = interpolate(frame, [8, 15], [0, width], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});

	const leftLine = interpolate(frame, [0, 8], [0, height], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});

	const rightLine = interpolate(frame, [8, 15], [0, height], {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	});

	return (
		<div
			className={`Box ${className || ""}`}
			style={{
				...style,
				position: "absolute",
				width: `${width}px` || "290px",
				height: `${height}px` || "85px",
				left: "50%",
				bottom: "350px",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				fontFamily: FontFamilies.PalanquinDark,
				fontWeight: 600,
				fontSize: "30px",
				transform: "translateX(-50%)",
			}}>
			{children}
			{/* Bottom line of the container */}
			<Line
				className="Bottom"
				style={{
					width: `${bottomLine}px`,
					height: "5px",
					bottom: 0,
					left: 0,
					backgroundColor: color,
				}}
			/>
			{/* Top line of the container */}
			<Line
				className="Top"
				style={{
					width: `${topLine}px`,
					height: "5px",
					bottom: `${height - 5}px`,
					left: 0,
					backgroundColor: color,
				}}
			/>
			{/* Left line of the container */}
			<Line
				className="Left"
				style={{
					width: "5px",
					height: `${leftLine}px`,
					right: `${width}px`,
					bottom: "0px",
					backgroundColor: color,
				}}
			/>
			{/* Right line of the container */}
			<Line
				className="Right"
				style={{
					width: "5px",
					height: `${rightLine}px`,
					right: "0px",
					bottom: "0px",
					backgroundColor: color,
				}}
			/>
		</div>
	);
};
