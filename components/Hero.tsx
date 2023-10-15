import Image from "next/image";
import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="h-screen bg-[#F0f0F0]">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-serif font-thin mx-10 p-10">
          {" "}
          <span className="text-[#D7D0CB] font-serif">The best</span> selection
          of furniture
        </h1>
        <p className="p-10 m-10">
          We make your life more comfortable with quality and comfortable
          furniture.
        </p>
      </div>

      <div className="flex">
        <Image
          src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2900&q=80"
          alt=""
          width={700}
          height={400}
        />
      </div>

      <div className="flex items-start justify-evenly mx-20 mt-10">
        <div>
          <p className="text-3xl font-serif text-[#383838]/50">
            <span className="text-[#383838]">What </span>
            do we Provide to you?
          </p>
        </div>

        <div>
          <h1 className="font-bold">Rich experience</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            adipisci?
          </p>
          <button>More Info</button>
        </div>
        <div>
          <h1 className="font-bold">Affordable Price</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            nihil?
          </p>
          <button>More Info</button>
        </div>
        <div>
          <h1 className="font-bold">Many Choices</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
            labore?
          </p>
          <button>More Info</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
