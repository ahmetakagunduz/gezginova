"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Map, Route, Gift, LogIn, LogOut, X, Menu, User, Moon, Sun } from 'lucide-react';
import { useAuth } from '../Auth/AuthContext';
import { useTheme } from '../Theme/ThemeContext';
import AuthModal from '../Auth/AuthModal';
import './Navigation.css';

const NAV_LINKS = [
  { href: '/',        label: 'Harita',      icon: Map },
  { href: '/planner', label: 'Rota Planla', icon: Route },
  { href: '/wrapped', label: 'Wrapped',     icon: Gift },
];

/**
 * Navigation – desktop horizontal links + mobile hamburger slide-out menu.
 */
export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showAuth, setShowAuth] = useState(false);
  const { isAuthenticated, user, logout } = useAuth();
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = ''; };
    }
  }, [mobileOpen]);

  return (
    <>
      {/* Desktop nav */}
      <nav className="nav-desktop" role="navigation" aria-label="Ana navigasyon">
        <ul className="nav-desktop__list">
          {NAV_LINKS.map(({ href, label, icon: Icon }) => {
            const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href);
            return (
              <li key={href}>
                <Link
                  href={href}
                  className={`nav-desktop__link ${isActive ? 'nav-desktop__link--active' : ''}`}
                >
                  <Icon size={16} />
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
        
        <button className="btn-icon theme-toggle" onClick={toggleTheme} aria-label="Temayı değiştir" title="Gündüz/Gece Modu">
          {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {isAuthenticated ? (
          <div className="nav-desktop__user-menu">
            <span className="nav-user-name">
              <User size={14} />
              {user?.name || 'Gezgin'}
            </span>
            <button className="btn btn-outline btn-sm nav-desktop__login" onClick={logout}>
              <LogOut size={15} />
              Çıkış
            </button>
          </div>
        ) : (
          <button className="btn btn-outline btn-sm nav-desktop__login" onClick={() => setShowAuth(true)}>
            <LogIn size={15} />
            Giriş Yap
          </button>
        )}
      </nav>

      {/* Mobile hamburger trigger */}
      <button
        className="nav-mobile-trigger"
        onClick={() => setMobileOpen(true)}
        aria-label="Menüyü aç"
      >
        <Menu size={22} />
      </button>

      {/* Mobile overlay + slide-out menu */}
      {mobileOpen && (
        <>
          <div className="nav-mobile-backdrop" onClick={() => setMobileOpen(false)} />
          <nav className="nav-mobile" role="navigation" aria-label="Mobil navigasyon">
            <div className="nav-mobile__header">
              <span className="nav-mobile__brand text-gradient">GezgiNova</span>
              <button
                className="nav-mobile__close"
                onClick={() => setMobileOpen(false)}
                aria-label="Menüyü kapat"
              >
                <X size={20} />
              </button>
            </div>

            <ul className="nav-mobile__list">
              {NAV_LINKS.map(({ href, label, icon: Icon }) => {
                const isActive = href === '/' ? pathname === '/' : pathname.startsWith(href);
                return (
                  <li key={href}>
                    <Link
                      href={href}
                      className={`nav-mobile__link ${isActive ? 'nav-mobile__link--active' : ''}`}
                      onClick={() => setMobileOpen(false)}
                    >
                      <Icon size={20} />
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="nav-mobile__actions">
              <button className="btn btn-outline nav-mobile__theme" onClick={toggleTheme}>
                {theme === 'dark' ? <><Sun size={16} /> Gündüz Modu</> : <><Moon size={16} /> Gece Modu</>}
              </button>

              {isAuthenticated ? (
                <div className="nav-mobile__user-info">
                  <span className="nav-user-name">
                    <User size={16} />
                    {user?.name || 'Gezgin'}
                  </span>
                  <button className="btn btn-outline nav-mobile__login" onClick={() => { logout(); setMobileOpen(false); }}>
                    <LogOut size={16} />
                    Çıkış Yap
                  </button>
                </div>
              ) : (
                <button className="btn btn-outline nav-mobile__login" onClick={() => { setShowAuth(true); setMobileOpen(false); }}>
                  <LogIn size={16} />
                  Giriş Yap
                </button>
              )}
            </div>
          </nav>
        </>
      )}

      {/* Auth Modal */}
      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
    </>
  );
}
