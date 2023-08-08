'use client';
import { Player } from '@remotion/player';
import React, { FunctionComponent, ReactNode, useState } from 'react';
import { MyComposition } from '@swipe-app/remotion-composition-studio';
import { ExampleComposition } from '@swipe-app/remotion-composition-studio';
import { defaultMyCompProps } from '@swipe-app/remotion-composition-studio';
// import { RemotionCompositionStudio } from '@swipe-app/remotion-composition-studio';

export default function Page() {
  const [props, setProps] = useState(defaultMyCompProps);
  const [composition, setComposition] = useState(0);
  const compositions = [
    MyComposition,
    ExampleComposition,
    ExampleComposition,
    MyComposition,
  ];

  const onWheel = (event: { deltaY: number }) => {
    console.log('scroll');
    if (event.deltaY < 0) {
      setComposition((comp) =>
        comp - 1 > 0 && comp - 1 < compositions.length
          ? comp - 1
          : compositions.length - 1
      );
    } else if (event.deltaY > 0) {
      setComposition((comp) => (comp + 1 < compositions.length ? comp + 1 : 0));
    }
  };

  const onClickDown = () => {
    console.log('down');
    setComposition((comp) => (comp + 1 < compositions.length ? comp + 1 : 0));
  };
  return (
    <div className="max-w-screen-md m-auto">
      <div
        className="w-full flex items-center justify-center"
        onWheel={onWheel}
      >
        <Player
          component={compositions[composition] as FunctionComponent}
          inputProps={props}
          durationInFrames={120}
          fps={30}
          compositionHeight={1920}
          compositionWidth={1080}
          style={{ width: '100%', height: '100vh' }}
          //controls
          autoPlay
          loop
        />
        <button className="absolute bottom-5 border" onClick={onClickDown}>
          down
        </button>
      </div>
      <div className="w-full">{/* <RemotionCompositionStudio /> */}</div>
    </div>
  );
}
