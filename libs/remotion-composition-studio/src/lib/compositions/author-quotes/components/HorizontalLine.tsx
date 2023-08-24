import { interpolate, Easing } from 'remotion';

import { AnimationTypes } from './constants';
import { CSSProperties } from 'react';

import Line from './Line';

type HorizontalLineProps = {
  style: CSSProperties;
  className?: string;
  frame: number;
  animationType: AnimationTypes;
  value: number;
};
const HorizontalLine = ({
  style,
  className,
  frame,
  animationType,
  value,
}: HorizontalLineProps) => {
  const lineWidth = interpolate(frame, [0, 30], [0, value], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const fromBottom = interpolate(frame, [0, 30], [-value, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const fromTop = interpolate(frame, [0, 30], [value, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <>
      {animationType === AnimationTypes.WidthAnimation && (
        <Line
          className={`HorizontalLine ${className || ''}`}
          style={{
            ...style,
            width: `${lineWidth}px`,
            height: '5px',
            bottom: '400px',
            left: '160px',
          }}
        />
      )}
      {(animationType === AnimationTypes.FromTop ||
        animationType === AnimationTypes.FromBottom) && (
        <Line
          className={`HorizontalLine ${className || ''}`}
          style={{
            ...style,
            width: '200px',
            height: '5px',
            bottom: '400px',
            left: '160px',
            transform: `translateY(${
              animationType === AnimationTypes.FromTop ? fromBottom : fromTop
            }px)`,
          }}
        />
      )}
    </>
  );
};

export default HorizontalLine;
