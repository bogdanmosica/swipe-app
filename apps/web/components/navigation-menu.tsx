import { FaFont, FaItunesNote, FaPalette, FaPhotoFilm } from 'react-icons/fa6';
import AudioOptions from './audio-options';
import BackgroundOptions from './background-options';
import ColourPalettesOptions from './colour-palettes-options';
import EditTextOptions from './edit-text-options';
import NavigationMenuItem from './navigation-menu-item';
import { cn } from '@swipe-app/shared-ui';

import styles from './navigation-menu.module.css';

/* eslint-disable-next-line */
export interface NavigationMenuProps {}

export function NavigationMenu(props: NavigationMenuProps) {
  return (
    <div
      className={`w-full absolute border-t-2 border-b-2 border-black border-b-gray-400 bottom-6 flex items-center justify-between ${
        styles['container'] || ''
      }`}
    >
      <NavigationMenuItem
        className="mr-3 p-9"
        triggerButton={'Text'}
        iconButton={<FaFont />}
      >
        <EditTextOptions />
      </NavigationMenuItem>
      <NavigationMenuItem
        className="mr-3 p-9"
        triggerButton={'Color'}
        iconButton={<FaPalette />}
      >
        <ColourPalettesOptions />
      </NavigationMenuItem>
      <NavigationMenuItem
        className="mr-3 p-9"
        triggerButton={'Audio'}
        iconButton={<FaItunesNote />}
      >
        <AudioOptions />
      </NavigationMenuItem>
      <NavigationMenuItem
        className="mr-3 p-9"
        triggerButton={'Background'}
        iconButton={<FaPhotoFilm />}
      >
        <BackgroundOptions />
      </NavigationMenuItem>
    </div>
  );
}
