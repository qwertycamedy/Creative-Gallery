import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap-trial";
import { ScrollTrigger } from "gsap-trial/ScrollTrigger";
import { ScrollSmoother } from "gsap-trial/ScrollSmoother";
import "./styles/App.scss";
import Hero from "./components/hero/Hero";
import Gallery from "./components/gallery/Gallery";

const App = () => {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

  const wrapper = useRef(null),
    content = useRef(null),
    hero = useRef(null),
    itemLRef = useRef(null),
    itemRRef = useRef(null);

  useLayoutEffect(() => {
    if (ScrollTrigger.isTouch !== 1) {
      const ctx = gsap.context(() => {
        ScrollSmoother.create({
          wrapper: wrapper.current,
          content: content.current,
          smooth: 1.5,
          effects: true,
          smoothTouch: 0.1,
        });

        gsap.fromTo(
          hero.current,
          { opacity: 1 },
          {
            opacity: 0,
            scrollTrigger: {
              trigger: hero.current,
              start: "center",
              end: "700",
              scrub: true,
            },
          }
        );

        let itemsL = gsap.utils.toArray(itemLRef.current.children);
        itemsL.forEach(item => {
          gsap.fromTo(
            item,
            { opacity: 0, x: -100 },
            {
              opacity: 1,
              x: 0,
              scrollTrigger: {
                trigger: item,
                start: "-850",
                end: "-100",
                scrub: true,
              },
            }
          );
        });

        let itemsR = gsap.utils.toArray(itemRRef.current.children);
        itemsR.forEach(item => {
          gsap.fromTo(
            item,
            { opacity: 0, x: 100 },
            {
              opacity: 1,
              x: 0,
              scrollTrigger: {
                trigger: item,
                start: "-750",
                end: "top",
                scrub: true,
              },
            }
          );
        });
      });
      return () => ctx.revert();
    }
  }, []);

  return (
    <div className="wrapper" ref={wrapper}>
      <div className="content" ref={content}>
        <Hero hero={hero} />
        <Gallery itemsL={itemLRef} itemsR={itemRRef} />
      </div>
    </div>
  );
};

export default App;
