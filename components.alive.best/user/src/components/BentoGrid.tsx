interface BentoCard {
  title: string;
  description: string;
  span?: 'row-span-2' | 'col-span-2';
  position?: 'left' | 'center' | 'right';
}

interface BentoGridProps {
  cards?: BentoCard[];
}

const defaultCards: BentoCard[] = [
  {
    title: 'Responsive Design',
    description: 'Beautiful layouts that work perfectly on any device. From mobile phones to large desktop screens, your content adapts seamlessly.',
    span: 'row-span-2',
    position: 'left',
  },
  {
    title: 'Lightning Fast',
    description: 'Optimized for speed and performance. Every millisecond counts, and our infrastructure is built for maximum efficiency.',
    position: 'center',
  },
  {
    title: 'Built-in Privacy',
    description: 'Your data is protected with enterprise-grade encryption. Security is not an afterthought, it is foundational.',
    position: 'center',
  },
  {
    title: 'Flexible Integration',
    description: 'Connect with any service or platform. Our powerful API makes it simple to build exactly what you need.',
    span: 'row-span-2',
    position: 'right',
  },
];

export const BentoGrid = ({ cards = defaultCards }: BentoGridProps) => {
  return (
    <div
      style={{
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
        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <p
            style={{
              fontSize: '0.875rem',
              lineHeight: '1.75',
              fontWeight: '600',
              color: '#2563EB',
              marginBottom: '0.5rem',
            }}
          >
            Build with confidence
          </p>
          <h2
            style={{
              marginTop: '0.5rem',
              maxWidth: '32rem',
              marginLeft: 'auto',
              marginRight: 'auto',
              fontSize: '2.25rem',
              fontWeight: '600',
              letterSpacing: '-0.025em',
              textAlign: 'center',
              color: '#111827',
            }}
          >
            Everything you need to build amazing products
          </h2>
        </div>

        {/* Bento Grid */}
        <div
          style={{
            marginTop: '2.5rem',
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            gap: '1rem',
            gridTemplateRows: 'repeat(2, auto)',
          }}
        >
          {/* Card 1 - Left (2 rows) */}
          <div
            style={{
              gridColumn: 'span 1',
              gridRow: 'span 2',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: '0px',
                borderRadius: '1rem',
                backgroundColor: '#ffffff',
                borderLeftWidth: '1px',
                borderTopWidth: '1px',
                borderRightWidth: '1px',
                borderBottomWidth: '1px',
                borderColor: '#E5E7EB',
              }}
            />
            <div
              style={{
                position: 'relative',
                display: 'flex',
                height: '100%',
                flexDirection: 'column',
                overflow: 'hidden',
                borderRadius: 'calc(1rem + 1px)',
              }}
            >
              <div style={{ paddingLeft: '2rem', paddingRight: '2rem', paddingTop: '2rem', paddingBottom: '0.75rem' }}>
                <p
                  style={{
                    marginTop: '0.5rem',
                    fontSize: '1.125rem',
                    fontWeight: '500',
                    letterSpacing: '-0.025em',
                    color: '#111827',
                  }}
                >
                  {cards[0].title}
                </p>
                <p
                  style={{
                    marginTop: '0.5rem',
                    fontSize: '0.875rem',
                    lineHeight: '1.5',
                    color: '#6B7280',
                  }}
                >
                  {cards[0].description}
                </p>
              </div>
              <div
                style={{
                  position: 'relative',
                  minHeight: '480px',
                  width: '100%',
                  flex: 1,
                  display: 'flex',
                  alignItems: 'flex-end',
                  justifyContent: 'center',
                  paddingTop: '2rem',
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    inset: '40px 20px 0px 20px',
                    overflow: 'hidden',
                    borderRadius: '0.75rem 0.75rem 0 0',
                    border: '12px solid #1F2937',
                    backgroundColor: '#111827',
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <div
                    style={{
                      width: '100%',
                      height: '100%',
                      background: 'linear-gradient(135deg, #1F2937 0%, #111827 100%)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.75rem',
                      color: '#9CA3AF',
                      fontWeight: '500',
                    }}
                  >
                    Mobile Device
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2 - Top Center */}
          <div
            style={{
              gridColumn: 'span 1',
              gridRow: 'span 1',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: '0px',
                borderRadius: '1rem',
                backgroundColor: '#ffffff',
                borderLeftWidth: '1px',
                borderTopWidth: '1px',
                borderRightWidth: '1px',
                borderBottomWidth: '1px',
                borderColor: '#E5E7EB',
              }}
            />
            <div
              style={{
                position: 'relative',
                display: 'flex',
                height: '100%',
                flexDirection: 'column',
                overflow: 'hidden',
                borderRadius: 'calc(1rem + 1px)',
              }}
            >
              <div style={{ paddingLeft: '2rem', paddingRight: '2rem', paddingTop: '2rem' }}>
                <p
                  style={{
                    marginTop: '0.5rem',
                    fontSize: '1.125rem',
                    fontWeight: '500',
                    letterSpacing: '-0.025em',
                    color: '#111827',
                    textAlign: 'center',
                  }}
                >
                  {cards[1].title}
                </p>
                <p
                  style={{
                    marginTop: '0.5rem',
                    fontSize: '0.875rem',
                    lineHeight: '1.5',
                    color: '#6B7280',
                    textAlign: 'center',
                  }}
                >
                  {cards[1].description}
                </p>
              </div>
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingTop: '2.5rem',
                  paddingBottom: '3rem',
                }}
              >
                <div
                  style={{
                    width: '80%',
                    height: '100px',
                    background: 'linear-gradient(135deg, #DBEAFE 0%, #93C5FD 100%)',
                    borderRadius: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.75rem',
                    color: '#1E40AF',
                    fontWeight: '500',
                  }}
                >
                  Performance Chart
                </div>
              </div>
            </div>
          </div>

          {/* Card 3 - Bottom Center */}
          <div
            style={{
              gridColumn: 'span 1',
              gridRow: 'span 1',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: '0px',
                borderRadius: '1rem',
                backgroundColor: '#ffffff',
                borderLeftWidth: '1px',
                borderTopWidth: '1px',
                borderRightWidth: '1px',
                borderBottomWidth: '1px',
                borderColor: '#E5E7EB',
              }}
            />
            <div
              style={{
                position: 'relative',
                display: 'flex',
                height: '100%',
                flexDirection: 'column',
                overflow: 'hidden',
                borderRadius: 'calc(1rem + 1px)',
              }}
            >
              <div style={{ paddingLeft: '2rem', paddingRight: '2rem', paddingTop: '2rem' }}>
                <p
                  style={{
                    marginTop: '0.5rem',
                    fontSize: '1.125rem',
                    fontWeight: '500',
                    letterSpacing: '-0.025em',
                    color: '#111827',
                    textAlign: 'center',
                  }}
                >
                  {cards[2].title}
                </p>
                <p
                  style={{
                    marginTop: '0.5rem',
                    fontSize: '0.875rem',
                    lineHeight: '1.5',
                    color: '#6B7280',
                    textAlign: 'center',
                  }}
                >
                  {cards[2].description}
                </p>
              </div>
              <div
                style={{
                  flex: 1,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  paddingTop: '1.5rem',
                  paddingBottom: '1.5rem',
                }}
              >
                <div
                  style={{
                    width: '120px',
                    height: '80px',
                    background: 'linear-gradient(135deg, #DCFCE7 0%, #86EFAC 100%)',
                    borderRadius: '0.5rem',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '0.75rem',
                    color: '#166534',
                    fontWeight: '500',
                  }}
                >
                  Lock Icon
                </div>
              </div>
            </div>
          </div>

          {/* Card 4 - Right (2 rows) */}
          <div
            style={{
              gridColumn: 'span 1',
              gridRow: 'span 2',
              position: 'relative',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: '0px',
                borderRadius: '1rem',
                backgroundColor: '#ffffff',
                borderLeftWidth: '1px',
                borderTopWidth: '1px',
                borderRightWidth: '1px',
                borderBottomWidth: '1px',
                borderColor: '#E5E7EB',
              }}
            />
            <div
              style={{
                position: 'relative',
                display: 'flex',
                height: '100%',
                flexDirection: 'column',
                overflow: 'hidden',
                borderRadius: 'calc(1rem + 1px)',
              }}
            >
              <div style={{ paddingLeft: '2rem', paddingRight: '2rem', paddingTop: '2rem', paddingBottom: '0.75rem' }}>
                <p
                  style={{
                    marginTop: '0.5rem',
                    fontSize: '1.125rem',
                    fontWeight: '500',
                    letterSpacing: '-0.025em',
                    color: '#111827',
                  }}
                >
                  {cards[3].title}
                </p>
                <p
                  style={{
                    marginTop: '0.5rem',
                    fontSize: '0.875rem',
                    lineHeight: '1.5',
                    color: '#6B7280',
                  }}
                >
                  {cards[3].description}
                </p>
              </div>
              <div
                style={{
                  position: 'relative',
                  minHeight: '480px',
                  width: '100%',
                  flex: 1,
                }}
              >
                <div
                  style={{
                    position: 'absolute',
                    top: '40px',
                    right: '0px',
                    bottom: '0px',
                    left: '40px',
                    overflow: 'hidden',
                    borderTopLeftRadius: '0.75rem',
                    backgroundColor: '#111827',
                    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.3)',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <div style={{ display: 'flex', backgroundColor: '#111827', borderBottom: '1px solid rgba(255, 255, 255, 0.05)' }}>
                    <div
                      style={{
                        fontSize: '0.875rem',
                        lineHeight: '1.5',
                        fontWeight: '500',
                        color: '#ffffff',
                        borderRight: '1px solid rgba(255, 255, 255, 0.1)',
                        borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        paddingLeft: '1rem',
                        paddingRight: '1rem',
                        paddingTop: '0.5rem',
                        paddingBottom: '0.5rem',
                      }}
                    >
                      APIClient.js
                    </div>
                    <div
                      style={{
                        fontSize: '0.875rem',
                        lineHeight: '1.5',
                        fontWeight: '500',
                        color: '#9CA3AF',
                        paddingLeft: '1rem',
                        paddingRight: '1rem',
                        paddingTop: '0.5rem',
                        paddingBottom: '0.5rem',
                        borderBottom: '1px solid rgba(0, 0, 0, 0.1)',
                      }}
                    >
                      Utils.js
                    </div>
                  </div>
                  <div
                    style={{
                      paddingLeft: '1.5rem',
                      paddingRight: '1.5rem',
                      paddingTop: '1.5rem',
                      paddingBottom: '3.5rem',
                      fontSize: '0.75rem',
                      color: '#9CA3AF',
                      fontFamily: 'monospace',
                      flex: 1,
                    }}
                  >
                    {`const api = new Client()
const response = await api.get('/data')
return response.json()`}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
