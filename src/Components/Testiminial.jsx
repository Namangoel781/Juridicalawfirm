import React from "react";
import "./Testimonial.css";
import Navbar from "./Navbar";
import Footer from "./Footer";
import team1 from "../images/team1.jpg";
import team2 from "../images/team2.jpg";

const Testimonials = () => {
  return (
    <>
      <Navbar />
      {/* <div>
        <img
          className="h-screen w-screen md: object-cover"
          src="https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20%281%20of%201%29-5.jpg?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </div> */}

      {/* <div class="row-2 text-center block">
          <h2 className="dark:text-blue-500 text-4xl font-extrabold text-center my-4 py-4">
            Our Team
          </h2>
          <hr class="w-48 h-1 mx-auto my-4 bg-blue-500 border-0 rounded md:my-10 dark:bg-gray-700" />
        </div> */}

      <section>
        <h2 className="dark:text-blue-500 text-4xl font-extrabold text-center my-4 py-4">
          Our People
        </h2>
        <hr class="w-48 h-1 mx-auto my-4 bg-blue-500 border-0 rounded md:my-10 dark:bg-gray-700" />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Animi,
          praesentium veritatis voluptatibus ut consequuntur quas consequatur
          omnis id rem obcaecati.
        </p>
        <div class="cards">
          <div class="card-1">
            <div class="card-img-wrapper">
              <img src={team1} alt="Joss Anderson" />
            </div>
            <a href="#" class="social-icon">
              <i class="fa-brands fa-facebook-f"></i>
            </a>
            <div class="card-content-wrapper">
              <a href="#" class="card-content">
                <h3>Ashish Chauhan</h3>
                <p>Advocate</p>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
          <div class="card-1">
            <div class="card-img-wrapper">
              <img src={team2} alt="James Newton" />
            </div>
            <a href="#" class="social-icon">
              <i class="fa-brands fa-x-twitter"></i>
            </a>
            <div class="card-content-wrapper">
              <a href="#" class="card-content">
                <h3>Sonal Chauhan</h3>
                <p>Advocate</p>
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Testimonials;
