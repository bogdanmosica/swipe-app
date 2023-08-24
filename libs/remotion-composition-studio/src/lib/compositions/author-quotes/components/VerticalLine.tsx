import { interpolate, Easing } from 'remotion';

import Line from './Line';
import { AnimationTypes } from './constants';
import { CSSProperties } from 'react';

type VerticalLineProps = {
  className?: string;
  animationType: number;
  style: CSSProperties;
  frame: number;
  value: number;
};

const VerticalLine = ({
  style,
  className,
  frame,
  animationType,
  value,
}: VerticalLineProps) => {
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
export default VerticalLine;
