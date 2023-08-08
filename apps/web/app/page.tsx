'use client';
import { Player } from '@remotion/player';
import type { NextPage } from 'next';
import Head from 'next/head';
import { FunctionComponent, useEffect, useState } from 'react';
import { useLambda } from '../hooks/useLambda';
import { MyComposition } from '@swipe-app/remotion-composition-studio';
import { defaultMyCompProps } from '@swipe-app/remotion-composition-studio';
import { RemotionCompositionStudio } from '@swipe-app/remotion-composition-studio';

const Home: NextPage = () => {
  const [props, setProps] = useState(defaultMyCompProps);
  const [text, setText] = useState(JSON.stringify(props, null, 2));

  useEffect(() => {
    setProps(JSON.parse(text));
  }, [text]);
  const { renderMedia, progress, status, price, url, renderId } = useLambda(
    'MyComp',
    props
  );
  return (
    <div className="max-w-screen-md m-auto mb-20">
      <RemotionCompositionStudio />
      <Player
        component={MyComposition as FunctionComponent}
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
    </div>
  );
};

export default Home;
