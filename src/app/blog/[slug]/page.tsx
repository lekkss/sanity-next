import React from "react";
import { client } from "@/sanity/lib/client";
import { SanityPost } from "../types";
import { fetchPostBySlugQuery } from "@/lib/sanity-queries";
import BlogPost from "./components/BlogPost";

interface Props {
  params: {
    slug: string;
  };
}

async function getPost(slug: string): Promise<SanityPost> {
  return client.fetch(fetchPostBySlugQuery, { slug });
}

const SingleBlogPostPage = async ({ params }: Props) => {
  const post = await getPost(params.slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Post not found</p>
      </div>
    );
  }

  return <BlogPost post={post} />;
};

export default SingleBlogPostPage;
