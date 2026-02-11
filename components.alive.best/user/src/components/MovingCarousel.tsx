import { useState, useEffect } from 'react'

interface MovingCarouselProps {
  images: string[]
}

const MovingCarousel = ({ images }: MovingCarouselProps) => {
  const [offset, setOffset] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset(prev => prev - 1)
    }, 50)

    return () => clearInterval(interval)
  }, [])

  const tripleImages = [...images, ...images, ...images]

  return (
    <div className="w-full overflow-hidden">
      <div
        className="flex gap-2"
        style={{
          transform: `translateX(${offset}px)`,
          willChange: 'transform'
        }}
      >
        {tripleImages.map((image, index) => (
          <div
            key={index}
            className="flex-shrink-0"
            style={{ width: '55vw' }}
          >
            <img
              src={image}
              alt={`Slide ${index + 1}`}
              className="h-96 w-full object-cover rounded-lg"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default MovingCarousel
