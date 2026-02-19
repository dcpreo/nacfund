import { NextRequest, NextResponse } from 'next/server';
// Phase 2: unified search

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q') ?? '';
  // TODO: search artworks, publications, experts
  return NextResponse.json({ results: [], query: q });
}
