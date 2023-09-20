import React from "react";

const PostDetails = async ({ params }) => {
  const post = await fetch(`https://dummyjson.com/posts/${params?.id}`).then((data) =>
    data?.json()
  );
  return (
    <div className="flex min-h-screen flex-col items-center pt-24 px-40">
      <h1 className="text-3xl font-semibold">Blog Post Details</h1>
      <div style={{ paddingTop: "50px" }}>
        <article key={post?.id}>
          <h2 className="text-2xl font-semibold mb-2">{post?.title}</h2>
          <p style={{ paddingBottom: "30px" }}>{post?.body}</p>
        </article>
      </div>
    </div>
  );
};

export default PostDetails;
