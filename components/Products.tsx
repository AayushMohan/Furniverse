import Image from "next/image";
import React from "react";

type Props = {};

const Products = (props: Props) => {
  return (
    <div>
      <div>
        <Image
          src="https://images.unsplash.com/photo-1636138389529-d35a2a348dc1?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGluaW5nJTIwdGFibGV8ZW58MHwwfDB8fHww"
          alt="table"
          width={450}
          height={450}
          className="mx-2"
        />
      </div>
    </div>
  );
};

export default Products;
