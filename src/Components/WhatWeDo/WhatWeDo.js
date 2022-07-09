import React from "react";
import { Splide, SplideTrack, SplideSlide } from "@splidejs/react-splide";
import portfolioimg1 from "../../images/portfolio/portfolio-01.jpg";
import portfolioimg2 from "../../images/portfolio/portfolio-02.jpg";
import portfolioimg3 from "../../images/portfolio/portfolio-03.jpg";
import portfolioimg4 from "../../images/portfolio/portfolio-04.jpg";
import portfolioimg5 from "../../images/portfolio/portfolio-05.jpg";
import "./WhatWeDo.css";

import "@splidejs/react-splide/css";

const WhatWeDo = () => {
  return (
    <div className="whatWeDoContainer">
      <div className="whatWeDoUpperPart text-white">
        <div className="hero max-h-screen">
          <div className="heroContent">
            <div className="lg:text-left">
              <p className="text-[14px] font-semibold">WHAT WE DO</p>
              <p className="text-[43px] leading-[125%]">
                Quality Reability With 100% <br /> Setisfaction
              </p>
            </div>
            <div className="max-w-lg">
              <p className="text-[16px] leading-[120%] whatWeDoParagraph">
                Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
                Risus commodo viverra maecenas accumsan
                <span className="text-white"> View More Portfolio</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="whatWeDoLowerPart">
        <Splide
          id="splideContainer"
          options={{
            type: "loop",
            perPage: 5,
            focus: "center",
            drag: false,
            arrows: true,
            pagination: false,
            perMove: 1,
            autoplay: true,
            start: 3,
            speed: 800,
            autoHeight: true,
            breakpoints: {
              640: {
                perPage: 2,
              },
              480: {
                perPage: 1,
              },
            },
          }}
          hasTrack={false}
          aria-label="My Favorite Images"
        >
          <SplideTrack>
            <SplideSlide>
              <div>
                <img src={portfolioimg1} alt="Image 1" />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div>
                <img src={portfolioimg2} alt="Image 2" />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div>
                <img src={portfolioimg3} alt="Image 3" />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div>
                <img src={portfolioimg4} alt="Image 4" />
              </div>
            </SplideSlide>
            <SplideSlide>
              <div>
                <img src={portfolioimg5} alt="Image 5" />
              </div>
            </SplideSlide>
          </SplideTrack>
        </Splide>
      </div>
    </div>
  );
};

export default WhatWeDo;
