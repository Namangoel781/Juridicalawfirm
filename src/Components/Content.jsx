import React from "react";
import "./Content.css";
import AOS from "aos";

const Content = () => {
  AOS.init();
  return (
    <div
      className="content grid  gap-32 relative top-8 
    xl:grid-cols-2 py-4 px-16 mx-16 my-4
    lg:grid-cols-2 py-4 px-8 mx-8 my-4
    md:grid-cols-1 py-0 px-0 mx-4 my-0 grid-cols-1 grid
    "
    >
      <div
        class="div h-auto max-w-84 rounded-lg relative"
        data-aos="zoom-in-up"
      >
        <img
          className=" h-auto max-w-84 rounded-lg "
          src="https://images.pexels.com/photos/8276364/pexels-photo-8276364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="overlay absolute flex justify-center items-center flex-col h-full w-full top-0 left-0 cursor-pointer">
          <a href="/contact">
            <h3 class="text-4xl font-bold text-white ">JOIN US</h3>
          </a>
        </div>
      </div>
      <div
        class="div h-auto max-w-84 rounded-lg relative"
        data-aos="zoom-in-up"
      >
        <img
          className=" h-auto max-w-84 rounded-lg cursor-pointer"
          src="https://images.pexels.com/photos/4427430/pexels-photo-4427430.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className="overlay absolute flex justify-center items-center flex-col top-0 left-0 h-full w-full cursor-pointer ">
          <a href="/people">
            <h3 class="text-4xl font-bold text-white ">OUR PEOPLE</h3>
          </a>
        </div>
      </div>
    </div>

    // <div className="consultation nitro-offscreen nitro-lazy-render">
    //   <div className="consultation__bg">
    //     <img
    //       src="https://cdn-bnaga.nitrocdn.com/RLRDfsIUASREgxlKxwrcfDLjYLvppeZR/assets/images/optimized/rev-56ea778/www.barrattorneys.com/app/uploads/2020/10/consultation__bg.jpg"
    //       alt=""
    //     />
    //   </div>
    //   <div className="container">
    //     <div className="consultation__container">
    //       <div className="consultation__row">
    //         <div className="consultation__col">
    //           <h2 className="h2">
    //             Request a Free Consultation With Barr & Douds Attorneys
    //           </h2>
    //         </div>
    //         <div className="consultation__col">
    //           <p className="p">
    //             Request a Free Consultation With Barr & Douds Attorneys
    //           </p>
    //         </div>
    //         <div className="consultation__col">
    //           <a href="/contact" className="btn btn--reverse">
    //             <span className="btn__text">Contact-Us</span>
    //             <span className="btn__arrow">
    //               <img
    //                 src="https://cdn-bnaga.nitrocdn.com/RLRDfsIUASREgxlKxwrcfDLjYLvppeZR/assets/images/optimized/rev-56ea778/www.barrattorneys.com/app/themes/CWA/front/dist/assets/img/arrow-white.svg"
    //                 alt=""
    //               />
    //             </span>
    //           </a>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Content;
