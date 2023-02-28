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
      className="text-darkgreen"
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
        <div id="subtitle" className="w-full py-4 ">
          <h2 className="text-3xl font-RobotoCondensed_Regular">
            Wir wollen heiraten!
          </h2>
        </div>
        <div id="subtitle" className="w-full">
          <h2 className="text-2xl font-RobotoCondensed_Regular">
            Dies wollen wir mit euch am 3. August 2024 in der{" "}
            <a
              className="underline"
              href="https://www.orangerie-schloss-bekond.de/"
            >
              Orangerie - Schloss Bekond bei Trier
            </a>{" "}
            feiern.
          </h2>
        </div>
        <div id="further_infos" className="w-full py-4">
          <h2 className="text-xl font-RobotoCondensed_Regular">
            weitere Informationen folgen...
          </h2>
        </div>
      </div>
    </section>
  );
};

export default DetailsSection;
