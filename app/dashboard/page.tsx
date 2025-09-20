import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import Layout from '@/components/layout/layout';

export default function Dashboard() {
  return (
    <Layout title="Dashboard" showLoginButton={false}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
          <p className="text-gray-600">Gerencie seus bots Discord</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Bots Ativos</CardTitle>
              <CardDescription>Seus bots em funcionamento</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">3</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Comandos</CardTitle>
              <CardDescription>Total de comandos criados</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">24</div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Servidores</CardTitle>
              <CardDescription>Bots em servidores</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-purple-600">12</div>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Criar Novo Bot</CardTitle>
            <CardDescription>Configure seu novo bot Discord</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label htmlFor="botName" className="block text-sm font-medium text-gray-700 mb-2">
                Nome do Bot
              </label>
              <Input id="botName" placeholder="Digite o nome do bot" />
            </div>
            <div>
              <label htmlFor="botDescription" className="block text-sm font-medium text-gray-700 mb-2">
                Descrição
              </label>
              <Input id="botDescription" placeholder="Descrição do bot" />
            </div>
            <Button className="w-full">Criar Bot</Button>
          </CardContent>
        </Card>
      </div>
    </Layout>
  );
}
