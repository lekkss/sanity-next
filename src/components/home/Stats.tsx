"use client";
import React from "react";
import { motion } from "framer-motion";

const stats = [
  { label: "Active Users", value: "1M+" },
  { label: "Transactions", value: "$50B+" },
  { label: "Countries", value: "150+" },
  { label: "Success Rate", value: "99.9%" },
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

const Stats = () => {
  return (
    <section className="bg-blue-600 text-white py-16">
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          variants={containerVariants}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="space-y-2"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="text-4xl font-bold"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 200,
                  damping: 10,
                  delay: index * 0.1,
                }}
              >
                {stat.value}
              </motion.div>
              <motion.div
                className="text-blue-100 text-lg"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                {stat.label}
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Stats;
