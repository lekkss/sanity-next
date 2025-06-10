import React from "react";
import { client } from "@/sanity/lib/client";
import { SanityPost } from "../types";
import { fetchPostBySlugQuery } from "@/lib/sanity-queries";
import BlogPost from "./components/BlogPost";
import NavBar from "@/components/layout/NavBar";
import { Metadata } from "next";

async function getPost(slug: string): Promise<SanityPost> {
  return client.fetch(fetchPostBySlugQuery, { slug });
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const post = await getPost(params.slug);

  if (!post) {
    return {
      title: "Post Not Found",
      description: "The requested blog post could not be found.",
    };
  }

  return {
    title: post.title,
    description: post.excerpt || post.title,
    openGraph: {
      title: post.title,
      description: post.excerpt || post.title,
      type: "article",
      publishedTime: post.publishedAt,
      authors: [post.author?.name || "Afolabi Oluwasegun"],
      tags: post.categories?.map((category) => category.title) || [],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt || post.title,
    },
  };
}

export default async function SingleBlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const post = await getPost(params.slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Post not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <BlogPost post={post} />
      </div>
    </div>
  );
}
