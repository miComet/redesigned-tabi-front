import Image from "next/image";
import { FC } from "react";

type Props = {
  info: number;
  setInfo: (val: number) => void;
};

const Userinfo: FC<Props> = ({ info, setInfo }) => {
  return (
    <div
      className="flex flex-col items-center justify-center mx-auto -ml-24
        animate-fade-in-right"
    >
      <div>
        <h1 className="text-3xl font-bold p-10 -ml-16">
          About You and Your Next Tabi
        </h1>
      </div>

      <div
        className="flex flex-col sm:flex-row items-start sm:items-center 
    gap-8 m-4 justify-center"
      >
        <h1 className="text-xl font-bold -ml-10">Your Gender</h1>
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="radio"
            name="gender"
            className="form-radio h-5 w-5 text-blue-600 focus:ring-4"
          />
          <span className="ml-2 text-gray-700"> Male </span>
        </label>
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="radio"
            name="gender"
            className="form-radio h-5 w-5 text-blue-600 focus:ring-4"
          />
          <span className="ml-2 text-gray-700"> Female </span>
        </label>
        <label className="inline-flex items-center cursor-pointer">
          <input
            type="radio"
            name="gender"
            className="form-radio h-5 w-5 text-blue-600 focus:ring-4"
          />
          <span className="ml-2 text-gray-700"> N/A </span>
        </label>
      </div>

      <div className="flex m-4 ml-20">
        <h1 className="text-xl font-bold -ml-10 pr-4">Tabi Season</h1>
        <div className="grid grid-flow-row grid-cols-2 grid-rows-2">
          <div className="px-2 py-1">
            <Image
              className="rounded-lg"
              src="/banner.jpg"
              layout="fixed"
              objectFit="fill"
              width="160"
              height="160"
            />
          </div>
          <div className="px-2 py-1">
            <Image
              className="rounded-lg"
              src="/banner.jpg"
              layout="fixed"
              objectFit="fill"
              width="160"
              height="160"
            />
          </div>
          <div className="px-2 py-1">
            <Image
              className="rounded-lg"
              src="/banner.jpg"
              layout="fixed"
              objectFit="fill"
              width="160"
              height="160"
            />
          </div>
          <div className="px-2 py-1">
            <Image
              className="rounded-lg"
              src="/banner.jpg"
              layout="fixed"
              objectFit="fill"
              width="160"
              height="160"
            />
          </div>
        </div>
      </div>

      <h3
        onClick={() => setInfo(1)}
        className="border rounded-lg px-8 ml-24 py-1.5 bg-sky-500 text-white cursor-pointer"
      >
        Submit
      </h3>
    </div>
  );
};

export default Userinfo;
