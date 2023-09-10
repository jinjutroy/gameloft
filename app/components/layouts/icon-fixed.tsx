import Image from "next/image";
import React from "react";
const className =
  "w-10 h-10 shadow-lg bg-white rounded-full outline outline-4 outline-outline cursor-pointer flex items-center justify-center";
const IconFixed = () => {
  return (
    <div className="fixed bottom-8 right-8">
      <div className="flex flex-col gap-5">
        <div className={className}>
          <Image
            width={20}
            height={20}
            src={"/assets/images/icon_share.png"}
            alt="share"
          />
        </div>
        <div className={className}>
          <Image
            width={20}
            height={20}
            src={"/assets/images/mail.png"}
            alt="email"
          />
        </div>
        <div className={className}>
          <Image
            width={20}
            height={20}
            src={"/assets/images/support.png"}
            alt="support"
          />
        </div>
      </div>
    </div>
  );
};

export default IconFixed;
