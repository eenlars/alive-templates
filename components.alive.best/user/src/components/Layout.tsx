import { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { siteConfig, contactConfig } from '@/lib/config';

export const Layout = () => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="min-h-screen" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
        <div className="flex items-center justify-between px-6 py-4">
          <Link to="/" className="text-base font-medium tracking-tight text-foreground hover:text-muted-foreground transition-colors duration-200">
            Name
          </Link>

          {!showInfo ? (
            <nav className="flex gap-6">
              <Link to="/projects" className="text-base text-foreground hover:text-muted-foreground transition-colors duration-200">
                Projects
              </Link>
              <Link to="/moodboard" className="text-base text-foreground hover:text-muted-foreground transition-colors duration-200">
                Moodboard
              </Link>
              <button
                onClick={() => setShowInfo(true)}
                className="text-base text-foreground hover:text-muted-foreground transition-colors duration-200"
              >
                Info
              </button>
            </nav>
          ) : (
            <button
              onClick={() => setShowInfo(false)}
              className="text-base text-foreground hover:text-muted-foreground transition-colors duration-200"
            >
              Close
            </button>
          )}
        </div>
      </header>

      {showInfo && (
        <div className="fixed inset-0 z-40 bg-background flex items-center justify-center px-6">
          <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            <div className="max-w-md">
              <p className="text-sm font-light leading-relaxed">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>

            <div className="space-y-3">
              <div>
                <a
                  href={`mailto:${contactConfig.email}`}
                  className="text-sm font-light text-foreground hover:text-muted-foreground transition-colors duration-200"
                >
                  {contactConfig.email}
                </a>
              </div>
              <div>
                <a
                  href={`https://instagram.com/${contactConfig.instagram.replace('@', '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-light text-foreground hover:text-muted-foreground transition-colors duration-200"
                >
                  {contactConfig.instagram}
                </a>
              </div>
              <div>
                <a
                  href={`tel:${contactConfig.phone.replace(/\s/g, '')}`}
                  className="text-sm font-light text-foreground hover:text-muted-foreground transition-colors duration-200"
                >
                  {contactConfig.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      <main className="pt-16">
        <Outlet />
      </main>
    </div>
  );
};
