import { StormGlass } from '@src/clients/stormGlass';
import axios from 'axios';
import stormGlassWeather3HoursFixture from '@test/fixtures/stormglass_weather_3_hours.json';
import stormglassNormalizedResponseFixture from '@test/fixtures/stormglass_normalized_response_3_hours.json';

jest.mock('axios');

describe('StormGlass client', () => {
  it('should return the normalized forecast from the StormGlass service', async () => {
    const lat = -33.3333;
    const lng = 151.3333;

    axios.get = jest
      .fn()
      .mockResolvedValue({ data: stormGlassWeather3HoursFixture });

    const stormGlass = new StormGlass(axios);
    const response = await stormGlass.fetchPoints(lat, lng);

    expect(response).toEqual(stormglassNormalizedResponseFixture);
  });
});
