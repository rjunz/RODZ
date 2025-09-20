import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const dynamic = 'force-dynamic';

export default async function Dashboard() {
  const jar = await cookies();
  if (!jar.get('rodz_session')) redirect('/login');

  return (
    <main style={{ padding: 24 }}>
      <h1>Dashboard</h1>
      <form action="/api/auth/logout" method="post">
        <button>Sair</button>
      </form>
    </main>
  );
}
