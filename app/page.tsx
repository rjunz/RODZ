import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Layout from '@/components/layout/layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export const dynamic = 'force-dynamic';

export default async function Home() {
  const jar = await cookies();
  if (!jar.get('rodz_session')) redirect('/login');

  return (
    <Layout title="Rodz - Home">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Bem-vindo ao Rodz
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            A melhor plataforma para criar e personalizar bots Discord.
            Comece agora mesmo a construir experiências incríveis para sua comunidade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-green-600">Fácil de Usar</CardTitle>
              <CardDescription>
                Interface intuitiva para criar bots sem complicações
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Nossa plataforma foi desenvolvida pensando na simplicidade.
                Crie bots poderosos com apenas alguns cliques.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-blue-600">Personalizável</CardTitle>
              <CardDescription>
                Customize cada detalhe do seu bot
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Comandos, respostas, embeds e muito mais.
                Faça seu bot refletir a personalidade da sua comunidade.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-purple-600">Suporte 24/7</CardTitle>
              <CardDescription>
                Equipe sempre pronta para ajudar
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Nossa equipe está disponível 24 horas por dia,
                7 dias por semana para garantir o melhor suporte.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <Button size="lg" asChild>
            <a href="/dashboard">Acessar Dashboard</a>
          </Button>
        </div>
      </div>
    </Layout>
  );
}
