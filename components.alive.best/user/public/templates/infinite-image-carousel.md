Category: UI Components
Complexity: Medium
Files: 1
Dependencies: None (uses React hooks only)
Estimated Time: 10-15 minutes
Framework: React with Vite
Min Node Version: 18.0.0

Description:
An infinite horizontally scrolling image carousel with drag-to-scroll interaction. Images loop seamlessly, filling the viewport height. Perfect for hero sections, portfolio showcases, and immersive image galleries. Features smooth animations and responsive design.

Prerequisites:
- A React project with Vite
- TypeScript support
- Basic understanding of React hooks (useState, useRef, useEffect)

CAROUSEL LAYOUT:

Container:
- Fixed positioning covering viewport bottom half (60vh minimum)
- Full width horizontal scroll area
- Grab cursor indicates draggable interaction
- Images align to bottom for elegant appearance

Scrolling:
- Continuous loop with seamless wrapping
- Drag-to-scroll with mouse interaction
- requestAnimationFrame for smooth 60fps animation
- Auto-scrolls when not being dragged
- Duplicated images create infinite effect

Image Sizing:
- Height: 80vh (80% of viewport)
- Max width: 78vw (maintains aspect ratio)
- Object-fit: contain (no cropping)
- Vertically aligned to bottom
- Flexible shrink disabled to maintain size

TESTING CHECKLIST:

- [ ] Images load and display correctly
- [ ] Container fills bottom 60vh+ of screen
- [ ] Carousel auto-scrolls when idle
- [ ] Click and drag scrolls images horizontally
- [ ] Cursor changes to grab when hovering
- [ ] Cursor changes to grabbing while dragging
- [ ] Scroll wraps seamlessly at the end
- [ ] Continuous looping animation
- [ ] Performance is smooth (no stuttering)
- [ ] Works with variable image counts
- [ ] Responsive at different viewport sizes
- [ ] No console errors

TROUBLESHOOTING:

Problem: Images not scrolling
Solution: Check useState and ref initialization, verify mouse event handlers

Problem: Scroll is jerky or stuttering
Solution: Ensure requestAnimationFrame is properly managing updates

Problem: Images show seam when looping
Solution: Verify images array is duplicated correctly in the render

Problem: Dragging doesn't work
Solution: Check handleMouseDown is attached to container, verify cursor styles

Problem: Images too small or too large
Solution: Adjust height: '80vh' and maxWidth: '78vw' in style prop

Problem: Carousel not filling viewport
Solution: Verify minHeight: '60vh' and flexbox positioning

DEPENDENCIES: ZERO

This component uses only React and standard browser APIs.

- React: ^18.0.0
- TypeScript: ^5.0.0
- No external packages required

BROWSER SUPPORT:

Works in all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Supports requestAnimationFrame and Ref API

COMMON MISTAKES:

1. Missing ref prop on container → Images won't scroll properly
2. Not duplicating images → Scroll doesn't loop seamlessly
3. Event handlers not attached → Drag interaction won't work
4. Wrong z-index → Back button or other elements appear on top
5. Missing line-height: 0 → Extra space appears between images

STEP-BY-STEP IMPLEMENTATION:

Step 1: Create src/components/InfiniteImageCarousel.tsx

