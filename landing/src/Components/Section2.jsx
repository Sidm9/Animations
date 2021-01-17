import React, { useRef, useEffect } from "react";
import rock from "../assets/rock.png";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
// Import Swiper styles
import "swiper/swiper-bundle.css";
import Planet from "./Planet";
SwiperCore.use([Navigation, Pagination]);

const Section2 = () => {
  const slider = useRef(null);
  const planet_links = useRef(null);

  const data = [
    {
      Mercury:
        "Mercury is the closest planet to the Sun but, perhaps surprisingly, it does not have the highest temperatures. It is the second densest planet of the Solar System, but also the  smallest planet. The structure of Mercury makes it the most similar planet to Earth.",
    },
    {
      Venus:
        "Venus is the second planet from the Sun and the sixth-largest. Together with Mercury, they are the only planets without a satellite, even though Mercury is closer to the sun, Venus is the hottest planet.",
    },
    {
      Earth:
        "Earth is the third planet from the Sun and the fifth largest planet in the Solar System with the highest density. It is currently the only known location where life is present",
    },
    {
      Mars:
        "Mars is the fourth planet from the Sun and the second-smallest planet with a thin atmosphere, having the surface features reminiscent both of the impact craters of the Moon, and the valleys, deserts and polar ice caps of Earth. ",
    },
    {
      Jupiter:
        "Jupiter is the fifth planet from the Sun and the largest planet of the Solar System. It is the oldest planet of the Solar System thus it was the first to take shape out of the remains of the solar nebula.",
    },
    {
      Saturn:
        "Saturn is the sixth planet from the Sun, with the largest planetary rings in the Solar System. It is the second-largest planet after Jupiter, and recently, with many other moons  being discovered, it surpassed the number of Jupiter’s moons.",
    },
    {
      Uranus:
        "Uranus is the seventh planet discovered in the Solar System that also led to the discovery of the last planet, Neptune they are both referred to as ice giants.",
    },
    {
      Neptune:
        "Neptune is the fourth largest and the farthest planet of the Solar System with the most powerful wind speeds out of all the planets. It is the smallest of the gas giants.",
    },
  ];

  return (
    <>
      <section id="sectiontwo" className="screen">
        <Swiper
          spaceBetween={150}
          slidesPerView={"auto"}
          mousewheel={true}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {data.map((i, index) => (
            <SwiperSlide>
              <Planet
                number={index + 1}
                name={Object.keys(i)}
                desc={Object.values(i)}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <div>
          <div className="rockbg1">
            <img src={rock} alt="" />
          </div>
          <div className="planet-links" />
        </div>
      </section>
    </>
  );
};

export default Section2;
