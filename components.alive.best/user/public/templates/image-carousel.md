Category: UI Components
Complexity: Medium
Files: 1
Dependencies: lucide-react
Estimated Time: 10-15 minutes
Framework: React with Vite
Min Node Version: 18.0.0

Description:
A responsive image carousel with automatic rotation, keyboard navigation, touch gesture support, and dot indicators. Features smooth fade transitions, hover-activated controls, and full accessibility support. Perfect for portfolios, galleries, and showcasing image collections.

Prerequisites:
- A React project with Vite
- Tailwind CSS configured and working
- lucide-react for icons (or use text arrows)
- Basic understanding of React hooks (useState, useEffect, useCallback)

CAROUSEL LAYOUT:

Container:
- Centered with responsive max-width
- Aspect ratio adapts: 3/4 on mobile, 16/9 on desktop
- Rounded corners for polished appearance
- Overflow hidden for clean transitions

Controls:
- Previous/Next buttons appear on hover (desktop)
- Always visible on mobile for usability
- Dot indicators below for current position
- Touch/swipe support on all devices

Navigation:
- Arrow buttons with chevron icons
- Dot indicators for direct slide access
- Keyboard support: Arrow Left/Right keys
- Auto-advance every 5 seconds (pause on hover)

TESTING CHECKLIST:

- [ ] Carousel loads with multiple images
- [ ] Images display with correct aspect ratio
- [ ] Navigation buttons appear on desktop hover
- [ ] Navigation buttons visible on mobile
- [ ] Clicking next/previous advances slides
- [ ] Clicking dots jumps to specific slide
- [ ] Auto-advance happens every 5 seconds
- [ ] Auto-advance pauses on hover
- [ ] Auto-advance resumes when leaving hover
- [ ] Arrow keys navigate on keyboard
- [ ] Touch/swipe works on mobile
- [ ] Smooth fade transition between slides
- [ ] Dot indicators update with slide
- [ ] All images accessible via Tab
- [ ] No console errors

TROUBLESHOOTING:

Problem: Images not showing
Solution: Verify image URLs are correct and accessible

Problem: Carousel not rotating automatically
Solution: Check useEffect hook and timer setup

Problem: Touch/swipe not working
Solution: Ensure touchStart/touchEnd handlers are connected

Problem: Buttons not appearing on hover
Solution: Verify group-hover classes in Tailwind config

Problem: Aspect ratio incorrect
Solution: Check aspect-video or aspect-[3/4] classes

Problem: Keyboard navigation not working
Solution: Ensure window keydown event listener is attached

Problem: Dot indicators misaligned
Solution: Check flexbox gap and button sizing

DEPENDENCIES:

lucide-react for navigation icons (optional, can use text arrows)

- React: ^18.0.0
- Tailwind CSS: ^3.0.0
- TypeScript: ^5.0.0
- lucide-react: ^0.263.0 (optional)

BROWSER SUPPORT:

Works in all modern browsers:
- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Requires touch event support for mobile

COMMON MISTAKES:

1. Auto-advance continues during hover → Add hover state check
2. Images flash between transitions → Use opacity transitions
3. Touch detection too sensitive → Adjust swipe threshold (75px)
4. Buttons always visible → Use hidden md:flex classes
5. Focus ring missing → Add focus-visible for keyboard users

STEP-BY-STEP IMPLEMENTATION:

Step 1: Create src/components/ImageCarousel.tsx

