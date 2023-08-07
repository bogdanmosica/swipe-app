import styles from './page.module.css';

/* eslint-disable-next-line */
export interface RemotionProps {}

export function Remotion(props: RemotionProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Remotion!</h1>
    </div>
  );
}

export default Remotion;
