import { useState, useEffect } from 'react'

export const useTemplateLoader = (templateName: string) => {
  const [template, setTemplate] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const abortController = new AbortController()

    const loadTemplate = async () => {
      setIsLoading(true)
      setError(null)
      try {
        const response = await fetch(`/templates/${templateName}.md`, {
          signal: abortController.signal,
        })
        if (!response.ok) {
          throw new Error(`Failed to load template: ${response.statusText}`)
        }
        const text = await response.text()
        setTemplate(text)
      } catch (err) {
        if (err instanceof DOMException && err.name === 'AbortError') {
          return
        }
        const errorMessage = err instanceof Error ? err.message : 'Unknown error'
        setError(errorMessage)
        console.error('Failed to load template:', errorMessage)
      } finally {
        setIsLoading(false)
      }
    }

    loadTemplate()

    return () => abortController.abort()
  }, [templateName])

  return { template, isLoading, error }
}
