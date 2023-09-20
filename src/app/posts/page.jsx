import Link from "next/link";
import React from "react";

const Posts = async () => {
  const res = await fetch("https://dummyjson.com/posts", {
    next: {},
  });
  const { posts } = await res?.json();
  
  return (
    <div className="flex min-h-screen flex-col items-center justify-between py-20 px-40">
      <h1 className="text-3xl font-semibold">All Blog Posts</h1>
      <div style={{ paddingTop: "50px" }}>
        {posts?.map((post) => (
          <article key={post?.id}>
            <Link href={`posts/${post?.id}`}>
              <h2 className="text-2xl font-semibold mb-2">{post?.title}</h2>
            </Link>
            <p style={{ paddingBottom: "30px" }}>{post?.body}</p>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Posts;
