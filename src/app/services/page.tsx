"use client";

import React from "react";
import NavBar from "@/components/layout/NavBar";
import { motion } from "framer-motion";

const services = [
  {
    title: "Web Development",
    description:
      "Custom websites built with modern technologies like Next.js, React, and TypeScript. Fast, secure, and SEO-friendly.",
    icon: "💻",
    features: [
      "Responsive Design",
      "SEO Optimization",
      "Performance Optimization",
      "Modern Tech Stack",
    ],
  },
  {
    title: "E-commerce Solutions",
    description:
      "Powerful online stores with secure payment processing, inventory management, and customer analytics.",
    icon: "🛍️",
    features: [
      "Payment Integration",
      "Inventory Management",
      "Order Processing",
      "Customer Analytics",
    ],
  },
  {
    title: "UI/UX Design",
    description:
      "Beautiful and intuitive user interfaces that enhance user experience and drive engagement.",
    icon: "🎨",
    features: ["User Research", "Wireframing", "Prototyping", "Visual Design"],
  },
  {
    title: "Content Management",
    description:
      "Easy-to-use CMS solutions that give you full control over your website content.",
    icon: "📝",
    features: [
      "Custom CMS",
      "Content Strategy",
      "SEO Integration",
      "Media Management",
    ],
  },
];

const pricingPlans = [
  {
    name: "Basic",
    price: "$999",
    description: "Perfect for small businesses and startups",
    features: [
      "Custom Website Design",
      "Responsive Layout",
      "Basic SEO Setup",
      "Contact Form",
      "1 Month Support",
    ],
  },
  {
    name: "Professional",
    price: "$2,499",
    description: "Ideal for growing businesses",
    features: [
      "Everything in Basic",
      "E-commerce Integration",
      "Advanced SEO",
      "Content Management System",
      "3 Months Support",
      "Performance Optimization",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with specific needs",
    features: [
      "Everything in Professional",
      "Custom Features",
      "Advanced Security",
      "Scalable Infrastructure",
      "6 Months Support",
      "Priority Support",
      "Custom Integrations",
    ],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />

      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-white sm:text-5xl md:text-6xl"
            >
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4 text-xl text-blue-100 max-w-3xl mx-auto"
            >
              Comprehensive web solutions tailored to your business needs
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-gray-600"
                    >
                      <svg
                        className="h-5 w-5 text-green-500 mr-2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Simple, Transparent Pricing
            </h2>
            <p className="mt-4 text-xl text-gray-600">
              Choose the plan that best fits your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="text-4xl font-bold text-blue-600 mb-4">
                  {plan.price}
                </div>
                <p className="text-gray-600 mb-6">{plan.description}</p>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center text-gray-600"
                    >
                      <svg
                        className="h-5 w-5 text-green-500 mr-2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7"></path>
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors">
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-white sm:text-4xl mb-4"
          >
            Ready to Start Your Project?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl text-blue-100 mb-8"
          >
            Let&apos;s create something amazing together
          </motion.p>
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white text-blue-600 py-3 px-8 rounded-lg text-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Contact Us
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Services;
