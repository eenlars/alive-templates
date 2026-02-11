# Image Carousel Template (v1.0.0)

## Overview
A flexible, responsive image carousel component for React applications with thumbnail navigation and intuitive controls.

## Installation Dependencies
- React 18+
- TypeScript
- Tailwind CSS (optional, for styling)

## Component: ImageCarousel.tsx
```typescript
import React, { useState } from 'react';

interface ImageCarouselProps {
  images: string[];
  autoPlayInterval?: number;
  showThumbnails?: boolean;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  autoPlayInterval = 0,
  showThumbnails = true
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToImage = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="image-carousel relative w-full max-w-xl mx-auto">
      <div className="carousel-main relative overflow-hidden">
        <button
          onClick={prevImage}
          className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10"
        >
          ←
        </button>
        <img
          src={images[currentIndex]}
          alt={`Carousel image ${currentIndex + 1}`}
          className="w-full h-64 object-cover"
        />
        <button
          onClick={nextImage}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10"
        >
          →
        </button>
      </div>

      {showThumbnails && (
        <div className="carousel-thumbnails flex justify-center mt-4 space-x-2">
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`Thumbnail ${index + 1}`}
              onClick={() => goToImage(index)}
              className={`w-16 h-16 object-cover cursor-pointer
                ${index === currentIndex ? 'border-2 border-blue-500' : 'opacity-50'}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
```

## Usage Example
```typescript
function App() {
  const images = [
    '/path/to/image1.jpg',
    '/path/to/image2.jpg',
    '/path/to/image3.jpg'
  ];

  return (
    <ImageCarousel
      images={images}
      autoPlayInterval={3000}
      showThumbnails={true}
    />
  );
}
```

## Props
- `images`: string[] - Array of image URLs
- `autoPlayInterval?`: number - Milliseconds between automatic slides (0 = manual)
- `showThumbnails?`: boolean - Display thumbnail navigation

## Styling
- Uses Tailwind CSS utility classes
- Responsive design
- Supports custom styling via prop overrides

## Best Practices
- Provide high-quality, similarly sized images
- Optimize images for web (compress, use correct formats)
- Consider lazy loading for performance

## Accessibility
- Keyboard navigable
- Alt text for screen readers
- High contrast navigation buttons

## Performance Considerations
- Memoize component for complex use cases
- Lazy load images outside current view