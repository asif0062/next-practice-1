import Image from "next/image";
import React from "react";

const Products = async () => {
  const res = await fetch("https://dummyjson.com/products", {
    next: {},
  });
  const { products } = await res?.json();

  return (
    <div className="container my-12 mx-auto px-4 md:px-12">
      <div className="flex flex-wrap -mx-1 lg:-mx-4">
        {products?.map((product, index) => (
          <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4" key={index}>
            <article className="overflow-hidden rounded-lg shadow-lg">
              <a href="#">
                {/* <Image
                  alt="Placeholder"
                  src={product?.thumbnail}
                  className="block h-auto w-full"
                  width={100}
                  height={100}
                /> */}
                <img src={product?.thumbnail} className="block h-[300px] object-cover w-full" />
              </a>

              <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                <h1 className="text-lg">
                  <a className="no-underline hover:underline text-black" href="#">
                    {product?.title}
                  </a>
                </h1>
                <p className="text-grey-darker text-sm">11/1/19</p>
              </header>

              <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                <a className="flex items-center no-underline hover:underline text-black" href="#">
                  {/* <img alt="Placeholder" className="block rounded-full" src="https://picsum.photos/32/32/?random"> */}
                  <p className="ml-2 text-sm">Author Name</p>
                </a>
                <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                  <span className="hidden">Like</span>
                  <i className="fa fa-heart"></i>
                </a>
              </footer>
            </article>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
