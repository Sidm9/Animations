import React, { useRef, useEffect } from "react";
import bg from "../assets/background.png";
import rock from "../assets/rock.png";
import earth from "../assets/earth.png";
import mid from "../assets/mid.png";
import foreground from "../assets/foreground.png";
import Parallax from  "parallax-js";

const Section = () => {
  const scene = useRef(null);

  useEffect(() => {
    const parallaxInstance = new Parallax(scene.current, {
      relativeInput: true,
      hoverOnly: true
    })
    //parallaxInstance.enable();

    return () => parallaxInstance.disable();
  }, [])


  return (
    <>
      <section id="sectionone" class="screen">
        <div ref={scene} id="scene">
          <div data-depth="0.1" class="bg">
            <img src={bg} alt="" />
          </div>
          <div data-depth="0.2" class="rock1">
            <img src={rock} alt="" />
          </div>
          <div data-depth="1.2" class="earth">
            <img src={earth} alt="" />
          </div>
          <div data-depth="0.1" class="text">
            <h1>PLANETS</h1>
          </div>
          <div data-depth="0.4" class="mid">
            <img src={mid} alt="" />
          </div>
          <div data-depth="0.1" class="fore">
            <img src={foreground} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Section;
