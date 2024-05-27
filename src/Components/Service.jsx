import React from "react";
import "./Service.css";
import AOS from "aos";

const Service = () => {
  AOS.init();
  return (
    <section>
      <div class="row">
        <h2 class="section-heading">Practice Areas</h2>
        <hr class="w-48 h-1 mx-auto my-4 bg-blue-500  border-0 rounded md:my-10 "></hr>
      </div>
      <div class="row">
        <div class="column" data-aos="zoom-in-up">
          <div class="card">
            <div class="icon-wrapper">
              <i class="fa-solid fa-user-tie"></i>
            </div>
            <h3>Consumer</h3>
            <p>
              Consumer courts in India are special judicial bodies established
              to protect consumers' rights and address grievances related to
              goods and services.
            </p>
          </div>
        </div>
        <div class="column" data-aos="zoom-in-up">
          <div class="card">
            <div class="icon-wrapper">
              <i class="fa-solid fa-handshake"></i>
            </div>
            <h3>Arbitration</h3>
            <p>
              Arbitration is a private way to resolve disputes outside of court.
              Parties agree to have a neutral third party make a binding
              decision. It's faster, more flexible, and often more confidential
              than going to court.
            </p>
          </div>
        </div>
        <div class="column" data-aos="zoom-in-up">
          <div class="card">
            <div class="icon-wrapper">
              <i class="fa-solid fa-ring"></i>
            </div>
            <h3>Matrimonial</h3>
            <p>
              Matrimonial refers to marriage-related issues like divorce,
              alimony, and child custody. It's governed by matrimonial law,
              which addresses the rights and responsibilities of spouses and the
              dissolution of marriage, varying by jurisdiction.
            </p>
          </div>
        </div>
        <div class="column" data-aos="zoom-in-up">
          <div class="card">
            <div class="icon-wrapper">
              <i class="fa-solid fa-medal"></i>
            </div>
            <h3>Negotiable Instruments</h3>
            <p>
              Negotiable instruments are documents like checks and promissory
              notes that promise payment to a specific person or bearer. They're
              transferable, facilitating commerce, and are governed by laws
              ensuring their reliability and enforceability in commercial
              transactions.
            </p>
          </div>
        </div>
        <div class="column" data-aos="zoom-in-up">
          <div class="card">
            <div class="icon-wrapper">
              <i class="fa-solid fa-handcuffs"></i>
            </div>
            <h3>Criminal Law</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quisquam
              consequatur necessitatibus eaque. Criminal law defines and
              punishes acts considered harmful to society. It involves
              prosecuting individuals accused of crimes, with punishments
              ranging from fines to imprisonment.
            </p>
          </div>
        </div>
        <div class="column" data-aos="zoom-in-up">
          <div class="card">
            <div class="icon-wrapper">
              <i class="fa-solid fa-newspaper"></i>
            </div>
            <h3>Property Disputes</h3>
            <p>
              Property disputes involve conflicts over ownership, possession, or
              rights regarding real or personal property, such as boundary
              disputes or landlord-tenant disagreements. Resolving these often
              requires legal action or negotiation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
