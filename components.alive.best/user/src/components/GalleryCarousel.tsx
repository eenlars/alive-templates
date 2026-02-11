import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { galleryConfig } from '@/lib/config';

const gradients = [
  'linear-gradient(135deg, hsl(210, 20%, 85%) 0%, hsl(210, 20%, 70%) 100%)',
  'linear-gradient(135deg, hsl(180, 15%, 85%) 0%, hsl(180, 15%, 70%) 100%)',
  'linear-gradient(135deg, hsl(30, 20%, 85%) 0%, hsl(30, 20%, 70%) 100%)',
  'linear-gradient(135deg, hsl(0, 10%, 85%) 0%, hsl(0, 10%, 70%) 100%)',
  'linear-gradient(135deg, hsl(150, 15%, 85%) 0%, hsl(150, 15%, 70%) 100%)',
];

export const GalleryCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % galleryConfig.slides.length);
  }, []);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + galleryConfig.slides.length) % galleryConfig.slides.length);
  }, []);

  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(timer);
  }, [isHovered, goToNext]);

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

  return (
    <div
      className="group relative w-full md:w-4/5 mx-auto"
      role="region"
      aria-roledescription="carousel"
      aria-label="Gallery carousel"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="relative aspect-[3/4] md:aspect-video overflow-hidden rounded-sm">
        {galleryConfig.slides.map((slide, index) => (
          <div
            key={index}
            role="group"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${galleryConfig.slides.length}`}
            className="absolute inset-0 transition-opacity duration-300 ease-out"
            style={{
              opacity: index === currentIndex ? 1 : 0,
              background: gradients[index % gradients.length],
            }}
          >
            <div className="w-full h-full flex items-center justify-center">
              {galleryConfig.showCaptions && (
                <p className="text-sm font-light text-foreground/80">
                  {slide.caption}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>

      <button
        onClick={goToPrevious}
        className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-background"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={goToNext}
        className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 items-center justify-center rounded-full bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-background"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="flex justify-center gap-2 mt-4">
        {galleryConfig.slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex ? 'bg-foreground w-6' : 'bg-foreground/30'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
