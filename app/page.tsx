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
  console.log("Posts are : ", posts);
  return (
    <main>
      <AddPost />
      {posts?.data?.map((post: PostsType) => (
        <Posts
          key={post.id}
          postId={post.id}
          postTitle={post.title}
          userName={post.user.name}
          userAvatar={post.user.image}
        />
      ))}
    </main>
  );
}
