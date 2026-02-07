import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, setLoading } from '../store/postsSlice';
import Card from './Card';
import Pagination from './Pagination';
import Sidebar from './Sidebar';
import FeedbackForm from './FeedbackForm';
import ArticleModal from './ArticleModal';
import { AnimatePresence, motion } from 'framer-motion';

const NewsFeed = () => {
  const dispatch = useDispatch();
  const { displayedPosts, loading, viewMode } = useSelector((state) => state.posts);
  const [isFeedbackOpen, setIsFeedbackOpen] = useState(false);

  useEffect(() => {
    dispatch(fetchPosts());
    
    // Wireframe Requirement: Display Loading... for 5 sec on startup
    const timer = setTimeout(() => {
      dispatch(setLoading(false));
    }, 5000);

    return () => clearTimeout(timer);
  }, [dispatch]);

  if (loading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-[#EBF2F7] z-[100]">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-col items-center gap-6"
        >
          <div className="w-16 h-16 border-4 border-emerald-200 border-t-emerald-500 rounded-full animate-spin" />
          <h2 className="text-3xl font-bold text-gray-800 animate-pulse">Loading...</h2>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#EBF2F7] flex py-8 px-12">
      <Sidebar onOpenFeedback={() => setIsFeedbackOpen(true)} />
      
      <main className="ml-[350px] flex-1 max-w-[1200px]">
        <div className={viewMode === 'grid' ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" : "flex flex-col"}>
          <AnimatePresence mode="popLayout">
            {displayedPosts.map((post) => (
              <Card key={post.id} post={post} />
            ))}
          </AnimatePresence>
        </div>

        <Pagination />
      </main>

      <FeedbackForm isOpen={isFeedbackOpen} onClose={() => setIsFeedbackOpen(false)} />
      <ArticleModal />
    </div>
  );
};

export default NewsFeed;
