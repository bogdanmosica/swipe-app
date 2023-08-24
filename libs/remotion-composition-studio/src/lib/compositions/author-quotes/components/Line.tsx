import { CSSProperties } from 'react';

type LineProps = {
  style?: CSSProperties;
  className?: string;
};

const Line = ({ style, className }: LineProps) => {
  return (
    <div
      className={`Line ${className || ''}`}
      style={{
        ...style,
        position: 'absolute',
      }}
    ></div>
  );
};
export default Line;
