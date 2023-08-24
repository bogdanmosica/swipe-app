import { interpolate, ExtrapolateType } from 'remotion';

type InterpolateHorizontalWidthArguments = {
  input: number;
  inputRange: [number, number];
  outputRange: [number, number];
  options: {
    extrapolateLeft: ExtrapolateType;
    extrapolateRight: ExtrapolateType;
  };
};
/**
 *
 * @returns it is
 */
export const interpolateHorizontalWidth = ({
  input,
  inputRange = [0, 18],
  outputRange = [0, 330],
  options = {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  },
}: InterpolateHorizontalWidthArguments) => {
  return interpolate(input, inputRange, outputRange, options);
};
