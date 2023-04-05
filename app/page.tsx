"use client";

import { useQuery } from "@tanstack/react-query";

import AddPost from "./components/AddPost";
import Posts from "./components/Posts";
import { fetchAllPosts } from "./axios/postApi";
import { PostsType } from "./types/Posts";

export default function Home() {
  const {
    data: posts,
    error,
    isLoading,
  } = useQuery<PostsType[]>({
    queryFn: fetchAllPosts,
    queryKey: ["posts"],
  });

  if (error) return error;
  if (isLoading) return "Loading...";

  return (
    <main>
      <AddPost />
      <Posts posts={posts?.data} />
    </main>
  );
}
