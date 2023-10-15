import React from "react";

type Props = {};

const Category = (props: Props) => {
  return (
    <div className="h-screen bg-[#F0f0F0]">
      <h1 className="text-3xl">Shop By Category</h1>
      <div>
        <button>Living Room Chair</button>
        <button>Chair</button>
        <button>Arm Chair</button>
      </div>
    </div>
  );
};

export default Category;
