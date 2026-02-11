import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

const CardStack = () => {
  const [cards, setCards] = useState([
    { title: 'Design', description: 'Create beautiful interfaces with minimal effort', gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)' },
    { title: 'Development', description: 'Build fast and responsive web applications', gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)' },
    { title: 'Mobile', description: 'Touch-optimized experiences for all devices', gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)' },
    { title: 'Launch', description: 'Ship products quickly and efficiently', gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)' },
    { title: 'Analytics', description: 'Track performance and user behavior', gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)' },
  ])
  const [showModal, setShowModal] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const stackRef = useRef<HTMLDivElement>(null)
  const [dragState, setDragState] = useState({ isDragging: false, startX: 0, currentX: 0 })

  const PROMPT = `Create a complete HTML page for an interactive swipeable card stack component with the following exact specifications:

PAGE STRUCTURE:
- Full HTML document with proper DOCTYPE and meta tags
- Page title: "Card Stack Component - Component Library"
- Light gray background: #fafafa
- System font stack: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif
- 20px padding on body
- Min-height: 100vh

NAVIGATION BAR (top of page):
- Display flex, space-between alignment
- 60px margin-bottom
- Three buttons total:
  Left button:
  - Text: "← All components"
  - Links to: component-library.html
  - Style: white background, 1px solid #e0e0e0 border, 6px border-radius
  - Padding: 8px 16px
  - Font: 13px, weight 500, color #333
  - Hover: background #f5f5f5, border #ccc

  Right buttons (in a flex container with 10px gap):
  - Button 1: "See Prompt" (opens modal on click)
  - Button 2: "Copy Prompt" (copies to clipboard on click)
  - Same styling as left button

CARD STACK COMPONENT:
Container:
- Position relative
- Dimensions: 400px wide × 300px tall (4:3 ratio)
- Perspective: 1500px
- Perspective-origin: center bottom
- Transform-style: preserve-3d
- Centered on page using flexbox

5 Cards total, each with:
CARD STRUCTURE:
- Position absolute
- Full container size (400x300px)
- White background
- 1px solid #e0e0e0 border
- 12px border-radius
- Cursor: grab (grabbing when active)
- Display flex, flex-direction column
- Overflow hidden
- Transform-style: preserve-3d

Card sections:
GRADIENT AREA (75% height):
- Full width
- Five different gradients for the five cards:
  Card 1: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
  Card 2: linear-gradient(135deg, #f093fb 0%, #f5576c 100%)
  Card 3: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)
  Card 4: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)
  Card 5: linear-gradient(135deg, #fa709a 0%, #fee140 100%)

TEXT AREA (25% height):
- White background
- Padding: 18px vertical, 24px horizontal
- Display flex, flex-direction column, justify-content flex-end
- Title:
  - Font-size: 22px
  - Font-weight: 600
  - Color: #1a1a1a
  - Letter-spacing: -0.02em
  - Line-height: 1.2
  - Margin-bottom: 6px
- Description:
  - Font-size: 13px
  - Color: #999
  - Line-height: 1.5
  - Font-weight: 400

CARD CONTENT:
Card 1: Title "Design", Description "Create beautiful interfaces with minimal effort"
Card 2: Title "Development", Description "Build fast and responsive web applications"
Card 3: Title "Mobile", Description "Touch-optimized experiences for all devices"
Card 4: Title "Launch", Description "Ship products quickly and efficiently"
Card 5: Title "Analytics", Description "Track performance and user behavior"

3D STACK POSITIONING (CSS nth-child):
Card 1: transform: translateY(0) translateZ(0) rotateX(0deg); opacity: 1; z-index: 5
Card 2: transform: translateY(-50px) translateZ(-50px) rotateX(10deg); opacity: 0.95; z-index: 4
Card 3: transform: translateY(-100px) translateZ(-100px) rotateX(20deg); opacity: 0.85; z-index: 3
Card 4: transform: translateY(-150px) translateZ(-150px) rotateX(30deg); opacity: 0.75; z-index: 2
Card 5: transform: translateY(-200px) translateZ(-200px) rotateX(40deg); opacity: 0.65; z-index: 1
Transitions: transform 0.3s ease, opacity 0.3s ease

DRAG & SWIPE INTERACTION (JavaScript):
- Only top card (first child) is draggable
- Event listeners: mousedown, touchstart, mousemove, touchmove, mouseup, touchend
- On drag start: capture starting X position, set transition to none
- During drag:
  - Calculate difference from start
  - Apply: translateX(difference) rotate(difference/20)
  - Fade: opacity = 1 - Math.abs(difference)/300
- On drag end:
  - If dragged > 100px: animate off screen (1000px), rotate ±50deg, fade to 0
  - After 300ms: move card to back of stack, reset transforms
  - If dragged < 100px: snap back to original position
  - Transitions for snap-back and swipe-away: 0.3s ease

MODAL POPUP:
Overlay:
- Fixed position, full screen
- Background: rgba(0, 0, 0, 0.5)
- Z-index: 1000
- Display: none (flex when active)
- Click overlay to close

Modal content:
- White background
- 8px border-radius
- 1px solid #e0e0e0 border
- Max-width: 700px
- Max-height: 80vh
- Animation: slideUp 0.2s ease

Header:
- Padding: 20px
- Border-bottom: 1px solid #e0e0e0
- Title: "Component Prompt" (16px, weight 600, color #1a1a1a)
- Close button (×): 24px font, color #999, hover background #f5f5f5

Body:
- Padding: 20px
- Scrollable
- Prompt text in monospace font (Monaco, Courier New)
- Background: #fafafa
- 1px solid #e0e0e0 border
- 6px border-radius
- 16px padding
- 12px font-size
- Line-height: 1.7
- Color: #333

Footer:
- Padding: 16px 20px
- Border-top: 1px solid #e0e0e0
- Two buttons: "Copy & Close" and "Close"

TOAST NOTIFICATION:
- Fixed position: bottom 30px, right 30px
- Background: #1a1a1a
- Color: white
- Padding: 12px 20px
- Border-radius: 6px
- Font-size: 13px
- Display: none (flex when active)
- Shows "Copied to clipboard" for 3 seconds
- Animation: slideInRight 0.2s ease
- Z-index: 2000

JAVASCRIPT FUNCTIONS:
- initCards() - generates all 5 cards with data
- createCard(data, index) - creates individual card with drag handlers
- openModal() - shows modal with prompt text
- closeModal() - hides modal
- closeModalOnOverlay(event) - closes modal when clicking overlay
- ESC key listener to close modal
- copyPrompt() - copies super prompt to clipboard using navigator.clipboard
- showToast() - displays toast notification for 3 seconds

RESPONSIVE DESIGN (max-width: 768px):
- Navigation stacks vertically
- Buttons full width
- Card stack maintains 4:3 ratio
- Text padding: 16px/20px
- Title: 18px
- Description: 12px

ANIMATIONS:
- fadeIn: opacity 0 to 1 over 0.2s
- slideUp: translateY(20px) to 0, opacity 0 to 1 over 0.2s
- slideInRight: translateX(400px) to 0, opacity 0 to 1 over 0.2s`

  const handleMouseDown = (e: React.MouseEvent) => {
    const topCard = stackRef.current?.children[0] as HTMLElement
    if (topCard) {
      setDragState({ isDragging: true, startX: e.clientX, currentX: 0 })
      topCard.style.transition = 'none'
    }
  }

  const copyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(PROMPT)
      setShowToast(true)
      setTimeout(() => setShowToast(false), 3000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  useEffect(() => {
    const handleMouseMoveEvent = (e: MouseEvent) => {
      if (!dragState.isDragging) return
      const diff = e.clientX - dragState.startX
      setDragState(prev => ({ ...prev, currentX: diff }))
      const topCard = stackRef.current?.children[0] as HTMLElement
      if (topCard) {
        const opacity = 1 - Math.abs(diff) / 300
        topCard.style.transform = `translateX(${diff}px) rotate(${diff / 20}deg)`
        topCard.style.opacity = `${opacity}`
      }
    }

    const handleMouseUpEvent = () => {
      if (!dragState.isDragging) return
      setDragState(prev => ({ ...prev, isDragging: false }))
      const topCard = stackRef.current?.children[0] as HTMLElement
      if (!topCard) return

      if (Math.abs(dragState.currentX) > 100) {
        topCard.style.transition = '0.3s ease'
        const direction = dragState.currentX > 0 ? 1 : -1
        topCard.style.transform = `translateX(${direction * 1000}px) rotate(${direction * 50}deg)`
        topCard.style.opacity = '0'
        setTimeout(() => {
          setCards(prev => [...prev.slice(1), prev[0]])
        }, 300)
      } else {
        topCard.style.transition = '0.3s ease'
        topCard.style.transform = 'translateX(0) rotate(0deg)'
        topCard.style.opacity = '1'
      }
    }

    document.addEventListener('mousemove', handleMouseMoveEvent)
    document.addEventListener('mouseup', handleMouseUpEvent)
    return () => {
      document.removeEventListener('mousemove', handleMouseMoveEvent)
      document.removeEventListener('mouseup', handleMouseUpEvent)
    }
  }, [dragState])

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowModal(false)
    }
    document.addEventListener('keydown', handleEsc)
    return () => document.removeEventListener('keydown', handleEsc)
  }, [])

  return (
    <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", backgroundColor: '#fafafa', padding: '20px', minHeight: '100vh' }}>
      {/* Navigation */}
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '60px' }}>
        <Link
          to="/components"
          style={{
            background: 'white',
            border: '1px solid #e0e0e0',
            borderRadius: '6px',
            padding: '8px 16px',
            fontSize: '13px',
            fontWeight: 500,
            color: '#333',
            textDecoration: 'none',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}
          onMouseEnter={e => {
            (e.target as HTMLElement).style.background = '#f5f5f5'
            ;(e.target as HTMLElement).style.borderColor = '#ccc'
          }}
          onMouseLeave={e => {
            (e.target as HTMLElement).style.background = 'white'
            ;(e.target as HTMLElement).style.borderColor = '#e0e0e0'
          }}
        >
          ← All components
        </Link>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={() => setShowModal(true)}
            style={{
              background: 'white',
              border: '1px solid #e0e0e0',
              borderRadius: '6px',
              padding: '8px 16px',
              fontSize: '13px',
              fontWeight: 500,
              color: '#333',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseEnter={e => {
              (e.target as HTMLElement).style.background = '#f5f5f5'
              ;(e.target as HTMLElement).style.borderColor = '#ccc'
            }}
            onMouseLeave={e => {
              (e.target as HTMLElement).style.background = 'white'
              ;(e.target as HTMLElement).style.borderColor = '#e0e0e0'
            }}
          >
            See Prompt
          </button>
          <button
            onClick={copyPrompt}
            style={{
              background: 'white',
              border: '1px solid #e0e0e0',
              borderRadius: '6px',
              padding: '8px 16px',
              fontSize: '13px',
              fontWeight: 500,
              color: '#333',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseEnter={e => {
              (e.target as HTMLElement).style.background = '#f5f5f5'
              ;(e.target as HTMLElement).style.borderColor = '#ccc'
            }}
            onMouseLeave={e => {
              (e.target as HTMLElement).style.background = 'white'
              ;(e.target as HTMLElement).style.borderColor = '#e0e0e0'
            }}
          >
            Copy Prompt
          </button>
        </div>
      </div>

      {/* Card Stack */}
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: 'calc(100vh - 200px)' }}>
        <div
          ref={stackRef}
          style={{
            position: 'relative',
            width: '400px',
            height: '300px',
            perspective: '1500px',
            perspectiveOrigin: 'center bottom'
          }}
          onMouseDown={handleMouseDown}
        >
          {cards.map((card, idx) => (
            <div
              key={idx}
              style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                background: 'white',
                border: '1px solid #e0e0e0',
                borderRadius: '12px',
                cursor: idx === 0 ? 'grab' : 'default',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                transformStyle: 'preserve-3d',
                transition: idx === 0 ? 'none' : 'transform 0.3s ease, opacity 0.3s ease',
                transform:
                  idx === 0
                    ? 'translateY(0) translateZ(0) rotateX(0deg)'
                    : idx === 1
                      ? 'translateY(-50px) translateZ(-50px) rotateX(10deg)'
                      : idx === 2
                        ? 'translateY(-100px) translateZ(-100px) rotateX(20deg)'
                        : idx === 3
                          ? 'translateY(-150px) translateZ(-150px) rotateX(30deg)'
                          : 'translateY(-200px) translateZ(-200px) rotateX(40deg)',
                opacity: [1, 0.95, 0.85, 0.75, 0.65][idx],
                zIndex: 5 - idx
              }}
            >
              <div style={{ background: card.gradient, height: '75%', width: '100%' }} />
              <div
                style={{
                  background: 'white',
                  height: '25%',
                  width: '100%',
                  padding: '18px 24px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'flex-end'
                }}
              >
                <div
                  style={{
                    fontSize: '22px',
                    fontWeight: 600,
                    color: '#1a1a1a',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.2,
                    marginBottom: '6px'
                  }}
                >
                  {card.title}
                </div>
                <div
                  style={{
                    fontSize: '13px',
                    color: '#999',
                    lineHeight: 1.5,
                    fontWeight: 400
                  }}
                >
                  {card.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'rgba(0, 0, 0, 0.5)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000
          }}
          onClick={() => setShowModal(false)}
        >
          <div
            style={{
              background: 'white',
              borderRadius: '8px',
              border: '1px solid #e0e0e0',
              maxWidth: '700px',
              maxHeight: '80vh',
              display: 'flex',
              flexDirection: 'column',
              animation: 'slideUp 0.2s ease'
            }}
            onClick={e => e.stopPropagation()}
          >
            {/* Header */}
            <div style={{ padding: '20px', borderBottom: '1px solid #e0e0e0', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ fontSize: '16px', fontWeight: 600, color: '#1a1a1a' }}>Component Prompt</div>
              <button
                onClick={() => setShowModal(false)}
                style={{
                  background: 'none',
                  border: 'none',
                  fontSize: '24px',
                  color: '#999',
                  cursor: 'pointer',
                  padding: '0',
                  width: '32px',
                  height: '32px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '4px',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={e => {
                  (e.target as HTMLElement).style.background = '#f5f5f5'
                }}
                onMouseLeave={e => {
                  (e.target as HTMLElement).style.background = 'none'
                }}
              >
                ×
              </button>
            </div>

            {/* Body */}
            <div style={{ padding: '20px', overflow: 'auto', flex: 1 }}>
              <pre
                style={{
                  background: '#fafafa',
                  border: '1px solid #e0e0e0',
                  borderRadius: '6px',
                  padding: '16px',
                  fontSize: '12px',
                  lineHeight: 1.7,
                  color: '#333',
                  fontFamily: 'Monaco, Courier New, monospace',
                  margin: 0,
                  whiteSpace: 'pre-wrap',
                  wordWrap: 'break-word'
                }}
              >
                {PROMPT}
              </pre>
            </div>

            {/* Footer */}
            <div style={{ padding: '16px 20px', borderTop: '1px solid #e0e0e0', display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
              <button
                onClick={copyPrompt}
                style={{
                  background: '#1a1a1a',
                  color: 'white',
                  border: 'none',
                  borderRadius: '6px',
                  padding: '8px 16px',
                  fontSize: '13px',
                  fontWeight: 500,
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={e => {
                  (e.target as HTMLElement).style.opacity = '0.9'
                }}
                onMouseLeave={e => {
                  (e.target as HTMLElement).style.opacity = '1'
                }}
              >
                Copy & Close
              </button>
              <button
                onClick={() => setShowModal(false)}
                style={{
                  background: '#f5f5f5',
                  border: '1px solid #e0e0e0',
                  borderRadius: '6px',
                  padding: '8px 16px',
                  fontSize: '13px',
                  fontWeight: 500,
                  color: '#333',
                  cursor: 'pointer',
                  transition: 'all 0.2s'
                }}
                onMouseEnter={e => {
                  (e.target as HTMLElement).style.background = '#efefef'
                }}
                onMouseLeave={e => {
                  (e.target as HTMLElement).style.background = '#f5f5f5'
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toast */}
      {showToast && (
        <div
          style={{
            position: 'fixed',
            bottom: '30px',
            right: '30px',
            background: '#1a1a1a',
            color: 'white',
            padding: '12px 20px',
            borderRadius: '6px',
            fontSize: '13px',
            display: 'flex',
            zIndex: 2000,
            animation: 'slideInRight 0.2s ease'
          }}
        >
          Copied to clipboard
        </div>
      )}

      <style>{`
        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes slideInRight {
          from {
            transform: translateX(400px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @media (max-width: 768px) {
          div[style*="display: flex"][style*="justifyContent: space-between"] {
            flex-direction: column;
            gap: 10px;
          }
          button {
            width: 100%;
          }
        }
      `}</style>
    </div>
  )
}

export default CardStack
