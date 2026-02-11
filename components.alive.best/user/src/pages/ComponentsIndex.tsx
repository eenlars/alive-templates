import { Link } from 'react-router-dom'

const ComponentsIndex = () => {
  const templates = [
    { name: 'Personal Portfolio', route: 'https://template1.alive.best', external: true, done: true },
    { name: 'Blog', route: 'https://blogtemplate.alive.best', external: true, done: true },
    { name: 'Service Business', route: 'https://loodgieter.alive.best', external: true, inProgress: true },
    { name: 'SaaS Landing', route: 'https://one.goalive.nl/#features', external: true, inProgress: true },
    { name: 'Design/Architecture studio', route: 'https://demo.goalive.nl', external: true, inProgress: true },
    { name: 'Speaker/Business Event', route: 'https://four.goalive.nl', external: true, done: true },
    { name: 'Music Event', route: 'https://kapper.alive.best', external: true, inProgress: true },
    { name: 'Startup Waitlist', route: 'https://six.goalive.nl', external: true, inProgress: true },
    { name: 'Freelancer Studio', route: 'https://freelancer-studio.alive.best', external: true },
    { name: 'Online Course', route: 'https://online-course.alive.best', external: true },
    { name: 'Blog + Newsletter', route: 'https://blog-newsletter.alive.best', external: true },
    { name: 'Local Service Business', route: 'https://local-service.alive.best', external: true },
    { name: 'Restaurant / Café', route: 'https://restaurant-cafe.alive.best', external: true },
    { name: 'Product Launch', route: 'https://product-launch.alive.best', external: true },
    { name: 'Mobile App Promo', route: 'https://mobile-app-promo.alive.best', external: true },
    { name: 'Community Membership', route: 'https://community-membership.alive.best', external: true },
  ]

  const categories = [
    {
      name: 'Navigation',
      components: [
        { name: 'Navbar', route: '/components/navbar', hasTemplate: true, done: true },
        { name: 'Navigation Header', route: '/components/nav-header', done: true },
        { name: 'Footer', route: '/components/footer', hasTemplate: true, done: true },
      ],
    },
    {
      name: 'Showcase & Media',
      components: [
        { name: 'Hero (Solid)', route: '/components/hero-solid', hasTemplate: true, done: true },
        { name: 'Hero (Split)', route: '/components/hero-split', hasTemplate: true, done: true },
        { name: 'Project Grid (Masonry)', route: '/components/project-grid-masonry', hasTemplate: true, done: true },
        { name: 'Project Grid (Equal Tiles)', route: '/components/project-grid-equal', hasTemplate: true, done: true },
        { name: 'Media Gallery', route: '/components/media-gallery', hasTemplate: true, done: true },
        { name: 'Image Carousel', route: '/carousel', hasTemplate: true, done: true },
        { name: 'Image Carousel 2', route: '/carousel2', hasTemplate: true, done: true },
        { name: 'Image Slideshow', route: '/slideshow', hasTemplate: true, done: true },
        { name: 'Card Stack', route: '/card-stack', hasTemplate: true, done: true },
        { name: 'Audio Player', route: '/spotify-player', hasTemplate: true, done: true },
        { name: 'Brand Slideshow', route: '/components/brand-slideshow', hasTemplate: true, done: true },
        { name: 'Two Column Feature', route: '/components/two-column-feature', hasTemplate: true, done: true },
        { name: 'Careers', route: '/components/careers', hasTemplate: true, done: true },
        { name: 'Careers Hero', route: '/components/careers-hero', hasTemplate: true, done: true },
        { name: 'Before/After Image Compare', route: '/components/image-compare' },
      ],
    },
    {
      name: 'Content & Structure',
      components: [
        { name: 'Case / Rich Section', route: '/components/case-section', done: true },
        { name: 'Blog', route: '/components/blog', hasTemplate: true, done: true },
        { name: 'Blog Grid', route: '/components/blog-grid', done: true },
        { name: 'Blog Articles', route: '/components/blog-articles', done: true },
        { name: 'FAQ', route: '/components/faq', done: true },
        { name: 'Tabs', route: '/components/tabs', done: true },
        { name: 'Specs Table', route: '/components/specs-table', done: true },
        { name: 'Event Schedule', route: '/components/event-schedule', done: true },
        { name: 'Process Timeline', route: '/components/process-timeline', done: true },
        { name: 'Reading Progress', route: '/components/reading-progress', done: true },
        { name: 'Related Content', route: '/components/related-content', done: true },
        { name: 'Team Members', route: '/components/team-members', hasTemplate: true, done: true },
        { name: 'Features', route: '/components/features', hasTemplate: true, done: true },
      ],
    },
    {
      name: 'Conversion',
      components: [
        { name: 'Contact / Lead Form', route: '/components/contact-form', done: true },
        { name: 'Newsletter Signup', route: '/components/newsletter', done: true },
        { name: 'Contact Form', route: '/components/contact-form-new', hasTemplate: true, done: true },
      ],
    },
    {
      name: 'Proof & Offer',
      components: [
        { name: 'Testimonials / Logos', route: '/components/testimonials', done: true },
        { name: 'Testimonial Quote', route: '/components/testimonial-quote', done: true },
        { name: 'Pricing Table', route: '/components/pricing-table', hasTemplate: true, done: true },
      ],
    },
    {
      name: 'Feedback & System',
      components: [
        { name: 'Event Announcement Banner', route: '/components/event-announcement', done: true },
        { name: 'Error Page', route: '/components/error-page', done: true },
        { name: 'Not Found Page', route: '/components/not-found-page', done: true },
        { name: 'Alert Box', route: '/components/alert-box', done: true },
        { name: 'Success Alert', route: '/components/success-alert', done: true },
      ],
    },
    {
      name: 'Layout & Structure',
      components: [
        { name: 'Dashboard Layout', route: '/components/dashboard-layout', done: true },
        { name: 'Dashboard Layout 2', route: '/components/dashboard-layout-2', done: true },
        { name: 'Admin Dashboard', route: '/components/admin-dashboard', done: true },
      ],
    },
  ]

  const renderComponentCard = (component) => {
    const isExternal = 'external' in component && component.external
    const hasTemplate = 'hasTemplate' in component && component.hasTemplate
    const isDone = 'done' in component && component.done
    const isInProgress = 'inProgress' in component && component.inProgress

    const cardContent = (
      <div className="flex items-center justify-between gap-2">
        <h3 className="text-lg font-medium text-card-foreground group-hover:text-accent transition-colors">
          {component.name}
        </h3>
        {isDone && (
          <span className="inline-block px-2 py-1 text-xs font-semibold bg-green-100 text-green-700 rounded-full whitespace-nowrap">
            Done
          </span>
        )}
        {isInProgress && (
          <span className="inline-block px-2 py-1 text-xs font-semibold bg-yellow-100 text-yellow-700 rounded-full whitespace-nowrap">
            In Progress
          </span>
        )}
      </div>
    )

    if (isExternal) {
      return (
        <a
          key={component.route}
          href={component.route}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative p-6 rounded-[--radius] bg-card border border-border transition-all duration-200 hover:-translate-y-1 hover:shadow-[--shadow-md] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
          {cardContent}
        </a>
      )
    }

    return (
      <Link
        key={component.route}
        to={component.route}
        className="group relative p-6 rounded-[--radius] bg-card border border-border transition-all duration-200 hover:-translate-y-1 hover:shadow-[--shadow-md] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
      >
        {cardContent}
      </Link>
    )
  }

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-5xl mx-auto">
        {/* Templates Section */}
        <section className="mb-20">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Complete Website Template Library</h1>
            <p className="text-muted-foreground">Ready-to-use website templates for various industries and purposes</p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {templates.map((template) => renderComponentCard(template))}
          </div>
        </section>

        {/* Divider */}
        <div className="my-12 border-t border-border"></div>

        {/* Components Section */}
        <section>
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Components Template Library</h1>
            <p className="text-muted-foreground">Building blocks for your website</p>
          </header>
          <div className="space-y-10">
            {categories.map((category) => (
              <section key={category.name}>
                <h3 className="text-xl font-semibold text-foreground mb-4">{category.name}</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {category.components.map((component) => renderComponentCard(component))}
                </div>
              </section>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default ComponentsIndex
