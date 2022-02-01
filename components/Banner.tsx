import Image from "next/image";
import { PlayIcon } from "@heroicons/react/solid";

const Banner = () => {
  return (
    <div>
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
      <div className="flex flex-col lg:flex-row my-5">
        <div className="relative flex-1 p-5">
          <Image
            className="rounded-lg"
            src="/banner.jpg"
            layout="intrinsic"
            objectFit="contain"
            width="700"
            height="440"
          />
        </div>
        <div className="flex flex-col flex-1 p-5 lg:justify-center">
          <h1 className="text-4xl mb-3 w-128">
            Sed ut perspiciatis unde omnis
          </h1>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
          </p>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row my-5">
        <div className="flex flex-col flex-1 p-5 lg:justify-center">
          <h1 className="text-4xl mb-3 w-128">
            Sed ut perspiciatis unde omnis
          </h1>
          <p>
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem.
          </p>
        </div>
        <div className="relative flex-1 p-5">
          <Image
            className="rounded-lg"
            src="/banner.jpg"
            layout="intrinsic"
            objectFit="contain"
            width="700"
            height="440"
          />
        </div>
      </div>

      <div className="flex m-10 items-center justify-center space-x-4">
        <p className="text-xl mb-3 w-3/5 p-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore
        </p>
        <h3
          className="border rounded-md h-10 px-8 py-1.5 
        bg-sky-500 text-white cursor-pointer whitespace-nowrap"
        >
          Join Today
        </h3>
      </div>
    </div>
  );
};

export default Banner;
