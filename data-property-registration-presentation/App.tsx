import React from 'react';
import { 
  Slide1, Slide2, Slide3, Slide4, Slide5, 
  Slide6, Slide7, Slide8, Slide9, Slide10, 
  Slide11, Slide12, Slide13, Slide14, Slide15 
} from './components/Slides';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 py-12 flex flex-col items-center gap-12">
      {/* Navigation/Header hint */}
      <div className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md z-50 py-2 px-6 shadow-sm flex justify-between items-center print:hidden">
        <span className="text-sm font-semibold text-gray-500">数据产权登记系统</span>
        <span className="text-xs text-gray-400">向下滚动查看幻灯片</span>
      </div>

      {/* Slide Deck */}
      <div className="flex flex-col gap-16 print:gap-0">
        <Slide1 />
        <Slide2 />
        <Slide3 />
        <Slide4 />
        <Slide5 />
        <Slide6 />
        <Slide7 />
        <Slide8 />
        <Slide9 />
        <Slide10 />
        <Slide11 />
        <Slide12 />
        <Slide13 />
        <Slide14 />
        <Slide15 />
      </div>

      <div className="text-gray-400 text-sm pb-10">汇报结束</div>
    </div>
  );
}