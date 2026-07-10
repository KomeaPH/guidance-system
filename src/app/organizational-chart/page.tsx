import { Users, FileText, Briefcase, Mail } from "lucide-react";

export default function OrganizationalChart() {
    const staff = [
        { name: "Dr. Robert Chen", role: "Principal", icon: <Briefcase /> },
        { name: "Sarah Jenkins", role: "Head of Counseling", icon: <Users /> },
        { name: "Michael Chang", role: "Academic Coordinator", icon: <FileText /> },
        { name: "Elena Rodriguez", role: "Student Affairs", icon: <Mail /> },
    ];

    return (
        <div className="p-8 max-w-6xl mx-auto animate-in fade-in duration-500">
            <header className="mb-10 text-center">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">Organizational Chart</h1>
                <p className="text-gray-500">Meet the administration and guidance staff</p>
            </header>

            <div className="flex flex-col items-center">
                {/* Principal Node */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center w-64 text-center z-10 relative">
                    <div className="w-16 h-16 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mb-4">
                        <Briefcase size={28} />
                    </div>
                    <h3 className="font-bold text-gray-900 text-lg">Dr. Robert Chen</h3>
                    <p className="text-blue-600 font-medium text-sm">Principal</p>
                </div>

                {/* Vertical Line */}
                <div className="w-px h-12 bg-gray-300"></div>

                {/* Horizontal Line Connector */}
                <div className="w-full max-w-3xl h-px bg-gray-300 relative">
                    <div className="absolute left-0 top-0 w-px h-12 bg-gray-300"></div>
                    <div className="absolute left-1/2 top-0 w-px h-12 bg-gray-300 -translate-x-1/2"></div>
                    <div className="absolute right-0 top-0 w-px h-12 bg-gray-300"></div>
                </div>

                {/* Subordinates Row */}
                <div className="flex justify-between w-full max-w-4xl mt-12 gap-6">
                    {/* Card 1 */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center flex-1 text-center">
                        <div className="w-14 h-14 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center mb-4">
                            <Users size={24} />
                        </div>
                        <h3 className="font-bold text-gray-900">Sarah Jenkins</h3>
                        <p className="text-indigo-600 font-medium text-sm">Head of Counseling</p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center flex-1 text-center">
                        <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mb-4">
                            <FileText size={24} />
                        </div>
                        <h3 className="font-bold text-gray-900">Michael Chang</h3>
                        <p className="text-emerald-600 font-medium text-sm">Academic Coordinator</p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center flex-1 text-center">
                        <div className="w-14 h-14 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4">
                            <Mail size={24} />
                        </div>
                        <h3 className="font-bold text-gray-900">Elena Rodriguez</h3>
                        <p className="text-purple-600 font-medium text-sm">Student Affairs</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
