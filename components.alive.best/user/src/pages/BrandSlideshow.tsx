import { BrandSlideshow } from '@/components/BrandSlideshow';
import { Link } from 'react-router-dom';
import { CSSProperties } from 'react';
import { useTemplateLoader } from '@/hooks/useTemplateLoader';
import { usePromptModal } from '@/hooks/usePromptModal';
import { PromptModal } from '@/components/PromptModal';
import { PromptButton } from '@/components/PromptButton';

const BrandSlideshowPage = () => {
  const { template, isLoading, error } = useTemplateLoader('brand-slideshow');
  const { showPrompt, promptCopied, toggleModal, closeModal, handleCopyPrompt } = usePromptModal();

  const backLinkStyle: CSSProperties = {
    padding: '0.5rem 0.75rem',
    fontSize: '0.875rem',
    fontWeight: '400',
    textDecoration: 'none',
    borderRadius: 'var(--radius, 0.375rem)',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
    border: '1px solid rgba(0, 0, 0, 0.1)',
    opacity: 0.6,
    transition: 'all 200ms ease',
  };

  const topRightButtonsStyle: CSSProperties = {
    position: 'fixed',
    top: '2rem',
    right: '2rem',
    display: 'flex',
    gap: '0.75rem',
    zIndex: 100,
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}>
      <Link
        to="/components"
        style={{
          ...backLinkStyle,
          position: 'fixed',
          top: '2rem',
          left: '2rem',
          zIndex: 100,
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = '1')}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = '0.6')}
      >
        ← All components
      </Link>

      <div style={topRightButtonsStyle}>
        <PromptButton onClick={toggleModal}>See Prompt</PromptButton>
        <PromptButton isCopied={promptCopied} onClick={() => handleCopyPrompt(template)}>
          {promptCopied ? 'Copied!' : 'Copy Prompt'}
        </PromptButton>
      </div>

      <PromptModal
        isOpen={showPrompt}
        title="Brand Slideshow Prompt"
        content={template || ''}
        isLoading={isLoading}
        error={error}
        onClose={closeModal}
      />

      <div style={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <BrandSlideshow />
      </div>
    </div>
  );
};

export default BrandSlideshowPage;
