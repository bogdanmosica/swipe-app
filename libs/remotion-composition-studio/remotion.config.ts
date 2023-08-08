import { Config } from '@remotion/cli/config';
//import { enableTailwind } from '@remotion/tailwind';

import { webpackOverride } from './src/lib/webpack-override';

//Config.setVideoImageFormat('jpeg');
Config.setEntryPoint('./src/lib/index.ts');
Config.setOverwriteOutput(true);

Config.overrideWebpackConfig(webpackOverride);
