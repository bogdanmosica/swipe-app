import { interpolate, Easing } from 'remotion';

import { Line } from './Line';
import { AnimationTypes } from './constants';

export const VerticalLine = ({
  style,
  className,
  frame,
  animationType,
  value,
}: {
  className: string;
  animationType: number;
  style: object;
  frame: number;
  value: number;
}) => {
  const lineHeight = interpolate(frame, [0, 30], [0, value], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const fromLeft = interpolate(frame, [0, 30], [-value, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const fromRight = interpolate(frame, [0, 30], [value, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <>
      {animationType === AnimationTypes.HeightAnimation && (
        <Line
          className={`VerticalLine ${className || ''}`}
          style={{
            ...style,
            width: '5px',
            height: `${lineHeight}px`,
            bottom: '400px',
            left: '160px',
          }}
        />
      )}
      {(animationType === AnimationTypes.FromLeft ||
        animationType === AnimationTypes.FromRight) && (
        <Line
          className={`VerticalLine ${className || ''}`}
          style={{
            ...style,
            width: '5px',
            height: '830px',
            bottom: '400px',
            left: '160px',
            transform: `translateX(${
              animationType === AnimationTypes.FromLeft ? fromLeft : fromRight
            }px)`,
          }}
        />
      )}
    </>
  );
};
