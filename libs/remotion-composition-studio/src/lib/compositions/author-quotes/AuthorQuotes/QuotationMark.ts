import { FontFamilies } from '../components/constants';
import '../../font.css';

/**
 *
 * @param {style} props.style the style property for component
 * @returns a "" mark big with animations
 */
export const QuotationMark = ({ style }): React.FC => {
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
