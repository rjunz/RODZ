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
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-[#7B5FFF1A] via-white to-[#7B5FFF1A]">
      <div className="w-full max-w-md rounded-2xl border border-[rgba(0,0,0,0.10)] bg-white shadow-sm">
        <div className="p-6 sm:p-8 text-center space-y-6 text-[#101828]">
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center shadow"
                 style={{ background: '#7B5FFF' }}>
              {/* Bot icon simples */}
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="#ffffff" aria-hidden>
                <rect x="3" y="6" width="18" height="12" rx="6" fill="#ffffff" opacity="0.15"/>
                <circle cx="9" cy="12" r="1.5" />
                <circle cx="15" cy="12" r="1.5" />
              </svg>
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-semibold">Bem-vindo ao Rodz</h1>
            <p className="text-[#717182]">
              Plataforma para comprar e personalizar bots Discord
            </p>
          </div>

          {error && (
            <div className="text-sm rounded-md px-3 py-2"
                 style={{
                   color: '#B42318',
                   background: '#FEE4E2',
                   border: '1px solid #FECDCA'
                 }}>
              {error === '1' ? 'Não foi possível autenticar.' : error}
            </div>
          )}

          {/* Inicia o OAuth de verdade */}
          <a
            href={loginHref}
            className="w-full h-12 inline-flex items-center justify-center gap-2 rounded-md font-medium transition-colors focus:outline-none"
            style={{
              background: '#5865F2',
              color: '#ffffff',
              boxShadow: '0 6px 14px rgba(88,101,242,0.35)'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#4752C4')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#5865F2')}
            onFocus={(e) => (e.currentTarget.style.boxShadow = '0 0 0 2px #7B5FFF66, 0 0 0 4px #FFFFFF')}
            onBlur={(e) => (e.currentTarget.style.boxShadow = '0 6px 14px rgba(88,101,242,0.35)')}
          >
            <DiscordLogoIcon className="h-5 w-5" />
            <span>Entrar com Discord</span>
          </a>

          <p className="text-xs" style={{ color: '#98A2B3' }}>
            Faça login com sua conta Discord para acessar a plataforma
          </p>
        </div>
      </div>
    </div>
  );
}
