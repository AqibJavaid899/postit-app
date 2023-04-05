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