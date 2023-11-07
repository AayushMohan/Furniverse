import Image from "next/image";
import React from "react";

type Props = {};

const Trending = (props: Props) => {
  return (
    <div className="h-screen">
      <div className="mb-10">
        <h1 className="text-4xl text-center font-serif text-[#383838]/90">
          Trending Products
        </h1>
      </div>
      <div className="flex justify-between overflow-x-scroll">
        <Image
          src="https://images.unsplash.com/photo-1602872030490-4a484a7b3ba6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGZ1cm5pdHVyZXN8ZW58MHwwfDB8fHww"
          alt="table"
          width={400}
          height={350}
          className="mx-2"
        />

        <Image
          src="https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGZ1cm5pdHVyZXN8ZW58MHwwfDB8fHww"
          alt="table"
          width={400}
          height={350}
          className="mx-2"
        />

        <Image
          src="https://images.unsplash.com/photo-1560449752-3fd4bdbe7df0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGZ1cm5pdHVyZXN8ZW58MHwwfDB8fHww"
          alt="table"
          width={400}
          height={350}
          className="mx-2"
        />
        <Image
          src="https://images.unsplash.com/photo-1560185007-5f0bb1866cab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D"
          alt="table"
          width={300}
          height={250}
          className="mx-2"
        />
        <Image
          src="https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="table"
          width={300}
          height={250}
          className="mx-2"
        />
        <Image
          src="https://images.unsplash.com/photo-1560184897-67f4a3f9a7fa?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="table"
          width={300}
          height={250}
          className="mx-2"
        />
        <Image
          src="https://images.unsplash.com/photo-1549187774-b4e9b0445b41?q=80&w=2874&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="table"
          width={300}
          height={250}
          className="mx-2"
        />
      </div>
    </div>
  );
};

export default Trending;
