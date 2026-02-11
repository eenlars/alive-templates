import { useState, useCallback } from 'react'

const BUTTON_STYLES = {
  base: {
    padding: '0.5rem 0.75rem',
    fontSize: '0.875rem',
    fontWeight: '400',
    borderRadius: 'var(--radius, 0.375rem)',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    transition: 'all 200ms',
  },
  link: {
    textDecoration: 'none',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.5rem',
  },
  border: {
    border: '1px solid rgba(0, 0, 0, 0.1)',
  },
}

const MODAL_OVERLAY_STYLES = {
  position: 'fixed' as const,
  inset: 0,
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  display: 'flex' as const,
  alignItems: 'center' as const,
  justifyContent: 'center' as const,
  zIndex: 999,
  padding: '2rem',
}

const MODAL_CONTENT_STYLES = {
  backgroundColor: '#fff',
  borderRadius: 'var(--radius, 0.375rem)',
  maxWidth: '90vw',
  maxHeight: '90vh',
  display: 'flex' as const,
  flexDirection: 'column' as const,
  overflow: 'hidden' as const,
}

export const usePromptModal = () => {
  const [showPrompt, setShowPrompt] = useState(false)
  const [promptCopied, setPromptCopied] = useState(false)

  const handleCopyPrompt = useCallback((template: string | undefined) => {
    if (template) {
      navigator.clipboard.writeText(template)
      setPromptCopied(true)
      setTimeout(() => setPromptCopied(false), 2000)
    }
  }, [])

  const toggleModal = useCallback(() => {
    setShowPrompt((prev) => !prev)
  }, [])

  const closeModal = useCallback(() => {
    setShowPrompt(false)
  }, [])

  return {
    showPrompt,
    promptCopied,
    toggleModal,
    closeModal,
    handleCopyPrompt,
    styles: {
      BUTTON_STYLES,
      MODAL_OVERLAY_STYLES,
      MODAL_CONTENT_STYLES,
    },
  }
}
