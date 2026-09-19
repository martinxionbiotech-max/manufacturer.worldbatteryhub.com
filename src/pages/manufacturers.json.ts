import manufacturers from '../data/manufacturers.json';

export const prerender = true;

export function GET() {
  const dataset = {
    name: 'Battery Manufacturer Directory Data',
    description:
      'Verified company data for battery manufacturers — name, country, HQ, chemistry, products, verification levels per dimension (identity / capability / products / certifications), founded, ownership, listed status, cell formats and markets.',
    license: 'CC BY 4.0',
    licenseUrl: 'https://creativecommons.org/licenses/by/4.0/',
    version: '2026-09',
    dateModified: '2026-09-19',
    creator: 'World Battery Hub',
    creatorUrl: 'https://worldbatteryhub.com',
    recordCount: manufacturers.manufacturers.length,
    data: manufacturers.manufacturers,
  };
  return new Response(JSON.stringify(dataset, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
}
