import React from "react";
import bg from "public/background.png";

const ContactForm = () => {
  return (
    <form
      className="px-4 pt-6 h-screen"
      style={{
        backgroundImage: `url(${bg.src})`,
        width: "100%",
        height: "100%",
      }}
    >
      <div className="grid gap-6 mb-4 md:grid-cols-2">
        <div>
          <label for="first_name" class="block mb-2 text-md font-medium ">
            Name
          </label>
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300  text-lg rounded-lg focus:ring-darkgreen focus:border-darkgreen block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 "
            placeholder="Max Mustermann"
            required
          ></input>
        </div>

        <div>
          <label for="phone" class="block mb-2 text-md font-medium ">
            Telefon
          </label>
          <input
            type="tel"
            id="phone"
            className="bg-gray-50 border border-gray-300  text-lg rounded-lg focus:ring-darkgreen focus:border-darkgreen block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 "
            placeholder="0157-3292929"
            //pattern="[0-9]{3}-[0-9]{3}"
            required
          ></input>
        </div>
      </div>
      <div className="mb-12">
        <label for="email" class="block mb-2 text-md font-medium ">
          E-Mail
        </label>
        <input
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300  text-lg rounded-lg focus:ring-darkgreen focus:border-darkgreen block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 "
          placeholder="max.mustermann@gmail.com"
          required
        ></input>
      </div>
      <div className="flex items-center mb-8">
        <input
          required
          id="default-radio-1"
          type="radio"
          value=""
          name="default-radio"
          className="w-8 h-8 text-darkgreen bg-gray-100 border-gray-300 focus:ring-darkgreen  focus:ring-2 "
        ></input>
        <label for="default-radio-1" className="ml-2 text-lg font-medium">
          Ja, ich werde kommen
        </label>
      </div>
      <div className="flex items-center mb-8">
        <input
          required
          id="default-radio-2"
          type="radio"
          value=""
          name="default-radio"
          className="w-8 h-8 text-darkgreen bg-gray-100 border-gray-300 focus:ring-darkgreen  focus:ring-2 "
        ></input>
        <label for="default-radio-2" className="ml-2 text-lg font-medium">
          Ich kann leider nicht kommen
        </label>
      </div>
      {/*
      <div className="flex items-center">
        <input
          checked
          id="default-radio-2"
          type="radio"
          value=""
          name="default-radio"
          class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        ></input>
        <label
          for="default-radio-2"
          class="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Checked state
        </label>
      </div>
*/}
      <button
        type="submit"
        className="text-white bg-darkgreen hover:bg-gray-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full sm:w-auto px-5 py-4 mt-6 text-center"
      >
        SENDEN
      </button>
    </form>
  );
};

export default ContactForm;
