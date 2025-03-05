import React from "react";
import { Navigation, A11y, Autoplay, EffectCoverflow } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import { duration } from "@mui/material";

const Hero = () => {
  const images = ["./hero.webp", "./hero2.webp", "hero2.webp"];
  return (
    <section className="flex flex-col  px-8 items-center h-screen justify-evenly lg:flex-row lg:justify-between lg:px-16">
      <div className="flex flex-col gap-3 w-full lg:w-1/2">
        <h1 className="text-3xl text-main font-semibold text-center lg:text-7xl lg:text-left">
          WORLD CLASS FRAGERANCE
        </h1>
        <p className="text-gray-500 border-l pl-8 border-l-4 border-l-main lg:text-lg lg:w-4/5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Feugiat diam
          pellentesque at nunc ac sit sit convallis et.Nulla lectus quam felis
          adipiscing. Arcu vestibulum
        </p>
      </div>
      <Swiper
        modules={[Navigation, A11y, Autoplay, EffectCoverflow]}
        spaceBetween={12}
        autoplay={{
          delay: 1300,
        }}
        effect="coverflow"
        loop={true}
        slidesPerView={1}
        className="!w-full md:!w-1/2"
      >
        {images.map((img) => (
          <SwiperSlide>
            <img
              src={img}
              alt="hero"
              loading="lazy"
              className="aspect-auto  rounded "
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Hero;