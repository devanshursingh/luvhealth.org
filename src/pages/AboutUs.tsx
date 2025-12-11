import { Link } from 'react-router-dom';
import { Linkedin } from 'lucide-react';
import Logo from '../components/Logo';
import devanshuPhoto from '../assets/0b9bf62f4bbf6d17d9b64af8a00f57f76d9a7f7b.png';
import divyanshPhoto from '../assets/948fe3bdbd94ab8d333035ceffc4e0884e82054e.png';
import srikanthPhoto from '../assets/5629bb49a580382f9f44d0885caef801b0de6dfc.png';

const team = [
  {
    name: "Devanshu Singh",
    title: "Co-Founder, Luv Health Inc.",
    credentials: "PhD Candidate at University of Washington in Political Science",
    bio: "After a recent major illness, Devanshu mas made it his mission to create new options for patients and healthcare providers, combining an AI background with research expertise in political science. Hailing from a family of doctors, Devanshu has grown up around the healthcare system and knows the ins and outs of doctor-patient interactions.",
    linkedin: "https://www.linkedin.com/in/dsingh33",
    photo: devanshuPhoto,
  },
  {
    name: "Divyansh Khare",
    title: "Co-Founder, Luv Health Inc.",
    credentials: "Ex-Software Engineer at Union Pacific Railroad Company",
    bio: "Divyansh is an experienced Full Stack developer with history building high performing and scalable enterprise applications and services. His extensive knowledge of product-driven development paired with a drive to create the next advance in the technology space positions him to build solutions that are both visionary and deeply practical",
    linkedin: "https://www.linkedin.com/in/divyansh-khare/",
    photo: divyanshPhoto,
  },
  {
    name: "Srikanth Bangalore",
    title: "Advisor",
    credentials: "Ex-Yahoo, Ex-Intuit Credit Karma Software Engineer",
    bio: "Srikanth is a Staff-level Software Engineer with 25+ years of experience designing, scaling, and simplifying distributed backend systems across AdTech, FinTech, and 3D real-estate technology. He wants to build community using his background.",
    linkedin: "https://www.linkedin.com/in/srikanth-bangalore/",
    photo: srikanthPhoto,
  },
];

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed w-full bg-white shadow-sm z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="cursor-pointer">
              <Logo size={32} showText={true} />
            </Link>
          </div>
        </div>
      </nav>

      {/* About Us Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-rose-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-8">
              About Us
            </h2>
            <p className="text-2xl font-semibold text-gray-700 mb-6">
              Expanding healthcare choices for patients and providers.
            </p>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our mission is to bring the power of making healthcare choices back into the hands of patients and their doctors.
            </p>
          </div>

          {/* Team Section */}
          <div className="space-y-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-rose-100"
              >
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                  <div className="flex-shrink-0">
                    <div className="w-40 h-40 rounded-2xl overflow-hidden bg-gradient-to-br from-rose-100 to-rose-200 shadow-md">
                      <img
                        src={member.photo}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                        <p className="text-rose-600 mb-2 font-medium">{member.title}</p>
                        <p className="text-gray-600">{member.credentials}</p>
                      </div>
                      {member.linkedin && (
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-rose-600 hover:text-rose-700 transition-colors inline-flex items-center justify-center w-12 h-12 bg-rose-50 rounded-xl hover:bg-rose-100"
                        >
                          <Linkedin className="w-6 h-6" />
                        </a>
                      )}
                    </div>
                    <p className="text-gray-700 leading-relaxed">{member.bio}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link 
              to="/"
              className="inline-block bg-rose-500 text-white px-8 py-4 rounded-full hover:bg-rose-600 transition font-semibold text-lg"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

