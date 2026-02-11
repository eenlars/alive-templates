import { Link } from 'react-router-dom'

const BackButton = () => {
  return (
    <Link
      to="/components"
      className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded px-2 py-1"
    >
      ← All components
    </Link>
  )
}

export default BackButton
