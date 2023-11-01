import Image from "next/image";
import React from "react";

type Props = {};

const Share = (props: Props) => {
  return (
    <div className="h-screen mt-40">
      <h1>Share your Home with Us</h1>
      <div className="flex justify-between">
        <Image
          src="https://images.unsplash.com/photo-1636138389529-d35a2a348dc1?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZGluaW5nJTIwdGFibGV8ZW58MHwwfDB8fHww"
          alt="table"
          width={450}
          height={450}
          className=""
        />
        <Image
          src="https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGludGVyaW9yJTIwZGVzaWdufGVufDB8MHwwfHx8MA%3D%3D"
          alt="table"
          width={450}
          height={450}
          className="mx-4"
        />
        <Image
          src="https://images.unsplash.com/photo-1602872030490-4a484a7b3ba6?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="table"
          width={450}
          height={450}
          className="mx-4"
        />
        <Image
          src="https://images.unsplash.com/photo-1615876063860-d971f6dca5dc?auto=format&fit=crop&q=80&w=2832&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D7"
          alt="table"
          width={450}
          height={450}
          className="mx-4"
        />
      </div>
    </div>
  );
};

export default Share;
