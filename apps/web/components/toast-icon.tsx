import { Icons } from '../components/icons';

interface ToastIconProps {
  type: 'succes' | 'failure' | 'warning';
  className?: string;
}

export function ToastIcon({
  type,
  className = '',
  ...props
}: ToastIconProps): React.ReactElement {
  return (
    <>
      {type === 'succes' && (
        <span className={className}>
          <Icons.check className="text-green-600 mr-2" />
          Succes
        </span>
      )}
      {type === 'failure' && (
        <span className={className}>
          <Icons.close className="text-red-600 mr-2" />
          Failure
        </span>
      )}
      {type === 'warning' && (
        <span className={className}>
          <Icons.warning className="text-yellow-600 mr-2" />
          Warning
        </span>
      )}
    </>
  );
}
