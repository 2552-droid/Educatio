"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaBookOpen,
  FaCircleCheck,
  FaClock,
  FaTrophy,
  FaFire,
  FaPlay,
  FaCalendarDay,
  FaEllipsisVertical,
  FaDownload,
  FaArrowRight,
  FaMagnifyingGlass,
  FaGraduationCap,
  FaBookmark,
  FaRotateRight,
  FaAward,
  FaFilter,
  FaXmark,
  FaCheck,
  FaBullseye,
} from "react-icons/fa6";

// Types
interface InProgressCourse {
  id: string;
  title: string;
  category: string;
  image: string;
  progress: number;
  completedModules: number;
  totalModules: number;
  currentLesson: string;
  nextLessonTime: string;
  lastAccessed: string;
  categoryColor: string;
  href: string;
}

interface CompletedCourse {
  id: string;
  title: string;
  category: string;
  image: string;
  completedDate: string;
  score: string;
  certificateId: string;
}

interface SavedHub {
  id: string;
  title: string;
  category: string;
  image: string;
  totalModules: number;
  estimatedHours: string;
  rating: number;
}

export default function MyLearningPage() {
  const [activeTab, setActiveTab] = useState<"in-progress" | "completed" | "saved">("in-progress");
  const [searchQuery, setSearchQuery] = useState("");
  const [downloadToast, setDownloadToast] = useState(null);

  // Stats Overview
  const stats = [
    { label: "Active Hubs", value: "3", icon:  },
    { label: "Hours Learned", value: "48.5 hrs", icon:  },
    { label: "Completed Modules", value: "28", icon:  },
    { label: "Certificates", value: "2", icon:  },
  ];

  // In Progress Courses
  const inProgressCourses: InProgressCourse[] = [
    {
      id: "se-101",
      title: "Software Engineering & Architecture",
      category: "Computer Science",
      image: "/csc.jpeg",
      progress: 68,
      completedModules: 8,
      totalModules: 12,
      currentLesson: "Microservices & Distributed Systems",
      nextLessonTime: "25 min lesson",
      lastAccessed: "Today, 10:30 AM",
      categoryColor: "bg-blue-100 text-[#2a6ee5]",
      href: "/courses/software-engineering/learn",
    },
    {
      id: "ns-202",
      title: "Clinical Pharmacology & Patient Care",
      category: "Medicine & Health",
      image: "/med.jpeg",
      progress: 42,
      completedModules: 5,
      totalModules: 12,
      currentLesson: "Pharmacokinetics and Drug Interactions",
      nextLessonTime: "40 min lesson",
      lastAccessed: "Yesterday",
      categoryColor: "bg-amber-100 text-amber-800",
      href: "/courses/nursing/learn",
    },
    {
      id: "law-301",
      title: "International Law & Diplomacy",
      category: "Arts & Law",
      image: "/law.jpeg",
      progress: 18,
      completedModules: 2,
      totalModules: 10,
      currentLesson: "Geneva Conventions & Modern Humanitarian Law",
      nextLessonTime: "30 min lesson",
      lastAccessed: "3 days ago",
      categoryColor: "bg-purple-100 text-purple-800",
      href: "/courses/peace-and-conflict/learn",
    },
  ];

  // Completed Courses
  const completedCourses: CompletedCourse[] = [
    {
      id: "web-101",
      title: "Modern Front-End Web Development",
      category: "Computer Science",
      image: "/csc.jpeg",
      completedDate: "Sep 18, 2026",
      score: "96%",
      certificateId: "EDU-CERT-88912",
    },
    {
      id: "econ-201",
      title: "Macroeconomic Theory & Systems",
      category: "Business",
      image: "/med.jpeg",
      completedDate: "Aug 29, 2026",
      score: "91%",
      certificateId: "EDU-CERT-74102",
    },
  ];

  // Saved Hubs
  const savedHubs: SavedHub[] = [
    {
      id: "eng-401",
      title: "Structural Engineering & Mechanics",
      category: "Engineering",
      image: "/csc.jpeg",
      totalModules: 14,
      estimatedHours: "24 hrs",
      rating: 4.9,
    },
    {
      id: "arch-102",
      title: "Architectural Design Fundamentals",
      category: "Architecture",
      image: "/law.jpeg",
      totalModules: 10,
      estimatedHours: "18 hrs",
      rating: 4.8,
    },
  ];

  // Deadlines
  const upcomingDeadlines = [
    { title: "Software Architecture Quiz #3", date: "Tomorrow, 2:00 PM", urgency: "border-l-4 border-red-500", tag: "Quiz" },
    { title: "Pharmacology Case Study Review", date: "Sep 28, 2026", urgency: "border-l-4 border-amber-500", tag: "Assignment" },
    { title: "Humanitarian Law Essay Draft", date: "Oct 02, 2026", urgency: "border-l-4 border-blue-500", tag: "Project" },
  ];

  // Filter Courses based on search input
  const filteredInProgress = useMemo(() => {
    return inProgressCourses.filter(
      (c) =>
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const filteredCompleted = useMemo(() => {
    return completedCourses.filter(
      (c) =>
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const filteredSaved = useMemo(() => {
    return savedHubs.filter(
      (c) =>
        c.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        c.category.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const triggerCertificateDownload = (title: string) => {
    setDownloadToast(`Downloading certificate for "${title}"...`);
    setTimeout(() => {
      setDownloadToast(null);
    }, 4000);
  };

  return (
    
      {/* Toast Notification */}
      {downloadToast && (
        <div className="fixed top-4 right-4 bg-blue-500 text-white p-4 rounded-md shadow-lg">
          {downloadToast}
        </div>
      )}

