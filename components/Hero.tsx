import Image from "next/image";
import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div>
      <h1 className="text-3xl font-serif">
        {" "}
        <span className="text-[#D7D0CB] font-serif">The best</span> selection of
        furniture
      </h1>
      <p>
        We make your life more comfortable with quality and comfortable
        furniture.
      </p>
      <div className="flex items-start justify-evenly mx-10 mt-10">
        <div>
          <p>What do we provide to you?</p>
        </div>
        <div>
          <h1>Rich Experience</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
            adipisci?
          </p>
          <button>More Info</button>
        </div>
        <div>
          <h1>Affordable Price</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
            nihil?
          </p>
          <button>More</button>
        </div>
        <div>
          <h1>Many Choices</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
            labore?
          </p>
          <button>More Info</button>
        </div>
        <div>
          <h1>Shop By Category</h1>
          <button>Living Room Chair</button>
          <button>Chair</button>
          <button>Arm Chair</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
