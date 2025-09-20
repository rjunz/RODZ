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
      <Card className="w-full max-w-md">
        <CardContent className="p-8 text-center space-y-6">
          <div className="flex justify-center">
            <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center">
              <Bot className="w-8 h-8 text-primary-foreground" />
            </div>
          </div>

          <div className="space-y-2">
            <h1 className="text-2xl font-semibold">Bem-vindo ao Rodz</h1>
            <p className="text-muted-foreground">
              Plataforma para comprar e personalizar bots Discord
            </p>
          </div>

          {error && (
            <div className="text-sm rounded-md border border-destructive/30 bg-destructive/10 text-destructive px-3 py-2">
              {error === '1' ? 'Não foi possível autenticar.' : error}
            </div>
          )}

          {/* Inicia o OAuth de verdade */}
          <Button asChild className="w-full h-12 bg-[#5865F2] hover:bg-[#4752C4] text-white">
            <a href={loginHref}>
              <DiscordLogoIcon className="mr-2 h-5 w-5" />
              Entrar com Discord
            </a>
          </Button>

          <p className="text-xs text-muted-foreground">
            Faça login com sua conta Discord para acessar a plataforma
          </p>
        </CardContent>
      </Card>
    </div>
  );
}
