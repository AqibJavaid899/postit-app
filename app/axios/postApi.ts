import { PostsType } from '../types/Posts';
'use client'

import axios from "axios";

interface payloadType {
    title: string
}

// Add Post API logic
export const addPost = async (payload: payloadType) => {
    const requestBody = {
        title: payload.title
    }
    return await axios.post("/api/posts", requestBody)
}

// Fetch all Posts
export const fetchAllPosts = async (): Promise<PostsType[]> => {
    return await axios.get("/api/posts")
}