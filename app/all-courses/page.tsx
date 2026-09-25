import Image from "next/image";
import Link from "next/link";
import { 
  FaArrowRightLong, 
  FaLaptopCode, 
  FaMicrophoneLines, 
  FaHandshake, 
  FaUserNurse, 
  FaFlask, 
  FaChartLine, 
  FaCalculator, 
  FaBolt, 
  FaBuilding,
  FaFilter,
  FaLayerGroup,
  FaStethoscope,
  FaGraduationCap
} from "react-icons/fa6";

export default function AllCoursesPage() {
  const disciplines = [
    {
      title: "Software Engineering",
      category: "Computer Science & Tech",
      description: "Master modern software architecture, DevOps, scalable system design, and advanced programming paradigms.",
      icon: <FaLaptopCode className="text-3xl text-[#2a6ee5]" />,
      image: "/csc.jpeg",
      href: "/courses/software-engineering"
    },
    {
      title: "Mass Communication",
      category: "Arts & Social Sciences",
      description: "Explore digital media production, journalism ethics, broadcasting, and modern strategic public relations.",
      icon: <FaMicrophoneLines className="text-3xl text-[#2a6ee5]" />,
      image: "/bg.jpeg",
      href: "/courses/mass-communication"
    },
    {
      title: "Peace & Conflict Studies",
      category: "Arts & Social Sciences",
      description: "Analyze international diplomacy, conflict transformation, negotiation frameworks, and humanitarian law.",
      icon: <FaHandshake className="text-3xl text-[#2a6ee5]" />,
      image: "/law.jpeg",
      href: "/courses/peace-and-conflict"
    },
    {
      title: "Nursing Science",
      category: "Medicine & Health",
      description: "Comprehensive guides on patient care management, clinical pharmacology, surgical nursing, and therapeutics.",
      icon: <FaUserNurse className="text-3xl text-[#2a6ee5]" />,
      image: "/med.jpeg",
      href: "/courses/nursing"
    },
    {
      title: "Medical Laboratory Science",
      category: "Medicine & Health",
      description: "In-depth diagnostics, pathology protocols, chemical pathology, and advanced medical microbiology frameworks.",
      icon: <FaFlask className="text-3xl text-[#2a6ee5]" />,
      image: "/med.jpeg",
      href: "/courses/medical-laboratory"
    },
    {
      title: "Economics",
      category: "Business & Management",
      description: "Study micro and macroeconomics, econometric data analysis, monetary policy, and financial market systems.",
      icon: <FaChartLine className="text-3xl text-[#2a6ee5]" />,
      image: "/bg.jpeg",
      href: "/courses/economics"
    },
    {
      title: "Accounting",
      category: "Business & Management",
      description: "Financial reporting, auditing, forensic accounting, tax compliance principles, and corporate governance.",
      icon: <FaCalculator className="text-3xl text-[#2a6ee5]" />,
      image: "/bg.jpeg",
      href: "/courses/accounting"
    },
    {
      title: "Electrical Engineering",
      category: "Engineering & Tech",
      description: "Power systems analysis, circuit design, electromagnetism, embedded systems, and renewable energy grids.",
      icon: <FaBolt className="text-3xl text-[#2a6ee5]" />,
      image: "/csc.jpeg",
      href: "/courses/electrical-engineering"
    },
    {
      title: "Architecture",
      category: "Engineering & Tech",
      description: "Structural design concepts, urban planning methodologies, CAD drafting, and sustainable building technologies.",
      icon: <FaBuilding className="text-3xl text-[#2a6ee5]" />,
      image: "/law.jpeg",
      href: "/courses/architecture"
    }
  ];

  return (
    <main className="min-h-dvh font-sans text-gray-900 bg-gray-50">
      
      {/* HEADER SECTION */}
      <section className="bg-[#2a6ee5] py-24 px-6 text-white text-center mt-16 lg:mt-0">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-[#FFDD9C] text-black px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase inline-block mb-2">
            Curriculum Hubs
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Explore All <span className="text-[#FFDD9C]">Disciplines</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Browse our comprehensive selection of specialized course hubs designed to power your academic success across every major field.
          </p>
        </div>
      </section>

      {/* SEARCH AND FILTER BAR */}
      <section className="max-w-7xl mx-auto px-6 -mt-8 relative z-10">
        <div className="bg-white p-4 md:p-6 rounded-3xl shadow-lg border border-gray-100 flex flex-col md:flex-row gap-4 items-center justify-between">
          <div className="relative w-full md:w-96">
            <span className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
            </span>
            <input 
              type="text" 
              placeholder="Search disciplines or topics..." 
              className="w-full pl-11 pr-4 py-3 rounded-2xl bg-gray-50 border border-gray-200 text-sm focus:outline-none focus:ring-2 focus:ring-[#2a6ee5]/50"
            />
          </div>
          <div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
            <div className="flex items-center gap-1.5 text-sm font-bold text-gray-500 whitespace-nowrap mr-2">
              <FaFilter className="text-xs text-[#2a6ee5]" />
              <span>Filter by:</span>
            </div>
            <button className="bg-[#2a6ee5] text-white text-xs font-bold px-4 py-2.5 rounded-xl whitespace-nowrap flex items-center gap-1.5 shadow-sm">
              <FaLayerGroup className="text-xs" /> All Fields
            </button>
            <button className="bg-gray-100 text-gray-600 hover:bg-gray-200 text-xs font-bold px-4 py-2.5 rounded-xl transition-colors whitespace-nowrap flex items-center gap-1.5">
              <FaLaptopCode className="text-xs text-[#2a6ee5]" /> Tech & Engineering
            </button>
            <button className="bg-gray-100 text-gray-600 hover:bg-gray-200 text-xs font-bold px-4 py-2.5 rounded-xl transition-colors whitespace-nowrap flex items-center gap-1.5">
              <FaStethoscope className="text-xs text-[#2a6ee5]" /> Health & Medicine
            </button>
            <button className="bg-gray-100 text-gray-600 hover:bg-gray-200 text-xs font-bold px-4 py-2.5 rounded-xl transition-colors whitespace-nowrap flex items-center gap-1.5">
              <FaGraduationCap className="text-xs text-[#2a6ee5]" /> Social Sciences
            </button>
          </div>
        </div>
      </section>

      {/* COURSES GRID SECTION */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {disciplines.map((course, index) => (
            <div 
              key={index} 
              className="bg-white rounded-3xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Card Top Banner / Image overlay wrapper */}
                <div className="relative h-48 overflow-hidden bg-gray-900">
                  <Image
                    src={course.image}
                    alt={course.title}
                    fill
                    className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-gray-800">
                    {course.category}
                  </div>
                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white tracking-wide">{course.title}</h3>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 space-y-4">
                  <div className="bg-[#FFDD9C]/20 p-3 rounded-2xl w-fit">
                    {course.icon}
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {course.description}
                  </p>
                </div>
              </div>

              {/* Card Footer Button */}
              <div className="p-6 pt-0">
                <Link 
                  href={course.href}
                  className="w-full bg-gray-50 hover:bg-[#2a6ee5] hover:text-white text-gray-900 font-bold py-3.5 px-4 rounded-2xl transition-all duration-300 flex items-center justify-between text-sm group/btn border border-gray-200 hover:border-transparent"
                >
                  <span>Access Course Hub</span>
                  <span className="w-8 h-8 rounded-full bg-white text-gray-900 group-hover/btn:bg-white/20 group-hover/btn:text-white flex items-center justify-center transition-colors shadow-sm">
                    <FaArrowRightLong />
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-gray-900 py-16 px-6 text-white text-center border-t border-gray-800">
        <div className="max-w-3xl mx-auto space-y-6">
          <h3 className="text-3xl font-bold">Can't find your specific discipline?</h3>
          <p className="text-gray-400 text-base">
            We are constantly adding new university faculties and programs. Request a dedicated course hub through our support portal.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-[#2a6ee5] text-white font-bold py-3.5 px-8 rounded-full hover:bg-blue-600 transition-colors shadow-md text-sm"
          >
            Request a Course Hub
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 text-gray-500 py-8 text-center border-t border-gray-900">
        <p className="text-sm">© {new Date().getFullYear()} Educatio. All rights reserved.</p>
      </footer>

    </main>
  );
}