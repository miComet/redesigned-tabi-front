import Footer from "../components/Footer";
import Header from "../components/Header";
import Image from "next/image";
import { picRecommendation } from "../typings";
import { useRouter } from "next/router";

interface Props {
  spotRecommendations: picRecommendation[];
}

const Recommendation = ({ spotRecommendations }: Props) => {
  const router = useRouter();
  return (
    <div>
      <Header />

      <div
        className="flex flex-col items-center justify-center mx-auto -ml-24
    animate-fade-in-right"
      >
        <div className="flex flex-col m-4 ml-20">
          <h1 className="text-2xl font-extrabold -ml-16 p-8">Here You Go</h1>
          {spotRecommendations.map((spot) => (
            <div
              key={spot.image_url}
              className="flex items-center space-x-2 justify-between"
            >
              <div className="relative h-24 w-40 mx-3 my-2">
                <Image
                  className="rounded-lg"
                  src={spot.image_url}
                  layout="fill"
                  objectFit="fill"
                />
              </div>
              <label className="pr-20 cursor-pointer" htmlFor={spot.image_url}>
                {spot.title}
              </label>
              <label className="pr-10 cursor-pointer" htmlFor={spot.image_url}>
                {spot.location}
              </label>
              <input
                className="accent-sky-600"
                id={spot.image_url}
                type="checkbox"
              />
            </div>
          ))}
        </div>
        <div className="flex items-center space-x-2 ml-24">
          <h3
            className="border rounded-lg px-12 py-1.5 
          bg-sky-500 text-white cursor-pointer hover:scale-105 transform transition duration-100 ease-out"
          >
            Save
          </h3>
          <h3
            onClick={() => router.push("/info")}
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

export const getServerSideProps = async () => {
  const spotRecommendations = await fetch(
    "http://localhost:8000/spot_recommendation?spot_num=5"
  ).then((res) => res.json());
  return {
    props: {
      spotRecommendations,
    },
  };
};
