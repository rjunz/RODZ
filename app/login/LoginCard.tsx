'use client';

import { DiscordLogoIcon } from '@radix-ui/react-icons';
import { SocialButton } from "@/components/ui/social-button";

export default function LoginCard({
  error,
  loginHref,
}: {
  error?: string;
  loginHref: string;
}) {
  return (
    <main className="min-h-screen grid place-items-center p-4 bg-background text-foreground">
      <div className="w-full max-w-lg rounded-lg p-8 text-center shadow-lg bg-card">
        
      <div
        className="
          grid place-items-center mx-auto mb-4 shadow-lg
          w-20 h-20 rounded-lg overflow-hidden
          bg-cover bg-center bg-no-repeat
          ring-always
          transition-all duration-200
        "
        style={{ backgroundImage: 'url(https://imgur.com/50RofGo.jpg)' }}
        aria-hidden="true"
      />


        <h1 className="mb-2 text-3xl font-semibold">
          Welcome back!
        </h1>

        <p className="mb-4 text-muted-foreground">
          Entre com sua conta Discord para gerenciar seus bots.
        </p>

        {error && (
          <div
            className="
              mb-4 p-3 rounded-lg text-sm border
              bg-destructive text-destructive-foreground border-border
            "
            role="alert"
          >
            {error === '1' ? 'Não foi possível autenticar.' : error}
          </div>
        )}

        <SocialButton 
          provider="discord" 
          size="lg"
          className="w-full"
          icon={<DiscordLogoIcon />}
          onClick={() => (window.location.href = loginHref)}
        >
          Continuar com Discord
        </SocialButton>

        <div className="mt-8 mb-6 flex items-center gap-4 text-foreground/80">
          <span className="flex-1 h-px bg-border/40" />
          <h2 className="text-base font-medium">Acesso seguro</h2>
          <span className="flex-1 h-px bg-border/40" />
        </div>

        <div className="mb-6 flex flex-wrap justify-center gap-3">
          <button className="px-4 py-2 rounded-full border border-accent/30 text-accent hover:bg-accent/10 transition-colors">
            Gestão de Bots
          </button>
          <button className="px-4 py-2 rounded-full border border-accent/30 text-accent hover:bg-accent/10 transition-colors">
            Analytics
          </button>
          <button className="px-4 py-2 rounded-full border border-accent/30 text-accent hover:bg-accent/10 transition-colors">
            Configurações
          </button>
        </div>

        <p className="mt-4 text-sm text-muted-foreground">
          Ao entrar, você concorda com nossos{' '}
          <a href="/terms" className="text-accent hover:underline">
            Termos de Uso
          </a>{' '}
          e{' '}
          <a href="/privacy" className="text-accent hover:underline">
            Política de Privacidade
          </a>
          .
        </p>

      </div>
    </main>
  );
}
