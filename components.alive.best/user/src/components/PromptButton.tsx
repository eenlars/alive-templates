import React, { CSSProperties } from 'react'

interface PromptButtonProps {
  onClick: () => void
  isCopied?: boolean
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
}

export const PromptButton: React.FC<PromptButtonProps> = ({
  onClick,
  isCopied = false,
  children,
  type = 'button',
}) => {
  const baseStyle: CSSProperties = {
    padding: '0.5rem 0.75rem',
    fontSize: '0.875rem',
    fontWeight: '400',
    borderRadius: 'var(--radius, 0.375rem)',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    transition: 'all 200ms',
    border: isCopied ? '1px solid var(--accent)' : '1px solid rgba(0, 0, 0, 0.1)',
    color: isCopied ? 'var(--accent)' : '#000',
    opacity: isCopied ? 1 : 0.6,
  }

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isCopied) {
      e.currentTarget.style.opacity = '1'
    }
  }

  const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!isCopied) {
      e.currentTarget.style.opacity = '0.6'
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      onClick()
    }
  }

  return (
    <button
      type={type}
      onClick={onClick}
      style={baseStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onKeyDown={handleKeyDown}
    >
      {children}
    </button>
  )
}
