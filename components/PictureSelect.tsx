import Image from "next/image";

const PictureSelect = () => {
  return (
    <div
      className="flex flex-col items-center justify-center mx-auto -ml-24
        animate-fade-in-right"
    >
      <div className="flex flex-col m-4 ml-20">
        <h1 className="text-xl font-bold -ml-16 p-8">
          Choose Your Favorite One
        </h1>
        <div className="grid grid-flow-row grid-cols-2 grid-rows-2">
          <div className="relative h-48 w-48 mx-3 my-2">
            <Image
              className="rounded-lg"
              src="/banner.jpg"
              layout="fill"
              objectFit="fill"
            />
            <div
              className="absolute bottom-0 w-full h-1/5 bg-gray-400
              rounded-b-lg opacity-90"
            ></div>
          </div>
          <div className="relative h-48 w-48 mx-3 my-2">
            <Image
              className="rounded-lg"
              src="/banner.jpg"
              layout="fill"
              objectFit="fill"
            />
            <div
              className="absolute bottom-0 w-full h-1/5 bg-gray-400
              rounded-b-lg opacity-90"
            ></div>
          </div>
          <div className="relative h-48 w-48 mx-3 my-2">
            <Image
              className="rounded-lg"
              src="/banner.jpg"
              layout="fill"
              objectFit="fill"
            />
            <div
              className="absolute bottom-0 w-full h-1/5 bg-gray-400
              rounded-b-lg opacity-90"
            ></div>
          </div>
          <div className="relative h-48 w-48 mx-3 my-2">
            <Image
              className="rounded-lg"
              src="/banner.jpg"
              layout="fill"
              objectFit="fill"
            />
            <div
              className="absolute bottom-0 w-full h-1/5 bg-gray-400
              rounded-b-lg opacity-90"
            ></div>
          </div>
        </div>
      </div>

      <h3 className="border rounded-lg px-8 ml-16 py-1.5 text-sky-500 border-sky-500 cursor-pointer">
        Shuffle
      </h3>
    </div>
  );
};

export default PictureSelect;
