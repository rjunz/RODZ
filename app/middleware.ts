import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('rodz_session')?.value;

  // rotas protegidas
  const PROTECTED = [/^\/dashboard(\/.*)?$/];

  const pathname = req.nextUrl.pathname;
  const needsAuth = PROTECTED.some((re) => re.test(pathname));

  if (needsAuth && !token) {
    const url = new URL('/login', req.url);
    url.searchParams.set('next', pathname); // opcional
    return NextResponse.redirect(url);
  }

  // se já logado e acessar /login, manda p/ dashboard
  if (pathname === '/login' && token) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  return NextResponse.next();
}

// defina quais rotas o middleware observa (evita rodar em /_next, /api, etc.)
export const config = {
  matcher: [
    '/login',
    '/dashboard/:path*'
  ],
};
