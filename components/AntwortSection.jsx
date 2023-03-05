import React from "react";
import ContactForm from "./ContactForm";
import bg from "public/background.png";

const AntwortSection = () => {
  return (
    <section
      id="antwort_section"
      style={{
        backgroundImage: `url(${bg.src})`,
        width: "100%",
        height: "100%",
      }}
      className="font-Quicksand_Regular"
    >
      <div
        id="contact-form"
        className="flex items-center justify-center flex-wrap px-4"
      >
        <div id="subtitle" className="w-full pt-24 ">
          <h2 className="text-3xl">Meine Antwort</h2>
        </div>
      </div>
      <ContactForm />
    </section>
  );
};

export default AntwortSection;
