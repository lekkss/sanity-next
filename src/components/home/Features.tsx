"use client";
import React from "react";
import { motion } from "framer-motion";

const features = [
  {
    title: "Secure Transactions",
    description:
      "Bank-grade security with end-to-end encryption for all your financial transactions.",
    icon: "🔒",
  },
  {
    title: "Real-time Analytics",
    description:
      "Get instant insights with our advanced analytics dashboard and reporting tools.",
    icon: "📊",
  },
  {
    title: "Smart Payments",
    description:
      "Streamline your payment processes with our intelligent payment solutions.",
    icon: "💳",
  },
  {
    title: "24/7 Support",
    description:
      "Round-the-clock customer support to assist you with any queries.",
    icon: "🛟",
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

const Features = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Why Choose Our Platform
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Experience the future of financial technology with our comprehensive
            solutions
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div
                className="text-4xl mb-4"
                whileHover={{ scale: 1.2 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
