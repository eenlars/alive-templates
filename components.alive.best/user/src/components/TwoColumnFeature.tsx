interface Feature {
  title: string;
  description: string;
  icon: JSX.Element;
}

interface TwoColumnFeatureProps {
  features?: Feature[];
}

const defaultFeatures: Feature[] = [
  {
    title: 'Instant Deployment',
    description: 'Deploy your applications in seconds with our automated pipeline. No more manual deployments or complex configuration processes.',
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="size-5">
        <path d="M5.5 17a4.5 4.5 0 0 1-1.44-8.765 4.5 4.5 0 0 1 8.302-3.046 3.5 3.5 0 0 1 4.504 4.272A4 4 0 0 1 15 17H5.5Zm3.75-2.75a.75.75 0 0 0 1.5 0V9.66l1.95 2.1a.75.75 0 1 0 1.1-1.02l-3.25-3.5a.75.75 0 0 0-1.1 0l-3.25 3.5a.75.75 0 1 0 1.1 1.02l1.95-2.1v4.59Z" clipRule="evenodd" fillRule="evenodd" />
      </svg>
    ),
  },
  {
    title: 'Advanced Security',
    description: 'Military-grade encryption and comprehensive security protocols protect your data. Your applications are secured with industry-leading standards.',
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="size-5">
        <path d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-.5V5.5A4.5 4.5 0 0 0 10 1Zm3 8V5.5a3 3 0 1 0-6 0V9h6Z" clipRule="evenodd" fillRule="evenodd" />
      </svg>
    ),
  },
  {
    title: 'Automated Backups',
    description: 'Never lose your data again. Automated daily backups with point-in-time recovery ensure your information is always safe and retrievable.',
    icon: (
      <svg viewBox="0 0 20 20" fill="currentColor" className="size-5">
        <path d="M4.632 3.533A2 2 0 0 1 6.577 2h6.846a2 2 0 0 1 1.945 1.533l1.976 8.234A3.489 3.489 0 0 0 16 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234Z" />
        <path d="M4 13a2 2 0 1 0 0 4h12a2 2 0 1 0 0-4H4Zm11.24 2a.75.75 0 0 1 .75-.75H16a.75.75 0 0 1 .75.75v.01a.75.75 0 0 1-.75.75h-.01a.75.75 0 0 1-.75-.75V15Zm-2.25-.75a.75.75 0 0 0-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 0 0 .75-.75V15a.75.75 0 0 0-.75-.75h-.01Z" clipRule="evenodd" fillRule="evenodd" />
      </svg>
    ),
  },
];

export const TwoColumnFeature = ({ features = defaultFeatures }: TwoColumnFeatureProps) => {
  return (
    <div
      style={{
        overflow: 'hidden',
        backgroundColor: '#ffffff',
        paddingTop: '6rem',
        paddingBottom: '8rem',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: '80rem',
          paddingLeft: '1.5rem',
          paddingRight: '1.5rem',
          width: '100%',
        }}
      >
        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            display: 'grid',
            maxWidth: '64rem',
            gridTemplateColumns: '1fr 1fr',
            gap: '2rem 2rem',
            alignItems: 'center',
          }}
        >
          {/* Left Column */}
          <div style={{ paddingTop: '1rem', paddingRight: '2rem' }}>
            <div style={{ maxWidth: '32rem' }}>
              <p
                style={{
                  fontSize: '0.875rem',
                  lineHeight: '1.75',
                  fontWeight: '600',
                  color: '#3B82F6',
                  marginBottom: '0.5rem',
                }}
              >
                Streamlined Workflow
              </p>
              <h2
                style={{
                  marginTop: '0.5rem',
                  fontSize: '2.25rem',
                  fontWeight: '600',
                  letterSpacing: '-0.025em',
                  color: '#111827',
                  marginBottom: '1.5rem',
                  lineHeight: '1.2',
                }}
              >
                The modern platform
              </h2>
              <p
                style={{
                  marginTop: '1.5rem',
                  fontSize: '1.125rem',
                  lineHeight: '1.75',
                  color: '#374151',
                  marginBottom: '2.5rem',
                }}
              >
                Revolutionize your development process. Build, test, and deploy with confidence using our comprehensive platform designed for modern teams.
              </p>

              {/* Features List */}
              <dl
                style={{
                  marginTop: '2.5rem',
                  maxWidth: '32rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '2rem',
                  fontSize: '0.875rem',
                  lineHeight: '1.75',
                  color: '#4B5563',
                }}
              >
                {features.map((feature, index) => (
                  <div key={index} style={{ position: 'relative', paddingLeft: '2.25rem' }}>
                    <dt
                      style={{
                        display: 'inline',
                        fontWeight: '600',
                        color: '#111827',
                      }}
                    >
                      <div
                        style={{
                          position: 'absolute',
                          top: '0.25rem',
                          left: '0',
                          display: 'flex',
                          width: '20px',
                          height: '20px',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: '#3B82F6',
                        }}
                      >
                        {feature.icon}
                      </div>
                      {feature.title}
                    </dt>
                    <dd style={{ display: 'inline', marginLeft: '0.25rem' }}>
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          {/* Right Column - Image Placeholder */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '100%',
            }}
          >
            <div
              style={{
                width: '100%',
                maxWidth: '456px',
                aspectRatio: '432 / 360',
                borderRadius: '0.75rem',
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(0, 0, 0, 0.05)',
                background: 'linear-gradient(135deg, #E5E7EB 0%, #D1D5DB 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.875rem',
                color: '#6B7280',
                fontWeight: '500',
                marginLeft: '-1rem',
              }}
            >
              Application Dashboard
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
