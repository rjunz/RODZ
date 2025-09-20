'use client';

import { DiscordLogoIcon } from '@radix-ui/react-icons';

export default function LoginCard({
  error,
  loginHref,
}: {
  error?: string;
  loginHref: string;
}) {
  return (
    <main data-ui="login">
      <div data-el="card">
        <div data-el="logo">
          {/* Bot icon simples */}
          <svg viewBox="0 0 24 24" aria-hidden fill="currentColor">
            <rect x="3" y="6" width="18" height="12" rx="6" />
            <circle cx="9" cy="12" r="1.5" fill="#fff" />
            <circle cx="15" cy="12" r="1.5" fill="#fff" />
          </svg>
        </div>

        <h1>Bem-vindo ao Rodz</h1>
        <p data-el="sub">Plataforma para comprar e personalizar bots Discord</p>

        {error && (
          <div data-el="error">
            {error === '1' ? 'Não foi possível autenticar.' : error}
          </div>
        )}

        <a data-el="btn" href={loginHref} aria-label="Entrar com Discord">
          <DiscordLogoIcon data-el="icon" />
          <span>Entrar com Discord</span>
        </a>

        <p data-el="foot">Faça login com sua conta Discord para acessar a plataforma</p>
      </div>

      <style jsx>{`
        [data-ui='login'] {
          min-height: 100svh;
          display: grid;
          place-items: center;
          padding: 16px;
          background:
            radial-gradient(1200px 600px at 10% -10%, #7b5fff22, transparent 60%),
            radial-gradient(1000px 500px at 110% 110%, #7b5fff22, transparent 60%),
            #f8f9ff;
        }
        [data-el='card'] {
          width: 100%;
          max-width: 560px;
          background: #fff;
          border: 1px solid #eef0f4;
          border-radius: 16px;
          padding: 32px;
          text-align: center;
          box-shadow:
            0 8px 24px rgba(0, 0, 0, 0.04),
            0 2px 4px rgba(0, 0, 0, 0.04);
        }
        [data-el='logo'] {
          width: 72px;
          height: 72px;
          margin: 0 auto 16px;
          border-radius: 16px;
          display: grid;
          place-items: center;
          color: #fff;
          background: #7b5fff;
          box-shadow: 0 8px 20px rgba(123, 95, 255, 0.35);
        }
        h1 {
          margin: 8px 0 6px;
          font-size: 28px;
          line-height: 1.2;
          font-weight: 700;
          color: #101828;
        }
        [data-el='sub'] {
          margin: 0 0 16px 0;
          color: #475467;
        }
        [data-el='error'] {
          margin: 0 0 12px 0;
          color: #b42318;
          background: #fee4e2;
          border: 1px solid #fecdca;
          padding: 8px 12px;
          border-radius: 8px;
          font-size: 14px;
        }
        [data-el='btn'] {
          height: 48px;
          border-radius: 10px;
          background: #5865f2; /* Discord */
          color: #fff;
          display: inline-flex;
          gap: 10px;
          align-items: center;
          justify-content: center;
          padding: 0 18px;
          font-weight: 600;
          text-decoration: none;
          transition: transform 0.05s ease, box-shadow 0.15s ease, background 0.15s ease;
          box-shadow: 0 6px 14px rgba(88, 101, 242, 0.35);
          outline: none;
        }
        [data-el='btn']:hover {
          background: #4752c4;
          transform: translateY(-1px);
        }
        [data-el='btn']:active {
          transform: translateY(0);
          box-shadow: 0 3px 10px rgba(88, 101, 242, 0.25);
        }
        [data-el='btn']:focus-visible {
          box-shadow:
            0 0 0 3px rgba(123, 95, 255, 0.35),
            0 0 0 5px #fff;
        }
        [data-el='icon'] {
          width: 18px;
          height: 18px;
        }
        [data-el='foot'] {
          margin: 14px 0 0;
          color: #98a2b3;
          font-size: 13px;
        }
      `}</style>
    </main>
  );
}
