import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PictureSelect from "../components/PictureSelect";
import Userinfo from "../components/Userinfo";
import { Spot } from "../typings";
interface Props {
  pictureResults: Spot[];
}
const Info = ({ pictureResults }: Props) => {
  const [info, setInfo] = useState<number>(0);
  return (
    <div>
      <Header />
      {info === 0 && <Userinfo setInfo={setInfo} />}
      {/* <Userinfo /> */}
      {info === 1 && <PictureSelect pictureResults={pictureResults} />}
      {/* <PictureSelect /> */}
      <Footer />
    </div>
  );
};

export default Info;

export const getServerSideProps = async () => {
  const pictureResults = await fetch(
    "http://localhost:8000/pic?pic_num=4"
  ).then((res) => res.json());
  return {
    props: {
      pictureResults,
    },
  };
};
