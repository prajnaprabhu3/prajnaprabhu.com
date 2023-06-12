import Image from "next/image";
import React from "react";
import { photos } from "@/../data/photos";

const Gallery = () => {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden py-6 sm:py-12 md:mt-14">
      {/* <div className="absolute inset-auto h-96 w-96 scale-150"></div> */}

      {/* <div className="absolute inset-auto h-96 w-96 translate-x-full"></div> */}
      <div className="w-full">
        <div className="max-w-lg px-10">
          <h1 className="text-3xl font-bold tracking-tight ">Few Clicks</h1>
        </div>

        <div className="scrollbar-hide mt-14 flex w-full snap-x snap-mandatory scroll-px-10 gap-10 overflow-x-scroll scroll-smooth px-10">
          {photos.map((photo, id) => (
            <div
              className="md:2/3 relative aspect-[3/4] w-[90%] shrink-0 snap-start snap-always rounded-xl bg-orange-100 sm:w-[44%] md:w-[30%]"
              key={id}
            >
              <div className="absolute bottom-0 z-10 w-full rounded-xl bg-gradient-to-t from-black px-5 py-3">
                <h2 className="mt-4 text-xl font-bold text-white">
                  {photo.place}
                </h2>
                <p className="text-sm text-white/50">{photo.tag}</p>
              </div>
              <Image
                src={photo.href}
                alt="image"
                className="h-full w-full rounded-xl object-cover"
                height="250"
                width="250"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
