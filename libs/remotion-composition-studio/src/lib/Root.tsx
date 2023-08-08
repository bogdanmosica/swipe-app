import { Composition } from 'remotion';
import { ComponentType } from 'react';
import {
  MyComposition,
  myCompSchema,
} from './compositions/example/Composition';
import { ExampleComposition } from './compositions/example-composition/Composition';
import './style.css';
import { defaultMyCompProps } from './types/example-composition';

export const RemotionRoot: React.FC = () => {
  return (
    <>
      <Composition
        id="MyComp"
        component={MyComposition}
        durationInFrames={240}
        fps={30}
        width={1280}
        height={720}
        schema={myCompSchema}
        defaultProps={{
          titleText: 'Welcome to Remotion with Tailwind CSS',
          titleColor: '#fff',
          logoColor: '#00bfff',
        }}
      />
      <Composition
        id="MyOtherComp"
        component={ExampleComposition as ComponentType}
        durationInFrames={240}
        fps={30}
        width={1280}
        height={720}
        defaultProps={defaultMyCompProps}
      />
    </>
  );
};
