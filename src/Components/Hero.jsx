import React, { useState } from "react";

import "./Hero.css";
import Navbar from "./Navbar";
import AOS from "aos";
import Accordian from "./Accordian";
import Service from "./Service";
import Content from "./Content";
import Footer from "./Footer";
import logo from "../images/logo-1.png";

function Hero() {
  AOS.init();

  return (
    <>
      <Navbar />

      {/* <div id="default-carousel" class="relative w-full" data-carousel="slide">
        <div class="relative h-96 overflow-hidden ">
          <div class=" duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://images.unsplash.com/photo-1473186505569-9c61870c11f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm: h-screen object-cover"
              alt="..."
            />
          </div>

          <div class=" duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://images.unsplash.com/photo-1528747008803-f9f5cc8f1a64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm: h-screen object-cover"
              alt="..."
            />
          </div>

          <div class=" duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://images.unsplash.com/photo-1479142506502-19b3a3b7ff33?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm: h-screen object-cover"
              alt="..."
            />
          </div>

          <div class=" duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://plus.unsplash.com/premium_photo-1695942301094-472c4dbf9130?q=80&w=2034&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm: h-screen object-cover"
              alt="..."
            />
          </div>

          <div class=" duration-700 ease-in-out" data-carousel-item>
            <img
              src="https://images.unsplash.com/photo-1505664194779-8beaceb93744?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm: h-screen object-cover"
              alt="..."
            />
          </div>
        </div>

        <div class="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="true"
            aria-label="Slide 1"
            data-carousel-slide-to="0"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 2"
            data-carousel-slide-to="1"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 3"
            data-carousel-slide-to="2"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 4"
            data-carousel-slide-to="3"
          ></button>
          <button
            type="button"
            class="w-3 h-3 rounded-full"
            aria-current="false"
            aria-label="Slide 5"
            data-carousel-slide-to="4"
          ></button>
        </div>

        <button
          type="button"
          class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
        >
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span class="sr-only">Previous</span>
          </span>
        </button>
        <button
          type="button"
          class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
        >
          <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg
              class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span class="sr-only">Next</span>
          </span>
        </button>
      </div> */}

      <div className="  h-screen mt-20 rounded-lg flex items-center justify-center">
        <img
          className="rounded-lg py-4 w-screen h-screen md:h-60 object-contain "
          src={logo}
          alt=""
        />
      </div>

      <div className="px-16 py-16" data-aos="fade-right">
        <h2 class="text-4xl font-extrabold dark:text-blue-900 ">
          EXPERTISE, EXPERIENCE & EXCELLENCE
        </h2>
        <p class="my-4 text-lg text-gray-500">
          Juridica Solutio Law Associates is a distinguished law firm with
          offices located in Delhi and Noida. The firm specializes in a wide
          range of legal areas including litigation, arbitration, and advisory
          services. Their commitment to providing effective legal solutions is
          evident through their diverse practice areas, which encompass civil,
          criminal, labour, consumer, property, and family law cases. The firm
          prides itself on its team of experienced legal professionals who are
          adept at handling complex litigation cases and providing strategic
          legal advice. They offer comprehensive legal services aimed at
          addressing the varied needs of their clients, ensuring personalized
          and result-oriented solutions.
        </p>
        <p class="mb-4 text-lg font-normal text-gray-500 dark:text-gray-400">
          Deliver great service experiences fast - without the complexity of
          traditional ITSM solutions. Accelerate critical development work,
          eliminate toil, and deploy changes with ease.
        </p>
        <a
          href="/about"
          class="inline-flex items-center text-lg text-blue-900 dark:text-blue-900"
        >
          Read more
          <svg
            class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>

      <Accordian />
      <Service />
      <Content />
      <Footer />
      {/* <Testimonials /> */}
    </>
  );
}

export default Hero;
