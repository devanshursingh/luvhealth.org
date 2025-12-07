import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { HowItWorksSection } from "./components/HowItWorksSection";
import { ProvidersSection } from "./components/ProvidersSection";
import { AboutSection } from "./components/AboutSection";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <HowItWorksSection />
      <ProvidersSection />
      <AboutSection />
    </div>
  );
}
