import Image from "next/image";
import React from "react";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div>
      <h1>
        {" "}
        <span>The best</span> selection of furniture
      </h1>
      <p>
        We make your life more comfortable with quality and comfortable
        furniture.
      </p>

      <div>
        <p>What do we provide to you?</p>
      </div>

      <div>
        <h1>Rich Experience</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi,
          adipisci?
        </p>
      </div>

      <div>
        <h1>Affordable Price</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque,
          nihil?
        </p>
      </div>

      <div>
        <h1>Many Choices</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, labore?
        </p>
      </div>
    </div>
  );
};

export default Hero;
