import React from "react";
import { BrowserRouter, Routes as RouterRoutes, Route } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import ScrollToTop from "./components/ScrollToTop";

// Existing pages
import Homepage from "./pages/homepage";
import PortfolioGallery from "./pages/portfolio-gallery";
import IndividualProjectExperience from "./pages/individual-project-experience";
import StudioStory from "./pages/studio-story";
import ResourceHub from "./pages/resource-hub";
import AdminDashboard from "./pages/admin-dashboard";
import NotFound from "./pages/NotFound";

// New Supabase-integrated pages
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";
import PublicPortfolio from "./pages/public-portfolio";
import ProjectDetails from "./pages/project-details";
import Contact from "./pages/contact";

const Routes = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <ScrollToTop />
        <RouterRoutes>
          <Route path="/" element={<Homepage />} />
          <Route path="/portfolio-gallery" element={<PortfolioGallery />} />
          <Route path="/individual-project-experience" element={<IndividualProjectExperience />} />
          <Route path="/studio-story" element={<StudioStory />} />
          <Route path="/resource-hub" element={<ResourceHub />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          
          {/* Auth routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          
          {/* Portfolio routes */}
          <Route path="/portfolio" element={<PublicPortfolio />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/contact" element={<Contact />} />
          
          <Route path="*" element={<NotFound />} />
        </RouterRoutes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default Routes;