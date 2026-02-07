import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCurrentPage } from '../store/postsSlice';
import { cn } from '../utils/cn';

const Pagination = () => {
  const dispatch = useDispatch();
  const { allPosts, currentPage, postsPerPage } = useSelector((state) => state.posts);

  const totalPages = Math.ceil(allPosts.length / postsPerPage);
  
  if (totalPages <= 1) return null;

  const PageButton = ({ page, active, children }) => (
    <button
      onClick={() => dispatch(setCurrentPage(page))}
      className={cn(
        "w-10 h-10 rounded-full flex items-center justify-center text-[18px] font-bold transition-all",
        active ? "bg-white text-gray-900 shadow-sm" : "bg-gray-300 text-gray-500 hover:bg-gray-400"
      )}
    >
      {children || page}
    </button>
  );

  return (
    <div className="flex justify-center items-center gap-3 mt-12 mb-8">
      {[1, 2, 3].map((page) => (
        <PageButton 
          key={page} 
          page={page} 
          active={currentPage === page}
        />
      ))}
      <button
        onClick={() => dispatch(setCurrentPage(Math.min(currentPage + 1, totalPages)))}
        className="w-10 h-10 rounded-full flex items-center justify-center text-[18px] font-bold bg-gray-300 text-gray-500 hover:bg-gray-400 transition-all"
      >
        <span className="scale-x-125">»</span>
      </button>
    </div>
  );
};

export default Pagination;
