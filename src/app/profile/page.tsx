import { User, Mail, Phone, MapPin, Award, GraduationCap, Shield } from "lucide-react";

export default function Profile() {
    return (
        <div className="p-8 max-w-5xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">

            {/* Profile Header Card */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="h-32 bg-gradient-to-r from-blue-600 to-indigo-600"></div>
                <div className="px-8 pb-8 flex flex-col md:flex-row relative">
                    <div className="-mt-16 mb-4 md:mb-0 mr-6">
                        <div className="w-32 h-32 bg-white rounded-full p-2 shadow-lg">
                            <div className="w-full h-full rounded-full bg-indigo-100 flex items-center justify-center text-4xl text-indigo-600 font-bold">
                                S
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 mt-2 md:mt-4">
                        <h1 className="text-3xl font-bold text-gray-900">Student Name</h1>
                        <p className="text-gray-500 font-medium mb-4 flex items-center gap-2">
                            <GraduationCap size={18} /> BS Computer Science - 3rd Year
                        </p>
                        <div className="flex gap-4">
                            <span className="bg-green-100 text-green-700 px-3 py-1 text-sm font-semibold rounded-full flex items-center gap-1.5">
                                <Shield size={14} /> Regular Student
                            </span>
                            <span className="bg-blue-100 text-blue-700 px-3 py-1 text-sm font-semibold rounded-full flex items-center gap-1.5">
                                <Award size={14} /> Dean's Lister
                            </span>
                        </div>
                    </div>
                    <div className="mt-6 md:mt-4">
                        <button className="bg-white border border-gray-200 text-gray-700 px-4 py-2 text-sm font-semibold rounded-lg shadow-sm hover:bg-gray-50 transition-colors">
                            Edit Profile
                        </button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Personal Details */}
                <div className="md:col-span-1 space-y-6">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                        <h2 className="text-lg font-bold text-gray-900 mb-6 border-b border-gray-100 pb-2">Contact Info</h2>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-sm">
                                <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 shrink-0">
                                    <Mail size={16} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-gray-500 text-xs font-semibold">Email</span>
                                    <span className="text-gray-900 font-medium">student@school.edu</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600 shrink-0">
                                    <Phone size={16} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-gray-500 text-xs font-semibold">Phone</span>
                                    <span className="text-gray-900 font-medium">+1 234 567 890</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-3 text-sm">
                                <div className="w-8 h-8 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 shrink-0">
                                    <MapPin size={16} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-gray-500 text-xs font-semibold">Address</span>
                                    <span className="text-gray-900 font-medium">123 Campus Drive</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Academic Summary */}
                <div className="md:col-span-2">
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                        <h2 className="text-lg font-bold text-gray-900 mb-6 border-b border-gray-100 pb-2">Academic Overview</h2>

                        <div className="grid grid-cols-2 gap-4">
                            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                                <span className="block text-gray-500 text-sm font-semibold mb-1">Student ID</span>
                                <span className="font-bold text-lg text-gray-900">2024-19283</span>
                            </div>
                            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                                <span className="block text-gray-500 text-sm font-semibold mb-1">Current GWA</span>
                                <span className="font-bold text-lg text-gray-900">1.45</span>
                            </div>
                            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                                <span className="block text-gray-500 text-sm font-semibold mb-1">Total Units</span>
                                <span className="font-bold text-lg text-gray-900">105</span>
                            </div>
                            <div className="p-4 rounded-xl bg-gray-50 border border-gray-100">
                                <span className="block text-gray-500 text-sm font-semibold mb-1">Adviser</span>
                                <span className="font-bold text-lg text-gray-900">Dr. Jane Smith</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}
