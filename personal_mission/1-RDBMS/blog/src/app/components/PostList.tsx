"use client";

import React, { useState, useEffect } from "react";
import { LucideIcon, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface Post {
  id: number;
  title: string;
  content: string;
}

interface PostListProps {
  endpoint: string;
  label: string;
}

const PostList: React.FC<PostListProps> = ({ endpoint, label }) => {
  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState<Post[]>([]);
  const [responseTime, setResponseTime] = useState<number | null>(null);

  useEffect(() => {
    const fetchInitialPosts = async () => {
      const res = await fetch(`/api/${endpoint}`);
      const data = await res.json();
      setPosts(data.posts);
      setResponseTime(data.responseTime);
    };
    fetchInitialPosts();
  }, [endpoint]);

  const fetchPosts = async () => {
    const res = await fetch(`/api/${endpoint}?title=${title}`);
    const data = await res.json();
    setPosts(data.posts);
    setResponseTime(data.responseTime);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-xl font-semibold mb-4">{label}</h2>
      <div className="flex space-x-2 mb-4">
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Search by title"
          className="flex-grow"
        />
        <Button onClick={fetchPosts} className="flex items-center">
          <Search className="mr-2" /> 검색
        </Button>
      </div>
      {responseTime !== null && (
        <p className="text-sm text-gray-500">응답 속도: {responseTime} ms</p>
      )}
      <ul className="space-y-4">
        {posts.map((post) => (
          <li key={post.id} className="border-b pb-4">
            <h3 className="text-lg font-medium">{post.title}</h3>
            <p className="text-gray-700">{post.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
