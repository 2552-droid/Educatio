import Link from "next/link";
import { FaUser, FaBookOpen, FaClockRotateLeft, FaGear, FaArrowRightFromBracket } from "react-icons/fa6";

export default function ProfileHistoryPage() {
  return (
    <main className="min-h-dvh bg-gray-50 font-sans text-gray-900 pb-20">
      <div className="h-64 bg-gradient-to-r from-[#2a6ee5] to-blue-800 relative w-full overflow-hidden" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Sidebar (Keep consistent across profile routes) */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-3xl p-4 shadow-sm border border-gray-100">
              <nav className="space-y-1">
                <Link href="/profile" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl font-medium">
                  <FaUser /> Personal Info
                </Link>
                <Link href="/Profile/courses" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl font-medium">
                  <FaBookOpen /> My Learning
                </Link>
                <Link href="/profile/history" className="flex items-center gap-3 px-4 py-3 bg-blue-50 text-[#2a6ee5] rounded-xl font-medium">
                  <FaClockRotateLeft /> History & Activity
                </Link>
                <Link href="/profile/settings" className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-gray-50 rounded-xl font-medium">
                  <FaGear /> Account Settings
                </Link>
              </nav>
            </div>
          </div>

          {/* Right Column: History Content */}
          <div className="lg:col-span-2 space-y-6 lg:mt-24">
            <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 space-y-4">
              <h2 className="text-2xl font-bold">Activity Log</h2>
              <p className="text-gray-500 text-sm">Review your recent logins, module completions, and quiz submissions.</p>
              
              <div className="space-y-3 pt-4">
                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 text-xs flex justify-between">
                  <span className="font-semibold text-gray-800">Completed Quiz #2 in Software Engineering</span>
                  <span className="text-gray-400">2 hours ago</span>
                </div>
                <div className="p-4 bg-gray-50 rounded-2xl border border-gray-100 text-xs flex justify-between">
                  <span className="font-semibold text-gray-800">Logged in via Google OAuth</span>
                  <span className="text-gray-400">Yesterday</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  );
}