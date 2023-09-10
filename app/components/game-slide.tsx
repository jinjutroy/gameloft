import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import SaveAltIcon from "@mui/icons-material/SaveAlt";
import AnimationComponent from "./animation-component";
import { Button } from "@mui/material";
import { twMerge } from "tailwind-merge";
type DataPost = {
  key: number;
  name: string;
  url: string;
};

const dataPost: Array<DataPost> = [
  {
    key: 1,
    name: "Img 01",
    url: "/assets/images/slide/img_01.png",
  },
  {
    key: 2,
    name: "Img 02",
    url: "/assets/images/slide/img_02.png",
  },
  {
    key: 3,
    name: "Img 03",
    url: "/assets/images/slide/img_03.png",
  },
  {
    key: 4,
    name: "Img 04",
    url: "/assets/images/slide/img_04.png",
  },
  {
    key: 5,
    name: "Img 05",
    url: "/assets/images/slide/img_05.png",
  },
  {
    key: 6,
    name: "Img 06",
    url: "/assets/images/slide/img_06.png",
  },
  {
    key: 7,
    name: "Img 07",
    url: "/assets/images/slide/img_07.png",
  },
  {
    key: 8,
    name: "Img 08",
    url: "/assets/images/slide/img_08.png",
  },
  {
    key: 9,
    name: "Img 09",
    url: "/assets/images/slide/img_09.png",
  },
  {
    key: 10,
    name: "Img 10",
    url: "/assets/images/slide/img_10.png",
  },
];
const className =
  "shadow-lg rounded-full outline outline-4 outline-subcolor-004 flex items-center justify-center";
const GameSlide = () => {
  const [currSlide, setCurrSlide] = useState<number>();
  const swiperRef: any = React.useRef();

  return (
    <AnimationComponent>
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={1}
        centeredSlides
        spaceBetween={20}
        loop={true}
        speed={800}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
          1563: {
            slidesPerView: 3,
          },
        }}
        modules={[Pagination]}
        onSlideChange={(e) => setCurrSlide(e.realIndex)}
        className="mt-8"
      >
        {dataPost.map((e) => (
          <SwiperSlide key={e.key}>
            <div
              className={`relative h-[380px] 2xl:w-[400px] border-primary overflow-hidden mx-auto bg-subcolor-003 rounded-[10px] flex justify-between flex-col`}
            >
              <div
                className={twMerge(
                  "min-w-0 w-[50px] h-[50px] absolute top-5 right-5 left-auto bg-white hover:bg-white hover:opacity-90 p-2 rounded-full z-50",
                  className
                )}
              >
                <Button href={e.url} download>
                  <SaveAltIcon className="text-black" />
                </Button>
              </div>
              <Image
                className="mx-auto p-2 rounded-[10px] object-cover w-full h-full hover:opacity-90"
                height={230}
                width={230}
                src={e.url}
                alt="bg"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex justify-center mt-4 text-primary">
        <ArrowBackIcon
          style={{ fontSize: '40px' }}
          className="cursor-pointer hover:opacity-80"
          onClick={() => swiperRef.current.slidePrev()}
        />
        <p className="text-[25px] mx-3">
          <span className="font-bold">{(currSlide ?? 0) + 1}</span>/
          {dataPost.length}
        </p>
        <ArrowForwardIcon
          style={{ fontSize: '40px' }}
          className="cursor-pointer hover:opacity-80"
          onClick={() => swiperRef.current.slideNext()}
        />
      </div>
    </AnimationComponent>
  );
};

export default GameSlide;
