import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { NotFound } from "./pages/NotFound";
import { Toaster } from "@/components/ui/toaster";
import { AboutSection } from "./components/AboutSection";
import { SkillsSection } from "./components/SkillsSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { ContactSection } from "./components/ContactSection";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";


function App() {
  return (
    <>
      <Toaster />
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />


          <Route path="/about" element={<AboutSection />} />
          <Route path="/skills" element={<SkillsSection />} />
          <Route path="/projects" element={<ProjectsSection />} />
          <Route path="/contact" element={<ContactSection />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </>
  );
}

export default App;
