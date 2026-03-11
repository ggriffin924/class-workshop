import React from 'react';
import Sidebar from './components/Sidebar';
import StatCard from './components/StatCard';
import CourseCard from './components/CourseCard';
import { studentData } from './data';
import { GraduationCap, Award, Calendar, Search, Bell } from 'lucide-react';
import './App.css';

function App() {
  const stats = [
    { label: 'Current GPA', value: studentData.gpa, icon: <Award className="text-blue-600" />, color: 'bg-blue-100' },
    { label: 'Credits Earned', value: studentData.credits, icon: <GraduationCap className="text-green-600" />, color: 'bg-green-100' },
    { label: 'Attendance', value: studentData.attendance, icon: <Calendar className="text-purple-600" />, color: 'bg-purple-100' },
  ];

  return (
    <div className="flex bg-slate-50 min-h-screen font-sans w-full">
      <Sidebar />
      <main className="flex-1 ml-64 p-8">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Welcome back, {studentData.name.split(' ')[0]}!</h1>
            <p className="text-slate-500">Here's what's happening with your studies today.</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
              <input 
                type="text" 
                placeholder="Search courses..." 
                className="pl-10 pr-4 py-2 rounded-full border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              />
            </div>
            <button className="p-2 bg-white border border-slate-200 rounded-full text-slate-600 hover:bg-slate-50 relative">
              <Bell size={20} />
              <span className="absolute top-2 right-2 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
            </button>
          </div>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <section className="lg:col-span-2">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Active Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {studentData.courses.map(course => (
                <CourseCard key={course.id} {...course} />
              ))}
            </div>
          </section>

          <aside>
            <h2 className="text-xl font-bold text-slate-900 mb-4">Upcoming Deadlines</h2>
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 divide-y divide-slate-100">
              {studentData.deadlines.map(deadline => (
                <div key={deadline.id} className="p-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-slate-900">{deadline.task}</p>
                    <p className="text-xs text-slate-500">Due: {deadline.due}</p>
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full ${
                    deadline.priority === 'High' ? 'bg-red-100 text-red-600' : 
                    deadline.priority === 'Medium' ? 'bg-orange-100 text-orange-600' : 'bg-blue-100 text-blue-600'
                  }`}>
                    {deadline.priority}
                  </span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

export default App;
