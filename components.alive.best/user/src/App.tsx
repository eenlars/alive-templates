import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { Toaster } from "@/components/ui/toaster"
import { TooltipProvider } from "@/components/ui/tooltip"
import { Layout } from "./components/Layout"
import Carousel from "./pages/Carousel"
import Carousel2 from "./pages/Carousel2"
import Slideshow from "./pages/Slideshow"
import CardStack from "./pages/CardStack"
import SpotifyPlayer from "./pages/SpotifyPlayer"
import Portfolio from "./pages/Portfolio"
import Projects from "./pages/Projects"
import Moodboard from "./pages/Moodboard"
import ProjectOne from "./pages/ProjectOne"
import ProjectTwo from "./pages/ProjectTwo"
import ProjectThree from "./pages/ProjectThree"
import ProjectFour from "./pages/ProjectFour"
import ProjectFive from "./pages/ProjectFive"
import ProjectSix from "./pages/ProjectSix"
import Index from "./pages/Index"
import ComponentsIndex from "./pages/ComponentsIndex"
import Navbar from "./pages/components/Navbar"
import Footer from "./pages/components/Footer"
import HeroSolid from "./pages/components/HeroSolid"
import HeroSplit from "./pages/components/HeroSplit"
import ProjectGridMasonry from "./pages/components/ProjectGridMasonry"
import ProjectGridEqual from "./pages/components/ProjectGridEqual"
import MediaGallery from "./pages/components/MediaGallery"
import CaseSection from "./pages/components/CaseSection"
import BlogComponent from "./pages/components/Blog"
import FAQ from "./pages/components/FAQ"
import CTA from "./pages/components/CTA"
import Testimonials from "./pages/components/Testimonials"
import Pricing from "./pages/components/Pricing"
import Newsletter from "./pages/components/Newsletter"
import Tabs from "./pages/components/Tabs"
import EventSchedule from "./pages/components/EventSchedule"
import CaseHeader from "./pages/components/CaseHeader"
import ProcessTimeline from "./pages/components/ProcessTimeline"
import RelatedContent from "./pages/components/RelatedContent"
import BrandSlideshowPage from "./pages/BrandSlideshow"
import PricingTablePage from "./pages/PricingTablePage"
import TeamMembersPage from "./pages/TeamMembersPage"
import FeaturesPage from "./pages/FeaturesPage"
import BentoGridPage from "./pages/BentoGridPage"
import TwoColumnFeaturePage from "./pages/TwoColumnFeaturePage"
import CareersPage from "./pages/CareersPage"
import CareersHero from "./pages/components/CareersHero"
import TestimonialQuote from "./pages/components/TestimonialQuote"
import BlogGrid from "./pages/BlogGrid"
import BlogArticles from "./pages/BlogArticles"
import NavHeader from "./pages/NavHeader"
import CalendarPage from "./pages/CalendarPage"
import AccordionPage from "./pages/AccordionPage"
import BlogEditorialPage from "./pages/components/BlogEditorialPage"
import BlogCardsPage from "./pages/components/BlogCardsPage"
import BannerPage from "./pages/BannerPage"
import EventAnnouncement from "./pages/components/EventAnnouncement"
import ErrorPage from "./pages/components/ErrorPage"
import DashboardLayout from "./pages/components/DashboardLayout"
import DashboardLayout2 from "./pages/components/DashboardLayout2"
import AdminDashboard from "./pages/components/AdminDashboard"
import NotFoundPage from "./pages/components/NotFoundPage"
import AlertBox from "./pages/components/AlertBox"
import SuccessAlert from "./pages/components/SuccessAlert"
import NotFound from "./pages/NotFound"
import Table from "./pages/Table"
import UsersTable from "./pages/UsersTable"
import ContactForm from "./pages/ContactForm"

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ComponentsIndex />} />
          <Route path="/carousel" element={<Carousel />} />
          <Route path="/carousel2" element={<Carousel2 />} />
          <Route path="/slideshow" element={<Slideshow />} />
          <Route path="/card-stack" element={<CardStack />} />
          <Route path="/spotify-player" element={<SpotifyPlayer />} />
          <Route path="/components" element={<ComponentsIndex />} />
          <Route path="/components/navbar" element={<Navbar />} />
          <Route path="/components/footer" element={<Footer />} />
          <Route path="/components/hero-solid" element={<HeroSolid />} />
          <Route path="/components/hero-split" element={<HeroSplit />} />
          <Route path="/components/project-grid-masonry" element={<ProjectGridMasonry />} />
          <Route path="/components/project-grid-equal" element={<ProjectGridEqual />} />
          <Route path="/components/media-gallery" element={<MediaGallery />} />
          <Route path="/components/case-section" element={<CaseSection />} />
          <Route path="/components/blog" element={<BlogComponent />} />
          <Route path="/components/blog-editorial" element={<BlogEditorialPage />} />
          <Route path="/components/blog-cards" element={<BlogCardsPage />} />
          <Route path="/components/faq" element={<FAQ />} />
          <Route path="/components/cta" element={<CTA />} />
          <Route path="/components/testimonials" element={<Testimonials />} />
          <Route path="/components/pricing" element={<Pricing />} />
          <Route path="/components/newsletter" element={<Newsletter />} />
          <Route path="/components/tabs" element={<Tabs />} />
          <Route path="/components/event-schedule" element={<EventSchedule />} />
          <Route path="/components/case-header" element={<CaseHeader />} />
          <Route path="/components/process-timeline" element={<ProcessTimeline />} />
          <Route path="/components/related-content" element={<RelatedContent />} />
          <Route path="/components/brand-slideshow" element={<BrandSlideshowPage />} />
          <Route path="/components/pricing-table" element={<PricingTablePage />} />
          <Route path="/components/team-members" element={<TeamMembersPage />} />
          <Route path="/components/features" element={<FeaturesPage />} />
          <Route path="/components/bento-grid" element={<BentoGridPage />} />
          <Route path="/components/two-column-feature" element={<TwoColumnFeaturePage />} />
          <Route path="/components/careers" element={<CareersPage />} />
          <Route path="/components/careers-hero" element={<CareersHero />} />
          <Route path="/components/testimonial-quote" element={<TestimonialQuote />} />
          <Route path="/components/blog-grid" element={<BlogGrid />} />
          <Route path="/components/blog-articles" element={<BlogArticles />} />
          <Route path="/components/nav-header" element={<NavHeader />} />
          <Route path="/components/calendar" element={<CalendarPage />} />
          <Route path="/components/accordion" element={<AccordionPage />} />
          <Route path="/components/banner" element={<BannerPage />} />
          <Route path="/components/event-announcement" element={<EventAnnouncement />} />
          <Route path="/components/error-page" element={<ErrorPage />} />
          <Route path="/components/dashboard-layout" element={<DashboardLayout />} />
          <Route path="/components/dashboard-layout-2" element={<DashboardLayout2 />} />
          <Route path="/components/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/components/not-found-page" element={<NotFoundPage />} />
          <Route path="/components/alert-box" element={<AlertBox />} />
          <Route path="/components/success-alert" element={<SuccessAlert />} />
          <Route path="/table" element={<Table />} />
          <Route path="/users-table" element={<UsersTable />} />
          <Route path="/contact-form" element={<ContactForm />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
)

export default App
