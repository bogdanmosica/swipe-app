import { interpolate } from 'remotion';

import { CSSProperties } from 'react';
import QuotationMark from './QuotationMark';

type QuotationMarkBottomProps = {
  style: CSSProperties;
  frame: number;
};
/**
 * ! TODO
 * * Extend with different animation types
 * * Document better
 * @param {style} props.style the style property for component
 * @returns a "" mark big with animations
 */
const QuotationMarkBottom = ({ style, frame }: QuotationMarkBottomProps) => {
  const translateX = interpolate(frame, [0, 20], [500, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  const swapX = interpolate(frame, [60, 90], [0, 940], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const swapY = interpolate(frame, [60, 90], [0, 1310], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  const scale = interpolate(frame, [60, 90], [0.7, 1310], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });
  return (
    <QuotationMark
      style={{
        ...style,
        // transform: `scale(0.7) translateX(${
        // 	translateX || -swapX
        // }px) translateY(${-swapY}px)`,
        transform: `scale(0.7) translateX(${translateX}px)`,
        bottom: '245px',
        right: '210px',
      }}
    />
  );
};
export default QuotationMarkBottom;
