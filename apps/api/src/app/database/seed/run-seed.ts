import { NestFactory } from '@nestjs/core';

import { SeedModule } from './seed.module';
import { FavoriteAuthorsSeedService } from './favorite-authors-seed/favorite-authors-seed.service';
import { FavoriteQuotesSeedService } from './favorite-quotes-seed/favorite-quotes-seed.service';
import { VideoBackgroundsSeedService } from './video-backgrounds-seed/video-backgrounds-seed.service';
import { ColourPalettesSeedService } from './colour-palettes-seed/colour-palettes-seed.service';

const runSeed = async () => {
  const app = await NestFactory.create(SeedModule);

  // run
  // await app.get(RoleSeedService).run();
  // await app.get(StatusSeedService).run();
  // await app.get(UserSeedService).run();
  await app.get(FavoriteAuthorsSeedService).run();
  await app.get(FavoriteQuotesSeedService).run();
  await app.get(VideoBackgroundsSeedService).run();
  await app.get(ColourPalettesSeedService).run();

  await app.close();
};

void runSeed();
