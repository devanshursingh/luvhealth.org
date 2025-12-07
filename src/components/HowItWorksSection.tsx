import { Clock, DollarSign, Heart, Sparkles } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Hard-to-find, High-Quality Care",
    description: "Access hard-to-find doctors with private practices across LA who prioritize quality over quantity",
  },
  {
    icon: DollarSign,
    title: "Transparent Prices",
    description: "See exact costs upfront—no surprise bills or insurance headaches",
  },
  {
    icon: Clock,
    title: "Quick Availability",
    description: "Get appointments faster with doctors who manage their own schedules",
  },
  {
    icon: Sparkles,
    title: "Your Choice",
    description: "Pick the right doctor for you, not just the ones your insurance approves",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">
            How Luv Works
          </h2>
          <p className="text-pink-600 max-w-2xl mx-auto mb-8 text-lg">
            Make your own decisions about your own health
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-gray-100 hover:border-pink-200 group"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-pink-100 to-pink-200 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Icon className="w-7 h-7 text-pink-600" />
                </div>
                <h3 className="text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-white p-10 rounded-2xl shadow-lg space-y-6 border border-pink-100">
          <p className="text-gray-700 text-lg leading-relaxed relative pl-6 italic border-l-4 border-pink-600 py-2">
            Don't waste hours calling doctors your insurance company told you to. Invest in high-quality doctors of your own now.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed relative pl-6 italic border-l-4 border-pink-600 py-2">
            For important health decisions, invest in yourself. Don't waste time looking for a doctor—find the right one on Luv.
          </p>
        </div>
      </div>
    </section>
  );
}