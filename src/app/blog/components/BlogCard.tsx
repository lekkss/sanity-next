"use client";

import { PostPreview } from "../types";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { urlFor } from "@/sanity/lib/image";

interface BlogCardProps {
  post: PostPreview;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
    >
      <Link href={`/blog/${post.slug.current}`}>
        <div className="relative h-48 w-full">
          {post.mainImage ? (
            <Image
              src={urlFor(post.mainImage).url()}
              alt={post.title}
              fill
              priority
              className="object-cover"
            />
          ) : (
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <span className="text-gray-400">No image</span>
            </div>
          )}
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            {post.categories?.map((category) => (
              <span
                key={category.title}
                className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full"
              >
                {category.title}
              </span>
            ))}
          </div>
          <h2 className="text-xl font-semibold text-gray-900 mb-2 line-clamp-2">
            {post.title}
          </h2>
          <div className="flex items-center justify-between mt-4">
            <div className="flex items-center gap-2">
              {post.author && (
                <span className="text-sm text-gray-600">
                  By {post.author.name}
                </span>
              )}
            </div>
            <span className="text-sm text-gray-500">
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <div className="mt-4">
            <span className="text-blue-600 font-medium hover:text-blue-700 transition-colors">
              Read more →
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default BlogCard;
