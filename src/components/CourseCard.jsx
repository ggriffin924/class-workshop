import React from 'react';

const CourseCard = ({ name, instructor, progress, color }) => {
  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-bold text-slate-900">{name}</h3>
          <p className="text-sm text-slate-500 font-medium">Instructor: {instructor}</p>
        </div>
        <div className={`w-3 h-3 rounded-full ${color.replace('bg-', 'bg-opacity-20 ')} ${color.replace('bg-', 'text-')}`}></div>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-xs font-semibold text-slate-600">
          <span>Progress</span>
          <span>{progress}%</span>
        </div>
        <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
          <div className={`${color} h-full transition-all duration-500`} style={{ width: `${progress}%` }}></div>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
