import { Module } from '@nestjs/common';

import { ColourPalettesSeedModule } from './colour-palettes-seed/colour-palettes-seed.module';
import { FavoriteAuthorsSeedModule } from './favorite-authors-seed/favorite-authors-seed.module';
import { FavoriteQuotesSeedModule } from './favorite-quotes-seed/favorite-quotes-seed.module';
import { VideoBackgroundsSeedModule } from './video-backgrounds-seed/video-backgrounds-seed.module';
import { RoleSeedModule } from './role-seed/role-seed.module';
import { StatusSeedModule } from './status-seed/status-seed.module';
import { UserSeedModule } from './user-seed/user-seed.module';
import { SeedService } from './seed.service';

@Module({
  imports: [
    RoleSeedModule,
    StatusSeedModule,
    UserSeedModule,
    FavoriteAuthorsSeedModule,
    FavoriteQuotesSeedModule,
    VideoBackgroundsSeedModule,
    ColourPalettesSeedModule,
  ],
  providers: [SeedService],
  exports: [SeedService],
})
export class SeedModule {}
