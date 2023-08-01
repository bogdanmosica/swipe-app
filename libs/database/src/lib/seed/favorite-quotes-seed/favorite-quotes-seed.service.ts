import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { readFileSync } from 'fs';
import { Repository } from 'typeorm';

import { FavoriteQuote } from '@swipe-app/swipe-app-api';
import { FavoriteAuthorsService } from '@swipe-app/swipe-app-api';
import { FavoriteAuthor } from '@swipe-app/swipe-app-api';

@Injectable()
export class FavoriteQuotesSeedService {
  constructor(
    @InjectRepository(FavoriteQuote)
    private repository: Repository<FavoriteQuote>,
    private favoriteAuthorService: FavoriteAuthorsService
  ) {}

  async run() {
    const countQuotes = await this.repository.count();
    if (!countQuotes) {
      console.log(
        "FavoriteQuotes: Favorite Quotes data does not exist, I'll create some data for you!"
      );
      const file = readFileSync(
        `${__dirname}/../../../assets/author-famous-quotes.json`,
        'utf8'
      );

      const data = JSON.parse(file);

      const quotes: FavoriteQuote[] = [];
      for (const aAuthor of data) {
        const theAuthor = (await this.favoriteAuthorService.findOneByName(
          aAuthor.name
        )) as FavoriteAuthor;

        for (const aQuote of aAuthor.quotes) {
          const quote = {
            author: theAuthor,
            text: aQuote.text,
          } as FavoriteQuote;
          quotes.push(quote);
        }
      }

      await this.repository.insert(quotes);

      console.log('FavoriteQuotes: Favorite Quotes data added!');
    }
  }
}
