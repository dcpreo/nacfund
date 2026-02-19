import { NextRequest, NextResponse } from 'next/server';
// Phase 3: proxy IIIF manifests/images

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const targetUrl = searchParams.get('url');
  if (!targetUrl) return NextResponse.json({ error: 'Missing url' }, { status: 400 });
  // TODO: fetch and proxy IIIF
  return NextResponse.json({ proxied: targetUrl });
}
