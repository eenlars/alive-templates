import { useState, useRef, useEffect } from 'react';

interface InfiniteImageCarouselProps {
  images: string[];
  gap?: string;
  scale?: number;
}

export const InfiniteImageCarousel = ({ images, gap = '2rem', scale = 1 }: InfiniteImageCarouselProps) => {
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
          const next = prev + 0.5;
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
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
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
          gap,
          alignItems: 'center',
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
              height: `${100 * scale}%`,
              width: 'auto',
              maxWidth: 'none',
              objectFit: 'contain',
              flexShrink: 0,
              borderRadius: '16px',
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
              height: `${100 * scale}%`,
              width: 'auto',
              maxWidth: 'none',
              objectFit: 'contain',
              flexShrink: 0,
              borderRadius: '16px',
            }}
          />
        ))}
      </div>
    </div>
  );
};
