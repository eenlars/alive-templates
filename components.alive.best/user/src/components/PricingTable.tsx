import { useState } from 'react';

interface Feature {
  name: string;
}

interface PricingTier {
  name: string;
  description: string;
  monthlyPrice: number;
  annuallyPrice: number;
  badge: string;
  features: Feature[];
  featured?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Hobby',
    description: 'The essentials to provide your best work for clients.',
    monthlyPrice: 24,
    annuallyPrice: 249,
    badge: 'Most popular',
    features: [
      { name: '5 products' },
      { name: 'Up to 1,000 subscribers' },
      { name: 'Basic analytics' },
    ],
  },
  {
    name: 'Freelancer',
    description: 'The essentials to provide your best work for clients.',
    monthlyPrice: 34,
    annuallyPrice: 349,
    badge: 'Most popular',
    features: [
      { name: '5 products' },
      { name: 'Up to 1,000 subscribers' },
      { name: 'Basic analytics' },
      { name: '48-hour support response time' },
    ],
  },
  {
    name: 'Startup',
    description: 'A plan that scales with your rapidly growing business.',
    monthlyPrice: 64,
    annuallyPrice: 649,
    badge: 'Most popular',
    features: [
      { name: '25 products' },
      { name: 'Up to 10,000 subscribers' },
      { name: 'Advanced analytics' },
      { name: '24-hour support response time' },
      { name: 'Marketing automations' },
    ],
    featured: true,
  },
  {
    name: 'Enterprise',
    description: 'Dedicated support and infrastructure for your company.',
    monthlyPrice: 109,
    annuallyPrice: 1099,
    badge: 'Most popular',
    features: [
      { name: 'Unlimited products' },
      { name: 'Unlimited subscribers' },
      { name: 'Advanced analytics' },
      { name: '1-hour, dedicated support response time' },
      { name: 'Marketing automations' },
      { name: 'Custom reporting tools' },
    ],
  },
];

export const PricingTable = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <div style={{ padding: '2rem 1rem', backgroundColor: '#ffffff' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 'bold',
              color: '#000000',
              marginBottom: '0.5rem',
            }}
          >
            Simple, transparent pricing
          </h2>
          <p
            style={{
              fontSize: '0.875rem',
              color: '#666666',
              marginBottom: '1.5rem',
            }}
          >
            Choose the perfect plan for your needs
          </p>

          {/* Toggle Switch */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '1rem',
            }}
          >
            <span
              style={{
                fontSize: '0.875rem',
                fontWeight: '500',
                color: isAnnual ? '#999999' : '#6366F1',
              }}
            >
              Monthly
            </span>
            <button
              onClick={() => setIsAnnual(!isAnnual)}
              style={{
                position: 'relative',
                width: '56px',
                height: '32px',
                backgroundColor: isAnnual ? '#6366F1' : '#E5E7EB',
                border: 'none',
                borderRadius: '9999px',
                cursor: 'pointer',
                transition: 'background-color 200ms ease',
                padding: 0,
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: '3px',
                  left: isAnnual ? '28px' : '3px',
                  width: '26px',
                  height: '26px',
                  backgroundColor: '#ffffff',
                  borderRadius: '50%',
                  transition: 'left 200ms ease',
                }}
              />
            </button>
            <span
              style={{
                fontSize: '0.875rem',
                fontWeight: '500',
                color: isAnnual ? '#6366F1' : '#999999',
              }}
            >
              Annually
            </span>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '1rem',
          }}
        >
          {pricingTiers.map((tier) => (
            <div
              key={tier.name}
              style={{
                backgroundColor: '#F9FAFB',
                borderRadius: '0.75rem',
                padding: '1rem',
                border: tier.featured ? '2px solid #6366F1' : '1px solid #E5E7EB',
                boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                transition: 'all 200ms ease',
                display: 'flex',
                flexDirection: 'column',
                position: 'relative',
              }}
              onMouseEnter={(e) => {
                if (!tier.featured) {
                  (e.currentTarget as HTMLDivElement).style.boxShadow =
                    '0 4px 12px rgba(0, 0, 0, 0.15)';
                  (e.currentTarget as HTMLDivElement).style.transform =
                    'translateY(-2px)';
                }
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLDivElement).style.boxShadow =
                  '0 1px 3px rgba(0, 0, 0, 0.1)';
                (e.currentTarget as HTMLDivElement).style.transform =
                  'translateY(0)';
              }}
            >
              {/* Badge */}
              <div style={{ marginBottom: '0.5rem' }}>
                <span
                  style={{
                    fontSize: '0.65rem',
                    fontWeight: '600',
                    color: '#6366F1',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                  }}
                >
                  {tier.badge}
                </span>
              </div>

              {/* Title */}
              <h3
                style={{
                  fontSize: '1.25rem',
                  fontWeight: 'bold',
                  color: '#000000',
                  marginBottom: '0.25rem',
                }}
              >
                {tier.name}
              </h3>

              {/* Description */}
              <p
                style={{
                  fontSize: '0.75rem',
                  color: '#666666',
                  marginBottom: '1rem',
                  lineHeight: '1.4',
                }}
              >
                {tier.description}
              </p>

              {/* Price */}
              <div style={{ marginBottom: '1rem' }}>
                <div
                  style={{
                    fontSize: '2rem',
                    fontWeight: 'bold',
                    color: '#000000',
                  }}
                >
                  ${isAnnual ? tier.annuallyPrice : tier.monthlyPrice}
                </div>
                <div
                  style={{
                    fontSize: '0.875rem',
                    color: '#666666',
                    marginTop: '0.25rem',
                  }}
                >
                  {isAnnual ? 'per year' : 'per month'}
                </div>
              </div>

              {/* Button */}
              <button
                style={{
                  padding: '0.5rem 1rem',
                  borderRadius: '0.5rem',
                  fontSize: '0.75rem',
                  fontWeight: '600',
                  border: tier.featured ? 'none' : '1.5px solid #6366F1',
                  backgroundColor: tier.featured ? '#6366F1' : 'transparent',
                  color: tier.featured ? '#ffffff' : '#6366F1',
                  cursor: 'pointer',
                  transition: 'all 200ms ease',
                  marginBottom: '0.75rem',
                }}
                onMouseEnter={(e) => {
                  const button = e.currentTarget as HTMLButtonElement;
                  if (tier.featured) {
                    button.style.backgroundColor = '#4F46E5';
                  } else {
                    button.style.backgroundColor = '#6366F1';
                    button.style.color = '#ffffff';
                  }
                }}
                onMouseLeave={(e) => {
                  const button = e.currentTarget as HTMLButtonElement;
                  if (tier.featured) {
                    button.style.backgroundColor = '#6366F1';
                  } else {
                    button.style.backgroundColor = 'transparent';
                    button.style.color = '#6366F1';
                  }
                }}
              >
                Buy plan
              </button>

              {/* Features */}
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, flex: 1 }}>
                {tier.features.map((feature, index) => (
                  <li
                    key={index}
                    style={{
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: '0.5rem',
                      marginBottom: '0.5rem',
                      fontSize: '0.7rem',
                      color: '#333333',
                    }}
                  >
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 20 20"
                      fill="none"
                      style={{ flexShrink: 0, marginTop: '1px' }}
                    >
                      <circle cx="10" cy="10" r="10" fill="#6366F1" />
                      <path
                        d="M6 10L9 13L14 7"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span>{feature.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
