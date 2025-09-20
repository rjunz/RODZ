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
    <main className="wrap">
      <div className="card">
        <div className="logo">
          {/* logo “bot” simples */}
          <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <rect x="3" y="6" width="18" height="12" rx="6" />
            <circle cx="9" cy="12" r="1.5" fill="#fff" />
            <circle cx="15" cy="12" r="1.5" fill="#fff" />
          </svg>
        </div>

        <h1>Bem-vindo ao Rodz</h1>
        <p className="sub">Plataforma para comprar e personalizar bots</p>
        <p className="brand">Discord</p>

        {!!error && (
          <div className="error">
            {error === '1' ? 'Não foi possível autenticar.' : error}
          </div>
        )}

        <a className="btn" href={loginHref}>
          <DiscordLogoIcon width={18} height={18} />
          <span>Entrar com Discord</span>
        </a>

        <p className="foot">Faça login com sua conta Discord para acessar a plataforma</p>
      </div>

      <style jsx>{`
        .wrap {
          min-height: 100svh;
          display: grid;
          place-items: center;
          background:
            radial-gradient(1200px 600px at 10% -10%, #7b5fff22, transparent 60%),
            radial-gradient(1000px 500px at 110% 110%, #7b5fff22, transparent 60%),
            #f8f9ff;
        }
        .card {
          width: 100%;
          max-width: 560px;
          background: #fff;
          border: 1px solid #eef0f4;
          border-radius: 16px;
          padding: 40px 32px;
          box-shadow: 0 8px 24px rgba(0,0,0,0.04), 0 2px 4px rgba(0,0,0,0.04);
          text-align: center;
        }
        .logo {
          width: 72px; height: 72px; margin: 0 auto 16px;
          border-radius: 16px; display: grid; place-items: center;
          color: #fff; background: #7b5fff;
          box-shadow: 0 8px 20px rgba(123,95,255,0.35);
        }
        h1 { margin: 8px 0 6px; font-size: 28px; line-height: 1.2; font-weight: 700; color: #101828; }
        .sub { margin: 0; color: #475467; }
        .brand { margin: 2px 0 24px; color: #98a2b3; font-size: 14px; }
        .btn {
          height: 48px; border-radius: 10px; background: #6d63ff; color: #fff;
          display: inline-flex; gap: 10px; align-items: center; justify-content: center;
          padding: 0 18px; font-weight: 600;
          transition: transform .05s ease, box-shadow .15s ease, background .15s ease;
          box-shadow: 0 6px 14px rgba(109,99,255,0.35);
        }
        .btn:hover { background: #7b5fff; transform: translateY(-1px); }
        .btn:active { transform: translateY(0); box-shadow: 0 3px 10px rgba(109,99,255,0.25); }
        .foot { margin: 14px 0 0; color: #98a2b3; font-size: 13px; }
        .error {
          margin: -8px 0 16px; color: #b42318; background: #fee4e2;
          border: 1px solid #fecdca; padding: 8px 12px; border-radius: 8px; font-size: 14px;
        }
      `}</style>
    </main>
  );
}
