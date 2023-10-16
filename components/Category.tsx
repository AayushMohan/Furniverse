import React from "react";

type Props = {};

const Category = (props: Props) => {
  return (
    <div className="h-screen bg-[#F0f0F0] pt-20">
      <h1 className="text-3xl text-center">Shop By Category</h1>
      <div>
        <button className="mx-4 p-2 bg-[#A5988E]/70 text-[#383838] rounded-2xl">
          Living Room
        </button>
        <button className="mx-4 p-2 bg-[#A5988E]/70 text-[#383838] rounded-2xl">
          Chair
        </button>
        <button className="mx-4 p-2 bg-[#A5988E]/70 text-[#383838] rounded-2xl">
          Arm Chair
        </button>
        <button className="mx-4 p-2 bg-[#A5988E] text-[#383838] rounded-2xl">
          Stool
        </button>
        <button className="mx-4 p-2 bg-[#A5988E] text-[#383838] rounded-2xl">
          Lounger
        </button>
        <button className="mx-4 p-2 bg-[#A5988E] text-[#383838] rounded-2xl">
          Sofa
        </button>
      </div>
    </div>
  );
};

export default Category;
