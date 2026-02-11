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
