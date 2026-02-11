import React, { useState } from 'react';

export const Banner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) {
    return null;
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#ffffff',
        padding: '2rem',
      }}
    >
      <div
        style={{
          position: 'relative',
          isolation: 'isolate',
          display: 'flex',
          alignItems: 'center',
          gap: '1.5rem',
          overflow: 'hidden',
          backgroundColor: 'hsl(0, 0%, 97%)',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          paddingTop: '0.625rem',
          paddingBottom: '0.625rem',
          borderRadius: '0.375rem',
          maxWidth: '600px',
          width: '100%',
        }}
      >
        {/* Left gradient blob */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '50%',
            left: 'max(-7rem, calc(50% - 52rem))',
            zIndex: -10,
            transform: 'translateY(-50%)',
            filter: 'blur(40px)',
          }}
        >
          <div
            style={{
              aspectRatio: '577 / 310',
              width: '577px',
              background: 'linear-gradient(135deg, hsl(320, 100%, 65%) 0%, hsl(260, 100%, 65%) 100%)',
              opacity: 0.3,
              borderRadius: '50%',
            }}
          />
        </div>

        {/* Right gradient blob */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute',
            top: '50%',
            left: 'max(45rem, calc(50% + 8rem))',
            zIndex: -10,
            transform: 'translateY(-50%)',
            filter: 'blur(40px)',
          }}
        >
          <div
            style={{
              aspectRatio: '577 / 310',
              width: '577px',
              background: 'linear-gradient(135deg, hsl(320, 100%, 65%) 0%, hsl(260, 100%, 65%) 100%)',
              opacity: 0.3,
              borderRadius: '50%',
            }}
          />
        </div>

        {/* Content section */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: '1rem',
            rowGap: '0.5rem',
          }}
        >
          <p
            style={{
              fontSize: '0.875rem',
              lineHeight: '1.5rem',
              color: 'hsl(0, 0%, 20%)',
              margin: 0,
            }}
          >
            <strong style={{ fontWeight: 600 }}>TechSummit 2025</strong>
            <svg
              viewBox="0 0 2 2"
              aria-hidden="true"
              style={{
                margin: '0 0.5rem',
                display: 'inline',
                width: '0.125rem',
                height: '0.125rem',
                fill: 'currentColor',
              }}
            >
              <circle r="1" cx="1" cy="1" />
            </svg>
            Join us in San Francisco from March 15 – 17 to discover the latest innovations.
          </p>
          <a
            href="#"
            style={{
              flexShrink: 0,
              borderRadius: '9999px',
              backgroundColor: 'hsl(0, 0%, 15%)',
              paddingLeft: '0.875rem',
              paddingRight: '0.875rem',
              paddingTop: '0.25rem',
              paddingBottom: '0.25rem',
              fontSize: '0.875rem',
              fontWeight: 600,
              color: 'hsl(0, 0%, 100%)',
              textDecoration: 'none',
              boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
              transition: 'background-color 200ms ease',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.25rem',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'hsl(0, 0%, 30%)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'hsl(0, 0%, 15%)';
            }}
            onFocus={(e) => {
              e.currentTarget.style.outline = '2px solid hsl(0, 0%, 15%)';
              e.currentTarget.style.outlineOffset = '2px';
            }}
            onBlur={(e) => {
              e.currentTarget.style.outline = 'none';
            }}
          >
            Register now{' '}
            <span aria-hidden="true" style={{ fontSize: '0.875rem' }}>
              →
            </span>
          </a>
        </div>

        {/* Close button */}
        <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
          <button
            type="button"
            onClick={() => setIsVisible(false)}
            style={{
              margin: '-0.75rem',
              padding: '0.75rem',
              backgroundColor: 'transparent',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 200ms ease',
            }}
            onFocus={(e) => {
              e.currentTarget.style.outline = '2px solid hsl(0, 0%, 15%)';
              e.currentTarget.style.outlineOffset = '-4px';
            }}
            onBlur={(e) => {
              e.currentTarget.style.outline = 'none';
            }}
          >
            <span style={{ position: 'absolute', left: '-9999px' }}>Dismiss</span>
            <svg
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
              style={{
                width: '1.25rem',
                height: '1.25rem',
                color: 'hsl(0, 0%, 20%)',
              }}
            >
              <path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};
