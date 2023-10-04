"use client";
import React from "react";

const PostDetails = ({ params }) => {
  const getLs = JSON.parse(localStorage.getItem("posts"));
  const currPost = getLs
    ? getLs.find((obj) => obj.id === params.id)
    : { id: 1, title: "this is title" };

  return (
    <div className="flex min-h-screen flex-col items-center pt-24 px-40">
      <h1 className="text-3xl font-semibold">Blog Post Details</h1>
      <div style={{ paddingTop: "50px" }}>
        <article key={currPost?.id}>
          <h2 className="text-2xl font-semibold mb-2">{currPost?.id}</h2>
          <p style={{ paddingBottom: "30px" }}>{currPost?.title}</p>
        </article>
      </div>
    </div>
  );
};

export default PostDetails;
