import { Injectable } from '@nestjs/common';
import { runSeed } from './run-seed';

@Injectable()
export class SeedService {
  runSeed() {
    runSeed();
  }
}
