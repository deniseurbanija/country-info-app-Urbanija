import { Injectable } from '@nestjs/common';
import { config as dotenvConfig } from 'dotenv';
dotenvConfig({ path: '.env' });
import axios from 'axios';

@Injectable()
export class CountryService {
  private availableCountriesUrl = process.env.AVAILABLE_COUNTRIES_URL;
  private countryInfoUrl = process.env.COUNTRY_INFO_URL;
  private populationDataUrl = process.env.POPULATION_DATA_URL;
  private flagUrl = process.env.FLAG_URL;

  async getAvailableCountries() {
    try {
      const availableCountries = await axios.get(this.availableCountriesUrl);
      return availableCountries.data;
    } catch (error) {
      throw new Error('Could not fetch available countries');
    }
  }

  async getContryInfo(countryCode: string) {
    try {
      const countryInfo = await axios.get(
        `${this.countryInfoUrl}${countryCode}`,
      );

      const [population, flag] = await await Promise.all([
        axios.post(this.populationDataUrl, {
          country: countryInfo.data.commonName,
        }), // POST request with country name
        axios.post(this.flagUrl, { country: countryInfo.data.commonName }), // POST request with country name
      ]);

      return {
        borders: countryInfo.data.borders,
        population: population.data
          ? population.data.data.populationCounts
          : null,
        flag: flag.data ? flag.data.data.flag : null,
      };
    } catch (error) {
      console.error('Error fetching country info:', error);
      throw new Error('Could not fetch country info');
    }
  }
}
