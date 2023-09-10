import Image from "next/image";
import AnimationComponent from "./animation-component";
import Link from "next/link";

const listVisit = [
  {
    id: 1,
    name: "Gameloft Games",
    url: "#infomation",
  },
  {
    id: 2,
    name: "Gameloft Careers",
    url: "#infomation",
  },
  {
    id: 3,
    name: "Gameloft News",
    url: "#infomation",
  },
  {
    id: 4,
    name: "Gameloft Forum",
    url: "#infomation",
  },
  {
    id: 5,
    name: "Gameloft Corporate",
    url: "#infomation",
  },
  {
    id: 6,
    name: "Gameloft Advertising",
    url: "#infomation",
  },
  {
    id: 7,
    name: "Gameloft Support",
    url: "#infomation",
  },
];

const listLegal = [
  {
    id: 1,
    name: "Terms of Use",
    url: "#infomation",
  },
  {
    id: 2,
    name: "Privacy Policy",
    url: "#infomation",
  },
  {
    id: 3,
    name: "Cookies Policy",
    url: "#infomation",
  },
  {
    id: 4,
    name: "EULA",
    url: "#infomation",
  },
  {
    id: 5,
    name: "Legal Notices",
    url: "#infomation",
  },
  {
    id: 6,
    name: "Event Rules",
    url: "#infomation",
  },
  {
    id: 7,
    name: "Business Contacts",
    url: "#infomation",
  },
];
const InfomationSection = () => {
  return (
    <>
      <div className="sm:hidden bg-subcolor-003 text-center text-primary font-bold py-3">
        <p>Follow Us</p>
        <div className="pl-4 flex gap-3 justify-center">
                  <Image
                    width={40}
                    height={40}
                    alt="Logo"
                    src={"/assets/images/icons/facebook_mb.png"}
                  />
                  <Image
                    width={40}
                    height={40}
                    alt="Logo"
                    src={"/assets/images/icons/linkedin_mb.png"}
                  />
                  <Image
                    width={40}
                    height={40}
                    alt="Logo"
                    src={"/assets/images/icons/twitter_mb.png"}
                  />
                  <Image
                    width={40}
                    height={40}
                    alt="Logo"
                    src={"/assets/images/icons/youtube_mb.png"}
                  />
                </div>
      </div>
      <div
        id="infomation"
        className="sm:min-h-screen bg-primary bg-no-repeat bg-center"
      >
        <div className="container mx-auto h-full py-10 sm:py-40">
          <div className="flex flex-col sm:flex-row text-white justify-around">
            <AnimationComponent>
              <Image
                className="mx-auto sm:mx-0"
                width={250}
                height={100}
                alt="Logo"
                src={"/assets/images/logo/gameloft_white.png"}
              />
              <div className="hidden sm:block">
                <p className="pl-4 text-[25px] font-bold">Follow Us</p>
                <div className="pl-4 flex gap-3">
                  <Image
                    width={40}
                    height={40}
                    alt="Logo"
                    src={"/assets/images/icons/facebook_white.png"}
                  />
                  <Image
                    width={40}
                    height={40}
                    alt="Logo"
                    src={"/assets/images/icons/linkedin.png"}
                  />
                  <Image
                    width={40}
                    height={40}
                    alt="Logo"
                    src={"/assets/images/icons/twitter.png"}
                  />
                  <Image
                    width={40}
                    height={40}
                    alt="Logo"
                    src={"/assets/images/icons/youtube.png"}
                  />
                </div>
              </div>
            </AnimationComponent>
            <AnimationComponent className="flex sm:block justify-around text-start pt-4 sm:pt-0">
              <div>
                <p className="text-[25px] font-bold pb-5 hidden sm:block">
                  Visit
                </p>
                {listVisit.map((e) => (
                  <Link href={e.url} key={e.id}>
                    <p>{e.name}</p>
                  </Link>
                ))}
              </div>
              <div>
                <p className="text-[25px] font-bold pt-10 pb-5 hidden sm:block">
                  Visit
                </p>
                {listLegal.map((e) => (
                  <Link href={e.url} key={e.id}>
                    <p>{e.name}</p>
                  </Link>
                ))}
              </div>
            </AnimationComponent>
          </div>
        </div>
      </div>
    </>
  );
};
export default InfomationSection;
