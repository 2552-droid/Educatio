import Link from "next/link";
import { 
  FaEnvelope, 
  FaPhone, 
  FaLocationDot, 
  FaPaperPlane,
  FaMessage
} from "react-icons/fa6";

export default function Contact() {
  return (
    <main className="min-h-dvh font-sans text-gray-900 bg-gray-50">
      
      {/* HEADER SECTION */}
      <section className="bg-[#2a6ee5] py-24 px-6 text-white text-center mt-16 lg:mt-0">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="bg-[#FFDD9C] text-black px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase inline-block mb-2">
            Get In Touch
          </div>
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            We're Here to <span className="text-[#FFDD9C]">Help</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto leading-relaxed">
            Have a question about our resources, need technical support, or want to partner with us? Our team is ready to assist you.
          </p>
        </div>
      </section>

      {/* CONTACT CONTENT SECTION */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Contact Info */}
          <div className="space-y-10">
            <div>
              <h2 className="text-3xl font-bold mb-4">Let's start a conversation</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                Whether you're a student trying to access specific course materials or an educator looking to contribute, feel free to reach out. We typically respond within 24 hours.
              </p>
            </div>

            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <div className="bg-blue-50 w-14 h-14 shrink-0 rounded-full flex items-center justify-center text-[#2a6ee5] text-2xl">
                  <FaEnvelope />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Email Us</h3>
                  <p className="text-gray-500 mb-1">For general inquiries and support</p>
                  <a href="mailto:support@educatio.com" className="text-[#2a6ee5] font-semibold hover:underline">
                    support@educatio.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <div className="bg-orange-50 w-14 h-14 shrink-0 rounded-full flex items-center justify-center text-[#E73F1E] text-2xl">
                  <FaPhone />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Call Us</h3>
                  <p className="text-gray-500 mb-1">Mon-Fri from 8am to 5pm</p>
                  <a href="tel:+15551234567" className="text-[#2a6ee5] font-semibold hover:underline">
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <div className="bg-[#FFDD9C]/30 w-14 h-14 shrink-0 rounded-full flex items-center justify-center text-yellow-700 text-2xl">
                  <FaLocationDot />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">Visit Us</h3>
                  <p className="text-gray-500 mb-1">Our corporate headquarters</p>
                  <span className="text-gray-700 font-medium">
                    123 Education Lane,<br />
                    Knowledge City, AC 12345
                  </span>
                </div>
              </div>
            </div>
            
            {/* FAQ Prompt */}
            <div className="bg-gray-100 p-6 rounded-2xl border border-gray-200">
              <div className="flex items-center gap-3 mb-2">
                <FaMessage className="text-[#2a6ee5] text-xl" />
                <h4 className="font-bold text-lg">Looking for quick answers?</h4>
              </div>
              <p className="text-gray-600 mb-4">
                Check out our frequently asked questions for immediate help with common issues.
              </p>
              <Link href="/faqs" className="text-[#2a6ee5] font-bold hover:underline">
                Visit our FAQ page →
              </Link>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold mb-6">Send us a message</h3>
            <form className="space-y-6">
              
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-bold text-gray-700">First Name</label>
                  <input 
                    type="text" 
                    id="firstName" 
                    placeholder="Jane"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2a6ee5]/50 focus:border-[#2a6ee5] transition-all bg-gray-50"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-bold text-gray-700">Last Name</label>
                  <input 
                    type="text" 
                    id="lastName" 
                    placeholder="Doe"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2a6ee5]/50 focus:border-[#2a6ee5] transition-all bg-gray-50"
                  />
                </div>
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-gray-700">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  placeholder="jane.doe@example.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2a6ee5]/50 focus:border-[#2a6ee5] transition-all bg-gray-50"
                />
              </div>

              {/* Subject */}
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-bold text-gray-700">Subject</label>
                <select 
                  id="subject"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2a6ee5]/50 focus:border-[#2a6ee5] transition-all bg-gray-50 text-gray-700"
                >
                  <option value="">Select a topic...</option>
                  <option value="support">Technical Support</option>
                  <option value="billing">Billing & Subscriptions</option>
                  <option value="content">Course Content Request</option>
                  <option value="partnership">Partnership Inquiry</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-gray-700">Message</label>
                <textarea 
                  id="message" 
                  rows={5}
                  placeholder="How can we help you today?"
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#2a6ee5]/50 focus:border-[#2a6ee5] transition-all bg-gray-50 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <button 
                type="button" 
                className="w-full bg-[#2a6ee5] text-white font-bold text-lg py-4 rounded-xl hover:bg-blue-600 transition-colors flex items-center justify-center gap-2"
              >
                Send Message <FaPaperPlane />
              </button>
            </form>
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