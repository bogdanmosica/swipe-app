import { Module } from '@nestjs/common';
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
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class SwipeAppApiModule {}
