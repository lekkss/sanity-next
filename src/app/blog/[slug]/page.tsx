import React from "react";
import { client } from "@/sanity/lib/client";
import { SanityPost } from "../types";
import { fetchPostBySlugQuery } from "@/lib/sanity-queries";
import BlogPost from "./components/BlogPost";

async function getPost(slug: string): Promise<SanityPost> {
  return client.fetch(fetchPostBySlugQuery, { slug });
}

export default async function SingleBlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await getPost((await params).slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Post not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <BlogPost post={post} />
      </div>
    </div>
  );
}
