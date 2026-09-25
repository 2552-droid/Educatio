import { auth, signIn } from "@/auth";
import Link from "next/link";
import { 
  FaGoogle, 
  FaEnvelope, 
  FaLock, 
  FaUser, 
  FaArrowRight 
} from "react-icons/fa";


export default async function Auth({
  searchParams,
}: {
  searchParams?: { mode?: string };
}) {
  // Determine view state purely from the URL on the server
  const isSignUp = searchParams?.mode === "signup";
  const session = await auth()
  console.log(session); 

// export default function AccountPage()
//   // Server-side action placeholder for form submission
//   async function handleAuthAction(formData: FormData) {
//     "use server";
//     // Handle server-side authentication logic here (e.g., NextAuth, Supabase, Firebase)
//     const email = formData.get("email");
//     console.log("Server received email:", email);
//   }

  return (
    <main className="min-h-dvh font-sans text-gray-900 bg-gray-50 flex flex-col justify-between">
      
      {/* HEADER SECTION */}
      <section className="bg-[#2a6ee5] py-20 px-6 text-white text-center mt-16 lg:mt-0">
        <div className="max-w-4xl mx-auto space-y-4">
          <div className="bg-[#FFDD9C] text-black px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase inline-block mb-2">
            Member Portal
          </div>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Welcome Back to Educatio
          </h1>
          <p className="text-lg text-blue-100 max-w-xl mx-auto leading-relaxed">
            Access your specialized coursework hubs for Law, Medicine, and Computer Science.
          </p>
        </div>
      </section>

      {/* MAIN CONTENT CONTAINER */}
      <section className="py-16 px-6 max-w-4xl mx-auto w-full flex-grow flex items-center justify-center">
        
        {/* AUTHENTICATION CARD */}
        <div className="w-full max-w-md bg-white rounded-3xl shadow-sm border border-gray-100 p-8 md:p-10 space-y-6">
          
          <div className="text-center space-y-1">
            <h2 className="text-2xl font-bold text-gray-900">Sign In to Your Account</h2>
            <p className="text-sm text-gray-500">Enter your credentials to access your dashboard.</p>
          </div>

          {/* GOOGLE AUTH BUTTON */}
          <form
             action={async () => {
                "use server"
                await signIn("google")
              }}
            >
            <button 
              type="submit"
              name="provider"
              value="google"
              className="w-full flex items-center justify-center gap-3 py-3.5 px-4 border border-gray-200 rounded-2xl font-bold text-gray-700 hover:bg-gray-50 transition-all shadow-sm"
            >
              <FaGoogle className="text-red-500 text-lg" />
              <span>Continue with Google</span>
            </button>
          </form>

          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-200"></div>
            <span className="px-4 text-xs font-bold text-gray-400 uppercase tracking-widest">or email</span>
            <div className="flex-grow border-t border-gray-200"></div>
          </div>

          {/* EMAIL / PASSWORD SERVER FORM */}
          <form action={handleAuthAction} className="space-y-4">
            
            <div className="space-y-1.5">
              <label htmlFor="email" className="text-xs font-bold text-gray-700 uppercase tracking-wide">Email Address</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <FaEnvelope />
                </div>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  required
                  placeholder="jane.doe@example.com"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2a6ee5]/50 focus:border-[#2a6ee5] bg-gray-50 text-sm"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label htmlFor="password" className="text-xs font-bold text-gray-700 uppercase tracking-wide">Password</label>
                <a href="#" className="text-xs text-[#2a6ee5] font-semibold hover:underline">Forgot password?</a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400">
                  <FaLock />
                </div>
                <input 
                  type="password" 
                  id="password" 
                  name="password"
                  required
                  placeholder="••••••••"
                  className="w-full pl-11 pr-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2a6ee5]/50 focus:border-[#2a6ee5] bg-gray-50 text-sm"
                />
              </div>
            </div>

            <button 
              type="submit" 
              className="w-full bg-[#2a6ee5] text-white font-bold py-3.5 rounded-xl hover:bg-blue-600 transition-colors shadow-sm text-base mt-2 flex items-center justify-center gap-2"
            >
              Sign In <FaArrowRight className="text-sm" />
            </button>

          </form>

          <p className="text-center text-xs text-gray-500 pt-2">
            By continuing, you agree to Educatio's <Link href="/terms" className="underline hover:text-gray-800">Terms of Service</Link> and <Link href="/privacy" className="underline hover:text-gray-800">Privacy Policy</Link>.
          </p>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="bg-gray-950 text-gray-500 py-8 text-center border-t border-gray-800">
        <p className="text-sm">© {new Date().getFullYear()} Educatio. All rights reserved.</p>
      </footer>

    </main>
  );
}