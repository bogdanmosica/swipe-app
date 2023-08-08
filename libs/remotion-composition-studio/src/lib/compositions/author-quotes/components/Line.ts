export const Line = ({ style, className }) => {
	return (
		<div
			className={`Line ${className || ""}`}
			style={{
				...style,
				position: "absolute",
			}}></div>
	);
};
