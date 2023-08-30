import { Injectable } from '@nestjs/common';
import { RoleSeedService } from './role-seed/role-seed.service';
import { StatusSeedService } from './status-seed/status-seed.service';
import { UserSeedService } from './user-seed/user-seed.service';
import { FavoriteAuthorsSeedService } from './favorite-authors-seed/favorite-authors-seed.service';
import { FavoriteQuotesSeedService } from './favorite-quotes-seed/favorite-quotes-seed.service';
import { VideoBackgroundsSeedService } from './video-backgrounds-seed/video-backgrounds-seed.service';
import { ColourPalettesSeedService } from './colour-palettes-seed/colour-palettes-seed.service';

@Injectable()
export class SeedService {
  constructor(
    private readonly roleSeedService: RoleSeedService,
    private readonly statusSeedService: StatusSeedService,
    private readonly userSeedService: UserSeedService,
    private readonly favoriteAuthorsSeedService: FavoriteAuthorsSeedService,
    private readonly favoriteQuotesSeedService: FavoriteQuotesSeedService,
    private readonly videoBackgroundsSeedService: VideoBackgroundsSeedService,
    private readonly colourPalettesSeedService: ColourPalettesSeedService
  ) {}
  async runSeed() {
    await this.roleSeedService.run();
    await this.statusSeedService.run();
    await this.userSeedService.run();
    await this.favoriteAuthorsSeedService.run();
    await this.favoriteQuotesSeedService.run();
    await this.videoBackgroundsSeedService.run();
    await this.colourPalettesSeedService.run();
  }
}
