'use client';

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
          <svg width="36" height="36" viewBox="0 0 24 24" fill="currentColor">
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
          <DiscordIcon />
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
          color: #fff; background: #7b5fff; box-shadow: 0 8px 20px rgba(123,95,255,0.35);
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

function DiscordIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M20.317 4.369a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.211.375-.444.864-.608 1.249a18.27 18.27 0 00-5.49 0 12.27 12.27 0 00-.617-1.249.076.076 0 00-.079-.037c-1.704.309-3.35.84-4.885 1.515a.07.07 0 00-.032.027C.533 9.043-.32 13.58.099 18.058a.079.079 0 00.031.055c2.052 1.507 4.042 2.422 5.992 3.03a.076.076 0 00.081-.027c.461-.63.873-1.295 1.226-1.994a.076.076 0 00-.041-.105c-.652-.247-1.27-.549-1.862-.892a.076.076 0 01-.008-.126c.125-.094.25-.191.369-.291a.074.074 0 01.077-.01c3.924 1.793 8.17 1.793 12.062 0a.074.074 0 01.078.01c.12.1.244.197.369.291a.076.076 0 01-.007.126c-.592.35-1.21.645-1.863.892a.076.076 0 00-.04.106c.36.699.771 1.364 1.225 1.994a.076.076 0 00.082.027c1.961-.608 3.95-1.523 6.002-3.03a.078.078 0 00.031-.054c.5-5.177-.84-9.674-3.549-13.662a.061.061 0 00-.031-.028zM9.545 15.568c-1.183 0-2.157-1.104-2.157-2.465 0-1.36.955-2.465 2.157-2.465 1.213 0 2.177 1.118 2.157 2.465 0 1.36-.955 2.465-2.157 2.465zm4.91 0c-1.183 0-2.157-1.104-2.157-2.465 0-1.36.955-2.465 2.157-2.465 1.213 0 2.177 1.118 2.157 2.465 0 1.36-.955 2.465-2.157 2.465z"/>
    </svg>
  );
}