```tsx
import { useState, useRef, useEffect } from 'react';

interface InfiniteImageCarouselProps {
  images: string[];
}

export const InfiniteImageCarousel = ({ images }: InfiniteImageCarouselProps) => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [startScrollPosition, setStartScrollPosition] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>();

  useEffect(() => {
    const animate = () => {
      if (!isDragging && trackRef.current) {
        const trackWidth = trackRef.current.scrollWidth / 2;
        setScrollPosition((prev) => {
          const next = prev + 1;
          return next >= trackWidth ? 0 : next;
        });
      }
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.clientX);
    setStartScrollPosition(scrollPosition);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return;

    const delta = startX - e.clientX;
    const newPosition = startScrollPosition + delta;
    const trackWidth = trackRef.current.scrollWidth / 2;

    if (newPosition >= trackWidth) {
      setStartScrollPosition(0);
      setStartX(e.clientX);
      setScrollPosition(0);
    } else if (newPosition < 0) {
      setStartScrollPosition(trackWidth + newPosition);
      setStartX(e.clientX);
      setScrollPosition(trackWidth + newPosition);
    } else {
      setScrollPosition(newPosition);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseLeave}
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        minHeight: '60vh',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'flex-start',
        overflow: 'hidden',
        cursor: isDragging ? 'grabbing' : 'grab',
        lineHeight: 0,
      }}
    >
      <div
        ref={trackRef}
        style={{
          display: 'flex',
          width: 'max-content',
          gap: 0,
          alignItems: 'flex-end',
          transform: `translateX(-${scrollPosition}px)`,
          lineHeight: 0,
        }}
      >
        {images.map((src, index) => (
          <img
            key={`original-${index}`}
            src={src}
            alt=""
            draggable={false}
            style={{
              height: '80vh',
              maxWidth: '78vw',
              objectFit: 'contain',
              verticalAlign: 'bottom',
              flexShrink: 0,
            }}
          />
        ))}
        {images.map((src, index) => (
          <img
            key={`duplicate-${index}`}
            src={src}
            alt=""
            draggable={false}
            style={{
              height: '80vh',
              maxWidth: '78vw',
              objectFit: 'contain',
              verticalAlign: 'bottom',
              flexShrink: 0,
            }}
          />
        ))}
      </div>
    </div>
  );
};
```

Step 2: Use in Your Page

```tsx
import { InfiniteImageCarousel } from '../components/InfiniteImageCarousel';

const CarouselPage = () => {
  const images = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1000',
    'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1000',
    'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=1000',
    'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=1000',
  ];

  return (
    <div>
      <header style={{ padding: '2rem' }}>
        <h1>Infinite Carousel</h1>
        <p>Drag to scroll through images</p>
      </header>
      <InfiniteImageCarousel images={images} />
    </div>
  );
};

export default CarouselPage;
```

HOW IT WORKS:

State Management:
- scrollPosition: Current horizontal scroll offset in pixels
- isDragging: Tracks whether user is actively dragging
- startX: Mouse X position when drag begins
- startScrollPosition: Scroll position when drag begins

Animation Loop:
- requestAnimationFrame fires ~60 times per second
- Auto-increments scrollPosition by 1px each frame
- Resets to 0 when reaching end of track width
- Pauses when isDragging is true

Dragging:
- onMouseDown: Store starting mouse position and current scroll
- onMouseMove: Calculate delta and update scroll position
- Wrapping logic: Jump to opposite end when reaching bounds
- Smooth interruption: Resume auto-scroll after drag ends

Infinite Loop:
- Images array rendered twice in DOM (original + duplicate)
- Track width is doubled (images.length * 2)
- When scroll reaches halfway point, reset to 0
- Seamless because duplicate images are identical

Visual Layout:
- Fixed positioning covers bottom of viewport
- Images aligned to bottom edge
- Flexbox with flex-shrink: 0 maintains image sizes
- line-height: 0 removes spacing between images

Performance:
- requestAnimationFrame syncs with browser refresh rate
- Transform translateX is GPU-accelerated
- Only updates on mouse movement and animation frame
- Efficient for smooth 60fps performance

CUSTOMIZATION EXAMPLES:

1. Change Image Height:
```tsx
style={{
  height: '100vh',  // Full viewport height
  // ... other styles
}}
```

2. Change Scroll Speed:
```tsx
setScrollPosition((prev) => {
  const next = prev + 2;  // Faster (was 1)
  return next >= trackWidth ? 0 : next;
});
```

3. Pause on Hover:
```tsx
const [isHovered, setIsHovered] = useState(false);
// Then use: if (isDragging || isHovered) return;
```

4. Add Gradient Overlay:
```tsx
<div style={{
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  height: '100px',
  background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)',
  pointerEvents: 'none',
  zIndex: 5,
}} />
```

5. Custom Cursor Icon:
```tsx
style={{
  cursor: isDragging ? 'url(grabbing.svg), grabbing' : 'url(grab.svg), grab',
  // ... other styles
}}
```

6. Touch Support (Mobile):
```tsx
const handleTouchStart = (e: React.TouchEvent) => {
  setStartX(e.touches[0].clientX);
  // ... rest of touch handling
};
```