"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  FaUser,
  FaEnvelope,
  FaBookOpen,
  FaClockRotateLeft,
  FaGear,
  FaArrowRightFromBracket,
  FaCamera,
  FaLock,
  FaBell,
  FaShieldHalved,
  FaPalette,
  FaCheck,
  FaXmark,
} from "react-icons/fa6";

export default function ProfileSettingsPage() {
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // Mock user data
  const user = {
    name: "Alex Johnson",
    email: "alex@example.com",
    role: "Computer Science Student",
  };

  const handleSaveSettings = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccessMessage("Settings updated successfully!");
    setTimeout(() => {
      setSuccessMessage(null);
    }, 4000);
  };

  return (
    <main className="min-h-dvh bg-gray-50 font-sans text-gray-900 pb-20">
      
      {/* Toast Notification */}
      {successMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-gray-900 text-white px-5 py-3 rounded-2xl shadow-xl flex items-center gap-3 text-sm animate-bounce">
          <FaCheck className="text-emerald-400" />
          <span>{successMessage}</span>
          <button onClick={() => setSuccessMessage(null)} className="ml-2 text-gray-400 hover:text-white">
            <FaXmark />
          </button>
        </div>
      )}

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
                  className="flex items-center justify-between px-4 py-3 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-xl font-medium transition-colors"
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
                  href="/Profile/settings"
                  className="flex items-center justify-between px-4 py-3 bg-blue-50 text-[#2a6ee5] rounded-xl font-medium"
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

          {/* Right Column: Settings Form Area */}
          <div className="lg:col-span-2 space-y-6 lg:mt-24">
            
            <form onSubmit={handleSaveSettings} className="space-y-6">
              
              {/* Account General Settings */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 space-y-6">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#2a6ee5] flex items-center justify-center font-bold">
                    <FaGear />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Account Preferences</h2>
                    <p className="text-xs text-gray-500">Update your public profile info and email address.</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Full Name</label>
                    <input
                      type="text"
                      defaultValue={user.name}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2a6ee5]/50 text-gray-900 font-medium"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Email Address</label>
                    <input
                      type="email"
                      defaultValue={user.email}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2a6ee5]/50 text-gray-900 font-medium"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Academic Specialization / Role</label>
                  <input
                    type="text"
                    defaultValue={user.role}
                    className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2a6ee5]/50 text-gray-900 font-medium"
                  />
                </div>
              </div>

              {/* Notification Preferences */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 space-y-6">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                    <FaBell />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Notification Preferences</h2>
                    <p className="text-xs text-gray-500">Choose what updates you want to receive via email.</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <label className="flex items-center justify-between p-3 bg-gray-50 rounded-2xl cursor-pointer">
                    <div>
                      <p className="text-sm font-bold text-gray-900">Course & Module Updates</p>
                      <p className="text-xs text-gray-500">Receive alerts when new study hubs or materials are added.</p>
                    </div>
                    <input type="checkbox" defaultChecked className="w-5 h-5 text-[#2a6ee5] rounded border-gray-300 focus:ring-[#2a6ee5]" />
                  </label>

                  <label className="flex items-center justify-between p-3 bg-gray-50 rounded-2xl cursor-pointer">
                    <div>
                      <p className="text-sm font-bold text-gray-900">Weekly Progress Digest</p>
                      <p className="text-xs text-gray-500">Get a summary of your study hours and streak milestones.</p>
                    </div>
                    <input type="checkbox" defaultChecked className="w-5 h-5 text-[#2a6ee5] rounded border-gray-300 focus:ring-[#2a6ee5]" />
                  </label>

                  <label className="flex items-center justify-between p-3 bg-gray-50 rounded-2xl cursor-pointer">
                    <div>
                      <p className="text-sm font-bold text-gray-900">Community Discussion Replies</p>
                      <p className="text-xs text-gray-500">Get notified when someone replies to your community posts.</p>
                    </div>
                    <input type="checkbox" className="w-5 h-5 text-[#2a6ee5] rounded border-gray-300 focus:ring-[#2a6ee5]" />
                  </label>
                </div>
              </div>

              {/* Security & Password */}
              <div className="bg-white rounded-3xl p-8 shadow-sm border border-gray-100 space-y-6">
                <div className="flex items-center gap-3 border-b border-gray-100 pb-4">
                  <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold">
                    <FaShieldHalved />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">Security Settings</h2>
                    <p className="text-xs text-gray-500">Manage your password and authentication security.</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Current Password</label>
                    <input
                      type="password"
                      placeholder="••••••••"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2a6ee5]/50 text-gray-900"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">New Password</label>
                      <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2a6ee5]/50 text-gray-900"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Confirm New Password</label>
                      <input
                        type="password"
                        placeholder="••••••••"
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#2a6ee5]/50 text-gray-900"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end pt-2">
                <button
                  type="submit"
                  className="bg-[#2a6ee5] hover:bg-blue-600 text-white font-bold py-3.5 px-8 rounded-2xl transition-all shadow-md shadow-[#2a6ee5]/20 text-sm"
                >
                  Save Changes
                </button>
              </div>

            </form>

          </div>

        </div>
      </div>
    </main>
  );
}