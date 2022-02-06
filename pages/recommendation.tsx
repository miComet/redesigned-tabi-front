import Footer from "../components/Footer";
import Header from "../components/Header";
import Image from "next/image";

const Recommendation = () => {
  return (
    <div>
      <Header />

      <div
        className="flex flex-col items-center justify-center mx-auto -ml-24
    animate-fade-in-right"
      >
        <div className="flex flex-col m-4 ml-20">
          <h1 className="text-2xl font-extrabold -ml-16 p-8">Here You Go</h1>
          <div className="flex items-center space-x-2">
            <div className="relative h-24 w-40 mx-3 my-2">
              <Image
                className="rounded-lg"
                src="/banner.jpg"
                layout="fill"
                objectFit="fill"
              />
            </div>
            <label className="pr-20 cursor-pointer" htmlFor="checkbox1">
              Destination
            </label>
            <label className="pr-10 cursor-pointer" htmlFor="checkbox1">
              Prefecture 1
            </label>
            <input className="accent-sky-600" id="checkbox1" type="checkbox" />
          </div>
        </div>
        <div className="flex items-center space-x-2 ml-24">
          <h3
            className="border rounded-lg px-12 py-1.5 
          bg-sky-500 text-white cursor-pointer hover:scale-105 transform transition duration-100 ease-out"
          >
            Save
          </h3>
          <h3
            className="border rounded-lg px-12 py-1.5 text-sky-500 border-sky-500 cursor-pointer
          hover:scale-105 transform transition duration-100 ease-out"
          >
            Redo
          </h3>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Recommendation;
