"use client";

import { useState } from "react";
import { MessageSquare, UserX, Lightbulb, Star, Send } from "lucide-react";

export default function Guidance() {
    const [activeTab, setActiveTab] = useState("advice");

    const tabs = [
        { id: "advice", label: "Ask for Advice", icon: <MessageSquare size={18} /> },
        { id: "report", label: "Report a Student", icon: <UserX size={18} /> },
        { id: "recommend", label: "Send Recommendations", icon: <Lightbulb size={18} /> },
        { id: "evaluate", label: "Faculty Evaluations", icon: <Star size={18} /> }
    ];

    return (
        <div className="p-8 max-w-5xl mx-auto animate-in fade-in duration-500 flex flex-col h-[calc(100vh-4rem)]">
            <header className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Guidance Services</h1>
                <p className="text-gray-500">Reach out for support, submit reports, or evaluate faculty.</p>
            </header>

            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex-1 flex flex-col hidden sm:flex">
                {/* Tabs Desktop */}
                <div className="flex border-b border-gray-100">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex-1 py-4 flex items-center justify-center gap-2 font-semibold text-sm transition-colors border-b-2 ${activeTab === tab.id
                                    ? "border-blue-600 text-blue-600 bg-blue-50/50"
                                    : "border-transparent text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                                }`}
                        >
                            {tab.icon}
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Form Area */}
                <div className="flex-1 p-8 bg-gray-50/30 overflow-y-auto">
                    <div className="max-w-2xl mx-auto bg-white p-8 rounded-2xl shadow-sm border border-gray-100">
                        {activeTab === "advice" && (
                            <div className="space-y-6 animate-in slide-in-from-right-4">
                                <div>
                                    <h2 className="text-xl font-bold text-gray-900 mb-1">Seek Counsel</h2>
                                    <p className="text-sm text-gray-500">We are here to listen. Tell us what's on your mind.</p>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Subject</label>
                                        <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-shadow" placeholder="What is this regarding?" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Message</label>
                                        <textarea rows={5} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none transition-shadow" placeholder="Share your thoughts..."></textarea>
                                    </div>
                                    <button className="w-full bg-blue-600 text-white font-semibold py-2.5 rounded-lg shadow hover:bg-blue-700 transition flex items-center justify-center gap-2">
                                        <Send size={18} /> Submit Request
                                    </button>
                                </div>
                            </div>
                        )}

                        {activeTab === "report" && (
                            <div className="space-y-6 animate-in slide-in-from-right-4">
                                <div>
                                    <h2 className="text-xl font-bold text-gray-900 mb-1">Report an Incident</h2>
                                    <p className="text-sm text-gray-500">All reports are strictly confidential.</p>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Student's Name (Optional)</label>
                                        <input type="text" className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition-shadow" placeholder="Name of student" />
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Incident Details</label>
                                        <textarea rows={5} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 outline-none transition-shadow" placeholder="Describe the incident..."></textarea>
                                    </div>
                                    <button className="w-full bg-red-600 text-white font-semibold py-2.5 rounded-lg shadow hover:bg-red-700 transition flex items-center justify-center gap-2">
                                        <Send size={18} /> Submit Report
                                    </button>
                                </div>
                            </div>
                        )}

                        {activeTab === "recommend" && (
                            <div className="space-y-6 animate-in slide-in-from-right-4">
                                <div>
                                    <h2 className="text-xl font-bold text-gray-900 mb-1">Suggestions & Recommendations</h2>
                                    <p className="text-sm text-gray-500">Help us improve the school environment.</p>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Category</label>
                                        <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition-shadow bg-white">
                                            <option>Academic</option>
                                            <option>Facilities</option>
                                            <option>Student Life</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Your Recommendation</label>
                                        <textarea rows={5} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-emerald-500 outline-none transition-shadow" placeholder="I suggest that..."></textarea>
                                    </div>
                                    <button className="w-full bg-emerald-600 text-white font-semibold py-2.5 rounded-lg shadow hover:bg-emerald-700 transition flex items-center justify-center gap-2">
                                        <Send size={18} /> Send Suggestion
                                    </button>
                                </div>
                            </div>
                        )}

                        {activeTab === "evaluate" && (
                            <div className="space-y-6 animate-in slide-in-from-right-4">
                                <div>
                                    <h2 className="text-xl font-bold text-gray-900 mb-1">Faculty Evaluation</h2>
                                    <p className="text-sm text-gray-500">Provide anonymous feedback for your professors.</p>
                                </div>
                                <div className="space-y-4">
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Select Professor</label>
                                        <select className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none transition-shadow bg-white">
                                            <option>Dr. Alan Turing</option>
                                            <option>Prof. Ada Lovelace</option>
                                            <option>Dr. Grace Hopper</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-2">Overall Rating</label>
                                        <div className="flex gap-2">
                                            {[1, 2, 3, 4, 5].map((star) => (
                                                <button key={star} className="text-gray-300 hover:text-yellow-400 transition-colors">
                                                    <Star size={32} fill="currentColor" />
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-semibold text-gray-700 mb-1">Feedback</label>
                                        <textarea rows={4} className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-purple-500 outline-none transition-shadow" placeholder="Your honest evaluation..."></textarea>
                                    </div>
                                    <button className="w-full bg-purple-600 text-white font-semibold py-2.5 rounded-lg shadow hover:bg-purple-700 transition flex items-center justify-center gap-2">
                                        <Send size={18} /> Submit Evaluation
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
