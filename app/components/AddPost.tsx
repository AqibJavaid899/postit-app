"use client";

import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";

import { addPost } from "../axios/postApi";

const AddPost = () => {
  const [title, setTitle] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const createPostMutation = useMutation({
    mutationFn: async (title: string) =>
      await axios.post("/api/posts/addPost", { title }),
  });

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    // setIsDisabled(true);
    // console.log("Title is : ", title);
    createPostMutation.mutate(title);
  };

  return (
    <form className="bg-white p-4 rounded-md my-4" onSubmit={handleSubmitForm}>
      <div className="flex flex-col my-2">
        <textarea
          name="title"
          placeholder="What's on your mind?"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-gray-200 p-4 my-2 text-lg rounded-md outline-none"
        />
        <div className="flex justify-between items-center gap-2">
          <span
            className={`font-bold text-sm ${
              title?.length > 300 ? "text-red-700" : "text-gray-700"
            }`}
          >{`${title?.length} / 300`}</span>
          <button
            type="submit"
            disabled={isDisabled || title.length > 300}
            className="text-sm px-5 py-2 bg-teal-600 text-white rounded-xl disabled:opacity-30 disabled:cursor-not-allowed"
          >
            Create a Post
          </button>
        </div>
      </div>
    </form>
  );
};

export default AddPost;
