import { useState } from 'react'
import { Link } from 'react-router-dom'

const SpotifyPlayer = () => {
  const [playingIndex, setPlayingIndex] = useState(0)

  const tracks = [
    {
      title: 'Aurora Rising',
      album: 'Skyward Journey',
      artist: 'Harmonic Collective',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      title: 'Crimson Echo',
      album: 'Velvet Memories',
      artist: 'Sonic Architects',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      title: 'Sapphire Flow',
      album: 'Crystal Waters',
      artist: 'Echo Realm',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      title: 'Emerald Path',
      album: 'Forest Dreams',
      artist: 'Nature Pulse',
      gradient: 'linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)'
    }
  ]

  const togglePlay = (index: number) => {
    setPlayingIndex(playingIndex === index ? -1 : index)
  }

  const PROMPT = `Create a centered audio player component with the following exact specifications:

PAGE STRUCTURE:
- Full HTML document with proper DOCTYPE and meta tags
- Page title: "Audio Player Component - Component Library"
- Pure white background
- System font stack: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, sans-serif
- Min-height: 100vh
- Centered content area

NAVIGATION BAR (top of page):
- Display flex, space-between alignment
- Two sections: left link and right buttons
- Left button:
  - Text: "← All components"
  - Links to: component-library.html
  - Style: white background, 1px solid #e0e0e0 border, 6px border-radius
  - Padding: 8px 16px
  - Font: 13px, weight 500, color #333
  - Hover: background #f5f5f5, border #ccc
- Right buttons (in a flex container with 10px gap):
  - Button 1: "See Prompt" (opens modal on click)
  - Button 2: "Copy Prompt" (copies to clipboard on click)
  - Same styling as left button

PLAYER CONTAINER:
- Center on page using flexbox
- Maximum width: 600px
- Display flex, flex-direction: column, gap: 20px
- Padding: 40px

PLAYER HEADER:
- Text: "Audio Playlist"
- Subtext: "Browse and play your favorite tracks"
- Heading: 24px, weight 600, color #1a1a1a
- Subheading: 14px, weight 400, color #999
- Margin-bottom: 20px

TRACK ITEMS:
- Four tracks total
- Each track card:
  - Display flex, gap: 12px
  - Padding: 16px
  - Background: white
  - Border: 1px solid #e0e0e0
  - Border-radius: 8px
  - Cursor: pointer
  - Transition: all 0.3s ease
  - Hover: background #f5f5f5, border #ccc

TRACK CONTENT:
Each track has:
1. Album art placeholder (left side):
   - Width: 56px, height: 56px
   - Border-radius: 4px
   - Background: linear gradient (unique per track)
   - Track 1: linear-gradient(135deg, #667eea 0%, #764ba2 100%)
   - Track 2: linear-gradient(135deg, #f093fb 0%, #f5576c 100%)
   - Track 3: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)
   - Track 4: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)
   - Flex-shrink: 0

2. Track info (middle section):
   - Flex: 1, minWidth: 0
   - Title: 16px, weight 600, color #1a1a1a
   - Album + Artist: 13px, weight 400, color #999
   - Margin-bottom: 4px between title and subtitle
   - Overflow handling: ellipsis, nowrap

3. Control button (right side):
   - Width: 44px, height: 44px
   - Border-radius: 50%
   - Background: #667eea
   - Border: none
   - Color: white
   - Font-size: 16px
   - Cursor: pointer
   - Flex-shrink: 0
   - Transition: all 0.3s ease
   - Hover: transform scale(1.05), box-shadow 0 4px 12px rgba(102, 126, 234, 0.4)
   - Shows play (▶) or pause (⏸) symbol

TRACK DATA:
Track 1: "Aurora Rising" by Harmonic Collective from album "Skyward Journey"
Track 2: "Crimson Echo" by Sonic Architects from album "Velvet Memories"
Track 3: "Sapphire Flow" by Echo Realm from album "Crystal Waters"
Track 4: "Emerald Path" by Nature Pulse from album "Forest Dreams"

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

RESPONSIVE DESIGN (max-width: 768px):
- Player width: 100%, max-width 500px
- Track card padding: 12px
- Album art: 48px
- Button size: 40px

ANIMATIONS:
- fadeIn: opacity 0 to 1 over 0.2s
- slideUp: translateY(20px) to 0, opacity 0 to 1 over 0.2s`

  const handleCopyPrompt = async () => {
    try {
      await navigator.clipboard.writeText(PROMPT)
      alert('Prompt copied to clipboard!')
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  return (
    <div style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif", backgroundColor: '#ffffff', minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Navigation Bar */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 40px',
        borderBottom: '1px solid #e0e0e0'
      }}>
        <Link
          to="/components"
          style={{
            background: '#ffffff',
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
          onMouseEnter={(e) => {
            (e.target as HTMLElement).style.background = '#f5f5f5'
            ;(e.target as HTMLElement).style.borderColor = '#ccc'
          }}
          onMouseLeave={(e) => {
            (e.target as HTMLElement).style.background = '#ffffff'
            ;(e.target as HTMLElement).style.borderColor = '#e0e0e0'
          }}
        >
          ← All components
        </Link>
        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={() => alert(PROMPT)}
            style={{
              background: '#ffffff',
              border: '1px solid #e0e0e0',
              borderRadius: '6px',
              padding: '8px 16px',
              fontSize: '13px',
              fontWeight: 500,
              color: '#333',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.background = '#f5f5f5'
              ;(e.target as HTMLElement).style.borderColor = '#ccc'
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.background = '#ffffff'
              ;(e.target as HTMLElement).style.borderColor = '#e0e0e0'
            }}
          >
            See Prompt
          </button>
          <button
            onClick={handleCopyPrompt}
            style={{
              background: '#ffffff',
              border: '1px solid #e0e0e0',
              borderRadius: '6px',
              padding: '8px 16px',
              fontSize: '13px',
              fontWeight: 500,
              color: '#333',
              cursor: 'pointer',
              transition: 'all 0.2s'
            }}
            onMouseEnter={(e) => {
              (e.target as HTMLElement).style.background = '#f5f5f5'
              ;(e.target as HTMLElement).style.borderColor = '#ccc'
            }}
            onMouseLeave={(e) => {
              (e.target as HTMLElement).style.background = '#ffffff'
              ;(e.target as HTMLElement).style.borderColor = '#e0e0e0'
            }}
          >
            Copy Prompt
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '40px 20px'
      }}>
        <div style={{ maxWidth: '600px', width: '100%' }}>
          <div style={{ marginBottom: '40px' }}>
            <h1 style={{ fontSize: '24px', fontWeight: 600, color: '#1a1a1a', margin: 0, marginBottom: '8px' }}>
              Audio Playlist
            </h1>
            <p style={{ fontSize: '14px', fontWeight: 400, color: '#999', margin: 0 }}>
              Browse and play your favorite tracks
            </p>
          </div>

          {/* Player Cards */}
          {tracks.map((track, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                gap: '12px',
                padding: '16px',
                background: '#ffffff',
                border: '1px solid #e0e0e0',
                borderRadius: '8px',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = '#f5f5f5'
                el.style.borderColor = '#ccc'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement
                el.style.background = '#ffffff'
                el.style.borderColor = '#e0e0e0'
              }}
            >
              {/* Album Art Placeholder */}
              <div
                style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '4px',
                  background: track.gradient,
                  flexShrink: 0
                }}
              />

              {/* Track Info */}
              <div style={{ flex: 1, minWidth: 0 }}>
                <div
                  style={{
                    color: '#1a1a1a',
                    fontSize: '16px',
                    fontWeight: 600,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                    marginBottom: '4px'
                  }}
                >
                  {track.title}
                </div>
                <div
                  style={{
                    color: '#999',
                    fontSize: '13px',
                    fontWeight: 400,
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap'
                  }}
                >
                  {track.album} <span style={{ opacity: 0.5 }}>•</span> {track.artist}
                </div>
              </div>

              {/* Play Button */}
              <button
                onClick={() => togglePlay(index)}
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  background: '#667eea',
                  border: 'none',
                  color: '#ffffff',
                  fontSize: '16px',
                  cursor: 'pointer',
                  flexShrink: 0,
                  transition: 'all 0.3s ease',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = 'scale(1.05)'
                  el.style.boxShadow = '0 4px 12px rgba(102, 126, 234, 0.4)'
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLElement
                  el.style.transform = 'scale(1)'
                  el.style.boxShadow = 'none'
                }}
              >
                {playingIndex === index ? '⏸' : '▶'}
              </button>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          div[style*="maxWidth: '600px'"] {
            max-width: 500px;
          }
        }
      `}</style>
    </div>
  )
}

export default SpotifyPlayer
