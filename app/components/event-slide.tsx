import Image from "next/image";
import React, { useState } from "react";
import { Button, Divider, Pagination as MuiPagination } from "@mui/material";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import AnimationComponent from "./animation-component";
import Link from "next/link";
type DataPost = {
  key: number;
  name: string;
  url: string;
  title_short: string;
  desc: string;
};

const dataEvent: Array<DataPost> = [
  {
    key: 1,
    name: "Post01",
    url: "#",
    title_short: "short title here",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore",
  },
  {
    key: 2,
    name: "Post02",
    url: "#",
    title_short: "short title here",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore",
  },
  {
    key: 3,
    name: "Post03",
    url: "#",
    title_short: "short title here",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore",
  },
  {
    key: 4,
    name: "Post04",
    url: "#",
    title_short: "short title here",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore",
  },
  {
    key: 5,
    name: "Post05",
    url: "#",
    title_short: "short title here",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore",
  },
  {
    key: 6,
    name: "Post06",
    url: "#",
    title_short: "short title here",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore",
  },
  {
    key: 7,
    name: "Post07",
    url: "#",
    title_short: "short title here",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore",
  },
  {
    key: 8,
    name: "Post08",
    url: "#",
    title_short: "short title here",
    desc: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore",
  },
];

const EventSlide = () => {
  const [currSlide, setCurrSlide] = useState<number>(0);
  const swiperRef: any = React.useRef();

  return (
    <AnimationComponent className="text-base">
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        loop
        slidesPerView={1}
        spaceBetween={20}
        centeredSlides
        speed={800}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1563: {
            slidesPerView: 5,
          },
        }}
        onSlideChange={(e) => setCurrSlide(e.realIndex)}
        className="mt-8"
      >
        {dataEvent.map((e) => (
          <SwiperSlide key={e.key}>
            {({ isActive }) => (
              <div
                className={`h-[400px] 2xl:h-[600px]  w-[300px] 2xl:w-[330px] border-primary border border-solid overflow-hidden transition-all mx-auto bg-primary rounded-[10px] relative flex justify-between flex-col ${
                  isActive ? "scale-100" : "scale-90"
                }`}
              >
                {isActive ? (
                  <>
                    <div className="absolute top-5 left-auto right-4 h-10 px-4">
                      <Link
                        href={"#events"}
                        className="flex justify-center items-center rounded-full w-[40px] h-[40px] text-center bg-white"
                      >
                        <Image
                          width={20}
                          height={20}
                          alt={"Share"}
                          src={"/assets/images/icons/share.png"}
                        />
                      </Link>
                    </div>
                    <div className="h-1/2 font-bold text-white py-4 px-8">
                      <p className="text-[30px] line-clamp-2">
                        {e.title_short}
                      </p>
                      <div className="bg-white w-1/2 my-2 h-[1px]" />
                      <p className="line-clamp-3">{e.desc}</p>
                    </div>
                    <div className="h-1/2 bg-gradient-card text-[35px] font-bold text-white py-4 px-8 flex items-end">
                      <div className="flex items-center cursor-pointer justify-center normal-case text-[16px] h-[46px] sm:h-[60px] w-full  border-[2px] text-white border-white font-bold hover:border-white hover:opacity-80">
                        read more
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <Image
                      className="mx-auto pt-14"
                      height={120}
                      width={230}
                      src={"/assets/images/triangular_white.png"}
                      alt="bg"
                    />
                    <div className="h-1/2 bg-gradient-card text-[30px] leading-tight font-bold text-white py-4 px-8 flex items-end">
                      {e.title_short}
                    </div>
                  </>
                )}
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <MuiPagination
        className="justify-center mt-3 hidden sm:flex"
        page={currSlide + 1}
        count={dataEvent.length}
        hidePrevButton
        hideNextButton
        onChange={(_, i) => {
          const index = i === dataEvent.length + 1 ? 0 : i - 1;
          swiperRef.current.slideTo(index);
          setCurrSlide(index);
        }}
      />
    </AnimationComponent>
  );
};

export default EventSlide;
