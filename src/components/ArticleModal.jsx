import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useDispatch, useSelector } from 'react-redux';
import { setSelectedPost } from '../store/postsSlice';
import { X, Twitter, Linkedin, Facebook, Github, Youtube, Radio } from 'lucide-react';
import { cn } from '../utils/cn';

const ArticleModal = () => {
  const dispatch = useDispatch();
  const selectedPost = useSelector((state) => state.posts.selectedPost);

  const onClose = () => dispatch(setSelectedPost(null));

  return (
    <AnimatePresence>
      {selectedPost && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-gray-900/40 backdrop-blur-md"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative bg-white w-full max-w-6xl h-[85vh] rounded-[32px] shadow-2xl overflow-hidden flex flex-col border-[12px] border-gray-600/20"
          >
            {/* Modal Header/Close */}
            <button
              onClick={onClose}
              className="absolute right-6 top-6 z-50 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Modal Body - Scrollable Content */}
            <div className="flex-1 overflow-y-auto bg-white custom-scrollbar rounded-[20px] m-1 overflow-hidden">
              {/* Top Top Header - Cloud Background */}
              <div className="bg-[#EBF2F7] relative h-24 flex items-center px-6 overflow-hidden">
                <div 
                  className="absolute inset-0 opacity-100"
                  style={{
                    backgroundImage: 'url("https://www.transparenttextures.com/patterns/clouds.png")',
                    backgroundColor: '#C5D8E6',
                    backgroundBlendMode: 'soft-light'
                  }}
                />
                <div className="relative z-10 flex w-full justify-between items-center">
                    <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                            <div className="bg-white/10 p-1 rounded">
                                <span className="font-extrabold text-[#004A26] text-3xl tracking-tighter leading-none flex items-center">
                                    <span className="text-4xl">F</span>IRST
                                </span>
                            </div>
                        </div>
                        <span className="text-[#004A26] text-[10px] font-bold uppercase tracking-widest -mt-1 ml-1">Improving Security Together</span>
                    </div>

                    <div className="flex items-center gap-2 pr-16">
                        {[
                          { icon: Twitter, color: 'text-white' },
                          { icon: Linkedin, color: 'text-white' },
                          { icon: Facebook, color: 'text-white' },
                          { icon: Github, color: 'text-white' },
                          { icon: Youtube, color: 'text-white' },
                          { icon: Radio, color: 'text-white' }
                        ].map((item, i) => (
                            <div key={i} className="w-9 h-9 bg-slate-700/60 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-all cursor-pointer shadow-sm">
                                <item.icon className={cn("w-5 h-5", item.color)} strokeWidth={2.5} />
                            </div>
                        ))}
                    </div>
                </div>
              </div>

              {/* Header inside modal - Dark Green Nav */}
              <div className="bg-[#004A26] px-6 py-2 flex items-center justify-between sticky top-0 z-20 border-t border-emerald-800">
                <div className="flex gap-6 text-white text-[11px] font-medium tracking-wide">
                  <span className="hover:text-emerald-200 cursor-pointer flex items-center gap-1">About FIRST <span className="text-[8px]">▼</span></span>
                  <span className="hover:text-emerald-200 cursor-pointer flex items-center gap-1">Membership <span className="text-[8px]">▼</span></span>
                  <span className="hover:text-emerald-200 cursor-pointer flex items-center gap-1">Initiatives <span className="text-[8px]">▼</span></span>
                  <span className="hover:text-emerald-200 cursor-pointer flex items-center gap-1">Standards & Publications <span className="text-[8px]">▼</span></span>
                  <span className="hover:text-emerald-200 cursor-pointer flex items-center gap-1">Events <span className="text-[8px]">▼</span></span>
                  <span className="hover:text-emerald-200 cursor-pointer flex items-center gap-1">Education <span className="text-[8px]">▼</span></span>
                  <span className="hover:text-emerald-200 cursor-pointer">Blog</span>
                </div>
                <button className="bg-[#008A00] hover:bg-[#00A000] text-white text-[11px] px-3 py-1 rounded border border-emerald-400/30 transition-colors">
                    Sign in
                </button>
              </div>

              <div className="flex min-h-full border-t border-gray-200">
                {/* Sidebar */}
                <div className="w-[280px] bg-white p-6 border-r border-gray-100 hidden md:block">
                  <div className="bg-[#008A00] p-2 text-white font-bold mb-4 rounded-sm flex items-center justify-between">
                    <span>FIRST Blog</span>
                    <span className="text-white/50 text-xs">🔗</span>
                  </div>
                  <p className="text-[13px] text-gray-700 leading-relaxed mb-6">
                    FIRST runs a blog open to members and invited guest authors. It publishes contributions relevant to incident responders. Articles should focus on general topics interesting to members. It will not be used to promote individual organisations, products or services. If you are interested in contributing, please get in touch with <span className="text-emerald-700 underline cursor-pointer">first-blog@first.org</span>
                  </p>
                  
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 italic text-[12px] text-gray-600">
                    Learn more about the Forum of Incident Response and Security Teams through regular blog posts about our organization, events and other programs. Questions or comments? Contact first-
                  </div>
                </div>

                {/* Main Article Content */}
                <div className="flex-1 p-10 max-w-5xl bg-white">
                  <h1 className="text-[#004A26] text-[32px] font-bold leading-tight mb-4 tracking-tight">
                    Thank You FIRST Community for Helping Team Cymru Reach a New CSIRT Assistance Program Milestone
                  </h1>
                  
                  <div className="text-gray-500 italic text-[15px] mb-8">
                    Together, We're Creating Better Threat Intelligence Sharing for the World
                  </div>

                  <div className="mb-10 text-[14px]">
                    <p className="text-gray-900 font-semibold">by Jacomo Piccolini, Outreach Team Lead, Team Cymru</p>
                    <p className="text-gray-500">Monday, January 28th, 2020</p>
                  </div>

                  <div className="space-y-8 text-gray-700 leading-relaxed text-[16px] xl:text-[18px]">
                    <p>
                        Since 2005, Team Cymru’s mission has been to save and improve lives by working with public and private sector entities to discover, track, and take down threat actors and criminals worldwide. We do this by delivering comprehensive visibility into global cyber threat activity. For over 15 years, we’ve built data sharing partnerships on a global scale that allows us to collect, process and aggregate global network traffic and 50+ other types of data to give our clients Pure Signal™. This allows elite analyst teams to perform threat hunting and cyber reconnaissance at a level not possible using traditional methods and tools.
                    </p>
                    <p>
                        However, while our <span className="text-emerald-700 underline decoration-1 underline-offset-4 cursor-pointer">Pure Signal intelligence 🔗</span> is available commercially and also powers many cyber security vendors’ offerings, Team Cymru prioritizes its no cost community services. For example, we have recently released the new <span className="text-emerald-700 underline decoration-1 underline-offset-4 cursor-pointer">Nimbus Threat Monitor 🔗</span>, which leverages our leading IP reputation data to deliver no-cost threat intelligence monitoring to network operators and network owners around the world. We also provide a no-cost DDoS solution, a CSIRT Assistance Program (CAP) <span className="text-emerald-700 underline decoration-1 underline-offset-4 cursor-pointer">and more 🔗</span>.
                    </p>
                    <p>
                        During our time at the FIRST Conference, we reached a new milestone with our <span className="text-emerald-700 underline decoration-1 underline-offset-4 cursor-pointer">CSIRT Assistance program 🔗</span>, adding new CSIRT members for a grand total of 133 participating teams. Established nearly a decade ago as a trusted conduit for notifying countries of observed malicious Internet activity, the Team Cymru CAP works with national and regional CSIRTs (Computer Security Incident Response Teams) by sharing its world-class threat intelligence at no cost. Today the CAP has scaled to provide up to 20 million events to global CSIRTs every day.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Modal Footer */}
            <div className="bg-white p-5 border-t border-gray-100 flex justify-between items-center z-30 shrink-0">
                <div className="pl-4">
                    <h2 className="font-bold text-xl text-gray-800 line-clamp-1 max-w-xl">{selectedPost.title}</h2>
                    <p className="text-gray-500 text-sm font-medium">Post ID: {selectedPost.id}</p>
                </div>
                <button 
                    onClick={onClose}
                    className="bg-[#f0f2f5] hover:bg-gray-200 text-gray-800 font-extrabold px-12 py-4 rounded-xl transition-all shadow-sm grayscale hover:grayscale-0"
                >
                    Close Reader
                </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ArticleModal;
