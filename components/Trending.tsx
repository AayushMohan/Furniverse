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
          src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="table"
          width={450}
          height={450}
          className="mx-2"
        />
        <Image
          src="https://images.unsplash.com/photo-1632935187086-49a9d8027292?q=80&w=2822&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="table"
          width={450}
          height={450}
          className="mx-2"
        />
        <Image
          src="https://images.unsplash.com/photo-1604578762246-41134e37f9cc?q=80&w=2908&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="table"
          width={450}
          height={450}
          className="mx-2"
        />
        <Image
          src="https://images.unsplash.com/photo-1556020685-ae41abfc9365?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="table"
          width={450}
          height={450}
          className="mx-2"
        />

        <Image
          src="https://images.unsplash.com/photo-1589135003135-2a30f21cd08c?q=80&w=2848&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="table"
          width={450}
          height={450}
          className="mx-2"
        />
        <Image
          src="https://images.unsplash.com/photo-1589535255042-88799bb1b20b?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="table"
          width={450}
          height={450}
          className="mx-2"
        />
        <Image
          src="https://images.unsplash.com/photo-1549488344-cbb6c34cf08b?q=80&w=1870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="table"
          width={450}
          height={450}
          className="mx-2"
        />
        <Image
          src="https://images.unsplash.com/photo-1698927100805-2a32718a7e05?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTEyfHxmdXJuaXR1cmVzfGVufDB8MXwyfHx8MA%3D%3D"
          alt="table"
          width={450}
          height={450}
          className="mx-2"
        />
        <Image
          src="https://images.unsplash.com/photo-1698870157085-11632d2ddef8?q=80&w=2580&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="table"
          width={450}
          height={450}
          className="mx-2"
        />
      </div>
    </div>
  );
};

export default Trending;
