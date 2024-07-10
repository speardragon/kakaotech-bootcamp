import PostList from "./components/PostList";

export default function Home() {
  return (
    <div className="container mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">
        포스트 불러오기 응답 시간 비교 (데이터 120만 건)
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <PostList endpoint="posts_with_index" label="인덱스 O" />
        <PostList endpoint="posts_without_index" label="인덱스 X" />
      </div>
    </div>
  );
}
