'use client';
import './remotion-composition-studio.module.css';

import { Player } from '@remotion/player';
import { ComponentType, FunctionComponent, useEffect, useState } from 'react';
// import { useLambda } from '../hooks/useLambda';
import { defaultMyCompProps } from '../../types/example-composition';
import { MyComposition } from '../../compositions/example/Composition';
import { ExampleComposition } from '../../compositions/example-composition/Composition';

/* eslint-disable-next-line */
export interface RemotionCompositionStudioProps {}

export const RemotionCompositionStudio = () => {
  const [props, setProps] = useState(defaultMyCompProps);
  const [text, setText] = useState(JSON.stringify(props, null, 2));

  useEffect(() => {
    setProps(JSON.parse(text));
  }, [text]);
  // const { renderMedia, progress, status, price, url, renderId } = useLambda(
  //   'MyComp',
  //   props
  // );
  return (
    <Player
      component={ExampleComposition}
      inputProps={props}
      durationInFrames={120}
      fps={30}
      compositionHeight={1920}
      compositionWidth={1080}
      style={{ width: '100%' }}
      //controls
      autoPlay
      loop
    />
  );
};

export default RemotionCompositionStudio;
