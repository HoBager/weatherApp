import { serverUrl, apiKey } from "./const";

export async function getCity(cityName: string) {
  const details = await getDetails(cityName);
  const forecast = await getForecast(cityName);

  if (details && forecast) {
    return { details, forecast };
  }
  return null;
}

async function getForecast(cityName: string) {
  const url = `https://api.${serverUrl}/data/2.5/forecast?q=${cityName}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);
  if (response.ok) {
    const data = response.json();
    return data;
  }
  return null;
}

async function getDetails(cityName: string) {
  const url = `https://api.${serverUrl}/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  const response = await fetch(url);
  if (response.ok) {
    const data = response.json();

    return data;
  }
  return null;
}
