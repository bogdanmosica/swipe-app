import { interpolate } from 'remotion';
import { CSSProperties } from 'react';

import QuotationMark from './QuotationMark';

type QuotationMarkTopProps = {
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
const QuotationMarkTop = ({ style, frame }: QuotationMarkTopProps) => {
  const translateY = interpolate(frame, [0, 20], [280, 0], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return <QuotationMark style={{ ...style }} />;
};
export default QuotationMarkTop;
