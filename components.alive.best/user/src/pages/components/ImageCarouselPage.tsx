import BackButton from '@/components/BackButton'
import { useState } from 'react'
import { useTemplateLoader } from '@/hooks/useTemplateLoader'
import { ImageCarousel } from '@/components/ImageCarousel'

const ImageCarouselPage = () => {
  const [copied, setCopied] = useState(false)
  const { template, isLoading, error } = useTemplateLoader('image-carousel')

  const handleCopyTemplate = () => {
    if (template) {
      navigator.clipboard.writeText(template)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  const images = [
    'data:image/svg+xml,%3Csvg width="1200" height="675" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3ClinearGradient id="g1" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%233b82f6;stop-opacity:1" /%3E%3Cstop offset="100%25" style="stop-color:%231e40af;stop-opacity:1" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="1200" height="675" fill="url(%23g1)" /%3E%3Ctext x="600" y="337.5" font-size="48" fill="white" text-anchor="middle" dominant-baseline="middle" font-family="system-ui"%3ESlide 1%3C/text%3E%3C/svg%3E',
    'data:image/svg+xml,%3Csvg width="1200" height="675" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3ClinearGradient id="g2" x1="0%25" y1="0%25" x2="0%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%2310b981;stop-opacity:1" /%3E%3Cstop offset="100%25" style="stop-color:%23047857;stop-opacity:1" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="1200" height="675" fill="url(%23g2)" /%3E%3Ctext x="600" y="337.5" font-size="48" fill="white" text-anchor="middle" dominant-baseline="middle" font-family="system-ui"%3ESlide 2%3C/text%3E%3C/svg%3E',
    'data:image/svg+xml,%3Csvg width="1200" height="675" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3ClinearGradient id="g3" x1="100%25" y1="0%25" x2="0%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%23f59e0b;stop-opacity:1" /%3E%3Cstop offset="100%25" style="stop-color:%23d97706;stop-opacity:1" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="1200" height="675" fill="url(%23g3)" /%3E%3Ctext x="600" y="337.5" font-size="48" fill="white" text-anchor="middle" dominant-baseline="middle" font-family="system-ui"%3ESlide 3%3C/text%3E%3C/svg%3E',
    'data:image/svg+xml,%3Csvg width="1200" height="675" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3ClinearGradient id="g4" x1="0%25" y1="100%25" x2="100%25" y2="0%25"%3E%3Cstop offset="0%25" style="stop-color:%238b5cf6;stop-opacity:1" /%3E%3Cstop offset="100%25" style="stop-color:%235b21b6;stop-opacity:1" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="1200" height="675" fill="url(%23g4)" /%3E%3Ctext x="600" y="337.5" font-size="48" fill="white" text-anchor="middle" dominant-baseline="middle" font-family="system-ui"%3ESlide 4%3C/text%3E%3C/svg%3E',
  ]

  return (
    <div className="min-h-screen bg-background p-8 flex flex-col">
      <div className="max-w-5xl mx-auto w-full flex-1 flex flex-col">
        <div className="mb-8">
          <BackButton />
        </div>

        <section className="flex-1 border border-border rounded-[--radius] overflow-hidden p-6 mb-12">
          <ImageCarousel images={images} autoPlayInterval={5000} showDots={true} aspectRatio="video" />
        </section>

        <section>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-foreground">Alive Super Template</h2>
            <button
              onClick={handleCopyTemplate}
              className={`px-3 py-1 text-sm rounded-[--radius] border transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
                copied
                  ? 'bg-accent text-accent-foreground border-accent'
                  : 'bg-accent text-accent-foreground border-accent hover:opacity-90'
              }`}
            >
              {copied ? 'Copied!' : 'Copy Template'}
            </button>
          </div>
          <p className="text-muted-foreground text-sm mb-6">
            This component is documented as an Alive Super Template. Copy the template below to implement this pattern in your projects.
          </p>

          <div className="bg-muted p-6 rounded-[--radius] overflow-x-auto">
            <pre className="template-code text-xs text-muted-foreground whitespace-pre-wrap break-words font-mono">
              {error ? `Error loading template: ${error}` : isLoading ? 'Loading template...' : template}
            </pre>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ImageCarouselPage
