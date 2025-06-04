"use client";
import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl md:text-5xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Next-Generation Financial Technology Solutions
            </motion.h1>
            <motion.p
              className="text-xl text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Transform your financial operations with our cutting-edge fintech
              platform. Secure, efficient, and built for the future.
            </motion.p>
            <motion.div
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <Link
                href="/contact"
                className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="/services"
                className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors"
              >
                Learn More
              </Link>
            </motion.div>
          </motion.div>
          <motion.div
            className="relative h-[400px] bg-blue-500 rounded-lg shadow-xl"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {/* Placeholder for hero image */}
            <div className="absolute inset-0 flex items-center justify-center text-white text-lg">
              Hero Image Placeholder
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
