import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";
import Service from "../Service";

const Practice = () => {
  return (
    <>
      <Navbar />
      {/* <div>
        <img
          className="h-96 w-full object-cover"
          src="https://images.unsplash.com/photo-1528746901924-d886b501e255?q=80&w=1933&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div> */}
      {/* <div className=" h-100% w-100% bg-slate-50 py-4">
        <h2 className="dark:text-blue-500 text-4xl font-extrabold text-center my-8 py-16">
          Our Practice Area
        </h2>
        <hr class="w-48 h-1 mx-auto my-4 bg-blue-500 border-0 rounded md:my-10 dark:bg-gray-700" />
        <div className="  h-full my-4 rounded-lg flex items-center justify-center">
          <img
            className="rounded-lg py-4 w-screen h-80 md: h-60"
            src="http://kochhar.com/wp-content/uploads/2021/09/practice-areas-banner.png"
            alt=""
          />
        </div>
        <div className="obj-1 bg-white mx-4 rounded-lg">
          <div
            className="py-4 px-16"
            id="accordion-flush"
            data-accordion="collapse"
            data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white"
            data-inactive-classes="text-gray-500 dark:text-gray-400"
          >
            <h2 id="accordion-flush-heading-1">
              <button
                type="button"
                class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                data-accordion-target="#accordion-flush-body-1"
                aria-expanded="true"
                aria-controls="accordion-flush-body-1"
              >
                <span>Aviation</span>
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
              id="accordion-flush-body-1"
              class="hidden"
              aria-labelledby="accordion-flush-heading-1"
            >
              <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  The Firm has represented leading aircraft manufacturers,
                  operator (scheduled and NSOs) and financial institutions in
                  transactions relating to acquisition of aircraft (by way of
                  purchase and lease), aircraft components & engines. The
                  assistance involved structuring of the transactions,
                  negotiation, and preparation of documentation for aircraft
                  leasing and financing, security creation etc. Further, the
                  Firm has also advised clients with respect to registration of
                  aircraft and handling of various compliance law issues,
                  including those under Indian foreign exchange laws. The team
                  has also assisted international clients in de-registration and
                  re-possession of aircraft from Indian operators (particularly
                  in the context of Cape Town Convention), including handling
                  litigation and various regulatory issues in various Courts and
                  before governmental authorities in India. The Firm has also
                  advised airline companies in India with respect to their
                  compliance and operational issues. On the disputes, the Firm
                  has advised marquee international airlines as well as
                  representative Industry associations on high-stakes disputes
                  pertaining to commercial contracts, employment, cargo and
                  ground handling, litigation with agents, passenger claims etc.
                </p>
              </div>
            </div>
            <h2 id="accordion-flush-heading-2">
              <button
                type="button"
                class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                data-accordion-target="#accordion-flush-body-2"
                aria-expanded="false"
                aria-controls="accordion-flush-body-2"
              >
                <span>Taxation</span>
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
              id="accordion-flush-body-2"
              class="hidden"
              aria-labelledby="accordion-flush-heading-2"
            >
              <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Progressive organisational managements have realised that
                  taxes (both direct and indirect, domestic and international)
                  are a dynamic item of cost. Kochhar & Co.’s Tax practice group
                  prides itself in offering realistic tax-cost management
                  solutions to its clients adopting appropriate tax strategies
                  proactively and ensuring timely implementation. Our Tax Team
                  is headed by a former member of India’s Central Board of
                  Direct Taxes (CBDT), Mr. Shahid Khan, with his unparalleled
                  experience of more than 40 years. The team comprising of
                  experienced attorneys, chartered accountants and industry
                  professionals makes us an ideal co – partner for all our
                  clients’ Direct and Indirect tax requirements. The team has
                  been successful in executing and delivering a range of complex
                  to simple, sustainable business resolutions for some of the
                  major Fortune Global 500 corporates. • Our attorneys advise
                  taxpayers on issues relating to business re-structuring,
                  setting up new units, withholding taxes, royalty and fee for
                  technical services, transfer pricing and contracting etc. In
                  M&A transactions, our tax attorneys undertake investment
                  structuring, tax due diligence and review.
                </p>
                <p class="text-gray-500 dark:text-gray-400">
                  Check out the{" "}
                  <a
                    href="https://flowbite.com/figma/"
                    class="text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Figma design system
                  </a>{" "}
                  based on the utility classes from Tailwind CSS and components
                  from Flowbite.
                </p>
              </div>
            </div>
            <h2 id="accordion-flush-heading-3">
              <button
                type="button"
                class="flex items-center justify-between w-full py-5 font-medium rtl:text-right text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400 gap-3"
                data-accordion-target="#accordion-flush-body-3"
                aria-expanded="false"
                aria-controls="accordion-flush-body-3"
              >
                <span>Real Estate & Construction</span>
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
              id="accordion-flush-body-3"
              class="hidden"
              aria-labelledby="accordion-flush-heading-3"
            >
              <div class="py-5 border-b border-gray-200 dark:border-gray-700">
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  Our lawyers advise on the entire life-cycle of a Real Estate
                  transaction, from structuring and title diligence to
                  negotiation, preparation of transaction documents and closing.
                  The Firm regularly advises on joint ventures and
                  collaborations in the real estate space, setting up of
                  factories and manufacturing units, acquisitions and leasing of
                  development land, industrial parks, power projects, and data
                  centres, and sale and lease back arrangements. The practice
                  group acts for clients in relation to private equity
                  investment in real estate projects and exit mechanisms. While
                  a significant part of the Firm’s Real Estate practice is non
                  contentious, advisory and transactional in nature, the Firm
                  has also handled complex legal disputes pertaining to real
                  estate. The Firm’s cross-practice expertise in Taxation and
                  Commercial law is also brought on to the table while handling
                  matters. The Firm combines its legal expertise with a sound
                  knowledge of the local regulatory environment in delivering
                  customised and result oriented solutions to its clients. The
                  team is highly experienced in settling claims arising due to
                  but not limited to contracts, title or construction disputes,
                  etc.
                </p>
                <p class="mb-2 text-gray-500 dark:text-gray-400">
                  However, we actually recommend using both Flowbite, Flowbite
                  Pro, and even Tailwind UI as there is no technical reason
                  stopping you from using the best of two worlds.
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
                      Taxtation
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
        </div>
      </div> */}
      <Service />
      <Footer />
    </>
  );
};

export default Practice;
