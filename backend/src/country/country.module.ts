import { Module } from '@nestjs/common';
import { CountryController } from './country.controller';
import { CountryService } from './country.service';

@Module({
    imports:[],
    controllers: [CountryController],
    providers: [CountryService],
})
export class CountryModule {
  
}
