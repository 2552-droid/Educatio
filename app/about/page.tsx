import Image from "next/image";
import Link from "next/link";
import { 
  FaBullseye, 
  FaLightbulb, 
  FaPeopleGroup, 
  FaEarthAmericas,
  FaArrowRightLong
} from "react-icons/fa6";

export default function About() {
  return (
    <main className="min-h-dvh font-sans text-gray-900 bg-gray-50">
      
      {/* HEADER SECTION */}
      <section className="bg-[#2a6ee5] py-24 px-6 text-white text-center mt-16 lg:mt-0">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-[#FFDD9C] text-black px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase inline-block mb-2">
            Our Story
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Democratizing <span className="text-[#FFDD9C]">Academic Excellence</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Educatio was founded on a simple belief: every student deserves access to premium, well-structured, and accurate academic resources regardless of their background.
          </p>
        </div>
      </section>

      {/* MISSION & VISION SECTION */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Bridging the Gap Between Ambition and Success</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              Navigating university coursework can be overwhelming. Between scattered lecture notes, expensive textbooks, and complex syllabi, students often spend more time searching for resources than actually studying. 
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              We built Educatio to solve this. By curating discipline-specific hubs for fields like Law, Medicine, and Computer Science, we provide a streamlined, distraction-free environment where knowledge is highly accessible and deeply organized.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-4">
              <div className="bg-blue-50 w-14 h-14 rounded-full flex items-center justify-center text-[#2a6ee5] text-2xl">
                <FaBullseye />
              </div>
              <h3 className="text-xl font-bold">Our Mission</h3>
              <p className="text-gray-600">To empower students globally by providing centralized, high-quality educational materials tailored to rigorous academic standards.</p>
            </div>
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-4 sm:translate-y-8">
              <div className="bg-orange-50 w-14 h-14 rounded-full flex items-center justify-center text-[#E73F1E] text-2xl">
                <FaLightbulb />
              </div>
              <h3 className="text-xl font-bold">Our Vision</h3>
              <p className="text-gray-600">To become the world's most trusted digital companion for higher education and professional certification.</p>
            </div>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="bg-white py-16 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-2">
            <h4 className="text-4xl font-bold text-[#2a6ee5]">50k+</h4>
            <p className="text-gray-500 font-medium uppercase tracking-wide text-sm">Active Students</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-4xl font-bold text-[#2a6ee5]">10k+</h4>
            <p className="text-gray-500 font-medium uppercase tracking-wide text-sm">Curated Resources</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-4xl font-bold text-[#2a6ee5]">15+</h4>
            <p className="text-gray-500 font-medium uppercase tracking-wide text-sm">Academic Disciplines</p>
          </div>
          <div className="space-y-2">
            <h4 className="text-4xl font-bold text-[#2a6ee5]">4.9/5</h4>
            <p className="text-gray-500 font-medium uppercase tracking-wide text-sm">Average Rating</p>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-24 px-6 max-w-7xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-16">Our Core Values</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <FaEarthAmericas className="text-4xl text-[#2a6ee5] mb-6" />
            <h3 className="text-xl font-bold mb-3">Accessibility</h3>
            <p className="text-gray-600">Education shouldn't be gated by geography or socioeconomic status. We design our platform to be lightweight, affordable, and universally accessible.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <FaPeopleGroup className="text-4xl text-[#2a6ee5] mb-6" />
            <h3 className="text-xl font-bold mb-3">Community</h3>
            <p className="text-gray-600">Learning is collaborative. We foster an environment where students can share notes, discuss complex theories, and lift each other up.</p>
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
            <FaBullseye className="text-4xl text-[#2a6ee5] mb-6" />
            <h3 className="text-xl font-bold mb-3">Accuracy</h3>
            <p className="text-gray-600">In fields like Law and Medicine, precision is non-negotiable. All our premium resources are strictly vetted by domain experts and academic peers.</p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="bg-gray-900 py-20 px-6 text-white text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold">Join the Educatio Community</h2>
          <p className="text-lg text-gray-400">
            Whether you are preparing for your bar exams, medical boards, or tackling complex data structures, we have the resources you need to succeed.
          </p>
          <div className="flex justify-center pt-4">
            <Link 
              href="/signup" 
              className="bg-[#2a6ee5] text-white flex items-center w-fit py-3 px-8 rounded-full gap-3 hover:bg-blue-600 transition-colors font-bold text-lg"
            >
              Get Started Today <FaArrowRightLong />
            </Link>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 text-gray-500 py-12 text-center border-t border-gray-800">
        <p>© {new Date().getFullYear()} Educatio. All rights reserved.</p>
      </footer>

    </main>
  );
}