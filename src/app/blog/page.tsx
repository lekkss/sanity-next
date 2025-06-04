import React from "react";
import { client } from "@/sanity/lib/client";
import BlogCard from "./components/BlogCard";
import { PostPreview } from "./types";
import { fetchPostQuery } from "@/lib/sanity-queries";
import NavBar from "@/components/layout/NavBar";

async function getPosts(): Promise<PostPreview[]> {
  return client.fetch(fetchPostQuery);
}

const BlogPage = async () => {
  const posts = await getPosts();

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 sm:text-5xl mb-4">
            Our Blog
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Insights, updates, and stories from our team
          </p>
        </div>

        {posts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600">No posts found.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <BlogCard key={post._id} post={post} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
