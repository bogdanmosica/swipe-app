'use client';
import './remotion-composition-studio.module.css';

import { Player } from '@remotion/player';
import { FunctionComponent, useEffect, useState } from 'react';
// import { useLambda } from '../hooks/useLambda';
import { defaultMyCompProps } from './types/example-composition';
import { MyComposition } from './compositions/example/Composition';

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
    <div>
      <div className="max-w-screen-md m-auto mb-20">
        <Player
          component={MyComposition as FunctionComponent}
          inputProps={props}
          durationInFrames={120}
          fps={30}
          compositionHeight={1080}
          compositionWidth={1920}
          style={{ width: '100%' }}
          //controls
          autoPlay
          loop
        />
        {/* <div className="grid grid-cols-2 h-60">
        
          <textarea
            name="props"
            id=""
            className=" w-full bg-gray-300"
            value={text}
            onChange={(e) => setText(e.currentTarget.value)}
          />
          <div className=" flex flex-col items-center">
            <button
              onClick={renderMedia}
              disabled={status === 'rendering'}
              className="rounded-lg bg-blue-400 text-white uppercase px-4 py-2 m-2 disabled:bg-gray-400"
            >
              Render
            </button>
            {status && (
              <div className="w-full items-center flex flex-col">
                <p
                  className={`uppercase text-xl font-bold  ${
                    status === 'done'
                      ? 'text-green-500'
                      : status === 'error'
                      ? 'text-red-500'
                      : 'text-blue-500'
                  }`}
                >
                  {status}
                </p>
                <div className="h-8 w-full bg-gray-500 rounded-full overflow-hidden relative">
                  <div
                    className="h-full left-0 top-0 bg-green-400"
                    style={{ width: `${(progress ?? 0) * 100}%` }}
                  ></div>
                </div>
                <p>Price: {price}</p>
                {status !== 'rendering' && (
                  <div className="text-green-500 space-x-4 uppercase">
                    <a href={url} target="_blank" rel="noreferrer" className="">
                      Open
                    </a>
                    <a
                      href={url}
                      target="_blank"
                      rel="noreferrer"
                      download={renderId}
                    >
                      Download
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default RemotionCompositionStudio;
