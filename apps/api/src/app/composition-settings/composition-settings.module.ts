import { Module } from '@nestjs/common';
import { AbstractCompositionsModule } from './abstract-compositions/abstract-compositions.module';
import { SwipeAnimationsModule } from './swipe-animations/swipe-animations.module';
import { SwipeTextStylesModule } from './swipe-text-styles/swipe-text-styles.module';
import { SwipeT2sSoundsModule } from './swipe-t2s-sounds/swipe-t2s-sounds.module';
import { FavoriteAuthorsModule } from './favorite-authors/favorite-authors.module';
import { FavoriteQuotesModule } from './favorite-quotes/favorite-quotes.module';
import { VideoBackgroundsModule } from './video-backgrounds/video-backgrounds.module';
import { ColourPalettesModule } from './colour-palettes/colour-palettes.module';

@Module({
  imports: [
    FavoriteAuthorsModule,
    FavoriteQuotesModule,
    VideoBackgroundsModule,
    ColourPalettesModule,
    AbstractCompositionsModule,
    SwipeAnimationsModule,
    SwipeTextStylesModule,
    SwipeT2sSoundsModule,
  ],
})
export class CompositionSettingsModule {}
