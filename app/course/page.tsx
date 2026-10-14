// "use client";

import React, { useState, useMemo } from "react";
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
  FaCamera,
  FaPlay,
  FaCircleCheck,
  FaMagnifyingGlass,
  FaDownload,
  FaBookmark,
  FaClock,
  FaFilter,
  FaCheck
} from "react-icons/fa6";

interface Course {
  id: string;
  title: string;
  category: string;
  progress: number;
  completedModules: number;
  totalModules: number;
  lastAccessed: string;
  status: "in-progress" | "completed" | "saved";
  certificateId?: string;
  grade?: string;
}

export default function MyLearningRoute() {
  const [activeTab, setActiveTab] = useState<"all" | "in-progress" | "completed" | "saved">("all");
  const [searchQuery, setSearchQuery] = useState("");

  // Mock User Data matching Profile
  const user = {
    name: "Alex Johnson",
    email: "alex@example.com",
    role: "Computer Science Student",
    avatar: "/default-avatar.png",
  };

  // Enrolled Courses Dataset
  const courses: Course[] = [
    {
      id: "se-101",
      title: "Software Engineering Fundamentals",
      category: "Computer Science",
      progress: 75,
      completedModules: 9,
      totalModules: 12,
      lastAccessed: "2 hours ago",
      status: "in-progress",
    },
    {
      id: "econ-101",
      title: "Introduction to Microeconomics",
      category: "Business & Economics",
      progress: 30,
      completedModules: 3,
      totalModules: 10,
      lastAccessed: "1 day ago",
      status: "in-progress",
    },
    {
      id: "sys-201",
      title: "Systems Architecture & Design",
      category: "Computer Science",
      progress: 100,
      completedModules: 10,
      totalModules: 10,
      lastAccessed: "1 week ago",
      status: "completed",
      certificateId: "EDU-CERT-99201",
      grade: "96%",
    },
    {
      id: "web-101",
      title: "Front-End Web Development with React",
      category: "Computer Science",
      progress: 100,
      completedModules: 8,
      totalModules: 8,
      lastAccessed: "2 weeks ago",
      status: "completed",
      certificateId: "EDU-CERT-88102",
      grade: "98%",
    },
    {
      id: "med-301",
      title: "Clinical Pharmacology Essentials",
      category: "Medicine & Health",
      progress: 0,
      completedModules: 0,
      totalModules: 14,
      lastAccessed: "Not started",
      status: "saved",
    },
  ];

  // Filtered courses based on active tab and search query
  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesTab =
        activeTab === "all" ? true : course.status === activeTab;
      const matchesSearch =
        course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        course.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesTab && matchesSearch;
    });
  }, [activeTab, searchQuery]);

  return (
    <main className="min-h-dvh bg-gray-50 font-sans text-gray-900 pb-20">
      
      {/* Profile Header Banner */}
      <div className="h-64 bg-gradient-to-r from-[#2a6ee5] to-blue-800 relative w-full overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="absolute top-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-10 left-20 w-48 h-48 bg-[#FFDD9C]/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Profile Card & Navigation */}
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
                  <p className="text-2xl font-bold text-gray-900">{courses.length}</p>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Courses</p>
                </div>
                <div className="text-center">
                  <p className="text-2xl font-bold text-gray-900">
                    {courses.filter((c) => c.status === "completed").length}
                  </p>
                  <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Certificates</p>
                </div>
              </div>
            </div>

            {/* Profile Navigation */}
            <div className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100">
              <nav className="space-y-1">
                <Link
                  href="/profile"
                  className="flex items-center justify-between px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-xl font-medium transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <FaUser />
                    <span>Personal Info</span>
                  </div>
                </Link>

                <Link
                  href="/profile/courses"
                  className="flex items-center justify-between px-4 py-3 bg-blue-50 text-[#2a6ee5] rounded-xl font-medium"
                >
                  <div className="flex items-center gap-3">
                    <FaBookOpen />
                    <span>My Learning</span>
                  </div>
                </Link>

                <Link
                  href="/profile/history"
                  className="flex items-center justify-between px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-xl font-medium transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <FaClockRotateLeft />
                    <span>History & Activity</span>
                  </div>
                </Link>

                <Link
                  href="/profile/settings"
                  className="flex items-center justify-between px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-xl font-medium transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <FaGear />
                    <span>Account Settings</span>
                  </div>
                </Link>

                <div className="border-t border-gray-100 my-2"></div>

                <button
                  type="button"
                  className="w-full flex items-center justify-between px-4 py-3 text-[#E73F1E] hover:bg-red-50 rounded-xl font-medium transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <FaArrowRightFromBracket />
                    <span>Sign Out</span>
                  </div>
                </button>
              </nav>
            </div>
          </div>

          {/* Right Column: My Learning Dashboard */}
          <div className="lg:col-span-2 space-y-6 lg:mt-24">
            
            {/* Header & Search / Filters */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm border border-gray-100 space-y-6">
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">My Learning Hub</h2>
                  <p className="text-gray-500 text-sm mt-1">
                    Track your registered courses, progress, and certifications.
                  </p>
                </div>
                <Link
                  href="/courses"
                  className="bg-[#2a6ee5] hover:bg-blue-600 text-white text-xs font-bold px-4 py-2.5 rounded-xl transition-colors shadow-sm flex items-center gap-2"
                >
                  <FaBookOpen /> Browse Catalog
                </Link>
              </div>

              {/* Search & Tabs */}
              <div className="flex flex-col md:flex-row gap-4 justify-between items-center pt-2 border-t border-gray-100">
                {/* Tabs */}
                <div className="flex items-center gap-1 bg-gray-100 p-1 rounded-2xl w-full md:w-auto overflow-x-auto">
                  <button
                    onClick={() => setActiveTab("all")}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                      activeTab === "all"
                        ? "bg-white text-gray-900 shadow-sm"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    All ({courses.length})
                  </button>
                  <button
                    onClick={() => setActiveTab("in-progress")}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                      activeTab === "in-progress"
                        ? "bg-white text-gray-900 shadow-sm"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    In Progress ({courses.filter((c) => c.status === "in-progress").length})
                  </button>
                  <button
                    onClick={() => setActiveTab("completed")}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                      activeTab === "completed"
                        ? "bg-white text-gray-900 shadow-sm"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    Completed ({courses.filter((c) => c.status === "completed").length})
                  </button>
                  <button
                    onClick={() => setActiveTab("saved")}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all whitespace-nowrap ${
                      activeTab === "saved"
                        ? "bg-white text-gray-900 shadow-sm"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    Saved ({courses.filter((c) => c.status === "saved").length})
                  </button>
                </div>

                {/* Search Field */}
                <div className="relative w-full md:w-56">
                  <FaMagnifyingGlass className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400 text-xs" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search courses..."
                    className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#2a6ee5]/40 text-gray-900 font-medium"
                  />
                </div>
              </div>
            </div>

            {/* Course List Section */}
            <div className="space-y-4">
              {filteredCourses.length === 0 ? (
                <div className="bg-white rounded-3xl p-12 text-center border border-gray-100 text-gray-400 space-y-3">
                  <FaBookOpen className="text-4xl mx-auto text-gray-300" />
                  <p className="text-sm font-medium">No courses found matching your search or filter.</p>
                </div>
              ) : (
                filteredCourses.map((course) => (
                  <div
                    key={course.id}
                    className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100 hover:border-[#2a6ee5]/30 hover:shadow-md transition-all space-y-4 group"
                  >
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider bg-blue-50 text-[#2a6ee5] px-2.5 py-1 rounded-md">
                          {course.category}
                        </span>
                        <h3 className="font-bold text-gray-900 text-lg mt-2 group-hover:text-[#2a6ee5] transition-colors">
                          {course.title}
                        </h3>
                      </div>

                      {/* Status Tag */}
                      {course.status === "completed" && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full border border-emerald-200">
                          <FaCircleCheck /> Completed ({course.grade})
                        </span>
                      )}
                      {course.status === "in-progress" && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-blue-50 text-[#2a6ee5] px-3 py-1 rounded-full">
                          <FaClock /> In Progress
                        </span>
                      )}
                      {course.status === "saved" && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-bold bg-gray-100 text-gray-600 px-3 py-1 rounded-full">
                          <FaBookmark /> Saved
                        </span>
                      )}
                    </div>

                    {/* Progress Bar & Details */}
                    {course.status !== "saved" && (
                      <div className="space-y-1.5">
                        <div className="flex justify-between text-xs font-semibold text-gray-500">
                          <span>
                            {course.completedModules} of {course.totalModules} Modules
                          </span>
                          <span className={course.progress === 100 ? "text-emerald-600" : "text-[#2a6ee5]"}>
                            {course.progress}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
                          <div
                            className={`h-2 rounded-full transition-all duration-500 ${
                              course.progress === 100 ? "bg-emerald-500" : "bg-[#2a6ee5]"
                            }`}
                            style={{ width: `${course.progress}%` }}
                          />
                        </div>
                      </div>
                    )}

                    {/* Card Actions Footer */}
                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-3 border-t border-gray-100 text-xs text-gray-500 gap-3">
                      <span>Last accessed: {course.lastAccessed}</span>

                      <div className="flex items-center gap-3 w-full sm:w-auto">
                        {course.status === "completed" && (
                          <button
                            type="button"
                            className="w-full sm:w-auto bg-emerald-50 hover:bg-emerald-100 text-emerald-700 font-bold px-4 py-2 rounded-xl transition-colors flex items-center justify-center gap-2 border border-emerald-200"
                          >
                            <FaDownload /> Certificate
                          </button>
                        )}

                        <Link
                          href={`/courses/${course.id}/learn`}
                          className="w-full sm:w-auto bg-gray-900 hover:bg-[#2a6ee5] text-white font-bold px-4 py-2 rounded-xl transition-colors flex items-center justify-center gap-2"
                        >
                          <FaPlay className="text-[10px]" />
                          {course.status === "completed"
                            ? "Review Course"
                            : course.status === "saved"
                            ? "Start Course"
                            : "Continue"}
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

          </div>

        </div>
      </div>
    </main>
  );
}