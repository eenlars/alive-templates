import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { Toaster } from "@/components/ui/toaster"
import { TooltipProvider } from "@/components/ui/tooltip"
import Index from "./pages/Index"
import Projects from "./pages/Projects"
import Archive from "./pages/Moodboard"
import ProjectOne from "./pages/ProjectOne"
import ProjectTwo from "./pages/ProjectTwo"
import ProjectThree from "./pages/ProjectThree"
import ProjectFour from "./pages/ProjectFour"
import ProjectFive from "./pages/ProjectFive"
import ProjectSix from "./pages/ProjectSix"
import NotFound from "./pages/NotFound"

const queryClient = new QueryClient()

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/projects/one" element={<ProjectOne />} />
          <Route path="/projects/two" element={<ProjectTwo />} />
          <Route path="/projects/three" element={<ProjectThree />} />
          <Route path="/projects/four" element={<ProjectFour />} />
          <Route path="/projects/five" element={<ProjectFive />} />
          <Route path="/projects/six" element={<ProjectSix />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
)

export default App
