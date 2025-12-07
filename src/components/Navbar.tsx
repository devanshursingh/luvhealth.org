import { Heart } from "lucide-react";
import { Button } from "./ui/button";

export function Navbar() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Heart className="w-8 h-8 text-pink-600 fill-pink-600" />
            <span className="text-black-600">Luv Health</span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="text-gray-700 hover:text-pink-600 transition-colors"
            >
              How Luv Works
            </button>
            <button
              onClick={() => scrollToSection("providers")}
              className="bg-pink-600 hover:bg-pink-700 text-white transition-colors px-4 py-2 rounded-[8px]"
            >
              Providers- Learn More
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-700 hover:text-pink-600 transition-colors"
            >
              About Luv Health
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}