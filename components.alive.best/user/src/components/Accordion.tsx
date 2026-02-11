import React, { useState } from 'react';

interface AccordionItemType {
  id: string;
  title: string;
  content: string;
  defaultOpen?: boolean;
}

const accordionItems: AccordionItemType[] = [
  {
    id: 'storage-capacity',
    title: 'What is the storage capacity available?',
    content: 'Our products come with multiple storage tiers. The basic model includes 256GB of high-speed SSD storage, while the professional edition offers up to 2TB. Enterprise customers can request custom configurations with additional storage options.',
    defaultOpen: true,
  },
  {
    id: 'warranty-coverage',
    title: 'What does the warranty cover?',
    content: 'Our comprehensive warranty covers all manufacturing defects and hardware failures for the first two years. This includes battery replacement, screen repairs, and structural damage caused by normal use. Extended warranty plans are available for additional coverage.',
    defaultOpen: false,
  },
  {
    id: 'software-updates',
    title: 'How often do you release software updates?',
    content: 'We release security and maintenance updates monthly, with major feature updates scheduled quarterly. Critical patches are deployed immediately when security issues are identified. All updates are free and automatically downloaded to ensure your system stays current.',
    defaultOpen: false,
  },
];

export const Accordion: React.FC = () => {
  const [expandedItem, setExpandedItem] = useState<string | null>(accordionItems[0].id);

  const toggleItem = (id: string) => {
    setExpandedItem(expandedItem === id ? null : id);
  };

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
          width: '100%',
          maxWidth: '600px',
          borderTop: '1px solid hsl(0, 0%, 92%)',
        }}
      >
        {accordionItems.map((item, index) => {
          const isExpanded = expandedItem === item.id;

          return (
            <div key={item.id}>
              <button
                onClick={() => toggleItem(item.id)}
                aria-controls={`${item.id}-collapse`}
                aria-expanded={isExpanded}
                style={{
                  width: '100%',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '1rem',
                  backgroundColor: 'transparent',
                  border: 'none',
                  padding: '1.25rem',
                  cursor: 'pointer',
                  fontSize: '0.95rem',
                  fontWeight: '500',
                  color: 'hsl(0, 0%, 20%)',
                  textAlign: 'left',
                  transition: 'all 200ms ease',
                  borderBottom: index < accordionItems.length - 1 ? '1px solid hsl(0, 0%, 92%)' : 'none',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'hsl(0, 0%, 97%)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                }}
              >
                {/* Plus Icon */}
                <svg
                  style={{
                    width: '1.125rem',
                    height: '1.125rem',
                    flexShrink: 0,
                    color: 'hsl(0, 0%, 20%)',
                    display: isExpanded ? 'none' : 'block',
                    transition: 'all 200ms ease',
                  }}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>

                {/* Minus Icon */}
                <svg
                  style={{
                    width: '1.125rem',
                    height: '1.125rem',
                    flexShrink: 0,
                    color: 'hsl(0, 0%, 20%)',
                    display: isExpanded ? 'block' : 'none',
                    transition: 'all 200ms ease',
                  }}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>

                <span>{item.title}</span>
              </button>

              {/* Content Area */}
              <div
                id={`${item.id}-collapse`}
                role="region"
                aria-labelledby={item.id}
                style={{
                  overflow: 'hidden',
                  transition: 'all 300ms ease',
                  maxHeight: isExpanded ? '1000px' : '0px',
                  opacity: isExpanded ? 1 : 0,
                }}
              >
                <div
                  style={{
                    paddingLeft: '1.25rem',
                    paddingRight: '1.25rem',
                    paddingBottom: '1rem',
                    fontSize: '0.875rem',
                    lineHeight: '1.6',
                    color: 'hsl(0, 0%, 40%)',
                  }}
                >
                  {item.content}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
