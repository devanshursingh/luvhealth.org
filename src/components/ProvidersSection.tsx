import { TrendingUp, Users, Image as ImageIcon, DollarSign, Building2, CheckCircle } from "lucide-react";
import { Button } from "./ui/button";

const benefits = [
  {
    icon: Users,
    title: "Find Self-Paying Patients",
    description: "Connect with a growing number of patients choosing to pay directly for quality, hassle-free care",
  },
  {
    icon: DollarSign,
    title: "Transparent Pricing",
    description: "List your services with 'as low as' pricing and create multiple tiers for different offerings, not just concierge",
  },
  {
    icon: Building2,
    title: "Build Your Profile",
    description: "Create a professional practice profile with your self-pay services and photos",
  },
  {
    icon: TrendingUp,
    title: "Reduce Insurance Reliance",
    description: "As insurance prices rise, more patients are seeking direct-pay options",
  },
];

export function ProvidersSection() {
  return (
    <section id="providers" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-4">
            For Providers
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            An independent marketing platform to help your LA practice grow by connecting you with cash-paying patients
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-pink-50 p-8 rounded-2xl border-2 border-pink-100 hover:border-pink-300 transition-all hover:shadow-lg group"
              >
                <div className="w-14 h-14 bg-white rounded-xl flex items-center justify-center mb-4 shadow-sm group-hover:shadow-md transition-shadow">
                  <Icon className="w-7 h-7 text-pink-600" />
                </div>
                <h3 className="text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-10 rounded-3xl shadow-lg">
          <h3 className="text-gray-900 mb-8 text-center">What You Can Do on Luv</h3>
          <div className="grid md:grid-cols-2 gap-6 mb-10">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-pink-600" />
              </div>
              <p className="text-gray-700 leading-relaxed">
                Create a comprehensive private practice profile showcasing your expertise and services
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-pink-600" />
              </div>
              <p className="text-gray-700 leading-relaxed">
                Upload photos of your practice to give patients confidence in your facility
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-pink-600" />
              </div>
              <p className="text-gray-700 leading-relaxed">
                List cash pay services with "as low as" pricing and create multiple service tiers
              </p>
            </div>
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <CheckCircle className="w-6 h-6 text-pink-600" />
              </div>
              <p className="text-gray-700 leading-relaxed">
                Reach a growing market of cash-paying patients seeking transparent, quality care
              </p>
            </div>
          </div>
          
          <div className="text-center">
            <Button className="bg-pink-600 hover:bg-pink-700 text-white px-10 py-6 text-lg shadow-xl hover:shadow-2xl transition-all">
              Join Luv Health
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}