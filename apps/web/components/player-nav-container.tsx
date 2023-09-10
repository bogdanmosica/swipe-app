'use client';
import { RemotionCompositionStudio } from '@swipe-app/remotion-composition-studio';
/* eslint-disable-next-line */
export interface PlayerNavContainerProps {}

export function PlayerNavContainer(props: PlayerNavContainerProps) {
  return (
    <div className="max-w-[468px] w-full my-0 mx-auto">
      <RemotionCompositionStudio />
    </div>
  );
}

export default PlayerNavContainer;
