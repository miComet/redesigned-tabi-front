import Image from "next/image";
import { Transition } from "@headlessui/react";
import { useTimeoutFn } from "react-use";
import { useRouter } from "next/router";
import { Spot } from "../typings";
import { useState } from "react";
interface Props {
  pictureResults: Spot[];
}
const PictureSelect = ({ pictureResults }: Props) => {
  console.log(pictureResults);
  const router = useRouter();
  const [isShowing, setIsShowing] = useState(true);
  const [, , resetIsShowing] = useTimeoutFn(() => setIsShowing(true), 500);
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
          {pictureResults.map((picture) => (
            <div
              id={picture.image_url}
              className="relative h-48 w-48 mx-3 my-2 hover:scale-95 cursor-pointer transition-all ease-in-out duration-200"
            >
              <Transition
                className="relative h-48 w-48"
                show={isShowing}
                enter="transition-opacity duration-75"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity duration-150"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Image
                  className="rounded-lg"
                  src={picture.image_url}
                  layout="fill"
                  objectFit="fill"
                />
                <div
                  className="absolute bottom-0 w-full h-1/5 bg-gray-400
              rounded-b-lg opacity-90 text-xs"
                >
                  {picture.title}
                </div>
              </Transition>
            </div>
          ))}
        </div>
      </div>

      <h3
        onClick={() => {
          setIsShowing(false);
          resetIsShowing();
          router.push("/info");
        }}
        className="border rounded-lg px-8 ml-16 py-1.5 text-sky-500 border-sky-500 cursor-pointer
        hover:scale-105 transform transition duration-300 ease-out"
      >
        Shuffle
      </h3>
    </div>
  );
};

export default PictureSelect;
