import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="bg-black text-white px-40 py-5 flex justify-between">
      <Link className="text-2xl" href={`/`}>
        Logo
      </Link>
      <span className="flex gap-4">
        <Link className="text-md" href={`/posts`}>
          Posts
        </Link>
        <Link className="text-md" href={`/products`}>
          Products
        </Link>
      </span>
    </div>
  );
};

export default Header;
