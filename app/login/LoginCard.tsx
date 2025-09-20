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
    <main className="min-h-screen grid place-items-center p-4 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
      <div className="w-full max-w-md bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-lg">
        <div className="w-18 h-18 mx-auto mb-4 rounded-2xl grid place-items-center text-white bg-purple-600 shadow-lg">
          {/* Bot icon simples */}
          <svg viewBox="0 0 24 24" className="w-10 h-10" aria-hidden fill="currentColor">
            <rect x="3" y="6" width="18" height="12" rx="6" />
            <circle cx="9" cy="12" r="1.5" fill="#fff" />
            <circle cx="15" cy="12" r="1.5" fill="#fff" />
          </svg>
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-2">Bem-vindo ao Rodz</h1>
        <p className="text-gray-600 mb-4">Plataforma para comprar e personalizar bots Discord</p>

        {error && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm">
            {error === '1' ? 'Não foi possível autenticar.' : error}
          </div>
        )}

        <SocialButton 
          provider="discord" 
          icon={<DiscordLogoIcon />}
          onClick={() => window.location.href = loginHref}
        >
          Entrar com Discord
        </SocialButton>

        <p className="mt-4 text-gray-500 text-sm">Faça login com sua conta Discord para acessar a plataforma</p>
      </div>
    </main>
  );
}
