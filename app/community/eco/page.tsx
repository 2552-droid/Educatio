import { auth } from "@/auth";
import Link from "next/link";
import { redirect } from "next/navigation";
import {
  FaGraduationCap,
  FaUserSecret,
  FaClock,
  FaShieldHalved,
  FaArrowLeftLong,
  FaHandshakeAngle,
  FaBuildingColumns,
  FaCircleCheck,
  FaPlus,
  FaUser,
  FaBookOpen,
  FaFire,
  FaEnvelope,
} from "react-icons/fa6";

export default async function EducatioEcoPage() {
  // Retrieve session server-side using Auth.js (NextAuth v5)
  const session = await auth();

  // Mock Help Requests Dataset
  const ecoRequests = [
    {
      id: "eco-101",
      anonId: "Anonymous Scholar #4829",
      course: "Software Engineering & Architecture",
      courseCode: "CSC 301",
      faculty: "Computer Science & Tech",
      facultyColor: "bg-blue-100 text-[#2a6ee5]",
      topic: "Need help understanding Microservices Transaction Boundaries & Saga Pattern",
      description:
        "I'm really struggling to map out two-phase commits vs Sagas for my term project. Looking for a tutor who can explain this with a practical diagram.",
      createdAtHoursAgo: 4, // Active student window
      responsesCount: 2,
      isEscalated: false,
    },
    {
      id: "eco-102",
      anonId: "Anonymous Scholar #9102",
      course: "Clinical Pharmacology",
      courseCode: "MED 402",
      faculty: "Medicine & Health",
      facultyColor: "bg-amber-100 text-amber-800",
      topic: "Pharmacokinetics equations: Clearance rates & Bioavailability calculations",
      description:
        "Having trouble applying first-order elimination formulas to case studies. Need step-by-step guidance before tomorrow's quiz.",
      createdAtHoursAgo: 26, // Exceeds 24 hours -> Escalated to Lecturer
      responsesCount: 0,
      isEscalated: true,
      assignedLecturer: "Dr. Evelyn Vance (Faculty Admin)",
    },
    {
      id: "eco-103",
      anonId: "Anonymous Scholar #3341",
      course: "Constitutional Law & Precedents",
      courseCode: "LAW 201",
      faculty: "Arts & Law",
      facultyColor: "bg-purple-100 text-purple-800",
      topic: "Structuring legal briefs for Supreme Court precedent analysis",
      description:
        "Looking for an senior law student to review my IRAC formatting for landmark judicial review cases.",
      createdAtHoursAgo: 12,
      responsesCount: 1,
      isEscalated: false,
    },
  ];

  // Server Action: Handle New Anonymous Help Request
  async function submitHelpRequest(formData: FormData) {
    "use server";
    const session = await auth();
    if (!session?.user) {
      redirect("/auth?mode=signin");
    }

    const course = formData.get("course");
    const topic = formData.get("topic");
    const description = formData.get("description");

    // In a real application, save to DB with user ID + generate pseudo-anonymous ID
    console.log("New Eco Request Created:", {
      userId: session.user.id || session.user.email,
      course,
      topic,
      description,
      createdAt: new Date(),
    });

    redirect("/community/eco");
  }

  return (
    <main className="min-h-screen bg-gray-50 font-sans text-gray-900 pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* HEADER BAR */}
        <div className="flex justify-between items-center">
          <Link
            href="/community"
            className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-[#2a6ee5] transition-colors"
          >
            <FaArrowLeftLong /> Back to Community Hub
          </Link>

          <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 rounded-full text-xs font-bold">
            <FaShieldHalved /> Anonymous Until Matched
          </span>
        </div>

        {/* ECO HERO BANNER */}
        <div className="bg-gradient-to-r from-gray-900 via-blue-950 to-gray-900 rounded-3xl p-8 sm:p-10 text-white shadow-xl relative overflow-hidden flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
          <div className="space-y-3 z-10 max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-[#FFDD9C] border border-white/15">
              <FaUserSecret className="text-amber-300" /> Educatio Eco Network
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Anonymous <span className="text-[#FFDD9C]">Peer Tutoring & Support</span>
            </h1>
            <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
              Struggling with a difficult module? Post your request completely anonymously. Peer tutors will step in to help. If unanswered after <strong>24 hours</strong>, your request escalates directly to a Faculty Lecturer.
            </p>
          </div>

          <div className="z-10 flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            {!session?.user ? (
              <Link
                href="/auth?mode=signin"
                className="w-full sm:w-auto text-center bg-[#FFDD9C] hover:bg-amber-300 text-gray-900 font-bold px-6 py-3.5 rounded-2xl transition-all shadow-md text-sm whitespace-nowrap"
              >
                Sign In to Request Tutoring
              </Link>
            ) : (
              <a
                href="#request-form"
                className="w-full sm:w-auto text-center bg-[#2a6ee5] hover:bg-blue-600 text-white font-bold px-6 py-3.5 rounded-2xl transition-all shadow-md text-sm flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <FaPlus /> Ask for Help
              </a>
            )}
          </div>

          {/* Decorative Elements */}
          <div className="absolute -right-16 -top-16 w-72 h-72 bg-[#2a6ee5]/20 rounded-full blur-3xl pointer-events-none" />
        </div>

        {/* HOW ECO WORKS STEPS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2a6ee5] flex items-center justify-center text-lg font-bold shrink-0">
              <FaUserSecret />
            </div>
            <div>
              <h4 className="font-bold text-sm text-gray-900">1. Post Anonymously</h4>
              <p className="text-xs text-gray-500 mt-1">
                Your identity is hidden behind an Eco ID. Ask questions without hesitation.
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-lg font-bold shrink-0">
              <FaHandshakeAngle />
            </div>
            <div>
              <h4 className="font-bold text-sm text-gray-900">2. Match with Tutors</h4>
              <p className="text-xs text-gray-500 mt-1">
                Fellow students accept to help. Identities are revealed only after mutual agreement.
              </p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-2xl border border-gray-100 shadow-sm flex items-start gap-4">
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center text-lg font-bold shrink-0">
              <FaBuildingColumns />
            </div>
            <div>
              <h4 className="font-bold text-sm text-gray-900">3. 24h Faculty Backup</h4>
              <p className="text-xs text-gray-500 mt-1">
                No tutor response in 24 hours? The request automatically forwards to a Lecturer.
              </p>
            </div>
          </div>
        </div>

        {/* MAIN FEED & FORM GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT 2 COLUMNS: ACTIVE HELP REQUESTS */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center justify-between">
              <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                <FaHandshakeAngle className="text-[#2a6ee5]" /> Open Help Requests
              </h2>
              <span className="text-xs font-bold bg-blue-50 text-[#2a6ee5] px-3 py-1 rounded-full">
                {ecoRequests.length} Active Posts
              </span>
            </div>

            <div className="space-y-4">
              {ecoRequests.map((req) => (
                <div
                  key={req.id}
                  className={`bg-white rounded-3xl p-6 border shadow-sm transition-all space-y-4 ${
                    req.isEscalated
                      ? "border-amber-300 ring-2 ring-amber-100"
                      : "border-gray-100 hover:border-blue-200"
                  }`}
                >
                  {/* Header Badges */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] font-bold px-2.5 py-1 rounded-md ${req.facultyColor}`}>
                        {req.faculty}
                      </span>
                      <span className="text-xs font-bold text-gray-700 bg-gray-100 px-2 py-0.5 rounded">
                        {req.courseCode}
                      </span>
                    </div>

                    {/* 24-Hour Timer / Escalation Badge */}
                    {req.isEscalated ? (
                      <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-amber-50 text-amber-800 px-3 py-1 rounded-full border border-amber-200 animate-pulse">
                        <FaBuildingColumns className="text-amber-600" /> Escalated to Faculty Admin
                      </span>
                    ) : (
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-500 bg-gray-50 px-2.5 py-1 rounded-full">
                        <FaClock className="text-blue-500" /> {24 - req.createdAtHoursAgo}h left before Faculty auto-notify
                      </span>
                    )}
                  </div>

                  {/* Question & Description */}
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 leading-snug">{req.topic}</h3>
                    <p className="text-gray-600 text-xs sm:text-sm mt-2 leading-relaxed">{req.description}</p>
                  </div>

                  {/* Escalation details box */}
                  {req.isEscalated && (
                    <div className="p-3 bg-amber-50/80 rounded-2xl border border-amber-200 text-xs text-amber-900 flex items-center gap-3">
                      <FaGraduationCap className="text-lg text-amber-700 shrink-0" />
                      <div>
                        <p className="font-bold">Assigned Faculty Member:</p>
                        <p className="text-amber-800">{req.assignedLecturer}</p>
                      </div>
                    </div>
                  )}

                  {/* Card Footer */}
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-4 border-t border-gray-100 text-xs text-gray-500 gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-gray-900 text-white flex items-center justify-center font-bold text-[10px]">
                        <FaUserSecret />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">{req.anonId}</p>
                        <p className="text-[10px] text-gray-400">Posted {req.createdAtHoursAgo} hours ago</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                      <span className="text-xs text-gray-400 font-medium">
                        {req.responsesCount} Tutor Offer(s)
                      </span>

                      {session?.user ? (
                        <button className="bg-[#2a6ee5] hover:bg-blue-600 text-white font-bold py-2.5 px-4 rounded-xl transition-colors flex items-center gap-2 shadow-sm text-xs">
                          <FaHandshakeAngle /> Offer Tutoring Help
                        </button>
                      ) : (
                        <Link
                          href="/auth?mode=signin"
                          className="bg-gray-900 hover:bg-black text-white font-bold py-2.5 px-4 rounded-xl transition-colors text-xs"
                        >
                          Sign In to Offer Help
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDEBAR: POST REQUEST FORM */}
          <div className="space-y-6" id="request-form">
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6">
              <div className="border-b border-gray-100 pb-4">
                <span className="text-[10px] font-bold text-[#2a6ee5] uppercase tracking-wider bg-blue-50 px-2.5 py-1 rounded-md">
                  Protected & Anonymous
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-2">Request Tutoring</h3>
                <p className="text-xs text-gray-500 mt-1">
                  Your identity is kept private until you accept a tutor's offer.
                </p>
              </div>

              {session?.user ? (
                <form action={submitHelpRequest} className="space-y-4">
                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Course Name or Code
                    </label>
                    <input
                      type="text"
                      name="course"
                      placeholder="e.g. CSC 301 - Software Engineering"
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#2a6ee5]/40 text-gray-900 font-medium"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Topic or Problem Statement
                    </label>
                    <input
                      type="text"
                      name="topic"
                      placeholder="e.g. Microservices vs Monolith"
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#2a6ee5]/40 text-gray-900 font-medium"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">
                      Details of Difficulty
                    </label>
                    <textarea
                      name="description"
                      rows={4}
                      placeholder="Explain what specific part of the course you are finding difficult..."
                      required
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#2a6ee5]/40 text-gray-900 font-medium resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-[#2a6ee5] hover:bg-blue-600 text-white font-bold py-3.5 rounded-xl transition-all shadow-md text-xs flex items-center justify-center gap-2"
                  >
                    <FaUserSecret /> Submit Anonymous Request
                  </button>
                </form>
              ) : (
                <div className="text-center py-6 space-y-4 bg-gray-50 rounded-2xl p-4 border border-gray-100">
                  <FaUserSecret className="text-3xl text-gray-400 mx-auto" />
                  <p className="text-xs text-gray-600 font-medium">
                    You must be logged into your Educatio account to post anonymous tutoring requests.
                  </p>
                  <Link
                    href="/auth?mode=signin"
                    className="block w-full bg-[#2a6ee5] text-white font-bold py-3 rounded-xl text-xs shadow-sm"
                  >
                    Sign In Now
                  </Link>
                </div>
              )}
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}