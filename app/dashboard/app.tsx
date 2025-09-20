'use client';
import { useSession } from '../_hooks/useSession';

export default function Dashboard() {
  const { data, status } = useSession();
  if (status !== 'authed') return <a href="/login">Entrar</a>;
  return (
    <main style={{ padding: 24 }}>
      <h1>Dashboard</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
