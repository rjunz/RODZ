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
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-primary/10 flex items-center justify-center p-4">
      <div className="w-full max-w-md rounded-2xl border border-border bg-background shadow-sm">
        <div className="p-6 sm:p-8 text-center space-y-6">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center shadow">
              {/* Bot icon simples */}
              <svg className="w-8 h-8 text-primary-foreground" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                <rect x="3" y="6" width="18" height="12" rx="6" />
                <circle cx="9" cy="12" r="1.5" fill="#fff" />
                <circle cx="15" cy="12" r="1.5" fill="#fff" />
              </svg>
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-semibold">Bem-vindo ao Rodz</h1>
            <p className="text-muted-foreground">
              Plataforma para comprar e personalizar bots Discord
            </p>
          </div>

          {error && (
            <div className="text-sm rounded-md border border-destructive/20 bg-destructive/5 text-destructive px-3 py-2">
              {error === '1' ? 'Não foi possível autenticar.' : error}
            </div>
          )}

          {/* Inicia o OAuth de verdade */}
          <a
            href={loginHref}
            className="w-full h-12 inline-flex items-center justify-center gap-2 rounded-md bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            <DiscordLogoIcon className="h-5 w-5" />
            <span>Entrar com Discord</span>
          </a>

          <p className="text-xs text-muted-foreground">
            Faça login com sua conta Discord para acessar a plataforma
          </p>
        </div>
      </div>
    </div>
  );
}
