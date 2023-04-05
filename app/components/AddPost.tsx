"use client";

import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";

import { addPost } from "../axios/postApi";

const AddPost = () => {
  const [title, setTitle] = useState<string>("");
  const [isDisabled, setIsDisabled] = useState<boolean>(false);

  const createPostMutation = useMutation({
    mutationFn: (title: string) => addPost({ title }),

    onSuccess: (ctx) => {
      toast.success(ctx?.data?.message);
      setTitle("");
      setIsDisabled(false);
    },
    onError: (error) => {
      if (error instanceof AxiosError) {
        toast.error(error?.response?.data?.message);
      }
      setIsDisabled(false);
    },
  });

  const handleSubmitForm = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDisabled(true);
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
            disabled={isDisabled}
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
