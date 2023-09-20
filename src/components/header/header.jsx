import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="bg-black text-white px-40 py-5 flex justify-between">
      <Link className="text-2xl" href={`/`}>
        CICD
      </Link>
      <Link className="text-md" href={`/posts`}>
        Posts
      </Link>
    </div>
  );
};

export default Header;
