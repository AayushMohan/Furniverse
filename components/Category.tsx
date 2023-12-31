import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React from "react";

type Props = {};

const Category = (props: Props) => {
  return (
    <div className="h-screen bg-[#F0f0F0] pt-20">
      <h1 className="text-3xl text-center font-serif">Shop By Category</h1>
      <div className="flex items-center justify-center mt-10">
        <button className="mx-4 p-2 bg-[#A5988E]/70 text-[#383838]/90 rounded-2xl">
          Living Room
        </button>
        <button className="mx-4 p-2 bg-[#A5988E]/70 text-[#383838]/90 rounded-2xl">
          Chair
        </button>
        <button className="mx-4 p-2 bg-[#A5988E]/70 text-[#383838]/90 rounded-2xl">
          Arm Chair
        </button>
        <button className="mx-4 p-2 bg-[#A5988E]/70 text-[#383838]/90 rounded-2xl">
          Stool
        </button>
        <button className="mx-4 p-2 bg-[#A5988E]/70 text-[#383838]/90 rounded-2xl">
          Lounger
        </button>
        <button className="mx-4 p-2 bg-[#A5988E]/70 text-[#383838]/90 rounded-2xl">
          Sofa
        </button>
      </div>
      <div className="flex items-center justify-around mt-10 pb-20 bg-inherit overflow-x-scroll">
        <Image
          src="https://images.unsplash.com/photo-1589535255042-88799bb1b20b?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2787"
          alt="table"
          width={250}
          height={250}
          className="mx-4"
        />

        <Image
          src="https://images.unsplash.com/photo-1581428982868-e410dd047a90?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2787"
          alt="table"
          width={300}
          height={300}
          className="mx-4"
        />

        <Image
          src="https://plus.unsplash.com/premium_photo-1670950411934-e21abf39191e?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&w=2787"
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
    </div>
  );
};

export default Category;
