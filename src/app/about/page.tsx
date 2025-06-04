"use client";

import React from "react";
import { motion } from "framer-motion";
import NavBar from "@/components/layout/NavBar";

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "Chief Executive Officer",
    image: "/placeholder.jpg",
    bio: "Visionary leader with 15+ years of experience in fintech innovation.",
  },
  {
    name: "Michael Chen",
    role: "Chief Technology Officer",
    image: "/placeholder.jpg",
    bio: "Tech innovator specializing in blockchain and AI solutions.",
  },
  {
    name: "Emma Rodriguez",
    role: "Head of Product",
    image: "/placeholder.jpg",
    bio: "Product strategist focused on user-centric financial solutions.",
  },
  {
    name: "David Kim",
    role: "Chief Financial Officer",
    image: "/placeholder.jpg",
    bio: "Financial expert with a track record of successful ventures.",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <NavBar />
      {/* Hero Section */}
      <motion.section
        className="relative py-20 bg-gradient-to-r from-blue-600 to-blue-800 text-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About LEKKSS
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Pioneering the future of financial technology with innovative
              solutions that empower businesses and individuals worldwide.
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div className="space-y-6" variants={itemVariants}>
              <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
              <p className="text-lg text-gray-600">
                We're on a mission to revolutionize the financial technology
                landscape by creating secure, efficient, and accessible
                solutions that empower businesses to thrive in the digital age.
              </p>
              <p className="text-lg text-gray-600">
                Our commitment to innovation and excellence drives us to
                continuously push boundaries and set new standards in the
                fintech industry.
              </p>
            </motion.div>
            <motion.div
              className="relative h-[400px] bg-blue-100 rounded-lg"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              {/* Placeholder for mission image */}
              <div className="absolute inset-0 flex items-center justify-center text-blue-600 text-lg">
                Mission Image Placeholder
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600">
              The brilliant minds behind our success
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
              >
                <div className="relative h-64 bg-gray-200">
                  {/* Placeholder for team member image */}
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                    Image Placeholder
                  </div>
                </div>
                <div className="p-6">
                  <motion.h3
                    className="text-xl font-semibold text-gray-900 mb-2"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {member.name}
                  </motion.h3>
                  <motion.p
                    className="text-blue-600 font-medium mb-3"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.1 }}
                  >
                    {member.role}
                  </motion.p>
                  <motion.p
                    className="text-gray-600"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                  >
                    {member.bio}
                  </motion.p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl mb-4">
              Our Core Values
            </h2>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Innovation",
                description:
                  "Constantly pushing boundaries to create better solutions",
                icon: "💡",
              },
              {
                title: "Integrity",
                description:
                  "Building trust through transparent and ethical practices",
                icon: "🤝",
              },
              {
                title: "Excellence",
                description:
                  "Committed to delivering the highest quality in everything we do",
                icon: "⭐",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                className="text-center p-6"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="text-4xl mb-4"
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
