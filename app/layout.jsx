import '../src/index.css';
import { Providers } from './providers';
import Header from '../src/components/Layout/Header';
import Navigation from '../src/components/Layout/Navigation';

export const metadata = {
  title: 'GezgiNova - Seyahat Asistanı',
  description: 'Sizin için en uygun seyahat rotasını çizer.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <body>
        <Providers>
          <div className="app-container">
            <Header />
            <Navigation />
            <main className="main-content">
              {children}
            </main>
          </div>
        </Providers>
      </body>
    </html>
  );
}
