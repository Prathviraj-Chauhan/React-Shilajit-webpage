import React, { useEffect } from "react";
import "./HeroSection.css"; // Create this file for styling
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
// import Images from "../assets/Images"

const HeroSection = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".two",
        start: "0% 95%",
        end: "55% 50%",
        scrub: true,
      },
    });

    tl.to("#shila", {
      top: "124%",
      left: "14%",
      rotate: "360deg",
    }, 'shilajit')
      .to(".shilares", {
        top: "138%",
        left: "65%",
        width: "58vh",
      }, 'shilajit')
      .to(".leaf", {
        top: "111%",
        left: "67%",
        rotate: "70deg",
        width: "27vh",
      }, 'shilajit')
      .to(".leaf2", {
        top: "151%",
        left: "3%",
        rotate: "-100deg",
        width: "27vh",
      }, 'shilajit');

    const tl2 = gsap.timeline({
      scrollTrigger: {
        trigger: ".three",
        start: "0% 95%",
        end: "40% 50%",
        scrub: true,
      },
    });

    // tl2.from(".CAPSULE", {
    //   rotate: "-90%",
    //   left: "-50%",
    //   top: "110%",
    // }, 'SH')
      tl2.from(".sila", {
        // rotate: "-90%",
        // left: "-100%",
        // top: "110%",
      }, 'SH')
      .from(".shila", {
        // rotate: "90%",
        // left: "100%",
        // top: "110%",
      }, 'SH')
      .from(".Green2", {
        // rotate: "90%",
        // left: "100%",
        // top: "110%",
      }, 'SH')
      .to("#shila", {
        left: "39%",
        top: "214%",
      }, 'SH');
  }, []);

  return (
    <div className="main">
      <div className="one">
        <h1>SHILAJIT</h1>
        <img id="shila" src="/images/IMAGE1.png" alt="Bottle" />
        <img className="shilares" src="/images/Shilajeet resin.png" alt="" />
        <img className="leaf" src="/images/leaf.webp" alt="" />
        <img className="leaf2" src="/images/leaf.webp" alt="" />
        <img className="leaf3" src="/images/leaf2.png" alt="" />
      </div>
      <div className="two">
        <div className="lefttwo">
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
            <path fill="#F1C21B" d="M56.3,-55C67.2,-45.5,66.2,-22.7,61.3,-4.9C56.4,13,47.7,26,36.9,32C26,37.9,13,36.9,-3.6,40.5C-20.3,44.1,-40.5,52.4,-50.3,46.5C-60.1,40.5,-59.5,20.3,-56.7,2.8C-53.9,-14.7,-49,-29.3,-39.2,-38.8C-29.3,-48.3,-14.7,-52.7,4,-56.7C22.7,-60.7,45.5,-64.5,56.3,-55Z" transform="translate(100 100)" />
          </svg>
        </div>
        <div className="righttwo">
          <h1>DETAILS</h1>
          <p>
            Shilajit is a potent, tar-like substance that is primarily found in the rocky mountains of the Himalayas. It is the result of a long process of plant decomposition and is rich in fulvic acid, humic acid, and over 84 essential minerals. Traditionally, Shilajit has been used in Ayurvedic medicine for centuries due to its numerous health benefits. It is renowned for its ability to enhance energy levels, improve stamina, and support overall vitality. Shilajit is also known for its cognitive benefits, as it may enhance memory, concentration, and brain function. Additionally, it is believed to support reproductive health by increasing fertility and boosting libido. The natural anti-inflammatory and antioxidant properties of Shilajit help combat free radicals, promoting cellular health and slowing the aging process. Available in various forms, such as resin, powder, or capsules, Shilajit is commonly consumed as a dietary supplement to support general health and well-being.
          </p>
        </div>
      </div>
      <div className="three">
        <div className="card">
          <img className="CAPSULE" src="/images/green3 (2).png" alt="" />
          <img className="sila" src="/images/IMAGE1.png" alt="" />
          <h1>CAPSULE</h1>
          <button>BUY NOW</button>
        </div>
        <div className="card">
          <h1>RESIN</h1>
          <button>BUY NOW</button>
        </div>
        <div className="card">
          <img className="Green2" src="/images/green3 (2).png" alt="" />
          <img className="shila" src="/images/IMAGE1.png" alt="" />
          <h1>SHILAJIT 50G</h1>
          <button>BUY NOW</button>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
