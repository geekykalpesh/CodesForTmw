import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { X } from 'lucide-react';
import { removePost, setSelectedPost } from '../store/postsSlice';
import { motion } from 'framer-motion';
import { cn } from '../utils/cn';

const Card = ({ post }) => {
  const dispatch = useDispatch();
  const viewMode = useSelector((state) => state.posts.viewMode);
  const isList = viewMode === 'list';

  const handleRemove = (e) => {
    e.stopPropagation();
    dispatch(removePost(post.id));
  };

  const handleClick = () => {
    dispatch(setSelectedPost(post));
  };

  return (
    <div className={cn("relative", isList ? "mb-4" : "h-full")}>
        <motion.div
        layout
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        onClick={handleClick}
        className={cn(
            "bg-white shadow-[0_2px_15px_rgba(0,0,0,0.03)] relative group cursor-pointer active:scale-[0.99] transition-all overflow-hidden",
            isList ? "flex flex-row items-center p-6 gap-6 rounded-[24px] mr-12" : "flex flex-col p-8 rounded-[24px] h-full"
        )}
        >
        {/* Grid Remove Button */}
        {!isList && (
            <button
                onClick={handleRemove}
                className="absolute right-4 top-4 w-10 h-10 flex items-center justify-center text-[#ff8e8e] hover:text-red-500 transition-colors z-20"
            >
                <X className="w-8 h-8 stroke-[3]" />
            </button>
        )}

        {/* Thumbnail */}
        <motion.div 
            layout
            className={cn(
            "overflow-hidden shrink-0",
            isList ? "w-24 h-24 rounded-full" : "order-2 mt-auto w-full aspect-[1.8] rounded-[12px]"
            )}
        >
            <motion.img 
            layout
            src={`https://picsum.photos/seed/${post.id}/600/400`} 
            alt="thumbnail" 
            className="w-full h-full object-cover"
            />
        </motion.div>

        {/* Content Section */}
        <motion.div layout className={cn("flex-1", isList ? "pr-8" : "order-1 mb-6")}>
            <motion.h3 
            layout
            className={cn(
                "font-extrabold text-gray-900 leading-tight mb-2",
                isList ? "text-[20px] line-clamp-1" : "text-[22px] pr-10 line-clamp-2"
            )}
            >
            {post.title}...
            </motion.h3>
            
            <motion.p 
            layout
            className={cn(
                "text-gray-500 text-[15px] leading-snug mb-2 font-medium",
                isList ? "line-clamp-1" : "line-clamp-3 mb-4"
            )}
            >
            {post.body}...
            </motion.p>
            
            <motion.span 
            layout
            className="text-[13px] text-gray-400 font-semibold block"
            >
            Mon, 21 Dec 2020 14:57 GMT
            </motion.span>
        </motion.div>
        </motion.div>

        {/* List View Floating Remove Button */}
        {isList && (
            <button
                onClick={handleRemove}
                className="absolute right-0 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white shadow-[0_4px_15px_rgba(0,0,0,0.05)] flex items-center justify-center text-[#ff8e8e] hover:text-red-500 hover:scale-105 active:scale-95 transition-all z-30 group"
            >
                <X className="w-10 h-10 stroke-[2.5]" />
            </button>
        )}
    </div>
  );
};

export default Card;
