/**
 * Load JSON seed data (phase 1). Later: write to DB.
 */
import { readFileSync } from 'fs';
import { join } from 'path';

const dataDir = join(process.cwd(), 'src/content/data/benchmark');

function loadJson<T>(filename: string): T {
  const raw = readFileSync(join(dataDir, filename), 'utf-8');
  return JSON.parse(raw) as T;
}

async function main() {
  const artworks = loadJson<unknown[]>('artworks.seed.json');
  const artists = loadJson<unknown[]>('artists.seed.json');
  const movements = loadJson<unknown[]>('movements.seed.json');
  const institutions = loadJson<unknown[]>('institutions.seed.json');
  console.log('Loaded:', { artworks: artworks.length, artists: artists.length, movements: movements.length, institutions: institutions.length });
  // TODO: insert into DB
}

main().catch(console.error);
