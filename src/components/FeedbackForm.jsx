import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Search, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../utils/cn';

const schema = z.object({
  firstName: z.string().min(2, "Required"),
  lastName: z.string().min(2, "Required"),
  address: z.string().min(5, "Required"),
  country: z.string().min(2, "Required"),
  email: z.string().email("Please enter a valid e-mail"),
  phone: z.string().min(10, "Please enter a valid number").max(15, "Please enter a valid number"),
});

const FeedbackForm = ({ isOpen, onClose }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm({
    resolver: zodResolver(schema),
    mode: 'onChange'
  });

  const onSubmit = (data) => {
    console.log('Feedback submitted:', data);
    alert('Thank you for your feedback!');
    reset();
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-gray-900/10 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative bg-[#EBF2F7] w-full max-w-4xl rounded-[40px] shadow-2xl overflow-hidden flex"
          >
            {/* Left Info Panel (Matching Sidebar style) */}
            <div className="w-[300px] bg-white/40 p-10 flex flex-col items-center border-r border-white/20">
              <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-50 flex items-center gap-4 mb-8 w-full">
                <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100">
                  <img 
                    src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" 
                    alt="User" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h2 className="font-bold text-gray-800">Hi Reader,</h2>
                  <p className="text-sm text-gray-500">Here's your News!</p>
                </div>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-50 w-full text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-6">Have a Feedback?</h3>
                <button
                  onClick={onClose}
                  className="w-full bg-red-200 text-red-900 font-bold py-4 rounded-2xl transition-all shadow-sm"
                >
                  We're Listening!
                </button>
              </div>
            </div>

            {/* Form Section */}
            <div className="flex-1 p-12 overflow-y-auto max-h-[90vh]">
              <h2 className="text-2xl font-bold text-gray-800 mb-2">Thank you so much for taking the time!</h2>
              <p className="text-gray-500 mb-8 font-medium">Please provide the below details!</p>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-bold mb-2">First Name:</label>
                  <input
                    {...register('firstName')}
                    placeholder="John"
                    className={cn(
                      "w-full bg-white border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-200 transition-all",
                      errors.firstName && "border-red-400"
                    )}
                  />
                  {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>}
                </div>

                <div>
                  <label className="block text-gray-700 font-bold mb-2">Last Name:</label>
                  <input
                    {...register('lastName')}
                    placeholder="Doe"
                    className={cn(
                      "w-full bg-white border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-200 transition-all",
                      errors.lastName && "border-red-400"
                    )}
                  />
                  {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>}
                </div>

                <div>
                  <label className="block text-gray-700 font-bold mb-2">Address:</label>
                  <textarea
                    {...register('address')}
                    placeholder="Enter your full Postal Address"
                    rows={4}
                    className={cn(
                      "w-full bg-white border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-200 transition-all resize-none",
                      errors.address && "border-red-400"
                    )}
                  />
                  {errors.address && <p className="text-red-500 text-sm mt-1">{errors.address.message}</p>}
                </div>

                <div className="relative">
                  <label className="block text-gray-700 font-bold mb-2">Country:</label>
                  <div className="relative">
                    <input
                      {...register('country')}
                      placeholder="India"
                      className={cn(
                        "w-full bg-white border border-gray-100 rounded-xl px-4 py-3 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-emerald-200 transition-all",
                        errors.country && "border-red-400"
                      )}
                    />
                    <Search className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                  </div>
                  {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>}
                </div>

                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-1">
                    <label className="block text-gray-700 font-bold mb-2">Email ID:</label>
                    <div className="flex items-center gap-4">
                      <input
                        {...register('email')}
                        placeholder="example@sample.com"
                        className={cn(
                          "w-full bg-white border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-200 transition-all",
                          errors.email && "border-red-400"
                        )}
                      />
                    </div>
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
                  </div>
                </div>

                <div>
                    <label className="block text-gray-700 font-bold mb-2">Phone Number:</label>
                    <div className="flex gap-4">
                      <div className="w-20 bg-white border border-gray-100 rounded-xl px-4 py-3 text-gray-400">+91</div>
                      <input
                        {...register('phone')}
                        placeholder="123456789"
                        className={cn(
                          "flex-1 bg-white border border-gray-100 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-200 transition-all",
                          errors.phone && "border-red-400"
                        )}
                      />
                    </div>
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
                </div>

                <button
                  type="submit"
                  disabled={!isValid}
                  className={cn(
                    "w-[200px] font-bold py-4 rounded-xl transition-all shadow-md mt-4",
                    isValid 
                      ? "bg-emerald-400 hover:bg-emerald-500 text-white cursor-pointer" 
                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                  )}
                >
                  Submit Feedback
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default FeedbackForm;
