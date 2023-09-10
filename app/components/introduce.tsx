import React from "react";
import { _homepage_enum } from "../constants";
import Image from "next/image"; 
import AnimationComponent from "./animation-component";

const IntroduceSection = () => {
  const total = _homepage_enum.numberStar.total;
  return (
    <div className="h-screen bg-primary bg-triangular-white px-4 sm:px-0 bg-no-repeat bg-center">
      <div className="container mx-auto h-full flex items-end pb-20">
        <AnimationComponent className="w-full text-white">
          <h1 className="text-[45px] font-bold">Gameloft game</h1>
          <div className="text-[11px] mb-8">
            <span>Racing / Action </span>
            <span className="px-2">|</span>
            {Array.from(Array(total)).map((_, index) => {
              return <RenderStar index={index} key={index} />;
            })}
          </div>
          <p className="sm:w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud itation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. 
          </p>
        </AnimationComponent>
      </div>
    </div>
  );
};

interface PropsRenderStar {
  index: number;
}

const RenderStar: React.FC<PropsRenderStar> = ({ index }) => {
  const activeNum = _homepage_enum.numberStar.active;
  let star = "/assets/images/star_yellow.png";
  if (index >= activeNum) {
    star = "/assets/images/star.png";
  }
  return (
    <span className="pr-1">
      <Image className="inline" width={16} height={16} alt="icon" src={star} />
    </span>
  );
};
export default IntroduceSection;
