import { Controller, Get, Param } from '@nestjs/common';
import { CountryService } from './country.service';

@Controller('country')
export class CountryController {
  constructor(private readonly countryService: CountryService) {}

  @Get('available')
  async getAvailableCountries() {
    return await this.countryService.getAvailableCountries();
  }

  @Get('info/:code')
  async getCountryInfo(@Param('code') countryCode: string) {
    return await this.countryService.getContryInfo(countryCode);
  }
}
