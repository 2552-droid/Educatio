import Link from "next/link";
import { notFound } from "next/navigation";
import { FaBookOpen, FaArrowLeftLong, FaPlay } from "react-icons/fa6";

// Mock database or lookup object for your disciplines
const courseData: Record<string, { title: string; description: string; category: string }> = {
  "software-engineering": {
    title: "Software Engineering & Architecture",
    description: "Master modern software architecture, DevOps, scalable system design, and advanced programming paradigms.",
    category: "Computer Science & Tech",
  },
  "nursing": {
    title: "Nursing Science & Patient Care",
    description: "Comprehensive guides on patient care management, clinical pharmacology, and surgical nursing.",
    category: "Medicine & Health",
  },
  // Add other disciplines here...
};

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function CourseDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const course = courseData[slug];

  // If the course doesn't exist, trigger a 404 page
  if (!course) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-gray-50 font-sans text-gray-900 py-16 px-6">
      <div className="max-w-4xl mx-auto space-y-8">
        
        {/* Back Button */}
        <Link href="/all-courses" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-[#2a6ee5]">
          <FaArrowLeftLong /> Back to All Disciplines
        </Link>

        {/* Course Header Card */}
        <div className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-4">
          <span className="bg-blue-50 text-[#2a6ee5] text-xs font-bold px-3 py-1 rounded-full">
            {course.category}
          </span>
          <h1 className="text-3xl md:text-4xl font-bold">{course.title}</h1>
          <p className="text-gray-600 leading-relaxed">{course.description}</p>
          
          <div className="pt-4 flex gap-4">
            <Link
              href={`/courses/${slug}/learn`}
              className="bg-[#2a6ee5] hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-xl text-sm flex items-center gap-2 shadow-sm"
            >
              <FaPlay className="text-xs" /> Start Learning Hub
            </Link>
          </div>
        </div>

      </div>
    </main>
  );
}