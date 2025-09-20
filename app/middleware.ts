import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const token = req.cookies.get('rodz_session')?.value;
  const path = req.nextUrl.pathname;

  const protectedRoutes = [/^\/dashboard(\/.*)?$/];
  const needsAuth = protectedRoutes.some((re) => re.test(path));

  if (needsAuth && !token) {
    const to = new URL('/login', req.url);
    to.searchParams.set('next', path);
    return NextResponse.redirect(to);
  }
  if (path === '/login' && token) {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/login', '/dashboard/:path*'],
};
