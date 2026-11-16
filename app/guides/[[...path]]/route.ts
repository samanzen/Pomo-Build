const GONE_BODY = 'This guides section is no longer published.';

export function GET() {
  return new Response(GONE_BODY, {
    status: 410,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'X-Robots-Tag': 'noindex, nofollow',
    },
  });
}
