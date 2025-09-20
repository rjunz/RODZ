import { cookies } from 'next/headers';

export async function GET() {
  // cookies() agora retorna Promise<ReadonlyRequestCookies> em Route Handlers
  const jar = await cookies();
  const token = jar.get('rodz_session')?.value;

  if (!token) {
    return new Response(JSON.stringify({ ok: false }), {
      status: 401,
      headers: { 'content-type': 'application/json' },
    });
  }

  const api = process.env.API_BASE_URL || 'https://ar.rjunz.com';
  const res = await fetch(`${api}/auth/session`, {
    headers: { Authorization: `Bearer ${token}` },
    cache: 'no-store',
  });

  const text = await res.text();
  return new Response(text, {
    status: res.status,
    headers: { 'content-type': 'application/json' },
  });
}
