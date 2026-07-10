import { Calendar, Bell, Clock, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="p-8 max-w-7xl mx-auto">
      <header className="mb-8 flex justify-between items-end">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Welcome Back, Student 👋</h1>
          <p className="text-gray-500 mt-2">Here is what's happening around campus today.</p>
        </div>
        <div className="text-sm font-medium text-blue-600 bg-blue-50 px-4 py-2 rounded-full shadow-sm">
          Fall Semester 2026
        </div>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Main Content Area: Announcements */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="border-b border-gray-100 p-6 flex justify-between items-center">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <Bell className="text-indigo-500" size={24} />
                Recent Announcements
              </h2>
              <button className="text-sm text-indigo-600 hover:text-indigo-800 font-medium flex items-center">
                View All <ChevronRight size={16} />
              </button>
            </div>

            <div className="divide-y divide-gray-50">
              {/* Announcement 1 */}
              <div className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-900">Midterm Exam Schedules Released</h3>
                  <span className="text-xs font-medium bg-red-100 text-red-700 px-2.5 py-1 rounded-full">Important</span>
                </div>
                <p className="text-gray-600 text-sm mb-3">Please check your student portal for the updated midterm exam schedules. Conflicts must be reported to the registrar by Friday.</p>
                <div className="flex items-center text-xs text-gray-400 gap-1">
                  <Clock size={14} /> 2 hours ago • By Registrar's Office
                </div>
              </div>

              {/* Announcement 2 */}
              <div className="p-6 hover:bg-gray-50 transition-colors">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-semibold text-gray-900">Mental Health Awareness Week</h3>
                  <span className="text-xs font-medium bg-green-100 text-green-700 px-2.5 py-1 rounded-full">Event</span>
                </div>
                <p className="text-gray-600 text-sm mb-3">Join us for a series of workshops focusing on mental wellness and stress management. Free snacks provided!</p>
                <div className="flex items-center text-xs text-gray-400 gap-1">
                  <Clock size={14} /> Yesterday • By Guidance Office
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Sidebar: Calendar & Events */}
        <div className="space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-semibold flex items-center gap-2 mb-6">
              <Calendar className="text-blue-500" size={24} />
              Upcoming Events
            </h2>

            <div className="space-y-4">
              <div className="flex gap-4 p-3 rounded-xl bg-blue-50 border border-blue-100">
                <div className="flex flex-col items-center justify-center bg-white rounded-lg min-w-[3.5rem] shadow-sm py-2">
                  <span className="text-xs font-bold text-blue-600 uppercase">Oct</span>
                  <span className="text-xl font-black text-gray-900">14</span>
                </div>
                <div className="flex flex-col justify-center">
                  <span className="font-bold text-gray-900 text-sm">Career Fair</span>
                  <span className="text-xs text-gray-500">Main Gymnasium</span>
                </div>
              </div>

              <div className="flex gap-4 p-3 rounded-xl hover:bg-gray-50 border border-transparent transition-colors">
                <div className="flex flex-col items-center justify-center bg-gray-50 rounded-lg min-w-[3.5rem] shadow-sm py-2 border border-gray-100">
                  <span className="text-xs font-bold text-gray-500 uppercase">Oct</span>
                  <span className="text-xl font-black text-gray-900">18</span>
                </div>
                <div className="flex flex-col justify-center">
                  <span className="font-bold text-gray-900 text-sm">Counseling Seminar</span>
                  <span className="text-xs text-gray-500">Auditorium B</span>
                </div>
              </div>
            </div>

            <button className="w-full mt-6 py-2.5 rounded-lg border border-gray-200 text-gray-600 font-medium text-sm hover:bg-gray-50 transition-colors">
              Open Full Calendar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
