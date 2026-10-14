import { auth, signIn } from "@/auth";
import Link from "next/link";
import {
  FaArrowLeftLong,
  FaEnvelope,
  FaLock,
  FaUser
} from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

export default async function Auth({
  searchParams,
}: {
  searchParams?: { mode?: string };
}) {
  // Determine view state purely from the URL on the server
  const isSignUp = searchParams?.mode === "signup";
  const session = await auth()
  console.log(session);

  return (
    <main className="min-h-dvh bg-gray-500j flex items-center justify-center p-4 md:p-8 font-sans">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row min-h-[650px]">

        {/* Visual / Brand Side */}
        <div className="md:w-1/2 bg-[url('/bg.jpg')] bg-no-repeat bg-center bg-cover relative hidden md:flex flex-col justify-between p-12 text-white">
          <div className="absolute inset-0 bg-[url('/bg2.jpeg')] bg-no-repeat bg-center bg-cover z-0"></div>

          {/* Top Logo */}
          <div className="relative z-10">
            <Link href="/" className="text-3xl font-bold tracking-wider"> Educatio <span className="text-[#2a6ee5]">.</span>
            </Link>
          </div>

          {/* Mid Content */}
          <div className="relative z-10 space-y-4">
            <span className="bg-[#2a6ee5] text-gray-900 font-bold text-xs uppercase tracking-widest px-3 py-1 rounded-full">
              Join Our Community
            </span>
            <h2 className="text-4xl font-bold leading-tight">Engaging & Inspiring <br />
              <span className="text-[#FFDD9C]">Learn and Share</span>
            </h2>
            <p className="text-[#FFDD9C] font-bold text-sm leading-relaxed">

              Every Discipline's Knowledge,
              Unlock hundreds of comprehensive study guides, connect with passionate learners, and master the core foundations of your field.
            </p>
          </div>

          {/* Footer Quote */}
          <div className="relative z-10 pt-6 border-t border-white/20 text-xl font-bold text-[#FFDD9C]">
            "elevate your learning journey..."
          </div>
        </div>

        {/* Auth Form Side */}
        <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-between relative bg-white">

          {/* Top Bar Navigation */}
          <div className="flex justify-between items-center mb-8">
            <Link href="/" className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-[#184dd4] transition-colors">
              <FaArrowLeftLong /> Home
            </Link>
            <div className="text-sm">
              <span className="text-gray-500">
                {isSignUp ? "Already a member?" : "Don't have an account?"}
              </span>{" "}
              {/* Converted to a server-side route navigation link */}
              <Link
                href={isSignUp ? "?mode=signin" : "?mode=signup"}
                className="font-bold text-[#2a6ee5] hover:underline cursor-pointer ml-1"
              >
                {isSignUp ? "Sign In" : "Sign  Up"}
              </Link>
            </div>
          </div>

          {/* Form Header */}
          <div className="mb-6">
            <h1 className="text-3xl font-bold text-gray-900">
              {isSignUp ? "Create your account" : "Welcome back"}
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              {isSignUp
                ? "Join Educatio to start bookmarking and sharing resources."
                : "Enter your details to access your saved materials and account."}
            </p>
          </div>

          {/* Social Auth Button - Changed to use an anchor/form standard for server auth if needed later */}
          <div className="space-y-4">
            <form
              action={async () => {
                "use server"
                await signIn("google")
              }}
            >
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-3 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold py-3.5 px-4 rounded-xl transition-all shadow-sm cursor-pointer"
              >
                <FcGoogle className="text-2xl" />
                <span>{isSignUp ? "Sign up with Google" : "Sign in with Google"}</span>
              </button>
            </form>

            {/* Divider */}
            <div className="relative flex items-center justify-center my-6">
              <div className="border-t border-gray-200 w-full"></div>
              <span className="bg-white px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider absolute">
                Or continue with email
              </span>
            </div>
          </div>

          {/* Form UI */}
          <form className="space-y-4">
            {/* Full Name Field (Sign Up Only) */}
            {isSignUp && (
              <div className="space-y-1">
                <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Full Name</label>
                <div className="relative">
                  <input
                    type="text"
                    name="fullName"
                    placeholder="peter"
                    className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#E73F1E]/50 transition-all text-gray-900"
                    required={isSignUp}
                  />
                  <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
                </div>
              </div>
            )}

            {/* Email Field */}
            <div className="space-y-1">
              <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Email Address</label>
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  placeholder="peter@example.com"
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#184dd4]/50 transition-all text-gray-900"
                  required
                />
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              </div>
            </div>

            {/* Password Field */}
            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Password</label>
                {!isSignUp && (
                  <Link href="/forgot-password" className="text-xs font-semibold text-[#2a6ee5] hover:underline">
                    Forgot password?
                  </Link>
                )}
              </div>
              <div className="relative">
                <input
                  type="password"
                  name="password"
                  placeholder="••••••••"
                  className="w-full pl-11 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:bg-white focus:ring-2 focus:ring-[#2a6ee5]/50 transition-all text-gray-900"
                  required
                />
                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-sm" />
              </div>
            </div>

            {/* Terms Checkbox (Sign Up Only) */}
            {isSignUp && (
              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
                  className="w-4 h-4 text-[#E73F1E] border-gray-300 rounded focus:ring-[#184dd4] cursor-pointer"
                  required
                />
                <label htmlFor="terms" className="text-xs text-gray-500">
                  I agree to the{" "}
                  <Link href="/terms" className="text-gray-900 font-semibold underline">
                    Terms of Service
                  </Link>{" "}
                  and{" "}
                  <Link href="/privacy" className="text-gray-900 font-semibold underline">
                    Privacy Policy
                  </Link>
                </label>
              </div>
            )}

            {/* Action Button - Changed to submit type for server actions */}
            <button
              type="submit"
              className="w-full bg-[#2a6ee5] hover:bg-[#184dd4] text-white font-bold py-3.5 rounded-xl transition-all shadow-md shadow-[#E73F1E]/20 mt-2 cursor-pointer"
            >
              {isSignUp ? "Create Account" : "Sign In"}
            </button>
          </form>

        </div>
      </div>
    </main>
  );
}