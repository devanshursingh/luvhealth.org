import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Linkedin } from "lucide-react";

import divyanshPhoto from "figma:asset/948fe3bdbd94ab8d333035ceffc4e0884e82054e.png";
import devanshuPhoto from "figma:asset/0b9bf62f4bbf6d17d9b64af8a00f57f76d9a7f7b.png";
import srikanthPhoto from "figma:asset/5629bb49a580382f9f44d0885caef801b0de6dfc.png";

const team = [
  {
    name: "Devanshu Singh",
    title: "Co-Founder, Luv Health Inc.",
    credentials: "PhD Candidate at University of Washington in Political Science",
    bio: "After a recent major illness, Devanshu is setting out to create new options for patients and doctors. He combines an AI background with research expertise in political science. He also comes from a family of doctors. He has grown up around the healthcare system and knows the frustrations of doctors and patients.",
    linkedin: "https://www.linkedin.com/in/dsingh33",
    photo: devanshuPhoto,
  },
  {
    name: "Divyansh Khare",
    title: "Co-Founder, Luv Health Inc.",
    credentials: "Ex-Software Engineer at Union Pacific Railroad Company",
    bio: "Divyansh is an experienced Full Stack developer with history building high performing and scalable enterprise applications and services. He wants to build something great.",
    linkedin: "https://www.linkedin.com/in/divyansh-khare/",
    photo: divyanshPhoto,
  },
  {
    name: "Srikanth Bangalore",
    title: "Advisor",
    credentials: "Ex-Yahoo, Ex-Intuit Credit Karma Software Engineer",
    bio: "Srikanth is a Staff-level Software Engineer with 25+ years of experience designing, scaling, and simplifying distributed backend systems across ad-tech, fintech, and 3D real-estate technology. He wants to build community using his background.",
    linkedin: "https://www.linkedin.com/in/srikanth-bangalore/",
    photo: srikanthPhoto,
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-pink-50 to-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-gray-900 mb-6">
            About Luv Health
          </h2>
          <p className="text-pink-600 max-w-3xl mx-auto text-lg">
            Our mission is to bring the power of making healthcare choices back into the hands of patients and their doctors.
          </p>
        </div>

        <div className="space-y-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-pink-100"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                <div className="flex-shrink-0">
                  <div className="w-40 h-40 rounded-2xl overflow-hidden bg-gradient-to-br from-pink-100 to-pink-200 shadow-md">
                    <ImageWithFallback
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-gray-900 mb-2">{member.name}</h3>
                      <p className="text-pink-600 mb-2">{member.title}</p>
                      <p className="text-gray-600">{member.credentials}</p>
                    </div>
                    {member.linkedin && (
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-pink-600 hover:text-pink-700 transition-colors inline-flex items-center justify-center w-12 h-12 bg-pink-50 rounded-xl hover:bg-pink-100"
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

        <div className="mt-16 text-center">
          <p className="text-gray-600">
            © 2025 Luv Health Inc. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
}