import Image from "next/image";
import React from "react";

type Props = {};

const Trending = (props: Props) => {
  return (
    <div className="h-screen mt-32">
      <div className="mb-10">
        <h1 className="text-4xl text-center font-serif text-[#383838]/90">
          Trending Products
        </h1>
      </div>
      <div className="flex">
        <div className="flex justify-around overflow-x-scroll text-center space-x-4">
          <div className="">
            <Image
              src="https://images.unsplash.com/photo-1602872030490-4a484a7b3ba6?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Njh8fGZ1cm5pdHVyZXN8ZW58MHwwfDB8fHww"
              alt="table"
              width={400}
              height={350}
              className="mx-20"
            />
            <span>Best Seller</span>
            <span>Dining table</span>
            <span>$400</span>
          </div>

          <div>
            <Image
              src="https://images.unsplash.com/photo-1560448205-4d9b3e6bb6db?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDh8fGZ1cm5pdHVyZXN8ZW58MHwwfDB8fHww"
              alt="table"
              width={400}
              height={350}
              className="mx-20"
            />
            <span>Best Seller</span>
            <span>Bed</span>
            <span>$500</span>
          </div>

          <div>
            <Image
              src="https://images.unsplash.com/photo-1560449752-3fd4bdbe7df0?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDZ8fGZ1cm5pdHVyZXN8ZW58MHwwfDB8fHww"
              alt="table"
              width={400}
              height={350}
              className="mx-20"
            />
            <span>Best Seller</span>
            <span>Sofa</span>
            <span>$1400</span>
          </div>

          <div>
            <Image
              src="https://images.unsplash.com/photo-1560185007-5f0bb1866cab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDd8fHxlbnwwfHx8fHw%3D"
              alt="table"
              width={400}
              height={350}
              className="mx-20"
            />
            <span>Best Seller</span>
            <span>Center Table</span>
            <span>$1800</span>
          </div>

          <div>
            <Image
              src="https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="table"
              width={400}
              height={350}
              className="mx-20"
            />
            <span>Best Seller</span>
            <span>Sofa</span>
            <span>$2000</span>
          </div>

          <div>
            <Image
              src="https://images.unsplash.com/photo-1560184897-67f4a3f9a7fa?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="table"
              width={400}
              height={350}
              className="mx-20"
            />
            <span>Best Seller</span>
            <span>Sofa</span>
            <span>$1900</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Trending;
