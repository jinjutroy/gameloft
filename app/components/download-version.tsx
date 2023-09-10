import Image from "next/image";
import React from "react";
import { _homepage_enum } from "../constants";
import AnimationComponent from "./animation-component";

const DownloadVersion = () => {
  const listPlatform = _homepage_enum.typePlatformDownload;
  return (
    <section className="bg-subcolor-002">
      <AnimationComponent className="container mx-auto flex sm:flex-row flex-col justify-between items-center py-3">
        <p className="text-primary font-bold text-[20px] pb-4 sm:pb-0">
          Download latest version
        </p>
        <div className="flex">
          {listPlatform.map((platform) => (
            <a key={platform.key} target="_blank" type="button" href="#" className="cursor-pointer">
              <Image
                alt={platform.name}
                width={platform.width}
                height={40}
                src={platform.src}
                className="pl-2 object-cover"
              />
            </a>
          ))}
        </div>
      </AnimationComponent>
    </section>
  );
};

export default DownloadVersion;
