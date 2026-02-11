interface CareerLink {
  label: string;
  href: string;
}

interface CareerStat {
  label: string;
  value: string;
}

interface CareersProps {
  links?: CareerLink[];
  stats?: CareerStat[];
}

const defaultLinks: CareerLink[] = [
  { label: 'Available positions', href: '#' },
  { label: 'Internship opportunities', href: '#' },
  { label: 'Our culture', href: '#' },
  { label: 'Team leadership', href: '#' },
];

const defaultStats: CareerStat[] = [
  { label: 'Global locations', value: '15' },
  { label: 'Team members', value: '450+' },
  { label: 'Work week hours', value: '40' },
  { label: 'Vacation days', value: 'Unlimited' },
];

export const Careers = ({ links = defaultLinks, stats = defaultStats }: CareersProps) => {
  return (
    <div
      style={{
        position: 'relative',
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
      {/* Background Gradient Elements */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: -1,
          pointerEvents: 'none',
        }}
      >
        {/* Left gradient blob */}
        <div
          style={{
            position: 'hidden',
            top: '-40px',
            right: '50%',
            marginRight: '40px',
            transform: 'translateX(0)',
            width: '1100px',
            aspectRatio: '1097 / 845',
            background: 'linear-gradient(135deg, #8B5CF6 0%, #6366F1 100%)',
            opacity: 0.15,
            filter: 'blur(40px)',
            zIndex: -1,
          }}
        />
        {/* Right gradient blob */}
        <div
          style={{
            position: 'absolute',
            top: '-208px',
            left: '50%',
            zIndex: -1,
            transform: 'translateX(-50%)',
            width: '1100px',
            aspectRatio: '1097 / 845',
            background: 'linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)',
            opacity: 0.15,
            filter: 'blur(40px)',
          }}
        />
      </div>

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
        {/* Header Section */}
        <div style={{ marginLeft: 'auto', marginRight: 'auto', maxWidth: '42rem' }}>
          <h2
            style={{
              fontSize: '3.75rem',
              fontWeight: '600',
              letterSpacing: '-0.025em',
              color: '#111827',
              marginBottom: '2rem',
              lineHeight: '1.2',
            }}
          >
            Join our team
          </h2>
          <p
            style={{
              marginTop: '2rem',
              fontSize: '1.125rem',
              fontWeight: '500',
              color: '#374151',
              lineHeight: '1.75',
            }}
          >
            We're looking for talented individuals to help us build the future. Explore exciting opportunities and grow your career with us.
          </p>
        </div>

        {/* Links Section */}
        <div style={{ marginLeft: 'auto', marginRight: 'auto', marginTop: '2.5rem', maxWidth: '42rem' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem 2rem',
              fontSize: '1rem',
              fontWeight: '600',
              color: '#111827',
            }}
          >
            {links.map((link, index) => (
              <a
                key={index}
                href={link.href}
                style={{
                  textDecoration: 'none',
                  color: '#111827',
                  transition: 'color 200ms',
                  display: 'inline-flex',
                  gap: '0.5rem',
                  alignItems: 'center',
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = '#6366F1';
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLAnchorElement).style.color = '#111827';
                }}
              >
                {link.label}
                <span style={{ marginLeft: '0.25rem' }}>→</span>
              </a>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div
          style={{
            marginLeft: 'auto',
            marginRight: 'auto',
            marginTop: '4rem',
            maxWidth: '42rem',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '2rem',
            }}
          >
            {stats.map((stat, index) => (
              <div key={index} style={{ display: 'flex', flexDirection: 'column-reverse', gap: '0.25rem' }}>
                <dt
                  style={{
                    fontSize: '0.875rem',
                    lineHeight: '1.75',
                    color: '#4B5563',
                  }}
                >
                  {stat.label}
                </dt>
                <dd
                  style={{
                    fontSize: '2.25rem',
                    fontWeight: '600',
                    letterSpacing: '-0.025em',
                    color: '#111827',
                  }}
                >
                  {stat.value}
                </dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