```tsx
import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageCarouselProps {
  images: string[];
  autoPlayInterval?: number;
  showDots?: boolean;
  aspectRatio?: 'square' | 'video' | 'portrait';
}

export const ImageCarousel = ({
  images,
  autoPlayInterval = 5000,
  showDots = true,
  aspectRatio = 'video',
}: ImageCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
  }, []);

  useEffect(() => {
    if (isHovered || autoPlayInterval === 0) return;

    const timer = setInterval(() => {
      goToNext();
    }, autoPlayInterval);

    return () => clearInterval(timer);
  }, [isHovered, autoPlayInterval, goToNext]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrevious]);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 75) {
      goToNext();
    }
    if (touchStart - touchEnd < -75) {
      goToPrevious();
    }
  };

  const aspectClasses = {
    square: 'aspect-square',
    video: 'aspect-video',
    portrait: 'aspect-[3/4]',
  };

  return (
    <div
      className="group relative w-full md:w-4/5 mx-auto"
      role="region"
      aria-roledescription="carousel"
      aria-label="Image carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className={`relative ${aspectClasses[aspectRatio]} overflow-hidden rounded-lg`}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Carousel slide ${index + 1}`}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${images.length}`}
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300"
            style={{
              opacity: index === currentIndex ? 1 : 0,
            }}
          />
        ))}
      </div>

      <button
        onClick={goToPrevious}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={goToNext}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {showDots && (
        <div className="flex justify-center gap-2 mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${
                index === currentIndex
                  ? 'w-6 h-2 bg-foreground'
                  : 'w-2 h-2 bg-foreground/30 hover:bg-foreground/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
```

Step 2: Use in Your Page

```tsx
import { ImageCarousel } from '../components/ImageCarousel';

const GalleryPage = () => {
  const images = [
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=675&fit=crop',
    'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=1200&h=675&fit=crop',
    'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&h=675&fit=crop',
    'https://images.unsplash.com/photo-1511379938547-c1f69b13d835?w=1200&h=675&fit=crop',
  ];

  return (
    <div className="min-h-screen bg-background py-12">
      <h1 className="text-3xl font-bold text-foreground mb-8 text-center">
        Image Gallery
      </h1>
      <ImageCarousel
        images={images}
        autoPlayInterval={5000}
        showDots={true}
        aspectRatio="video"
      />
    </div>
  );
};

export default GalleryPage;
```

HOW IT WORKS:

State Management:
- currentIndex: Tracks which image is displayed
- isHovered: Pauses auto-advance when hovering
- touchStart/touchEnd: Detects swipe gestures

Auto-Advance:
- useEffect with interval that runs every 5 seconds
- Pauses when user hovers over carousel
- Resets when leaving hover state
- Can be disabled by setting autoPlayInterval to 0

Navigation:
- Next/Previous buttons cycle through images
- Dot indicators show current position
- Clicking any dot jumps to that slide
- Wraps around: after last image goes to first

Keyboard Support:
- Arrow Left: Go to previous slide
- Arrow Right: Go to next slide
- Global listener attached to window

Touch/Swipe:
- Detects swipe left (75px threshold) → next slide
- Detects swipe right (75px threshold) → previous slide
- Works on all touch devices

Accessibility:
- Semantic ARIA roles: region, group, slide
- Alt text for all images
- Focus rings on interactive elements
- Keyboard navigation support
- Screen reader friendly labels

Responsive Design:
- Container centered with max width on desktop
- Full width on mobile
- Buttons hidden on mobile (use dots to navigate)
- Buttons appear on hover on desktop
- Customizable aspect ratios: square, video, portrait

CUSTOMIZATION EXAMPLES:

1. Change Auto-Play Speed:
```tsx
<ImageCarousel images={images} autoPlayInterval={3000} />
```

2. Disable Auto-Play:
```tsx
<ImageCarousel images={images} autoPlayInterval={0} />
```

3. Hide Dot Indicators:
```tsx
<ImageCarousel images={images} showDots={false} />
```

4. Change Aspect Ratio:
```tsx
<ImageCarousel images={images} aspectRatio="portrait" />
```

5. Custom Container Width:
```tsx
<div className="max-w-2xl mx-auto">
  <ImageCarousel images={images} />
</div>
```

6. Add Caption Overlay:
```tsx
<div className="relative">
  <ImageCarousel images={images} />
  <p className="absolute bottom-4 left-4 text-white text-sm">
    Caption text here
  </p>
</div>
```
