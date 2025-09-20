'use client';
import { useSession } from './_hooks/useSession';

export default function Home() {
  const { data, status } = useSession();

  if (status === 'loading') {
    return <main style={{ padding: 24 }}>Carregando…</main>;
  }
  if (status === 'unauth') {
    return (
      <main style={{ padding: 24 }}>
        <a href="/login">Entrar</a>
      </main>
    );
  }

  return (
    <main style={{ padding: 24 }}>
      <h1>Bem-vindo, {data?.name ?? data?.username}</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <form action="/api/auth/logout" method="post">
        <button>Sair</button>
      </form>
    </main>
  );
}
