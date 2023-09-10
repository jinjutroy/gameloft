import React, { FC } from "react";
import { useInView } from "react-intersection-observer";
import { twMerge } from "tailwind-merge";

type PropsAnimationComp = {
  children: React.ReactNode;
  className?: string;
};

const AnimationComponent: FC<PropsAnimationComp> = ({
  children,
  className,
}: PropsAnimationComp) => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0.2,
    triggerOnce: true,
  });
  return (
    <div
      ref={ref}
      className={twMerge(
        `transition ease-in-out duration-500 ${
          inView ? "opacity-1 translate-y-0" : "opacity-0 translate-y-40"
        }`,
        className
      )}
    >
      {children}
    </div>
  );
};

export default AnimationComponent;
