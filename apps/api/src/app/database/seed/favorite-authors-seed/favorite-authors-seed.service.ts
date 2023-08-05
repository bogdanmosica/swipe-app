import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { readFileSync } from 'fs';
import { FavoriteAuthor } from '../../../favorite-authors/entities/favorite-author.entity';

@Injectable()
export class FavoriteAuthorsSeedService {
  constructor(
    @InjectRepository(FavoriteAuthor)
    private repository: Repository<FavoriteAuthor>
  ) {}

  async authorFoundByName(name: string) {
    return await this.repository.findOneBy({
      name,
    });
  }

  async run() {
    const countQuotesAuthors = await this.repository.count();
    if (!countQuotesAuthors) {
      const file = readFileSync(
        `${__dirname}/../../../../assets/author-famous-quotes.json`,
        'utf8'
      );
      const data = JSON.parse(file);

      console.log(
        "FavoriteAuthor: Favorite Author data does not exist, I'll create some data for you!"
      );

      const authors = data.map(
        ({ name, href }: { name: string; href: string }) => ({ name, href })
      );
      await this.repository.insert(authors);

      console.log('FavoriteAuthor: Favorite Author data added!');
    }
  }
}
