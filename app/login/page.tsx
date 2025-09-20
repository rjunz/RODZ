import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import LoginCard from './LoginCard';

export const metadata = { title: 'Entrar – Rodz' };
export const dynamic = 'force-dynamic';

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string; next?: string }>;
}) {
  const jar = await cookies();
  if (jar.get('rodz_session')) redirect('/dashboard');

  const sp = await searchParams;
  const errorMsg = sp?.error ? decodeURIComponent(sp.error) : '';
  const nextPath = sp?.next?.startsWith('/') ? sp.next : '/dashboard';
  const loginHref = `/api/auth/discord/login?next=${encodeURIComponent(nextPath)}`;

  return <LoginCard error={errorMsg} loginHref={loginHref} />;
}
