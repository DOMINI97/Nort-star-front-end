/* eslint-disable no-lone-blocks */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
// youtube video setup start
// import { google } from "googleapis";

// youtube video setup End
// import Home from "./pages/home/Home";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { YouTube } from "react-youtube";
import "bootstrap/dist/css/bootstrap.css";
// import { Container } from "react-bootstrap";
// import aboutjpg from "../src/assets/img/about.jpg";
import servicejpg from "../src/assets/img/storage-service.jpg";
import logisticsservice from "../src/assets/img/logistics-service.jpg";
import cargoservice from "../src/assets/img/cargo-service.jpg";
import truckingservice from "../src/assets/img/trucking-service.jpg";
import packagingservice from "../src/assets/img/packaging-service.jpg";
import warehousingservice from "../src/assets/img/warehousing-service.jpg";
import features1 from "../src/assets/img/features-1.jpg";
import features2 from "../src/assets/img/features-2.jpg";
import features3 from "../src/assets/img/features-3.jpg";

import testimonials1 from "../src/assets/img/testimonials/testimonials-1.jpg";
import logo from "../src/assets/img/logo.png";
// import Home from "./pages/home/Home.jsx";
import Navbar from "./components/Navbar";

import "./assets/css/main.css";
import React from "react";
import { useRef } from "react";
// import "./assets/js/main";
function Grout() {
  {
    /* Youtube Video api setting start*/
  }

  // const youtube = google.youtube({
  //   version: "v3",
  //   auth: "AIzaSyBe9gUYIZI7c7o_qR0UGsRrKO7RUE_TdpM",
  // });

  // youtube.videos
  //   .list({
  //     part: "snippet",
  //     id: "FHWw_rXzEfDTR3zZ",
  //   })
  //   .then((response) => {
  //     const videoData = response.data.items[0].snippet;
  //     console.log(videoData);
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //   });

  {
    /* Youtube Video api setting End*/
  }

  const scrollTop = document.querySelector(".scroll-top");
  if (scrollTop) {
    const togglescrollTop = function () {
      window.scrollY > 100
        ? scrollTop.classList.add("active")
        : scrollTop.classList.remove("active");
    };
    window.addEventListener("load", togglescrollTop);
    document.addEventListener("scroll", togglescrollTop);
    scrollTop.addEventListener(
      "click",
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      })
    );
  }

  // {/* refrel function */}
  const home = useRef(null);
  const about = useRef(null);
  const service = useRef(null);
  // const price = useRef(null);
  const contact = useRef(null);
  const privacy = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Navbar />
      {/* ======= Hero Section ======= */}
      <section id='hero' ref={home} className='hero d-flex align-items-center'>
        <div className='container'>
          <div className='row gy-4 d-flex justify-content-between'>
            <div className='col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center'>
              <h2 data-aos='fade-up'>Moving Forward Moving Goods</h2>
              <p data-aos='fade-up' data-aos-delay={100}>
                The North Star Goods Transport Company is the first and most
                trusted goods transport company in Gilgit Baltistan. We provide
                transportation for every type of goods. Furthermore, our company
                is one of the oldest and biggest goods forwarding agencies
                operating in Gilgit. We have trucks for the transportation of
                your goods and our clients are very satisfied with our service.
              </p>
              <form
                action='#'
                className='form-search d-flex align-items-stretch mb-3'
                data-aos='fade-up'
                data-aos-delay={200}>
                <input
                  type='text'
                  className='form-control'
                  placeholder='Insert billty no'
                />
                <button type='submit' className='btn btn-primary'>
                  Track
                </button>
              </form>
            </div>
            <div
              className='col-lg-5 order-1 order-lg-2 hero-img'
              data-aos='zoom-out'>
              <img
                src='assets/img/hero-img.svg'
                className='img-fluid mb-3 mb-lg-0'
                alt=''
              />
            </div>
          </div>
        </div>
      </section>
      {/* End Hero Section */}
      <main id='main'>
        {/* ======= Featured Services Section ======= */}
        <section id='featured-services' className='featured-services'>
          <div className='container'>
            <div className='row gy-4'>
              <div
                className='col-lg-4 col-md-6 service-item d-flex sed '
                data-aos='fade-up'>
                <div className='icon flex-shrink-0'>
                  <i className='fa-solid fa-cart-flatbed' />
                </div>
                <div>
                  <h4 className='title'>Who Are We?</h4>
                  <p className='description'>
                    The company enjoys its diverse employees from all around
                    Gilgit Baltistan with different backgrounds. The
                    enthusiastic employees of the company have a great
                    connection through love, trust, and honesty. Furthermore,
                    their different ideas for the growth of the company are
                    appreciable and exemplary. The company contains 45
                    enthusiastic employees.
                  </p>
                </div>
              </div>
              {/* End Service Item */}
              <div
                className='col-lg-4 col-md-6 service-item d-flex sed '
                data-aos='fade-up'
                data-aos-delay={100}>
                <div className='icon flex-shrink-0'>
                  <i className='fa-solid fa-truck' />
                </div>
                <div>
                  <h4 className='title'>What We Do</h4>
                  <p className='description'>
                    We provide transportation for your goods from different
                    cities to Gilgit and from Gilgit to different cities. North
                    Star provides local goods forwarding in Gilgit Baltistan
                    primarily for small traders/retailers but also private
                    sector institutions and households, increasing, tourism,
                    commercial activity, and demand for goods and services.
                  </p>
                </div>
              </div>
              {/* End Service Item */}
              <div
                className='col-lg-4 col-md-6 service-item d-flex sed '
                data-aos='fade-up'
                data-aos-delay={200}>
                <div className='icon flex-shrink-0'>
                  <i className='fa-solid fa-truck-ramp-box' />
                </div>
                <div>
                  <h4 className='title'>Where We Reach</h4>
                  <p className='description'>
                    The services are successfully provided from Gujranwala,
                    Lahore, Rawalpindi, and Karachi to the Northern area and
                    from the Northern area to the following cities.
                  </p>
                </div>
              </div>
              {/* End Service Item */}
            </div>
          </div>
        </section>
        {/* End Featured Services Section */}
        {/* ======= About Us Section ======= */}
        <section id='about' ref={about} className='about pt-0'>
          <div className='container' data-aos='fade-up'>
            <div className='row gy-4'>
              <div className='col-lg-6 position-relative align-self-start order-lg-last order-last mt-5  embed-responsive embed-responsive-16by9 '>
                <iframe
                  className='embed-responsive-item'
                  src='https://www.youtube.com/embed/zhgQjowczsc'
                  title='North Star Company Pvt Ltd Introduction'
                  frameborder='0'
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  allowFullScreen></iframe>
              </div>
              <div className='col-lg-6 content order-last  order-lg-first'>
                <div>
                  {" "}
                  <h3>About Us</h3>
                  <p>
                    The North Star Goods Transport Company is the first goods
                    transport company of Gilgit Baltistan, founded by Sana Khan
                    on 21 June 1986 in Rawalpindi. During that time, operating a
                    company was very difficult for us but we did it. We thought
                    about our customer's requirements and felt to help our
                    people. We have been serving in this field for the past 38
                    years and growing day by day.<br></br> Furthermore, the
                    company started operating in Lahore in 1987. During that
                    time there was no goods transport company in Gilgit
                    Baltistan. In 1987, the company opened its branch in Skardu
                    to facilitate customers. In 1990, the company opened its new
                    branch in Karachi and in 1996 in Aliabad Hunza. Moreover,
                    the company felt to help customers from Gujranwala. So, they
                    opened their branch in Gujranwala in 2002. Operating their
                    company in Gilgit Baltistan is our priority. So, In 2012,
                    our company started operating in Gakuch Ghizer, and 2013 in
                    Danyore Gilgit. Furthermore, our new branch has opened in
                    Faisalabad. Moreover, the company is operating across the
                    country and now has 10 branches in Gilgit Baltistan.
                  </p>
                </div>
                <div className='dumdum'>
                  {" "}
                  <ul>
                    <li data-aos='fade-up' data-aos-delay={100}>
                      <i className='bi bi-diagram-3' />
                      <div>
                        <h5>Registered</h5>
                        <p>NorthStar company is registered with SECP.</p>
                      </div>
                    </li>
                    <li data-aos='fade-up' data-aos-delay={200}>
                      <i className='bi bi-fullscreen-exit' />
                      <div>
                        <h5>Trusted</h5>
                        <p>
                          As the most trusted and leading goods transport
                          company, we are in partnership with 12 other
                          companies.
                        </p>
                      </div>
                    </li>
                    <li data-aos='fade-up' data-aos-delay={300}>
                      <i className='bi bi-shield-shaded' />
                      <div>
                        <h5>Safety</h5>
                        <p>
                          The company updates customers at each step and our
                          vision is to be loyal to our customers. Our previous
                          customers know NorthStar company provides the best
                          services at prices that are easy on the wallet. We
                          have been providing quality services to our clients
                          for many years. Our team acknowledges the safety of
                          your goods and they are well aware of the best routes
                          to transport your belongings.
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End About Us Section */}
        {/* ======= Services Section ======= */}
        <section id='service' ref={service} className='services pt-0'>
          <div className='container' data-aos='fade-up'>
            <div className='section-header'>
              <h2>Our Services</h2>
              <p>
                NorthStar company is a leading mover in Gilgit for more than 38
                years. We provide a wide range of logistics services. This
                includes
              </p>
            </div>
            <div className='row gy-4'>
              <div
                className='col-lg-4 col-md-6'
                data-aos='fade-up'
                data-aos-delay={100}>
                <div className='card'>
                  <div className='card-img'>
                    <img src={servicejpg} alt='' className='img-fluid' />
                  </div>
                  <h3>
                    <a className='stretched-link'>Storage</a>
                  </h3>
                  <p>
                    Being the best goods transport provider, NorthStar holds
                    fleet trucks which allows us to provide reliable services to
                    our customers with short and long-haul road transport.
                  </p>
                </div>
              </div>
              {/* End Card Item */}
              <div
                className='col-lg-4 col-md-6'
                data-aos='fade-up'
                data-aos-delay={200}>
                <div className='card'>
                  <div className='card-img'>
                    <img src={logisticsservice} alt='' className='img-fluid' />
                  </div>
                  <h3>
                    <a className='stretched-link'>Logistics</a>
                  </h3>
                  <p>
                    With our sophisticated logistics management system, we are
                    well-equipped to take on any challenge that comes our way.
                    Furthermore, our excellent transportation logistics
                    management means that we can also transport over-height and
                    over-mass containers by prior management.
                  </p>
                </div>
              </div>
              {/* End Card Item */}
              <div
                className='col-lg-4 col-md-6'
                data-aos='fade-up'
                data-aos-delay={300}>
                <div className='card'>
                  <div className='card-img'>
                    <img src={cargoservice} alt='' className='img-fluid' />
                  </div>
                  <h3>
                    <a className='stretched-link'>Cargo</a>
                  </h3>
                  <p>
                    We provide cargo services in all of Pakistan. Karachi,
                    Gujranwala, Lahore,
                  </p>
                </div>
              </div>
              {/* End Card Item */}
              <div
                className='col-lg-4 col-md-6'
                data-aos='fade-up'
                data-aos-delay={400}>
                <div className='card'>
                  <div className='card-img'>
                    <img src={truckingservice} alt='' className='img-fluid' />
                  </div>
                  <h3>
                    <a className='stretched-link'>Trucking</a>
                  </h3>
                  <p>
                    Our company provides professional movers and packers for
                    your service to take the stress out of the process.
                    Furthermore, our movers and packers know how to pack things
                    safely and securely. With all these best services anyone can
                    be sure to reach their destinations safely and without
                    hassle.
                  </p>
                </div>
              </div>
              {/* End Card Item */}
              <div
                className='col-lg-4 col-md-6'
                data-aos='fade-up'
                data-aos-delay={500}>
                <div className='card'>
                  <div className='card-img'>
                    <img src={packagingservice} alt='' className='img-fluid' />
                  </div>
                  <h3>
                    <a className='stretched-link'>Packaging</a>
                  </h3>
                  <p>
                    NorthStar Company will introduce the Company Packaging
                    soon..
                  </p>
                </div>
              </div>
              {/* End Card Item */}
              <div
                className='col-lg-4 col-md-6'
                data-aos='fade-up'
                data-aos-delay={600}>
                <div className='card'>
                  <div className='card-img'>
                    <img
                      src={warehousingservice}
                      alt=''
                      className='img-fluid'
                    />
                  </div>
                  <h3>
                    <a className='stretched-link'>Warehousing</a>
                  </h3>
                  <p>
                    Our warehouse is available in Karachi, Lahore, Gujranwala
                  </p>
                </div>
              </div>
              {/* End Card Item */}
            </div>
          </div>
        </section>
        {/* End Services Section */}
        {/* ======= Call To Action Section ======= */}
        <section id='call-to-action' ref={contact} className='call-to-action'>
          <div className='container' data-aos='zoom-out'>
            <div className='row justify-content-center'>
              <div className='col-lg-8 text-center'>
                <h2>Contact US</h2>

                <a className='cta-btn'>
                  <i className='fa-brands fa-whatsapp'></i>
                </a>
                <h2>+92-31-00000000</h2>
              </div>
            </div>
          </div>
        </section>
        {/* End Call To Action Section */}
        {/* ======= Features Section ======= */}
        <section id='features' className='features'>
          <div className='container'>
            <div
              className='row gy-4 align-items-center features-item'
              data-aos='fade-up'>
              <div className='col-md-5'>
                <img src={features1} className='img-fluid' alt='' />
              </div>
              <div className='col-md-7'>
                <h3>Why Us</h3>
                <p className='fst-italic'>
                  Our main goal is to offer first-class service at a competitive
                  price. Moreover, we have well qualified experienced staff and
                  most covering city network. Our transportation company is
                  outstanding, and we had served thousands of satisfied
                  customers. At NorthStar, our clients are our top priority. We
                  provide customized household transport services and guarantee
                  careful handling and care at all stages. We aim to build a
                  long-term relationship with our customers. Each year growing
                  and expanding, the Company has had huge success in dealing
                  with customers and is now the most trusted goods
                  transportation provider company in Gilgit Baltistan. If the
                  company fails to transport goods or a mistake in the terms of
                  services, we refund back to their customer because we want our
                  customer satisfaction and trust.
                </p>
              </div>
            </div>
            {/* Features Item */}
            <div
              className='row gy-4 align-items-center features-item'
              data-aos='fade-up'>
              <div className='col-md-5 order-1 order-md-2'>
                <img src={features2} className='img-fluid' alt='' />
              </div>
              <div className='col-md-7 order-2 order-md-1'>
                <h3>INSURANCE SUPPORT</h3>

                <p>
                  North Star Goods Transport Company is very curious about its
                  employees well being and stability. So, they provide insurance
                  support for their employees.
                </p>
              </div>
            </div>
            {/* Features Item */}
            <div
              className='row gy-4 align-items-center features-item'
              data-aos='fade-up'>
              <div className='col-md-5'>
                <img src={features3} className='img-fluid' alt='' />
              </div>
              <div className='col-md-7'>
                <h3>Charity Work</h3>
                <p>
                  North Star Goods Transport Company believes education is the
                  most important way to develop a civilized society. So, the
                  company has made already a difference in many students by
                  facilitating them and will further support more needy students
                  to contribute to the development of society.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* End Features Section */}
        {/* ======= Pricing Section ======= */}
        {/*   
      
        <section id="pricing" ref={price} className="pricing pt-0">
          <div className="container" data-aos="fade-up">
            <div className="section-header ">
              <h2>Pricing</h2>
            </div>
            <Home />
          </div>
        </section>

      */}
        {/* End Pricing Section */}
        {/* ======= Testimonials Section ======= */}
        <section id='testimonials' className='testimonials'>
          <div className='container'>
            <div className='slides-1 swiper' data-aos='fade-up'>
              <div className='swiper-wrapper'>
                <div className='swiper-slide'>
                  <div className='testimonial-item'>
                    <img
                      src={testimonials1}
                      className='testimonial-img'
                      alt=''
                    />
                    <h3>Ejiz Kareem</h3>
                    <h4>Ceo </h4>
                    <div className='stars'>
                      <i className='bi bi-star-fill' />
                      <i className='bi bi-star-fill' />
                      <i className='bi bi-star-fill' />
                      <i className='bi bi-star-fill' />
                      <i className='bi bi-star-fill' />
                    </div>
                    <p>
                      <i className='bi bi-quote quote-icon-left' />
                      I believe that our industry is critical to facilitating
                      global trade and allowing businesses to grow and expand
                      into new markets. It is our responsibility to provide the
                      highest level of service and efficiency to our customers
                      while also focusing on sustainability and ethical business
                      practises.
                      <i className='bi bi-quote quote-icon-right' />
                    </p>
                  </div>
                </div>

                {/* End testimonial item */}
              </div>
              <div className='swiper-pagination' />
            </div>
          </div>
        </section>
        {/* End Testimonials Section */}
        {/* ======= Frequently Asked Questions Section ======= */}
        <section id='faq' ref={privacy} className='faq'>
          <div className='container' data-aos='fade-up'>
            <div className='section-header'>
              <h2>Terms and conditions</h2>
            </div>
            <div
              className='row justify-content-center'
              data-aos='fade-up'
              data-aos-delay={200}>
              <div className='col-lg-10'>
                <div className='accordion accordion-flush' id='faqlist'>
                  <div className='accordion-item'>
                    <h3 className='accordion-header'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#faq-content-1'>
                        <i className='bi bi-question-circle question-icon' />
                        The company will not be responsible for the claim if the
                        client/merchants do not get insurance for valuables,
                        delicate goods, machinery, motorcycles, etc.
                      </button>
                    </h3>
                  </div>
                  {/* # Faq item*/}
                  <div className='accordion-item'>
                    <h3 className='accordion-header'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#faq-content-2'>
                        <i className='bi bi-question-circle question-icon' />
                        The client/merchants should check the goods carefully
                        while receiving them. No complaint will be catered to
                        once delivery is done.
                      </button>
                    </h3>
                  </div>
                  {/* # Faq item*/}
                  <div className='accordion-item'>
                    <h3 className='accordion-header'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#faq-content-3'>
                        <i className='bi bi-question-circle question-icon' />
                        The agency or the Company shall be liable for failure to
                        reach the good/cargo within fifteen days of the issuance
                        of the receipt. No complaints will be heard later.
                      </button>
                    </h3>
                  </div>
                  {/* # Faq item*/}
                  <div className='accordion-item'>
                    <h3 className='accordion-header'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#faq-content-4'>
                        <i className='bi bi-question-circle question-icon' />
                        In case of an accident or accidental delay, the agency
                        or company will not be responsible for any loss or
                        damage of any kind.
                      </button>
                    </h3>
                  </div>
                  {/* # Faq item*/}
                  <div className='accordion-item'>
                    <h3 className='accordion-header'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#faq-content-5'>
                        <i className='bi bi-question-circle question-icon' />
                        The goods in which the owner of the goods is
                        accompanied, in such conditions the company is not
                        responsible for any kind of loss or damage
                      </button>
                    </h3>
                  </div>
                  {/* # Faq item*/}
                  {/* # Faq item*/}
                  <div className='accordion-item'>
                    <h3 className='accordion-header'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#faq-content-5'>
                        <i className='bi bi-question-circle question-icon' />
                        Leakages of oils, jams, and other liquids/fluids are not
                        the responsibility of the company. The agency or company
                        shall not be liable for any loss
                      </button>
                    </h3>
                  </div>
                  {/* # Faq item*/}
                  {/* # Faq item*/}
                  <div className='accordion-item'>
                    <h3 className='accordion-header'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#faq-content-5'>
                        <i className='bi bi-question-circle question-icon' />
                        The company is not responsible for the reduction of the
                        goods in which the customer/client/merchant himself
                        accompanies the good/cargo vehicle.
                      </button>
                    </h3>
                  </div>
                  {/* # Faq item*/}
                  {/* # Faq item*/}
                  <div className='accordion-item'>
                    <h3 className='accordion-header'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#faq-content-5'>
                        <i className='bi bi-question-circle question-icon' />
                        The client/merchant should write down the weight
                        properly, in case of more weight the company will be
                        entitled to charge excess rent.
                      </button>
                    </h3>
                  </div>
                  {/* # Faq item*/}
                  {/* # Faq item*/}
                  <div className='accordion-item'>
                    <h3 className='accordion-header'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#faq-content-5'>
                        <i className='bi bi-question-circle question-icon' />
                        According to the nature of the booking of goods against
                        the law, the unknowing, (MISEDCLEARATION) or any
                        misrepresentation will be charged to the
                        client/merchant.
                      </button>
                    </h3>
                  </div>
                  {/* # Faq item*/}
                  {/* # Faq item*/}
                  <div className='accordion-item'>
                    <h3 className='accordion-header'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#faq-content-5'>
                        <i className='bi bi-question-circle question-icon' />
                        After the arrival of the goods, if the goods are not
                        redeemed, a demurrage charge of Rs.100 per day, will be
                        charged.
                      </button>
                    </h3>
                  </div>
                  {/* # Faq item*/}
                  {/* # Faq item*/}
                  <div className='accordion-item'>
                    <h3 className='accordion-header'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#faq-content-5'>
                        <i className='bi bi-question-circle question-icon' />
                        After loading the goods from the base, the driver will
                        be responsible for transporting the goods to the
                        destination and unloading the goods. The agency or
                        company shall be liable for any mishap meanwhile.
                      </button>
                    </h3>
                  </div>
                  {/* # Faq item*/}
                  {/* # Faq item*/}
                  <div className='accordion-item'>
                    <h3 className='accordion-header'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#faq-content-5'>
                        <i className='bi bi-question-circle question-icon' />
                        The company is not responsible for failure/closure of
                        bank receipt/challan if informed after three months.
                      </button>
                    </h3>
                  </div>
                  {/* # Faq item*/}
                  {/* # Faq item*/}
                  <div className='accordion-item'>
                    <h3 className='accordion-header'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#faq-content-5'>
                        <i className='bi bi-question-circle question-icon' />
                        All disputes will be settled at the place from where the
                        receipt has been issued.
                      </button>
                    </h3>
                  </div>
                  {/* # Faq item*/}
                  {/* # Faq item*/}
                  <div className='accordion-item'>
                    <h3 className='accordion-header'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#faq-content-5'>
                        <i className='bi bi-question-circle question-icon' />
                        Shall not be responsible for breakage of glassware.
                      </button>
                    </h3>
                  </div>
                  {/* # Faq item*/}
                  {/* # Faq item*/}
                  <div className='accordion-item'>
                    <h3 className='accordion-header'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#faq-content-5'>
                        <i className='bi bi-question-circle question-icon' />
                        If the client/merchant does not take delivery of the
                        goods for two months, then the company will have the
                        right to auction the goods, after which the
                        client/merchant will not be entitled to claim the goods.
                      </button>
                    </h3>
                  </div>
                  {/* # Faq item*/}
                  {/* # Faq item*/}
                  <div className='accordion-item'>
                    <h3 className='accordion-header'>
                      <button
                        className='accordion-button collapsed'
                        type='button'
                        data-bs-toggle='collapse'
                        data-bs-target='#faq-content-5'>
                        <i className='bi bi-question-circle question-icon' />
                        The client/merchant will not get the goods without
                        presenting the receipt.
                      </button>
                    </h3>
                  </div>
                  {/* # Faq item*/}
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* End Frequently Asked Questions Section */}
      </main>
      {/* End #main */}
      {/* ======= Footer ======= */}
      <footer id='footer' className='footer'>
        <div className='container'>
          <div className='row gy-4'>
            <div className='col-lg-5 col-md-12 footer-info'>
              <a href='index.html' className='logo  align-items-center'>
                <span>North Star Company </span>
                <img src={logo} />
              </a>
              <p>
                The place where Your Good and laggaes were safe and sound.
                <br />
                They are dilivery to your destination fast and safe.
              </p>
              <div className='social-links d-flex mt-4'>
                {/* <a href='#' className='twitter'>
                  <i className='bi bi-twitter' />
                </a>*/}
                {/* 
                <a href='#' className='facebook'>
                  <i className='bi bi-facebook' />
                </a>
                <a href='#' className='instagram'>
                  <i className='bi bi-instagram' />
                </a>*/}
                <a
                  href='https://www.youtube.com/@northstarcompanypl'
                  target='_blank'
                  className='linkedin'
                  rel='noreferrer'>
                  <i className='bi bi-youtube' />
                </a>
              </div>
            </div>
            <div className='col-lg-2 col-6 footer-links'>
              <h4>Useful Links</h4>
              <ul>
                <li>
                  <a onClick={() => scrollToSection(home)}>Home</a>
                </li>
                <li>
                  <a onClick={() => scrollToSection(about)}>About us</a>
                </li>
                <li>
                  <a onClick={() => scrollToSection(service)}>Services</a>
                </li>
                <li>
                  <a onClick={() => scrollToSection(privacy)}>
                    Terms of service
                  </a>
                </li>
                <li>
                  <a onClick={() => scrollToSection(privacy)}>Privacy policy</a>
                </li>
              </ul>
            </div>
            <div className='col-lg-2 col-6 footer-links'>
              <h4>Our Services</h4>
              <ul>
                <li>
                  <a href='#'>Lagges </a>
                </li>
                <li>
                  <a href='#'>Goods Cargo</a>
                </li>
                <li>
                  <a href='#'>Vachile Cargo</a>
                </li>
                <li>
                  <a href='#'>LiveStock Cargo</a>
                </li>
                <li>
                  <a href='#'>Frigle Items</a>
                </li>
              </ul>
            </div>
            <div className='col-lg-3 col-md-12 footer-contact text-center text-md-start'>
              <h4>Contact Us</h4>
              <p>
                Near Old China Trade Center, Jamma Masjid, Link Rd, Gilgit,
                Gilgit-Baltistan
                <br />
                Pakistan <br />
                <br />
                <strong>Phone:</strong> (058114) 58703
                <br />
                <strong>Email:</strong> northstarcompny@gmail.com
                <br />
              </p>
            </div>
          </div>
        </div>
        <div className='container mt-4'>
          <div className='copyright'>
            © Copyright{" "}
            <strong>
              <span>CLOUDLEM</span>
            </strong>
            . All Rights Reserved
          </div>
          <div className='credits'>
            Designed by <a href='https://cloudlem.com/'>CLOUDLEM</a>
          </div>
        </div>
      </footer>
      {/* End Footer */}
      {/* End Footer */}
      <a
        href='#'
        className='scroll-top d-flex align-items-center justify-content-center'>
        <i className='none fa-regular fa-circle-up'></i>
      </a>
      <div id='preloader' />
    </div>
  );
}

export default Grout;
