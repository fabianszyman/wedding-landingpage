import React from "react";
import bg from "public/background.png";

const Hero = () => {
  return (
    <section
      name="home"
      id="home"
      style={{
        backgroundImage: `url(${bg.src})`,
        width: "100%",
        height: "100%",
      }}
      className="text-darkgreen "
    >
      <div
        id="hero_container"
        className="flex items-center justify-center flex-wrap text-center "
      >
        <div id="headline" className="w-full pt-48 pb-12">
          <h1 className="text-4xl font-CormorantGaramond_Medium">
            SAVE THE DATE
          </h1>
        </div>
        <div id="subline" className="w-full pt-2">
          <h2 className=" text-4xl font-RobotoCondensed_Regular">
            Anne & Fabian
          </h2>
        </div>
        <div id="subline_date" className="w-full">
          <h2 className=" text-3xl font-RobotoCondensed_Regular">03.08.2024</h2>
        </div>
        <div id="button_container" className="pt-12">
          <button className="rounded-lg px-4 py-3 text-white bg-darkgreen hover:bg-teal-900 duration-300">
            <a href="#antwort_section">MEINE ANTWORT</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
