import { FontFamilies } from '../components/constants';
import { CSSProperties } from 'react';
import '../font.css';

type QuotationMarkProps = {
  style?: CSSProperties;
};
/**
 *
 * @param {style} props.style the style property for component
 * @returns a "" mark big with animations
 */
const QuotationMark = ({ style }: QuotationMarkProps): JSX.Element => {
  return (
    <span
      className="QuotationMark"
      style={{
        ...style,
        fontFamily: FontFamilies.PalanquinDark,
        fontSize: '300px',
        lineHeight: '230px',
        fontWeight: 700,
        position: 'absolute',
      }}
    >
      "
    </span>
  );
};
export default QuotationMark;
