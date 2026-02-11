import { useState } from 'react'

export const FAQPreview = () => {
  const [openIndex, setOpenIndex] = useState<number>(0)

  return (
    <div className="bg-background p-8 max-w-3xl mx-auto">
      <h2 className="text-2xl font-bold text-foreground mb-6">Frequently Asked Questions</h2>

      <div className="space-y-2">
        {[
          { q: 'How do I get started?', a: 'Simply sign up for an account and follow the onboarding guide.' },
          { q: 'What payment methods do you accept?', a: 'We accept all major credit cards, PayPal, and bank transfers.' },
          { q: 'Can I cancel my subscription?', a: 'Yes, you can cancel anytime from your account settings.' },
        ].map((item, idx) => (
          <div key={idx} className="border-b border-border pb-4">
            <button
              onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
              className="w-full text-left flex items-center justify-between text-foreground font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded px-2 py-1"
              aria-expanded={openIndex === idx}
              aria-controls={`answer-${idx}`}
            >
              <span>{item.q}</span>
              <span className="text-accent">{openIndex === idx ? '−' : '+'}</span>
            </button>
            {openIndex === idx && (
              <div id={`answer-${idx}`} className="mt-2 text-muted-foreground text-sm pl-2">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
