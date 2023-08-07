import { Composition } from 'remotion';
import { MyComposition } from './example-composition/Composition';
import { defaultMyCompProps } from './types/example-composition';
import { ComponentType } from 'react';

import '../app/global.css';
export const Root = () => {
  return (
    <>
      <Composition
        id="MyComp"
        component={MyComposition as ComponentType}
        durationInFrames={240}
        fps={30}
        width={1280}
        height={720}
        defaultProps={defaultMyCompProps}
      />
      <Composition
        id="MyOtherComp"
        component={MyComposition as ComponentType}
        durationInFrames={240}
        fps={30}
        width={1280}
        height={720}
        defaultProps={defaultMyCompProps}
      />
    </>
  );
};
