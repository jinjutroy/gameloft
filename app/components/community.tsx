import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import {
  OutlinedInput,
  ThemeProvider,
  createTheme,
  outlinedInputClasses,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { twMerge } from "tailwind-merge";
import PostSlide from "./post-slide";
import AnimationComponent from "./animation-component";

const activeClass: string =
  "outline outline-offset-4 outline-4 outline-subcolor-outline";

type DataPropsLiveStream = {
  url: string;
  name: string;
  key: number;
  active?: boolean;
};

const dataLiveStream: Array<DataPropsLiveStream> = [
  {
    key: 1,
    name: "Img 01",
    url: "/assets/images/slide/img_01.png",
    active: true,
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
const theme = (color: string) =>
  createTheme({
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: color,
            borderWidth: 3,
          },
          root: {
            [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: color,
              borderWidth: 3,
            },
            [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
              borderColor: color,
              borderWidth: 3,
            },
          },
        },
      },
    },
  });
const CommunitySection = () => {
  const [isFirst, setIsFirst] = React.useState(true);
  const [isEnd, setIsEnd] = React.useState(false);
  const swiperRef: any = React.useRef();

  return (
    <section
      id="community"
      className=" min-h-screen bg-white py-20 px-4 sm:px-0"
    >
      <div className="container mx-auto text-[16px] sm:text-[25px] text-primary font-bold">
        <AnimationComponent className="mb-8">
          <p className="text-[30px] sm:text-[45px] ">Game Community Hub</p>
          <p>Live Game Updates</p>
        </AnimationComponent>
        <AnimationComponent className="flex">
          <div className={`flex items-center ${isFirst ? "opacity-0" : ""}`}>
            <KeyboardArrowLeftIcon
              className="text-[60px]"
              onClick={() => swiperRef.current.slidePrev()}
            />
          </div>
          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={3}
            spaceBetween={10}
            modules={[Pagination, Navigation]}
            className="h-28 sm:h-36 px-6 livestream"
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 6,
              },
              1440: {
                slidesPerView: 8,
              },
            }}
            onSlideChangeTransitionStart={(e) => setIsFirst(e.isBeginning)}
            onSlideChangeTransitionEnd={(e) => setIsEnd(e.isEnd)}
          >
            {dataLiveStream.map((item) => (
              <SwiperSlide key={item.key}>
                <Link href={"#community"}>
                  <div
                    id="livestream"
                    className={twMerge(
                      "w-14 h-14 sm:w-24 sm:h-24 rounded-full mx-auto text-center overflow-hidden",
                      item.active ? activeClass : ""
                    )}
                  >
                    <Image
                      width={80}
                      height={80}
                      alt={item.name}
                      src={item.url}
                    />
                  </div>
                  <p className="text-center pt-2 text-[16px]">{item.name}</p>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className={`flex items-center ${isEnd ? "opacity-0" : ""}`}>
            <KeyboardArrowRightIcon
              className="text-[60px]"
              onClick={() => swiperRef.current.slideNext()}
            />
          </div>
        </AnimationComponent>
        <AnimationComponent className="flex justify-between mt-24">
          <p className="text-[30px]">All Post</p>
          <div className="icon-contact flex gap-5">
            <Image
              width={40}
              height={45}
              alt={"Twitter"}
              src={"/assets/images/icons/twitter_blue.png"}
            />
            <Image
              width={40}
              height={45}
              alt={"Instagram"}
              src={"/assets/images/icons/instagram_blue.png"}
            />
            <Image
              width={40}
              height={45}
              alt={"Facebook"}
              src={"/assets/images/icons/facebook_blue.png"}
            />
            <div className="hidden sm:flex">
              <ThemeProvider theme={theme("#2699FB")}>
                <OutlinedInput
                  size="small"
                  placeholder="Search"
                  endAdornment={
                    <Image
                      width={20}
                      height={20}
                      alt={"Search"}
                      src={"/assets/images/icons/search_blue.png"}
                    />
                  }
                />
              </ThemeProvider>
            </div>
          </div>
        </AnimationComponent>
        <AnimationComponent className="flex sm:hidden">
          <ThemeProvider theme={theme("#2699FB")}>
            <OutlinedInput
              className="mt-4"
              size="small"
              placeholder="Search"
              endAdornment={
                <Image
                  width={20}
                  height={20}
                  alt={"Search"}
                  src={"/assets/images/icons/search_blue.png"}
                />
              }
            />
          </ThemeProvider>
        </AnimationComponent>
      </div>
      <PostSlide />
    </section>
  );
};

export default CommunitySection;
