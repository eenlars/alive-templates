interface Feature {
  title: string;
  description: string;
  icon: JSX.Element;
}

interface FeaturesProps {
  features?: Feature[];
}

const defaultFeatures: Feature[] = [
  {
    title: 'Real-time Monitoring',
    description: 'Track your application performance and health metrics in real-time with instant notifications and detailed analytics dashboards.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-6 text-white">
        <path d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Data Encryption',
    description: 'Enterprise-grade encryption protects your sensitive data at rest and in transit. End-to-end security for complete peace of mind.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-6 text-white">
        <path d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Auto Scaling',
    description: 'Automatically adjust resources based on demand. Scale up during peak hours and down during off-peak times for optimal efficiency.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-6 text-white">
        <path d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: 'Disaster Recovery',
    description: 'Comprehensive backup and recovery strategies ensure business continuity. Restore your infrastructure in minutes, not hours.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="size-6 text-white">
        <path d="M7.864 4.243A7.5 7.5 0 0 1 19.5 10.5c0 2.92-.556 5.709-1.568 8.268M5.742 6.364A7.465 7.465 0 0 0 4.5 10.5a7.464 7.464 0 0 1-1.15 3.993m1.989 3.559A11.209 11.209 0 0 0 8.25 10.5a3.75 3.75 0 1 1 7.5 0c0 .527-.021 1.049-.064 1.565M12 10.5a14.94 14.94 0 0 1-3.6 9.75m6.633-4.596a18.666 18.666 0 0 1-2.485 5.33" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export const Features = ({ features = defaultFeatures }: FeaturesProps) => {
  return (
    <div style={{ backgroundColor: '#ffffff', paddingTop: '6rem', paddingBottom: '8rem', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: '80rem', paddingLeft: '1.5rem', paddingRight: '1.5rem', width: '100%' }}>
        {/* Header Section */}
        <div style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: '42rem', textAlign: 'center', marginBottom: '4rem' }}>
          <div
            style={{
              fontSize: '0.875rem',
              lineHeight: '1.75',
              fontWeight: '600',
              color: '#2563EB',
              marginBottom: '1rem',
            }}
          >
            Accelerate Growth
          </div>
          <h2
            style={{
              marginTop: '0.5rem',
              fontSize: '2.25rem',
              fontWeight: '600',
              letterSpacing: '-0.025em',
              color: '#111827',
              marginBottom: '1.5rem',
            }}
          >
            Everything you need to scale your infrastructure
          </h2>
          <p
            style={{
              marginTop: '1.5rem',
              fontSize: '1.125rem',
              lineHeight: '1.75',
              color: '#4B5563',
            }}
          >
            Harness the power of cloud-native architecture. Build, deploy, and manage your applications with confidence and ease.
          </p>
        </div>

        {/* Features Grid */}
        <div
          style={{
            marginTop: '4rem',
            marginLeft: 'auto',
            marginRight: 'auto',
            maxWidth: '56rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem 2rem',
          }}
        >
          {features.map((feature, index) => (
            <div key={index} style={{ position: 'relative', paddingLeft: '4rem' }}>
              <dt
                style={{
                  fontSize: '0.9375rem',
                  lineHeight: '1.75',
                  fontWeight: '600',
                  color: '#111827',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    display: 'flex',
                    width: '40px',
                    height: '40px',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '0.5rem',
                    backgroundColor: '#2563EB',
                  }}
                >
                  {feature.icon}
                </div>
                {feature.title}
              </dt>
              <dd
                style={{
                  marginTop: '0.5rem',
                  fontSize: '0.875rem',
                  lineHeight: '1.5',
                  color: '#4B5563',
                }}
              >
                {feature.description}
              </dd>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
