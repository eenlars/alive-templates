import { InfiniteImageCarousel } from '@/components/InfiniteImageCarousel'
import { Link } from 'react-router-dom'
import { CSSProperties } from 'react'
import { useTemplateLoader } from '@/hooks/useTemplateLoader'
import { usePromptModal } from '@/hooks/usePromptModal'
import { PromptModal } from '@/components/PromptModal'
import { PromptButton } from '@/components/PromptButton'

const Carousel2 = () => {
  const { template, isLoading, error } = useTemplateLoader('infinite-image-carousel')
  const { showPrompt, promptCopied, toggleModal, closeModal, handleCopyPrompt } = usePromptModal()
  const images = [
    'data:image/svg+xml,%3Csvg width="800" height="600" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3ClinearGradient id="g1" x1="0%25" y1="0%25" x2="100%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%23666;stop-opacity:1" /%3E%3Cstop offset="100%25" style="stop-color:%23ccc;stop-opacity:1" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="800" height="600" fill="url(%23g1)" /%3E%3C/svg%3E',
    'data:image/svg+xml,%3Csvg width="800" height="600" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3ClinearGradient id="g2" x1="0%25" y1="0%25" x2="0%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%23888;stop-opacity:1" /%3E%3Cstop offset="100%25" style="stop-color:%23444;stop-opacity:1" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="800" height="600" fill="url(%23g2)" /%3E%3C/svg%3E',
    'data:image/svg+xml,%3Csvg width="800" height="600" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3ClinearGradient id="g3" x1="100%25" y1="0%25" x2="0%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%23aaa;stop-opacity:1" /%3E%3Cstop offset="100%25" style="stop-color:%23777;stop-opacity:1" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="800" height="600" fill="url(%23g3)" /%3E%3C/svg%3E',
    'data:image/svg+xml,%3Csvg width="800" height="600" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3ClinearGradient id="g4" x1="0%25" y1="100%25" x2="100%25" y2="0%25"%3E%3Cstop offset="0%25" style="stop-color:%23555;stop-opacity:1" /%3E%3Cstop offset="100%25" style="stop-color:%23bbb;stop-opacity:1" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="800" height="600" fill="url(%23g4)" /%3E%3C/svg%3E',
    'data:image/svg+xml,%3Csvg width="800" height="600" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3ClinearGradient id="g5" x1="50%25" y1="0%25" x2="50%25" y2="100%25"%3E%3Cstop offset="0%25" style="stop-color:%23999;stop-opacity:1" /%3E%3Cstop offset="100%25" style="stop-color:%23666;stop-opacity:1" /%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width="800" height="600" fill="url(%23g5)" /%3E%3C/svg%3E',
  ];


  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}>
      <Link
        to="/components"
        style={{
          position: 'fixed',
          top: '2rem',
          left: '2rem',
          padding: '0.5rem 0.75rem',
          fontSize: '0.875rem',
          fontWeight: '400',
          textDecoration: 'none',
          zIndex: 100,
          opacity: 0.6,
          transition: 'all 200ms ease',
          borderRadius: 'var(--radius, 0.375rem)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          border: '1px solid rgba(0, 0, 0, 0.1)',
        } as CSSProperties}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.6')}
      >
        ← All components
      </Link>

      <div style={{
        position: 'fixed',
        top: '2rem',
        right: '2rem',
        display: 'flex',
        gap: '0.75rem',
        zIndex: 100,
      }}>
        <PromptButton onClick={toggleModal}>See Prompt</PromptButton>
        <PromptButton isCopied={promptCopied} onClick={() => handleCopyPrompt(template)}>
          {promptCopied ? 'Copied!' : 'Copy Prompt'}
        </PromptButton>
      </div>

      <PromptModal
        isOpen={showPrompt}
        title="Infinite Image Carousel Prompt"
        content={template || ''}
        isLoading={isLoading}
        error={error}
        onClose={closeModal}
      />

      <div style={{
        position: 'fixed',
        bottom: '64px',
        left: '0',
        right: '0',
        height: '600px',
      }}>
        <InfiniteImageCarousel images={images} gap="1rem" />
      </div>
    </div>
  );
};

export default Carousel2;
