import { PIBDataPoint, WorldBankEntry } from '../lib/types';
import GraficaCliente from './graficaCliente';

export default async function GraficaServer() {
  const API_URL = 'http://api.worldbank.org/v2/country/WLD/indicator/NY.GDP.MKTP.CD?format=json&per_page=500';

  let data: PIBDataPoint[] = [];

  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const json = await response.json();

    const rawData = json[1];

    if (rawData) {
      data = rawData
        .filter((entry: WorldBankEntry) => entry.date && entry.value !== null)
        .map((entry: WorldBankEntry) => ({
          year: entry.date,
          // Divide el PIB por 1,000,000,000 para obtenerlo en miles de millones
          PIB: entry.value! / 1_000_000_000,
        }))
        .sort((a: PIBDataPoint, b: PIBDataPoint) => parseInt(a.year) - parseInt(b.year));
    }

  } catch (error) {
    console.error("Error fetching GDP data:", error);
  }

  return <GraficaCliente data={data} />;
}
