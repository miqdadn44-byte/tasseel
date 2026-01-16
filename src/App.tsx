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

const queryClient = new QueryClient();

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
            <Routes>
              <Route path="/" element={<Index />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </SEOWrapper>
    </LanguageProvider>
  </QueryClientProvider>
);

export default App;
