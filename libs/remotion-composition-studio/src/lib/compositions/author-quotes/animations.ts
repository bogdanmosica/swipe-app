import { interpolate } from "remotion";

/**
 *
 * @returns it is
 */
export const interpolateHorizontalWidth = (
	input,
	inputRange = [0, 18],
	outputRange = [0, 330],
	options = {
		extrapolateLeft: "clamp",
		extrapolateRight: "clamp",
	}
) => {
	return interpolate(input, inputRange, outputRange, options);
};
