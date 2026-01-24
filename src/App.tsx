import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./contexts/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import FloatingActions from "./components/FloatingActions";
import StructuredData from "./components/StructuredData";
import { useSEO } from "./hooks/useSEO";
import LaborLaw from "./pages/LaborLaw";
import CivilLitigation from "./pages/CivilLitigation";
import FamilyLaw from "./pages/FamilyLaw";
import CriminalDefense from "./pages/CriminalDefense";

const queryClient = new QueryClient();

import RouteLanguageSync from "./components/RouteLanguageSync";

// Wrapper component to use hooks inside LanguageProvider
const SEOWrapper = ({ children }: { children: React.ReactNode }) => {
  useSEO();
  return <>{children}</>;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <LanguageProvider>
      <SEOWrapper>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <StructuredData />
          <FloatingActions />
          <BrowserRouter>
            <RouteLanguageSync />
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/services/labor-law" element={<LaborLaw />} />
              <Route path="/services/civil-litigation" element={<CivilLitigation />} />
              <Route path="/services/family-law" element={<FamilyLaw />} />
              <Route path="/services/criminal-defense" element={<CriminalDefense />} />

              {/* Arabic Routes */}
              <Route path="/ar/services/labor-law" element={<LaborLaw />} />
              <Route path="/ar/services/civil-litigation" element={<CivilLitigation />} />
              <Route path="/ar/services/family-law" element={<FamilyLaw />} />
              <Route path="/ar/services/criminal-defense" element={<CriminalDefense />} />

              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </SEOWrapper>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
