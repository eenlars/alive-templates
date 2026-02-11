import { Link } from 'react-router-dom'

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center" style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif" }}>
      <div className="space-y-16">
        <div className="space-y-3">
          <h2 className="text-black mb-4 font-bold">Templates</h2>
          <div className="block text-left text-black">1. Your blog:</div>
          <div className="block text-left text-black">2. Your portfolio: <a href="https://template1.alive.best" target="_blank" rel="noopener noreferrer" className="underline">template1.alive.best</a></div>
          <div className="block text-left text-black">3. Your event:</div>
          <div className="block text-left text-black">4. Project Grid: <a href="https://template-grid.alive.best" target="_blank" rel="noopener noreferrer" className="underline">template-grid.alive.best</a></div>
          <div className="block text-left text-black">5. Gallery Carousel: <a href="https://template-gallery-carousel.alive.best" target="_blank" rel="noopener noreferrer" className="underline">template-gallery-carousel.alive.best</a></div>
        </div>

        <div className="space-y-3">
          <h2 className="text-black mb-4 font-bold">Components</h2>
          <Link to="/components" className="block text-left text-black font-semibold underline">→ Component Library (12 components)</Link>
          <Link to="/carousel" className="block text-left text-black">1. Image carousel</Link>
          <Link to="/slideshow" className="block text-left text-black">2. Image slideshow</Link>
          <Link to="/card-stack" className="block text-left text-black">3. Card Stack</Link>
          <Link to="/table" className="block text-left text-black">4. User Table</Link>
          <Link to="/users-table" className="block text-left text-black">5. Users Table</Link>
        </div>
      </div>
    </div>
  )
}

export default Index
