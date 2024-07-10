// app/components/PostList.tsx
"use client";

import React, { useState, useEffect, useCallback } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Loading from "./loading";

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
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPosts = useCallback(
    async (searchTitle: string = "") => {
      setIsLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/${endpoint}?title=${searchTitle}`);
        if (!res.ok) {
          throw new Error("서버에서 데이터를 가져오는데 실패했습니다.");
        }
        const data = await res.json();
        setPosts(data.posts);
        setResponseTime(data.responseTime);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "알 수 없는 에러가 발생했습니다."
        );
      } finally {
        setIsLoading(false);
      }
    },
    [endpoint]
  );

  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);

  const handleSearch = useCallback(() => {
    fetchPosts(title);
  }, [fetchPosts, title]);

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
        <Button
          onClick={handleSearch}
          className="flex items-center"
          disabled={isLoading}
        >
          <Search className="mr-2" /> 검색
        </Button>
      </div>
      {isLoading && (
        <div className="flex h-full w-full justify-center items-start mt-10">
          <Loading />
        </div>
      )}
      {error && <p className="text-sm text-red-500">{error}</p>}
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
