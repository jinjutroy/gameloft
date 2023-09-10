import React from "react";
import AnimationComponent from "./animation-component";
import EventSlide from "./event-slide";

const EventSection = () => {
  return (
    <section id="events" className="sm:min-h-screen bg-subcolor-002 py-10 sm:py-20 flex flex-col justify-between px-4 sm:px-0">
      <AnimationComponent className="container mx-auto pb-10">
        <p className="sm:text-[45px] text-[25px] font-bold text-primary">
          Special Events & Promotional
        </p>
        <p className="text-primary text-[20px]">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos.
        </p>
      </AnimationComponent>
      <EventSlide/>

    </section>
  );
};

export default EventSection;
