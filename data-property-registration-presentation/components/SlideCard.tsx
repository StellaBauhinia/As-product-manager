import React from 'react';

interface SlideCardProps {
  children: React.ReactNode;
  pageNumber: number;
  className?: string;
}

export const SlideCard: React.FC<SlideCardProps> = ({ children, pageNumber, className = '' }) => {
  return (
    <div 
      className={`relative bg-white shadow-2xl overflow-hidden flex flex-col print:shadow-none print:break-after-page ${className}`}
      style={{ width: '1200px', height: '675px', flexShrink: 0 }}
    >
      {/* Slide Content */}
      <div className="flex-1 p-16 relative z-10">
        {children}
      </div>

      {/* Background Decor (Apple Minimalist / CyberSpace Blue) */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-bl-full -mr-32 -mt-32 z-0 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gray-50 rounded-tr-full -ml-48 -mb-48 z-0 opacity-50"></div>

      {/* Footer / Page Number */}
      <div className="absolute bottom-6 right-8 text-slate-400 font-medium text-lg z-20">
        {pageNumber}
      </div>
      <div className="absolute bottom-6 left-8 text-slate-300 text-sm z-20">
        数据产权登记系统
      </div>
    </div>
  );
};

export const SlideTitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h2 className="text-4xl font-bold text-slate-900 mb-2 tracking-tight">{children}</h2>
);

export const SlideSubtitle: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <h3 className="text-xl text-blue-600 font-medium mb-10">{children}</h3>
);