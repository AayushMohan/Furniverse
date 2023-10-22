import Image from "next/image";
import React from "react";

type Props = {};

const Taste = (props: Props) => {
  return (
    <div className="h-screen mt-80">
      <h1 className="text-3xl text-center font-serif">Choose Your Taste</h1>

      <div>
        <Image
          src="https://images.unsplash.com/photo-1589535255042-88799bb1b20b?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2787"
          alt="table"
          width={250}
          height={250}
          className="mx-4"
        />
      </div>
    </div>
  );
};

export default Taste;
