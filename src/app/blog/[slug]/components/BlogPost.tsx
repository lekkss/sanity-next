"use client";

import React from "react";
import Image from "next/image";
import { PortableText, PortableTextComponents } from "@portabletext/react";
import { motion } from "framer-motion";
import { urlFor } from "@/sanity/lib/image";
import { SanityPost } from "../../types";

interface Category {
  title: string;
}

const components: PortableTextComponents = {
  block: {
    h4: ({ children }) => (
      <h4 className="text-2xl font-bold text-gray-900 mt-8 mb-4">
        {typeof children === "string"
          ? children.replace(/'/g, "&apos;")
          : children}
      </h4>
    ),
    normal: ({ children }) => (
      <p className="text-gray-700 leading-relaxed mb-4">
        {typeof children === "string"
          ? children.replace(/'/g, "&apos;")
          : children}
      </p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc list-inside mb-4 space-y-2 text-gray-700">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal list-inside mb-4 space-y-2 text-gray-700">
        {children}
      </ol>
    ),
  },
  marks: {
    strong: ({ children }) => (
      <strong className="font-bold">
        {typeof children === "string"
          ? children.replace(/'/g, "&apos;")
          : children}
      </strong>
    ),
    code: ({ children }) => (
      <code className="bg-gray-100 rounded px-1 py-0.5 font-mono text-sm">
        {typeof children === "string"
          ? children.replace(/'/g, "&apos;")
          : children}
      </code>
    ),
  },
  types: {
    image: ({ value }) => (
      <div className="relative w-full h-[400px] my-8 rounded-xl overflow-hidden">
        <Image
          src={urlFor(value).url()}
          alt={value.alt || ""}
          fill
          className="object-cover"
        />
      </div>
    ),
  },
};

interface BlogPostProps {
  post: SanityPost;
}

const BlogPost = ({ post }: BlogPostProps) => {
  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-gray-50 py-12"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-4">
            {post.categories?.map((category: Category) => (
              <span
                key={category.title}
                className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full"
              >
                {category.title}
              </span>
            ))}
          </div>
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-6">
            {post.title}
          </h1>
          <div className="flex items-center justify-center gap-4 text-gray-600">
            {post.author && (
              <div className="flex items-center gap-2">
                {post.author.image && (
                  <Image
                    src={urlFor(post.author.image).url()}
                    alt={post.author.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                )}
                <span>By {post.author.name}</span>
              </div>
            )}
            <span>•</span>
            <time>
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
          </div>
        </div>

        {/* Featured Image */}
        {post.mainImage && (
          <div className="relative w-full h-[400px] mb-12 rounded-xl overflow-hidden">
            <Image
              src={urlFor(post.mainImage).url()}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        {/* Content */}
        <div className="prose prose-lg max-w-none">
          <PortableText value={post.body} components={components} />
        </div>

        {/* Author Bio */}
        {post.author?.bio && (
          <div className="mt-16 p-6 bg-white rounded-xl shadow-sm">
            <div className="flex items-start gap-4">
              {post.author.image && (
                <Image
                  src={urlFor(post.author.image).url()}
                  alt={post.author.name}
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              )}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  About {post.author.name}
                </h3>
                <p className="text-gray-600">{post.author.bio}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </motion.article>
  );
};

export default BlogPost;
