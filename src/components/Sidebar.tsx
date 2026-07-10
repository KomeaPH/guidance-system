import Link from "next/link";
import { User, Home, BookOpen, UserPlus, FileText, AlertTriangle } from "lucide-react";

export function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white shadow-xl border-r border-gray-100 flex flex-col transition-all duration-300">
      <div className="p-6 border-b border-gray-100 flex items-center justify-center">
        <h1 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
          Guidance System
        </h1>
      </div>
      
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        <div className="text-xs font-semibold text-gray-400 uppercase mb-2 mt-4 px-3">Main</div>
        <Link href="/profile" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors">
          <User size={20} />
          <span className="font-medium">Profile</span>
        </Link>
        <Link href="/" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors">
          <Home size={20} />
          <span className="font-medium">Home</span>
        </Link>
        <Link href="/organizational-chart" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg text-gray-600 hover:bg-blue-50 hover:text-blue-600 transition-colors">
          <BookOpen size={20} />
          <span className="font-medium">Org Chart</span>
        </Link>
        
        <div className="text-xs font-semibold text-gray-400 uppercase mb-2 mt-6 px-3">Services</div>
        <Link href="/guidance" className="flex items-center space-x-3 px-3 py-2.5 rounded-lg bg-blue-600 text-white shadow-md hover:bg-blue-700 transition-colors">
          <AlertTriangle size={20} />
          <span className="font-medium">Guidance</span>
        </Link>
      </nav>
      
      <div className="p-4 border-t border-gray-100">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 font-bold">
            S
          </div>
          <div>
            <p className="text-sm font-semibold text-gray-800">Student Name</p>
            <p className="text-xs text-gray-500">student@school.edu</p>
          </div>
        </div>
      </div>
    </div>
  );
}
