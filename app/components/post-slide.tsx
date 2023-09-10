import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import Image from "next/image";
import Link from "next/link";
import AnimationComponent from "./animation-component";
type DataPost = {
  key: number;
  name: string;
  url: string;
};

const dataPost: Array<DataPost> = [
  {
    key: 1,
    name: "Post01",
    url: "#",
  },
  {
    key: 2,
    name: "Post02",
    url: "#",
  },
  {
    key: 3,
    name: "Post03",
    url: "#",
  },
  {
    key: 4,
    name: "Post04",
    url: "#",
  },
  {
    key: 5,
    name: "Post05",
    url: "#",
  },
  {
    key: 6,
    name: "Post06",
    url: "#",
  },
  {
    key: 7,
    name: "Post07",
    url: "#",
  },
  {
    key: 8,
    name: "Post08",
    url: "#",
  },
  {
    key: 9,
    name: "Post09",
    url: "#",
  },
  {
    key: 10,
    name: "Post10",
    url: "#",
  },
];

const PostSlide = () => {
  const [currSlide, setCurrSlide] = useState<number>(); 
  const swiperRef: any = React.useRef();
  
  return (
    <AnimationComponent >
      <Swiper
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={'auto'}
        centeredSlides
        spaceBetween={20}
        breakpoints={{
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 4,
          },
          1563: {
            slidesPerView: 6,
          },
        }} 
        loop={true}
        speed={800}
        modules={[Pagination]}
        onSlideChange={(e) => setCurrSlide(e.realIndex)}
        className="mt-8"
      >
        {dataPost.map((e) => (
          <SwiperSlide key={e.key} className="group scale-95 hover:scale-100">
            <div
              className={`h-[380px] 2xl:w-[330px] border-primary border border-solid pb-4 mx-auto bg-subcolor-003 rounded-[10px] relative flex justify-between flex-col`}
            >
              <div className="flex absolute top-5 h-10 w-full justify-between px-4">
                <Link href={"#community"}>
                <Image 
                  width={40}
                  height={40}
                  alt={"Facebook"}
                  src={"/assets/images/icons/facebook.png"}
                />
                </Link>
                <Link href={"#community"} className="flex justify-center items-center rounded-full w-[40px] h-[40px] text-center bg-white">
                  <Image
                    width={20}
                    height={20}
                    alt={"Share"}
                    src={"/assets/images/icons/share.png"}
                  />
                </Link> 
              </div>
              <Image className="mx-auto pt-14" height={120} width={230} src={'/assets/images/triangular_blue.png'} alt="bg"/>
              <p className=" text-primary text-[13px] px-4 line-clamp-4 group-hover:line-clamp-none">Lorem ipsum dolor sit amet,psum dolor sit amet,psum dolor sit amet,psum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos.</p>
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
          <span className="font-bold">{(currSlide ?? 0) + 1}</span>/{dataPost.length}
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

export default PostSlide;
