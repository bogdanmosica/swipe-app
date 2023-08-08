import { bundle } from '@remotion/bundler';
import { getCompositions } from '@remotion/renderer';
import path from 'path';

import { webpackOverride } from '@swipe-app/remotion-composition-studio';

export async function GET(request: Request) {
  const entry = 'libs/remotion-composition-studio/src/index.js';
  console.log('Creating a Webpack bundle of the video');
  const bundleLocation = await bundle(path.resolve(entry), () => undefined, {
    //   // If you have a Webpack override, make sure to add it here
    webpackOverride,
  });
  // // Extract all the compositions you have defined in your project
  // // from the webpack bundle.
  // const comps = await getCompositions(bundleLocation, {
  //   // You can pass custom input props that you can retrieve using getInputProps()
  //   // in the composition list. Use this if you want to dynamically set the duration or
  //   // dimensions of the video.
  //   props,
  // });
  // return new Response({ body: comps });
}
