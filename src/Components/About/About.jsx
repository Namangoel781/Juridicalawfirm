import React, { useState } from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import "flowbite";

const About = ({ title, answer }) => {
  const [accordionOpen, setAccordionOpen] = useState(false);
  return (
    <>
      <Navbar />
      <div className="relative">
        <img
          class="h-screen size-full relative"
          src="https://images.unsplash.com/photo-1528747008803-f9f5cc8f1a64?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="image description"
        />
        <h1
          className="w-5/6 h-1/2 absolute flex justify-center items-center flex-col left-0 top-1/4 text-white text-4xl md: w-3/4 sm: w-full leading-normal text-3xl"
          style={{
            backgroundColor: "rgba(59, 131, 246, 0.703)",
            letterSpacing: 25,
          }}
        >
          LEGAL
          <br /> SERVICE
          <br /> WITH A<br /> PASSION
        </h1>
      </div>
      <div className="px-16 py-16">
        <h2
          class="text-4xl font-extrabold text-blue-500"
          // style={{ color: "#4f5abb" }}
        >
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
        <p class="mb-4 text-lg font-normal text-gray-500">
          Deliver great service experiences fast - without the complexity of
          traditional ITSM solutions. Accelerate critical development work,
          eliminate toil, and deploy changes with ease.
        </p>
        <p className="mb-4 text-lg font-normal text-gray-500 ">
          We pride ourselves on adapting technology and international best
          practices to a deeply Indian business ethos; with an advisory
          philosophy that places sustainable legal solutions for our clients at
          its centre and core.
        </p>
        <p className="mb-4 text-lg font-normal text-gray-500 ">
          The Firm’s distinctive practice, which is now nearly three decades
          old, has its origins in the defining years that followed India’s
          pathbreaking economic liberalisation in 1991.
        </p>
        <p className="mb-4 text-lg font-normal text-gray-500 ">
          Today, with more than 200 lawyers on board, the Firm represents a
          diverse range of clientele across practice areas, industries, and
          sectors.
        </p>
        <p className="mb-4 text-lg font-normal text-gray-500">
          Juridica Solutio Law Associates is the preferred law firm for some of
          the largest multinational and blue-chip corporations from North
          America, Europe and Asia including 65 of the Fortune Global 500
          corporations. The Firm’s Japan practice desk has, over the years,
          represented more than 100 prominent Japanese corporations in India,
          many of which are part of the Nikkei 225.
        </p>
        <p className="mb-4 text-lg font-normal text-gray-500">
          The Firm has an enviable domestic footprint and acts as counsel to
          several large and iconic Indian corporations across both the private
          and public sectors. Juridica Solutio Law Associates commitment to
          internationalism also draws from its foundational alliances with
          leading global law firm networks, defining its ability to provide
          seamless cross-border advice across all practice areas.
        </p>
      </div>

      <div id="accordion-collapse" data-accordion="collapse">
        <h2 id="accordion-collapse-heading-1">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
            data-accordion-target="#accordion-collapse-body-1"
            aria-expanded="true"
            aria-controls="accordion-collapse-body-1"
          >
            <span>What is Juridica Solutio Law Associates?</span>
            <svg
              data-accordion-icon
              class="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-1"
          class="hidden"
          aria-labelledby="accordion-collapse-heading-1"
        >
          <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900 grid grid-cols-2">
            <img
              className="h-64"
              src="https://images.unsplash.com/photo-1528746901924-d886b501e255?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
            />
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              Juridica Solutio Law Associates
            </p>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-2">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
            data-accordion-target="#accordion-collapse-body-2"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-2"
          >
            <span>Is there a Juridica Solutio Law Associates available?</span>
            <svg
              data-accordion-icon
              class="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-2"
          class="hidden"
          aria-labelledby="accordion-collapse-heading-2"
        >
          <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              Juridica Solutio Law Associates is a distinguished law firm with
              offices located in Delhi and Noida. The firm specializes in a wide
              range of legal areas including litigation, arbitration, and
              advisory services. Their commitment to providing effective legal
              solutions is evident through their diverse practice areas, which
              encompass civil, criminal, labour, consumer, property, and family
              law cases.
            </p>
            <p class="text-gray-500 dark:text-gray-400">
              Check out the{" "}
              <a
                href="https://flowbite.com/figma/"
                class="text-blue-600 dark:text-blue-500 hover:underline"
              >
                Juridica Solutio Law Associates
              </a>{" "}
            </p>
          </div>
        </div>
        <h2 id="accordion-collapse-heading-3">
          <button
            type="button"
            class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3"
            data-accordion-target="#accordion-collapse-body-3"
            aria-expanded="false"
            aria-controls="accordion-collapse-body-3"
          >
            <span>Is there a Juridica Solutio Law Associates available?</span>
            <svg
              data-accordion-icon
              class="w-3 h-3 rotate-180 shrink-0"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M9 5 5 1 1 5"
              />
            </svg>
          </button>
        </h2>
        <div
          id="accordion-collapse-body-3"
          class="hidden"
          aria-labelledby="accordion-collapse-heading-3"
        >
          <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              The main difference is that the core components from Flowbite are
              open source under the MIT license, whereas Tailwind UI is a paid
              product. Another difference is that Flowbite relies on smaller and
              standalone components, whereas Tailwind UI offers sections of
              pages.
            </p>
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              However, we actually recommend using both Flowbite, Flowbite Pro,
              and even Tailwind UI as there is no technical reason stopping you
              from using the best of two worlds.
            </p>
            <p class="mb-2 text-gray-500 dark:text-gray-400">
              Learn more about these technologies:
            </p>
            <ul class="ps-5 text-gray-500 list-disc dark:text-gray-400">
              <li>
                <a
                  href="https://flowbite.com/pro/"
                  class="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Flowbite Pro
                </a>
              </li>
              <li>
                <a
                  href="https://tailwindui.com/"
                  rel="nofollow"
                  class="text-blue-600 dark:text-blue-500 hover:underline"
                >
                  Tailwind UI
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="lg:grid grid-cols-2 md:flex ">
        <figure class="relative max-w-sm transition-all duration-300 cursor-pointer filter grayscale hover:grayscale-0 m-12">
          <a href="#">
            <img
              class="rounded-lg"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/content-gallery-3.png"
              alt="image description"
            />
          </a>
          <figcaption class="absolute px-4 text-lg text-white bottom-6"></figcaption>
        </figure>
        <div className="m-12">
          <h2
            class="text-4xl font-extrabold text-blue-500"
            // style={{ color: "#4f5abb" }}
          >
            DIVERSITY & INCLUSION
          </h2>
          <p class="tracking-wide text-gray-500 md:text-lg dark:text-gray-400 my-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            nemo maxime adipisci ut debitis! Unde numquam reiciendis tempore
            quis sequi recusandae culpa. Pariatur cum ad dignissimos voluptatem
            velit dolor eos? Alias ut ullam voluptas accusamus perspiciatis
            earum. Dignissimos, fugiat quidem consectetur quia ab voluptatibus
            nesciunt saepe neque iusto a magnam!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
