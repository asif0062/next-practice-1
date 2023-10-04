"use client";

import Link from "next/link";
import React from "react";

const Posts = async () => {
  const res = await fetch("https://dummyjson.com/posts", {
    next: {},
  });
  const { posts } = await res?.json();
  let tempArray = [];

  const handleClick = (id, title) => {
    id = id.toString();
    if (window !== "undefined") {
      const getLs = JSON.parse(localStorage.getItem("posts"));
      if (getLs) {
        const isAlready = getLs.find((post) => post.id === id) ? true : false;
        if (!isAlready) {
          tempArray = [...getLs, { id, title }];
          localStorage.setItem("posts", JSON.stringify(tempArray));
        }
      } else {
        localStorage.setItem("posts", JSON.stringify([{ id, title }]));
      }
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between py-20 px-40">
      <h1 className="text-3xl font-semibold">All Blog Posts</h1>
      <div style={{ paddingTop: "50px" }}>
        {posts?.map((post) => (
          <article key={post?.id}>
            <Link
              onClick={() => {
                handleClick(post.id, post.title);
                // localStorage.setItem(
                //   "posts",
                //   JSON.stringify([...tempArray, { id: post.id, name: post.title }])
                // );
              }}
              href={`posts/${post?.id}`}
            >
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
