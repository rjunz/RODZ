'use client';

export default function Login() {
  const login = () => { window.location.href = '/api/auth/discord/login'; };

  return (
    <main style={{ padding: 24 }}>
      <h1>Entrar com Discord</h1>
      <button onClick={login}>Login com Discord</button>
    </main>
  );
}
