import React from "react";
import bg from "public/background.png";

const ContactForm = () => {
  // Handles the submit event on form submit.
  const handleSubmit = async (event) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form.
    const data = {
      first: event.target.first.value,
      email: event.target.email.value,
      phone: event.target.phone.value,
    };

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint = "/api/form";

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: "POST",
      // Tell the server we're sending JSON.
      headers: {
        "Content-Type": "application/json",
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
    alert(`Daten erfolgreich übermittelt: ${result.data}`);
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="px-4 pt-6 h-screen font-Quicksand_Regular tracking-wider"
      style={{
        backgroundImage: `url(${bg.src})`,
        width: "100%",
        height: "100%",
      }}
    >
      <div className="grid gap-4 mb-2 md:grid-cols-2">
        <div>
          <label
            htmlFor="first_name"
            className="block mb-2 text-md font-medium "
          >
            Name
          </label>
          <input
            type="text"
            id="first"
            name="first"
            className="bg-gray-50 border border-gray-300  text-lg rounded-lg focus:ring-darkgreen focus:border-darkgreen block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 "
            placeholder="Max Mustermann"
            required
          ></input>
        </div>

        <div>
          <label htmlFor="phone" className="block mb-2 text-md font-medium ">
            Telefon
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="bg-gray-50 border border-gray-300  text-lg rounded-lg focus:ring-darkgreen focus:border-darkgreen block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 "
            placeholder="0157-3292929"
            //pattern="[0-9]{3}-[0-9]{3}"
            required
          ></input>
        </div>
      </div>
      <div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-md font-medium ">
          E-Mail
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="bg-gray-50 border border-gray-300  text-lg rounded-lg focus:ring-darkgreen focus:border-darkgreen block w-full p-2.5  dark:border-gray-600 dark:placeholder-gray-400 "
          placeholder="max.mustermann@gmail.com"
          required
        ></input>
      </div>
      <div className="flex items-center mb-6">
        <input
          required
          id="default-radio-1"
          type="radio"
          value=""
          name="default-radio"
          className="w-8 h-8 text-darkgreen bg-gray-100 border-gray-300 focus:ring-darkgreen  focus:ring-2 "
        ></input>
        <label htmlFor="default-radio-1" className="ml-2 text-lg font-medium">
          Ja, ich werde kommen
        </label>
      </div>
      <div className="flex items-center mb-6">
        <input
          required
          id="default-radio-2"
          type="radio"
          value=""
          name="default-radio"
          className="w-8 h-8 text-darkgreen bg-gray-100 border-gray-300 focus:ring-darkgreen  focus:ring-2 "
        ></input>
        <label htmlFor="default-radio-2" className="ml-2 text-lg font-medium">
          Ich kann leider nicht kommen
        </label>
      </div>
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
