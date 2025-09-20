import { ReactNode } from 'react';
import Header from './header';
import Footer from './footer';

interface LayoutProps {
  children: ReactNode;
  title?: string;
  showLoginButton?: boolean;
}

export default function Layout({ children, title, showLoginButton = true }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header title={title} showLoginButton={showLoginButton} />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
