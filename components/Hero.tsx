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
      </div>
    </div>
  );
};

export default Hero;
