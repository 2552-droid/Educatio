import Link from "next/link";
import { 
  FaUser, 
  FaEnvelope, 
  FaBookOpen, 
  FaClockRotateLeft, 
  FaGear, 
  FaArrowRightFromBracket,
  FaGraduationCap,
  FaAward,
  FaAngleRight,
  FaCamera
} from "react-icons/fa6";

export default function profile() {
  // Mock User Data
  const user = {
    name: "Alex Johnson",
    email: "alex@example.com",
    role: "Computer Science Student",
    joinDate: "September 2026",
    avatar: "/default-avatar.png", // Replace with actual path or use generic fallback
  };

  // Mock Enrolled Courses
  const enrolledCourses = [
    {
      title: "Software Engineering Fundamentals",
      progress: 75,
      lastAccessed: "2 hours ago",
      icon: <FaBookOpen className="text-[#2a6ee5]" />
    },
    {
      title: "Introduction to Microeconomics",
      progress: 30,
      lastAccessed: "1 day ago",
      icon: <FaBookOpen className="text-[#E73F1E]" />
    },
    {
      title: "Systems Architecture",
      progress: 100,
      lastAccessed: "1 week ago",
      icon: <FaGraduationCap className="text-green-500" />
    }
  ];

  return (
    <main className="min-h-dvh bg-gray-50 font-sans text-gray-900 pb-20">
      
      {/* Profile Banner */}
      <div className="h-64 bg-gradient-to-r from-[#2a6ee5] to-blue-800 relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-10 left-20 w-48 h-48 bg-[#FFDD9C]/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-10">
        {/* Grid: 1 column on small screens, 1/3 + 2/3 on desktop. The gap is handled by the grid. */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: User Profile Card & Navigation */}
          <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-6 self-start">
            
            {/* User Identity Card */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 text-center">
              <div className="relative w-32 h-32 mx-auto -mt-16 mb-4 rounded-full border-4 border-white shadow-lg bg-gray-100 flex items-center justify-center overflow-hidden">
                <FaUser className="text-6xl text-gray-300" />
                <button
                  type="button"
                  aria-label="Change profile photo"
                  className="absolute bottom-0 w-full bg-black/50 py-1.5 flex justify-center hover:bg-black/70 transition-colors"
                >
                  <FaCamera className="text-white text-sm" />
                </button>
              </div>
              
              <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
              <p className="text-[#2a6ee5] font-semibold text-sm mb-1">{user.role}</p>
              <div className="flex items-center justify-center gap-2 text-gray-500 text-sm mb-6">
                <FaEnvelope className="text-gray-400" />
                <span>{user.email}</span>
              </div>

              <div className="grid grid-cols-2 gap-4 border-t border-gray-100 pt-6">
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">12</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Courses</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">4</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Certificates</p>
                </div>
              </div>
            </div>

            {/* Profile Navigation */}
            <div className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100">
              <nav className="space-y-1">
                <Link href="/profile" className="flex items-center justify-between px-4 py-3 bg-blue-50 text-[#2a6ee5] rounded-xl font-medium">
                  <div className="flex items-center gap-3">
                    <FaUser />
                    <span>Personal Info</span>
                  </div>
                </Link>
                <Link href="/profile/courses" className="flex items-center justify-between px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-xl font-medium transition-colors">
                  <div className="flex items-center gap-3">
                    <FaBookOpen />
                    <span>My Learning</span>
                  </div>
                </Link>
                <Link href="/profile/history" className="flex items-center justify-between px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-xl font-medium transition-colors">
                  <div className="flex items-center gap-3">
                    <FaClockRotateLeft />
                    <span>History & Activity</span>
                  </div>
                </Link>
                <Link href="/profile/settings" className="flex items-center justify-between px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-xl font-medium transition-colors">
                  <div className="flex items-center gap-3">
                    <FaGear />
                    <span>Account Settings</span>
                  </div>
                </Link>
                <div className="border-t border-gray-100 my-2"></div>
                <button type="button" className="w-full flex items-center justify-between px-4 py-3 text-[#E73F1E] hover:bg-red-50 rounded-xl font-medium transition-colors">
                  <div className="flex items-center gap-3">
                    <FaArrowRightFromBracket />
                    <span>Sign Out</span>
                  </div>
                </button>
              </nav>
            </div>
          </div>

          {/* Right Column: Content Area.
              lg:mt-24 cancels the wrapper's -mt-24 on desktop so this column starts below the banner.
              Delete it if you want this column to overlap the banner like the profile card does. */}
          <div className="lg:col-span-2 space-y-6 lg:mt-24">
            
            {/* Welcome & Quick Stats */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">Welcome back, Alex!</h2>
                  <p className="text-gray-500 text-sm">Continue your learning journey on Educatio.</p>
                </div>
                <span className="hidden md:inline-block bg-[#FFDD9C] text-gray-900 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mt-4 md:mt-0">
                  Student Portal
                </span>
              </div>

              {/* Progress Tracker widget */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">Current Semester Progress</h3>
                  <p className="text-sm text-gray-500 mt-1">You've completed 45% of your registered modules.</p>
                </div>
                <div className="relative w-16 h-16 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path className="text-gray-200" strokeWidth="3" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                    <path className="text-[#2a6ee5]" strokeWidth="3" strokeDasharray="45, 100" stroke="currentColor" fill="none" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  </svg>
                  <span className="absolute text-sm font-bold text-gray-900">45%</span>
                </div>
              </div>
            </div>

            {/* In Progress Courses */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-gray-900">Continue Learning</h3>
                <Link href="/courses" className="text-sm text-[#2a6ee5] font-semibold hover:underline flex items-center gap-1">
                  View All <FaAngleRight />
                </Link>
              </div>

              <div className="space-y-4">
                {enrolledCourses.map((course, index) => (
                  <div key={index} className="flex items-center p-4 border border-gray-100 rounded-2xl hover:border-[#2a6ee5]/30 hover:shadow-md transition-all group bg-white">
                    <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
                      {course.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900 text-sm md:text-base">{course.title}</h4>
                      <div className="flex items-center gap-4 mt-1">
                        <span className="text-xs text-gray-500">Last accessed: {course.lastAccessed}</span>
                      </div>
                      
                      {/* Progress bar */}
                      <div className="w-full bg-gray-100 rounded-full h-1.5 mt-3">
                        <div 
                          className={`h-1.5 rounded-full ${course.progress === 100 ? 'bg-green-500' : 'bg-[#2a6ee5]'}`} 
                          style={{ width: `${course.progress}%` }}
                        ></div>
                      </div>
                    </div>
                    <div className="ml-4 text-right hidden sm:block">
                      <span className="text-sm font-bold text-gray-900">{course.progress}%</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements / Badges */}
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Recent Achievements</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-4 bg-yellow-50 rounded-2xl border border-yellow-100 text-center">
                  <FaAward className="text-3xl text-[#FFDD9C] mx-auto mb-2" />
                  <h4 className="font-bold text-sm text-gray-900">Fast Learner</h4>
                  <p className="text-xs text-gray-500 mt-1">Completed 5 modules in one week</p>
                </div>
                <div className="p-4 bg-blue-50 rounded-2xl border border-blue-100 text-center">
                  <FaGraduationCap className="text-3xl text-[#2a6ee5] mx-auto mb-2" />
                  <h4 className="font-bold text-sm text-gray-900">First Certification</h4>
                  <p className="text-xs text-gray-500 mt-1">Passed Intro to HTML & CSS</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 text-center opacity-60">
                  <FaBookOpen className="text-3xl text-gray-400 mx-auto mb-2" />
                  <h4 className="font-bold text-sm text-gray-900">Bookworm</h4>
                  <p className="text-xs text-gray-500 mt-1">Read 100 study materials</p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </main>
  );
}
