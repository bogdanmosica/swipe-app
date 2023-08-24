import {
  AbsoluteFill,
  interpolate,
  useCurrentFrame,
  useVideoConfig,
  Easing,
} from 'remotion';
import AuthorName from './AuthorName';

import QuotationMarkTop from './QuotationMarkTop';
import QuotationMarkBottom from './QuotationMarkBottom';
import HorizontalLine from '../components/HorizontalLine';
import VerticalLine from '../components/VerticalLine';

import { AnimationTypes } from '../components/constants';
import AuthorQuote from './AuthorQuote';

type QuoteContainerProps = {
  color: string;
  backgroundColor: string;
  textColor: string;
};

const QuoteContainer = ({
  color,
  backgroundColor,
  textColor,
}: QuoteContainerProps) => {
  const frame = useCurrentFrame();

  const opacity = interpolate(frame, [0, 10], [0.2, 1], {
    extrapolateLeft: 'clamp',
    extrapolateRight: 'clamp',
  });

  return (
    <AbsoluteFill
      className="QuoteContainer"
      style={{
        /* From https://css.glass */ background: 'rgba(106, 13, 74, 0.3)',
        borderRadius: '16px',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(5.8px)',
        border: '1px solid rgba(106, 13, 74, 0.44)',
      }}
    >
      <AuthorQuote textColor={textColor} />
      {/* Top QuotationMark */}
      <QuotationMarkTop style={{ opacity, color }} frame={frame} />
      {/* Bottom QuotationMark */}
      <QuotationMarkBottom
        style={{
          opacity,
          color,
        }}
        frame={frame}
      />
      {/* Horizontal Line */}
      <HorizontalLine
        style={{ backgroundColor: color }}
        frame={frame}
        animationType={AnimationTypes.FromBottom}
        value={100}
      />
      {/* Vertical Line */}
      <VerticalLine
        style={{ backgroundColor: color }}
        frame={frame}
        animationType={AnimationTypes.FromLeft}
        value={200}
      />
      <AuthorName color={color} textColor={textColor} />
    </AbsoluteFill>
  );
};
export default QuoteContainer;
