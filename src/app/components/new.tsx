import Image from "next/image";
import { photos } from "../../../data/photos";

const New = () => {
  return (
    <div className="mt-16 sm:mt-20">
      {/* <div className="max-w-lg px-10"> */}
      <h1 className="px-6 text-3xl font-bold tracking-tight md:px-10 my-10 ">
        Few Clicks
      </h1>
      {/* </div> */}
      <div className="-my-4 flex snap-x snap-mandatory justify-start gap-5 overflow-hidden overflow-x-auto py-4 sm:gap-8 lg:snap-none lg:justify-center lg:overflow-x-hidden">
        {photos.map((image, id) => (
          <div
            key={id}
            className="relative aspect-[9/10] w-44 flex-none snap-center overflow-hidden rounded-xl sm:w-72 sm:rounded-2xl"
          >
            {/* <div className="absolute bottom-0 z-10 w-full rounded-xl bg-gradient-to-t from-black px-5 py-3">
              <h2 className="text-sm mt-4 md:text-xl font-bold text-white">
                {image.place}
              </h2>
              <p className="text-xs md:text-sm text-white/50">{image.tag}</p>
            </div> */}

            <Image
              src={image.href}
              alt=""
              width="200"
              height="200"
              sizes="(min-width: 640px) 18rem, 11rem"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default New;
