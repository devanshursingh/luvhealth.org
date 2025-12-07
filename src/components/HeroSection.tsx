import { Search } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const suggestedSearches = [
  { label: "Primary Care", emoji: "🩺" },
  { label: "Gynecologist", emoji: "👩‍⚕️" },
  { label: "Endocrinologist", emoji: "💉" },
  { label: "Ob/Gyn", emoji: "🤰" },
];

export function HeroSection() {
  const scrollToProviders = () => {
    const element = document.getElementById("providers");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-12 lg:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Split Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16">
          {/* Left Side - Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-gray-900 mb-6 relative">
              <span className="block bg-gradient-to-r from-gray-900 via-pink-600 to-pink-700 bg-clip-text text-transparent text-[40px]">
                See Your Doctor Now, Pay Directly
              </span>
            </h1>
            <p className="text-gray-600 mb-8 text-xl leading-relaxed">
              Search hard-to-find LA doctors with transparent prices, quick bookings and online payments
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="Launching in 1 month!"
                  disabled
                  className="pl-10 h-14 text-gray-500 border-2 hover:border-pink-200 transition-colors"
                />
              </div>
              <Button 
                className="h-14 px-8 bg-pink-600 hover:bg-pink-700 text-white shadow-lg hover:shadow-xl transition-all"
                disabled
              >
                Ask Luv
              </Button>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              {suggestedSearches.map((search, index) => (
                <button
                  key={index}
                  className="px-4 py-2 bg-pink-50 text-pink-600 rounded-full hover:bg-pink-100 transition-colors border border-pink-100 hover:border-pink-200 hover:shadow-sm"
                >
                  <span className="mr-2">{search.emoji}</span>
                  {search.label}
                </button>
              ))}
            </div>
          </div>

          {/* Right Side - Image */}
          <div className="relative lg:block hidden">
            <div className="relative">
              {/* Pink accent shape behind image */}
              <div className="absolute -top-6 -right-6 w-full h-full bg-gradient-to-br from-pink-200 to-pink-300 rounded-3xl"></div>
              
              {/* Main image */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1650784854452-6f18e97221f4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGNvbmZpZGVudCUyMGhlYWx0aGNhcmUlMjBtb2Rlcm58ZW58MXx8fHwxNzYzMjY2MDUzfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Professional woman using Luv Health"
                  className="w-full h-[500px] object-cover"
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-pink-600/20 to-transparent"></div>
              </div>

              {/* Floating accent elements */}
              <div className="absolute -bottom-4 -left-4 bg-white p-4 rounded-2xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                    <span className="text-2xl">💰</span>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500">Transparent Pricing</p>
                    <p className="text-sm text-gray-900">Starting at $150</p>
                  </div>
                </div>
              </div>

              <div className="absolute top-8 -left-4 bg-white p-3 rounded-2xl shadow-xl">
                <div className="flex items-center gap-2">
                  <span className="text-yellow-400">⭐⭐⭐⭐⭐</span>
                  <span className="text-sm text-gray-900">5.0</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="pt-12 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <p className="text-gray-900">
              Join Other LA Private Practices Leaving Insurance Companies
            </p>
            <Button
              onClick={scrollToProviders}
              className="bg-pink-600 hover:bg-pink-700 text-white shadow-lg hover:shadow-xl transition-all"
            >
              Providers- Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}