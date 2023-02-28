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
      className=" h-full "
    >
      <div
        id="contact-form"
        className="flex items-center justify-center flex-wrap px-4"
      >
        <div id="subtitle" className="w-full py-4 ">
          <h2 className="text-3xl font-RobotoCondensed_Regular">
            Meine Antwort
          </h2>
        </div>
      </div>
      <ContactForm />
    </section>
  );
};

export default AntwortSection;
