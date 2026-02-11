import { useState, useEffect, useCallback } from 'react';

interface CenteredSlideshowProps {
  images: string[];
  interval?: number;
}

export const CenteredSlideshow = ({ images, interval = 5000 }: CenteredSlideshowProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const goToSlide = useCallback((index: number) => {
    if (index === currentIndex) return;
    setCurrentIndex(index);
  }, [currentIndex]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    if (isPaused || isHovered) return;

    const timer = setInterval(() => {
      goToNext();
    }, interval);

    return () => clearInterval(timer);
  }, [isPaused, isHovered, interval, goToNext]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goToPrevious();
      if (e.key === 'ArrowRight') goToNext();
      if (e.key === ' ') {
        e.preventDefault();
        setIsPaused((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToPrevious, goToNext]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#fafafa',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        style={{
          position: 'relative',
          width: '92%',
          maxWidth: '1600px',
          aspectRatio: '21/9',
          overflow: 'hidden',
          borderRadius: '4px',
          boxShadow: '0 2px 20px rgba(0, 0, 0, 0.08)',
        }}
      >
        {images.map((src, index) => (
          <div
            key={index}
            style={{
              position: 'absolute',
              inset: 0,
              opacity: index === currentIndex ? 1 : 0,
              transition: 'opacity 800ms cubic-bezier(0.4, 0, 0.2, 1)',
              background: src,
            }}
          />
        ))}

        <button
          onClick={goToPrevious}
          aria-label="Previous slide"
          style={{
            position: 'absolute',
            left: '2rem',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(255, 255, 255, 0.9)',
            border: 'none',
            color: '#000',
            fontSize: '1.25rem',
            cursor: 'pointer',
            opacity: isHovered ? 1 : 0,
            transition: 'all 300ms ease',
            padding: '0.75rem 1rem',
            borderRadius: '4px',
            fontWeight: 300,
            backdropFilter: 'blur(8px)',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 1)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)')}
        >
          ←
        </button>

        <button
          onClick={goToNext}
          aria-label="Next slide"
          style={{
            position: 'absolute',
            right: '2rem',
            top: '50%',
            transform: 'translateY(-50%)',
            background: 'rgba(255, 255, 255, 0.9)',
            border: 'none',
            color: '#000',
            fontSize: '1.25rem',
            cursor: 'pointer',
            opacity: isHovered ? 1 : 0,
            transition: 'all 300ms ease',
            padding: '0.75rem 1rem',
            borderRadius: '4px',
            fontWeight: 300,
            backdropFilter: 'blur(8px)',
          }}
          onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 1)')}
          onMouseLeave={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.9)')}
        >
          →
        </button>

        <div
          style={{
            position: 'absolute',
            bottom: '2rem',
            left: '50%',
            transform: 'translateX(-50%)',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 300ms ease',
            background: 'rgba(255, 255, 255, 0.9)',
            padding: '0.5rem 1rem',
            borderRadius: '24px',
            backdropFilter: 'blur(8px)',
          }}
        >
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              style={{
                width: index === currentIndex ? '1.5rem' : '0.5rem',
                height: '0.5rem',
                borderRadius: '0.25rem',
                border: 'none',
                backgroundColor: index === currentIndex ? '#000' : 'rgba(0, 0, 0, 0.25)',
                cursor: 'pointer',
                padding: 0,
                transition: 'all 300ms cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            />
          ))}
        </div>

        <button
          onClick={() => setIsPaused((prev) => !prev)}
          aria-label={isPaused ? 'Play slideshow' : 'Pause slideshow'}
          style={{
            position: 'absolute',
            top: '2rem',
            right: '2rem',
            background: 'rgba(255, 255, 255, 0.9)',
            border: 'none',
            color: '#000',
            fontSize: '0.875rem',
            cursor: 'pointer',
            opacity: isHovered ? 1 : 0,
            transition: 'all 300ms ease',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            fontWeight: 400,
            backdropFilter: 'blur(8px)',
          }}
        >
          {isPaused ? 'Play' : 'Pause'}
        </button>

        <div
          style={{
            position: 'absolute',
            bottom: '2rem',
            right: '2rem',
            fontSize: '0.75rem',
            color: '#666',
            fontWeight: 300,
            letterSpacing: '0.05em',
            opacity: isHovered ? 1 : 0,
            transition: 'opacity 300ms ease',
            background: 'rgba(255, 255, 255, 0.9)',
            padding: '0.5rem 0.75rem',
            borderRadius: '4px',
            backdropFilter: 'blur(8px)',
          }}
        >
          {String(currentIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
        </div>
      </div>
    </div>
  );
};
