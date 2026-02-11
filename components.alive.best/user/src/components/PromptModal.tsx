import React, { CSSProperties } from 'react'

interface PromptModalProps {
  isOpen: boolean
  title: string
  content: string
  isLoading: boolean
  error?: string
  onClose: () => void
}

export const PromptModal: React.FC<PromptModalProps> = ({
  isOpen,
  title,
  content,
  isLoading,
  error,
  onClose,
}) => {
  if (!isOpen) return null

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const overlayStyle: CSSProperties = {
    position: 'fixed',
    inset: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 999,
    padding: '2rem',
  }

  const contentStyle: CSSProperties = {
    backgroundColor: '#fff',
    borderRadius: 'var(--radius, 0.375rem)',
    maxWidth: '90vw',
    maxHeight: '90vh',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden',
  }

  const headerStyle: CSSProperties = {
    padding: '1.5rem',
    borderBottom: '1px solid var(--border)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  }

  const titleStyle: CSSProperties = {
    fontSize: '1.125rem',
    fontWeight: '600',
    margin: 0,
  }

  const closeButtonStyle: CSSProperties = {
    background: 'none',
    border: 'none',
    fontSize: '1.5rem',
    cursor: 'pointer',
    color: '#666',
    padding: '0.5rem',
  }

  const bodyStyle: CSSProperties = {
    flex: 1,
    overflowY: 'auto',
    padding: '1.5rem',
  }

  const preStyle: CSSProperties = {
    fontSize: '0.75rem',
    color: 'var(--muted-foreground)',
    whiteSpace: 'pre-wrap',
    wordBreak: 'break-word',
    fontFamily: 'monospace',
    margin: 0,
    lineHeight: '1.5',
  }

  return (
    <div style={overlayStyle} onClick={handleBackdropClick} role="presentation">
      <div style={contentStyle} role="dialog" aria-modal="true" aria-labelledby="modal-title">
        <div style={headerStyle}>
          <h2 id="modal-title" style={titleStyle}>
            {title}
          </h2>
          <button
            onClick={onClose}
            style={closeButtonStyle}
            aria-label="Close dialog"
            type="button"
          >
            ×
          </button>
        </div>
        <div style={bodyStyle}>
          <pre style={preStyle}>
            {error ? `Error loading template: ${error}` : isLoading ? 'Loading template...' : content}
          </pre>
        </div>
      </div>
    </div>
  )
}
