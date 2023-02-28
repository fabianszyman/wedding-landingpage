import React from "react";

const ContactForm = () => {
  return (
    <form className="px-4 pt-6 h-screen ">
      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label for="first_name" class="block mb-2 text-sm font-medium ">
            Name:
          </label>
          <input
            type="text"
            id="first_name"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Anne Reiter"
            required
          ></input>
        </div>

        <div>
          <label for="phone" class="block mb-2 text-sm font-medium ">
            Telefon
          </label>
          <input
            type="tel"
            id="phone"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="0157-3292929"
            //pattern="[0-9]{3}-[0-9]{3}"
            required
          ></input>
        </div>
      </div>
      <div className="mb-12">
        <label for="email" class="block mb-2 text-sm font-medium ">
          E-Mail
        </label>
        <input
          type="email"
          id="email"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
          placeholder="anne.reiter@muster.com"
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
          className="w-8 h-8 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 "
        ></input>
        <label for="default-radio-1" className="ml-2 text-mdd font-medium">
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
          className="w-8 h-8 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 "
        ></input>
        <label for="default-radio-2" className="ml-2 text-mdd font-medium">
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
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-4 mt-6 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Senden
      </button>
    </form>
  );
};

export default ContactForm;