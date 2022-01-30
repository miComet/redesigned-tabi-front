import Image from "next/image";
import { PlayIcon } from "@heroicons/react/solid";

const Banner = () => {
  return (
    <div className="relative h-screen">
      <Image
        className="opacity-80"
        src="/banner.jpg"
        layout="fill"
        objectFit="cover"
        objectPosition="center 20%"
      />
      <div className="absolute top-1/2 w-full space-y-7 text-center">
        <PlayIcon
          className="text-sky-600 mx-auto h-16 active:scale-100 
        transition duration-150 cursor-pointer transform hover:scale-110"
        />
        <p className="text-xl sm:text-5xl">Your Personal Tabi Adviser</p>

        <button
          className="px-12 py-2 shadow-md rounded-lg text-white 
          bg-sky-500  my-3 hover:shadow-xl active:scale-90 text-sm
          transition duration-150"
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default Banner;
