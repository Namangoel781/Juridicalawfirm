import React, { useState } from "react";
import Navbar from "../Navbar";
import emailjs from "@emailjs/browser";
import Footer from "../Footer";
import Lottie from "lottie-react";
import animationData from "../../assets/contact-us.json";
import animationData2 from "../../assets/contactus-2.json";
import { Repeat } from "react-feather";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [fail, setFail] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!name || !email || !message) {
      setFail(true);
      return;
    }

    emailjs
      .sendForm("service_0i0vu9f", "template_11vfifg", e.target, {
        publicKey: "EISwlG-nKltCMWicC",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setSuccess(true);
          setName(""); // Reset name field
          setEmail(""); // Reset email field
          setMessage("");
        },
        (error) => {
          console.log("FAILED...", error.text);
          setFail(true);
        }
      );
  };

  return (
    <>
      <Navbar />
      <div className="h-screen bg-gray-950 ">
        <div className="Left relative left-40 top-10 w-5/6 md:top-2 left-8">
          <a
            href="https://www.google.com/maps/place/Juridica+Solutio+Law+Associates/@28.5993301,77.1402535,12z/data=!4m10!1m2!2m1!1sjuridica+solutio+law+associates!3m6!1s0x390ce49b84555555:0x994de1b0917ca3bc!8m2!3d28.5993301!4d77.2926888!15sCh9qdXJpZGljYSBzb2x1dGlvIGxhdyBhc3NvY2lhdGVzkgEIbGF3X2Zpcm3gAQA!16s%2Fg%2F11c2jx3hqk?entry=ttu"
            class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 relative top-32"
          >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Juridica Solutio Law Associates - Delhi
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Parwana Apartments, B-7, Mayur Vihar Phase 1 Extension, New Delhi,
              Delhi 110091
            </p>
          </a>
          {/* <a
            href="#"
            class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 relative top-32"
          >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </a> */}
        </div>

        <Lottie animationData={animationData2} className="h-2/3" />
        <div className="Right relative  lg:bottom-96 left-40 w-5/6 md: bottom-72 left-8">
          <a
            href="https://www.google.com/maps/place/Juridica+Solutio+Law+Associates+%7C+Advocates/@28.4620562,77.3827214,12z/data=!4m10!1m2!2m1!1sjuridica+solutio+law+associates!3m6!1s0x390cc11e40ace251:0x90946c4a7a11b052!8m2!3d28.4620562!4d77.5351567!15sCh9qdXJpZGljYSBzb2x1dGlvIGxhdyBhc3NvY2lhdGVzkgEIbGF3X2Zpcm3gAQA!16s%2Fg%2F11vdlvtyv1?entry=ttu"
            class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 relative top-32"
          >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Juridica Solutio Law Associates - Greater Noida
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              4, Parsavnath Platinum Commercial Space, Block D, Swarn Nagari,
              Sector Swarn Nagri, Greater Noida, Uttar Pradesh 201310
            </p>
          </a>
          {/* <a
            href="#"
            class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 relative top-32"
          >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </a> */}
        </div>
        {/* <img
          className="h-screen w-screen relative"
          src="https://images.unsplash.com/photo-1528747045269-390fe33c19f2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image description"
        /> */}
        {/* <div className="absolute flex justify-center items-center flex-col top-1/2 left-1/2">
          <a
            href="#"
            class=" max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 "
          >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </a>
          <a
            href="#"
            class=" max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 "
          >
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Noteworthy technology acquisitions 2021
            </h5>
            <p class="font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
          </a>
        </div> */}
      </div>
      <div className="xl:grid grid-cols-2 lg:grid grid-cols-2">
        <div>
          <Lottie animationData={animationData} />
        </div>
        <form className="m-4 py-4" onSubmit={sendEmail}>
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your Email
          </label>
          <input
            type="text"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            name="user_email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white my-4"
          >
            Your Name
          </label>
          <input
            type="text"
            id="name"
            className="rounded-none rounded-e-lg bg-gray-50 border text-gray-900 focus:ring-blue-500 focus:border-blue-500 block flex-1 min-w-0 w-full text-sm border-gray-300 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="elonmusk"
            name="user_name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <div className="my-4">
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your message
            </label>
            <input
              id="message"
              name="message"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your thoughts here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
          {success && (
            <div
              className="success ease-in flex items-center p-4 mb-4 text-green-800 border-t-4 border-green-300 bg-green-50 dark:text-green-400 dark:bg-gray-800 dark:border-green-800"
              role="alert"
            >
              Message sent successfully!
            </div>
          )}
          {fail && !success && (
            <div
              className="fail ease-in flex items-center p-4 mb-4 text-red-800 border-t-4 border-red-300 bg-red-50 dark:text-red-400 dark:bg-gray-800 dark:border-red-800"
              role="alert"
            >
              All Fields are required!
            </div>
          )}
        </form>
      </div>
      <div className="h-full grid lg:grid-cols-2 w-auto my-4 md:grid-cols-1 place-items-center ">
        <div className="map-1 my-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3503.014890472699!2d77.29268880000001!3d28.5993301!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce49b84555555%3A0x994de1b0917ca3bc!2sJuridica%20Solutio%20Law%20Associates!5e0!3m2!1sen!2sin!4v1715153755188!5m2!1sen!2sin"
            width="400"
            height="450"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="map-2 my-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112242.57960178563!2d77.3827213972656!3d28.462056199999992!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cc11e40ace251%3A0x90946c4a7a11b052!2sJuridica%20Solutio%20Law%20Associates%20%7C%20Advocates!5e0!3m2!1sen!2sin!4v1716821788921!5m2!1sen!2sin"
            width="400"
            height="450"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
