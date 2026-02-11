import { ReactNode } from 'react'

interface ComponentThumbnailProps {
  children: ReactNode
  aspectRatio?: 'square' | 'video' | 'wide'
}

export const ComponentThumbnail = ({ children, aspectRatio = 'video' }: ComponentThumbnailProps) => {
  const aspectRatioClass = {
    square: 'aspect-square',
    video: 'aspect-video',
    wide: 'aspect-[2/1]',
  }[aspectRatio]

  return (
    <div className={`${aspectRatioClass} bg-card border border-border rounded-[--radius] overflow-hidden`}>
      <div className="w-full h-full overflow-hidden bg-background">
        {children}
      </div>
    </div>
  )
}
