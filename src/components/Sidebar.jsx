import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleViewMode } from '../store/postsSlice';
import { cn } from '../utils/cn';

const Sidebar = ({ onOpenFeedback }) => {
  const dispatch = useDispatch();
  const viewMode = useSelector((state) => state.posts.viewMode);

  return (
    <div className="w-[330px] h-screen flex flex-col p-6 fixed left-0 top-0 z-40 overflow-y-auto">
      {/* Profile Section */}
      <div className="bg-white p-5 rounded-[24px] shadow-[0_2px_15px_rgba(0,0,0,0.03)] flex items-center gap-4 mb-6">
        <div className="w-14 h-14 rounded-full overflow-hidden shrink-0">
          <img 
            src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop" 
            alt="User" 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h2 className="font-extrabold text-[20px] text-gray-900 leading-tight">Hi Reader,</h2>
          <p className="text-[14px] text-gray-500 font-medium">Here's your News!</p>
        </div>
      </div>

      {/* View Toggle */}
      <div className="bg-white p-8 rounded-[24px] shadow-[0_2px_15px_rgba(0,0,0,0.03)] mb-6 text-center">
        <h3 className="text-[26px] font-extrabold text-gray-900 mb-6">View Toggle</h3>
        <div className="flex bg-[#EBF2F7] rounded-[16px] overflow-hidden p-1">
          <button
            onClick={() => dispatch(toggleViewMode('grid'))}
            className={cn(
              "flex-1 flex justify-center items-center py-6 rounded-[14px] transition-all duration-300",
              viewMode === 'grid' ? "bg-[#A6E7D2] text-[#344054]" : "bg-transparent text-gray-400"
            )}
          >
            <div className="flex flex-col gap-1.5 items-center">
              <div className={cn("w-10 h-7 border-[2.5px] rounded-md relative flex flex-col gap-1 p-1", viewMode === 'grid' ? "border-[#344054]" : "border-gray-400")}>
                <div className={cn("w-full h-1 rounded-sm", viewMode === 'grid' ? "bg-[#344054]" : "bg-gray-400")} />
                <div className={cn("w-full h-0.5 rounded-sm opacity-40", viewMode === 'grid' ? "bg-[#344054]" : "bg-gray-400")} />
                <div className={cn("w-3/4 h-0.5 rounded-sm opacity-40", viewMode === 'grid' ? "bg-[#344054]" : "bg-gray-400")} />
              </div>
            </div>
          </button>
          <button
            onClick={() => dispatch(toggleViewMode('list'))}
            className={cn(
              "flex-1 flex justify-center items-center py-6 rounded-[14px] transition-all duration-300",
              viewMode === 'list' ? "bg-[#A6E7D2] text-[#344054]" : "bg-transparent text-gray-400"
            )}
          >
            <div className="flex flex-col gap-1.5 w-10">
              <div className={cn("h-1.5 w-full rounded-full", viewMode === 'list' ? "bg-[#344054]" : "bg-gray-400")} />
              <div className={cn("h-1.5 w-full rounded-full", viewMode === 'list' ? "bg-[#344054]" : "bg-gray-400")} />
              <div className={cn("h-1.5 w-full rounded-full", viewMode === 'list' ? "bg-[#344054]" : "bg-gray-400")} />
            </div>
          </button>
        </div>
      </div>

      {/* Feedback Section */}
      <div className="bg-white p-8 rounded-[24px] shadow-[0_2px_15px_rgba(0,0,0,0.03)] text-center">
        <h3 className="text-[26px] font-extrabold text-gray-900 mb-6">Have a Feedback?</h3>
        <button
          onClick={onOpenFeedback}
          className="w-full bg-[#A6E7D2] hover:bg-[#8ED9C0] text-gray-900 font-extrabold text-[18px] py-6 rounded-[16px] transition-all shadow-sm active:scale-95"
        >
          We're Listening!
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
