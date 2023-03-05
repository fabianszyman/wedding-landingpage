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
      className="text-darkgreen"
    >
      <div
        id="hero_container"
        className="flex items-center justify-center flex-wrap text-center pt-48 md:pt-96"
      >
        <div id="headline" className="w-full pb-12">
          <h1 className="text-4xl md:text-6xl font-CormorantGaramond_Medium tracking-widest">
            SAVE THE DATE
          </h1>
        </div>
        <div id="subline" className="w-full pt-2">
          <h2 className=" text-4xl md:text-5xl font-Quicksand_Regular">
            Anne und Fabian
          </h2>
        </div>
        <div id="subline_date" className="w-full">
          <h2 className=" text-3xl md:text-4xl font-Quicksand_Medium">
            03.08.2024
          </h2>
        </div>
        <div id="button_container" className="pt-12 font-Quicksand_Medium">
          <button className="rounded-lg text-xl px-6 py-3 text-white bg-darkgreen hover:bg-teal-900 duration-300 shadow-lg shadow-gray-400">
            <a href="#antwort_section">Meine Antwort</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
