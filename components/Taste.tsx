import Image from "next/image";
import React from "react";

type Props = {};

const Taste = (props: Props) => {
  return (
    <div className="h-screen mt-80">
      <h1 className="text-3xl text-center font-serif">Choose Your Taste</h1>

      <div className="flex items-center justify-around mt-10 pb-20 bg-inherit overflow-hidden">
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
    </div>
  );
};

export default Taste;