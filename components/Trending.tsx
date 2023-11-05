import Image from "next/image";
import React from "react";

type Props = {};

const Trending = (props: Props) => {
  return (
    <div className="h-screen">
      <div>
        <h1>Trending Products</h1>
      </div>
      <div>
        <Image
          src="https://images.unsplash.com/photo-1615876063860-d971f6dca5dc?auto=format&fit=crop&q=80&w=2832&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D7"
          alt="table"
          width={450}
          height={450}
          className="mx-2"
        />
        <Image
          src="https://images.unsplash.com/photo-1615876063860-d971f6dca5dc?auto=format&fit=crop&q=80&w=2832&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D7"
          alt="table"
          width={450}
          height={450}
          className="mx-2"
        />
        <Image
          src="https://images.unsplash.com/photo-1615876063860-d971f6dca5dc?auto=format&fit=crop&q=80&w=2832&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D7"
          alt="table"
          width={450}
          height={450}
          className="mx-2"
        />
      </div>
    </div>
  );
};

export default Trending;
