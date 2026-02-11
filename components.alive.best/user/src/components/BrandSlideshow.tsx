import { useEffect, useRef } from 'react';

interface Logo {
  id: string;
  name: string;
  icon: JSX.Element;
}

interface BrandSlideshowProps {
  logos?: Logo[];
}

const defaultLogos: Logo[] = [
  {
    id: '1',
    name: 'TechFlow',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="2" y="2" width="10" height="10" fill="currentColor" />
        <rect x="14" y="2" width="10" height="10" fill="currentColor" />
        <rect x="2" y="14" width="10" height="10" fill="currentColor" />
        <rect x="14" y="14" width="10" height="10" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: '2',
    name: 'Stellar Design',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <polygon points="16,4 20,14 31,14 22,20 26,30 16,24 6,30 10,20 1,14 12,14" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: '3',
    name: 'DataCorp',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="2" y="18" width="5" height="12" fill="currentColor" />
        <rect x="10" y="12" width="5" height="18" fill="currentColor" />
        <rect x="18" y="6" width="5" height="24" fill="currentColor" />
        <rect x="26" y="10" width="4" height="20" fill="currentColor" />
      </svg>
    ),
  },
  {
    id: '4',
    name: 'NexGen Solutions',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" fill="none" stroke="currentColor" strokeWidth="2" />
        <path d="M16 6 L22 16 L16 26 L10 16 Z" fill="currentColor" />
      </svg>
    ),
  },
];

export const BrandSlideshow = ({ logos = defaultLogos }: BrandSlideshowProps) => {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes scroll-left {
        0% {
          transform: translateX(0);
        }
        100% {
          transform: translateX(-25%);
        }
      }

      .brand-carousel-container {
        overflow: hidden;
        background-color: #ffffff;
        padding: 2rem 0;
      }

      .brand-carousel-inner {
        max-width: 600px;
        margin: 0 auto;
      }

      .brand-carousel-heading {
        text-align: center;
        color: #000000;
        font-size: 1.875rem;
        font-weight: 600;
        margin-bottom: 2rem;
        letter-spacing: -0.025em;
      }

      .brand-carousel-scroll {
        overflow: hidden;
        -webkit-mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
        mask-image: linear-gradient(to right, transparent 0%, black 10%, black 90%, transparent 100%);
      }

      .brand-carousel-track {
        display: flex;
        gap: 3rem;
        animation: scroll-left 12s linear infinite;
        will-change: transform;
      }

      .brand-carousel-item {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 0.5rem;
        flex-shrink: 0;
        white-space: nowrap;
        min-width: fit-content;
      }

      .brand-carousel-icon {
        flex-shrink: 0;
        color: #1a1a1a;
      }

      .brand-carousel-name {
        color: #666666;
        font-size: 0.625rem;
        font-weight: 500;
        text-align: center;
      }
    `;
    document.head.appendChild(style);

    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="brand-carousel-container">
      <div className="brand-carousel-inner">
        <h2 className="brand-carousel-heading">Over 50+ business trust us</h2>

        <div className="brand-carousel-scroll">
          <div className="brand-carousel-track" ref={trackRef}>
            {/* Duplicate logos 4 times to ensure continuous flow */}
            {[...Array(4)].map((_, dupeIndex) =>
              logos.map((logo, index) => (
                <div key={`${logo.id}-${dupeIndex}-${index}`} className="brand-carousel-item">
                  <div className="brand-carousel-icon">
                    {logo.icon}
                  </div>
                  <span className="brand-carousel-name">{logo.name}</span>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
