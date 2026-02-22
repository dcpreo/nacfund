import { NextRequest, NextResponse } from 'next/server';
import { search } from '@/lib/search';

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const q = searchParams.get('q') ?? '';

  if (!q.trim()) {
    return NextResponse.json({ results: [], query: q });
  }

  try {
    const results = await search(q);
    return NextResponse.json({ results, query: q });
  } catch (error) {
    console.error('Search error:', error);
    return NextResponse.json(
      { error: 'Search failed', results: [], query: q },
      { status: 500 }
    );
  }
}
