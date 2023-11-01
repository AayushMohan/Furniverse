import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React from "react";

type Props = {};

const Taste = (props: Props) => {
  return (
    <div className="h-screen mt-80">
      <h1 className="text-3xl text-center font-serif">Choose Your Taste</h1>

      <div className="flex items-center justify-around mt-10 pb-20 bg-inherit overflow-x-scroll">
        <Image
          src="https://images.unsplash.com/photo-1597072689227-8882273e8f6a?auto=format&fit=crop&q=80&w=2835&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="table"
          width={250}
          height={250}
          className="mx-4"
        />

        <Image
          src="https://images.unsplash.com/photo-1579146510179-6d8a87d24d54?auto=format&fit=crop&q=80&w=2835&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="table"
          width={300}
          height={300}
          className="mx-4"
        />
        <Image
          src="https://images.unsplash.com/photo-1634822929277-0c51ca0e8846?auto=format&fit=crop&q=80&w=2787&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="table"
          width={400}
          height={370}
          className="mx-4"
        />
        <Image
          src="https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHRhYmxlfGVufDB8MXwwfHx8MA%3D%3D&w=800"
          alt="table"
          width={360}
          height={360}
          className="mx-4"
        />
        <Image
          src="https://plus.unsplash.com/premium_photo-1675744019321-f90d6d719da7?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&  ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2787"
          alt="table"
          width={250}
          height={250}
          className="mx-4"
        />
      </div>
      <div className="bg-inherit flex items-center justify-around">
        <ChevronLeftIcon className="h-16" />
        <ChevronRightIcon className="h-16" />
      </div>
      {/* <div className="relative h-screen">
        <Image
          src="https://images.unsplash.com/photo-1579101324336-b71150dc9378?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="chair"
          width={1500}
          height={100}
          className="object-contain"
        />
        <div className="absolute top-1/2 right-32 flex flex-col font-serif">
          <span className="text-3xl">Discounts Change </span>
          <span className="text-3xl">every three weeks</span>
          <button className="p-4 bg-[#A5988E]/70 rounded-full shadow-2xl mt-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            More Info
          </button>
        </div>
      </div> */}
    </div>
  );
};

export default Taste;
