import { Link } from 'react-router-dom'
import { useState } from 'react'
import { PromptButton } from '../../components/PromptButton'
import { PromptModal } from '../../components/PromptModal'

const EventSchedule = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isCopied, setIsCopied] = useState(false)

  const schedule = [
    { time: '19:00', title: 'Doors Open', description: 'Registration and welcome drinks', location: 'Main Hall' },
    { time: '19:30', title: 'Opening Keynote', description: 'Introduction by CEO', location: 'Main Hall' },
    { time: '20:15', title: 'Panel Discussion', description: 'Industry experts share insights', location: 'Conference Room A' },
    { time: '21:00', title: 'Networking', description: 'Meet and connect with attendees', location: 'Lounge' },
  ]

  const componentPrompt = `Create a centered event schedule component:

Layout:
- Center the component vertically and horizontally on the page
- Maximum width: 3xl
- Pure white background

Content:
- Heading: "Event Agenda"
- Four schedule items with timeline:
  1. 19:00 - Doors Open (Registration and welcome drinks) - Main Hall
  2. 19:30 - Opening Keynote (Introduction by CEO) - Main Hall
  3. 20:15 - Panel Discussion (Industry experts share insights) - Conference Room A
  4. 21:00 - Networking (Meet and connect with attendees) - Lounge

Visual Elements:
- Vertical timeline with left border accent
- Time displayed prominently at the left
- Event title: Bold, medium size
- Description: Smaller, gray text below title
- Location: Small text at bottom of each event
- Left border (2px) in accent color
- Proper spacing and padding for each event item

Colors:
- Use design system colors (foreground, muted-foreground, accent, border, background)
- Heading: Foreground color
- Time: Accent color (bold)
- Title: Foreground color
- Description and location: Muted-foreground
- Timeline border: Accent color

The component should be self-contained and require no external context to recreate.`

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(componentPrompt)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  const EventScheduleComponent = () => (
    <div className="bg-background p-8 max-w-3xl w-full">
      <h2 className="text-2xl font-bold text-foreground mb-6">Event Agenda</h2>

      <div className="space-y-4">
        {schedule.map((item, idx) => (
          <div key={idx} className="border-l-2 border-accent pl-4 pb-4">
            <div className="flex items-start gap-4">
              <time className="text-accent font-semibold text-sm min-w-[4rem]" dateTime={item.time}>
                {item.time}
              </time>
              <div className="flex-1">
                <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span>{item.location}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-background p-8 flex flex-col items-center justify-center relative">
      <Link to="/components" className="absolute top-8 left-8 inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded px-2 py-1">
        ← All components
      </Link>

      <div className="absolute top-8 right-8 flex gap-2">
        <PromptButton onClick={() => setIsModalOpen(true)}>
          See prompt
        </PromptButton>
        <PromptButton onClick={handleCopyPrompt} isCopied={isCopied}>
          {isCopied ? 'Copied!' : 'Copy prompt'}
        </PromptButton>
      </div>

      <div className="border border-border rounded-[--radius] overflow-hidden">
        <EventScheduleComponent />
      </div>

      <PromptModal
        isOpen={isModalOpen}
        title="Event Schedule Prompt"
        content={componentPrompt}
        isLoading={false}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  )
}

export default EventSchedule
