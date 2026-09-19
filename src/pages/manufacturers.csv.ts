import manufacturers from '../data/manufacturers.json';

export const prerender = true;

const esc = (v: unknown): string => {
  const s = String(v ?? '');
  return /[",\n]/.test(s) ? `"${s.replace(/"/g, '""')}"` : s;
};

export function GET() {
  const cols = ['id','name','country','hq','chemistry','products','verification_level','founded','ownership','listed'];
  const header = cols.join(',');
  const rows = manufacturers.manufacturers.map((m) =>
    cols
      .map((c) => {
        switch (c) {
          case 'id': return esc(m.id);
          case 'name': return esc(m.name);
          case 'country': return esc(m.country);
          case 'hq': return esc(m.hq);
          case 'chemistry': return esc(m.chemistry);
          case 'products': return esc(m.products);
          case 'verification_level': return esc(m.verification_level ?? 'claimed');
          case 'founded': return esc(m.founded ?? '');
          case 'ownership': return esc(m.ownership ?? '');
          case 'listed': return esc(m.listed ?? '');
          default: return '';
        }
      })
      .join(','),
  );
  const csv = [header, ...rows].join('\n');
  return new Response(csv, {
    headers: { 'Content-Type': 'text/csv; charset=utf-8' },
  });
}
