import { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import PictureSelect from "../components/PictureSelect";
import Userinfo from "../components/Userinfo";

const Info = () => {
  const [info, setInfo] = useState<number>(0);
  return (
    <div>
      <Header />
      {info === 0 && <Userinfo setInfo={setInfo} />}
      {/* <Userinfo /> */}
      {info === 1 && <PictureSelect />}
      {/* <PictureSelect /> */}
      <Footer />
    </div>
  );
};

export default Info;
