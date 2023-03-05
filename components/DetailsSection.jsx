import React from "react";
import bg from "public/background.png";
import Image from "next/image";
import AnneUndFabianImage from "../public/anneundfabian.png";

const DetailsSection = () => {
  return (
    <section
      id="home"
      style={{
        backgroundImage: `url(${bg.src})`,
        width: "100%",
        height: "100%",
      }}
      className="text-darkgreen font-Quicksand_Regular"
    >
      <div
        id="wann_und_wo_section"
        className="flex items-center justify-center flex-wrap px-6"
      >
        <div id="image_container" className="pt-6 motion-safe:animate-fadeIn">
          <Image
            src={AnneUndFabianImage}
            alt="picture of Anne und Fabian"
            width={500}
            height={500}
          />
        </div>
        <div id="subtitle" className="w-full py-6 ">
          <h2 className="text-3xl ">Wir heiraten!</h2>
        </div>
        <div id="subtitle" className="w-full">
          <h2 className="text-2xl ">
            Dies wollen wir mit euch am <b>03. August 2024 </b> in der{" "}
            <a
              className="underline font-bold"
              href="https://www.orangerie-schloss-bekond.de/"
            >
              Orangerie - Schloss Bekond
            </a>{" "}
            bei Trier feiern.
          </h2>
        </div>
        <div id="further_infos" className="w-full py-12">
          <h2 className="text-xl ">weitere Informationen folgen...</h2>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
