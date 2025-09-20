'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

interface HeaderProps {
  title?: string;
  showLoginButton?: boolean;
}

export default function Header({ title = "Rodz", showLoginButton = true }: HeaderProps) {
  return (
    <header className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              {title}
            </Link>
          </div>

          <nav className="hidden md:flex space-x-8">
            <Link href="/" className="text-gray-600 hover:text-gray-900 transition-colors">
              Início
            </Link>
            <Link href="/dashboard" className="text-gray-600 hover:text-gray-900 transition-colors">
              Dashboard
            </Link>
            <Link href="/portfolio" className="text-gray-600 hover:text-gray-900 transition-colors">
              Portfólio
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            {showLoginButton ? (
              <Button asChild>
                <Link href="/login">Entrar</Link>
              </Button>
            ) : (
              <form action="/api/auth/logout" method="post">
                <Button type="submit" variant="outline">
                  Sair
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}
