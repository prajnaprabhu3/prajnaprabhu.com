"use client";

import Image from "next/image";
import { useState } from "react";

const BlurImage: React.FC<{ image: string }> = ({ image }) => {
  const [isLoading, setLoading] = useState(true);

  return (
    // <a href="#" className="group">
    <div className="md:mx-8 aspect-w-2 aspect-h-1 w-36  md:w-60 lg:w-60 overflow-hidden rounded-lg  xl:aspect-w-7 xl:aspect-h-2">
      <Image
        alt=""
        src={image}
        layout="fill"
        objectFit="cover"
        className={`
              duration-700 ease-in-out group-hover:opacity-75
              ${
                isLoading
                  ? "scale-110 blur-2xl grayscale"
                  : "scale-100 blur-0 grayscale-0"
              })`}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
    // </a>
  );
};

export default BlurImage;
