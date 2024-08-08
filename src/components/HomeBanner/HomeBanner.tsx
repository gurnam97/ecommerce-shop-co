import React from "react";
import Image from "next/image";
import { BannerContent } from "./BannerContent";
import {
  BANNER_BUTTON_TEXT,
  BANNER_HEADING,
  BANNER_IMAGE_URL,
  BANNER_IMAGE_URL_MOBILE,
  BANNER_SUBHEADING,
} from "./constants";
import { bannerPromotionsList } from "./__fixtures__/bannerPromotionsList";
import { classNames } from "@/utils/classNames";
import { useIsBreakpoint } from "@/hooks/useIsBreakpoint/useIsBreakpoint";
import { Breakpoint } from "@/types/breakpoint";

export const HomeBanner = () => {
  const isMobile = useIsBreakpoint(Breakpoint.Small, Breakpoint.Medium);

  return (
    <div
      className={classNames(
        isMobile && "bg-[#F2F0F1]",
        "relative overflow-hidden"
      )}
    >
      {!isMobile ? (
        <div className="absolute top-0 left-0 w-full">
          <Image
            src={BANNER_IMAGE_URL}
            alt="Banner Image"
            width="1000"
            height="1000"
            style={{ width: "100vw", height: "auto" }}
          />
        </div>
      ) : null}
      <BannerContent
        heading={BANNER_HEADING}
        subheading={BANNER_SUBHEADING}
        buttonText={BANNER_BUTTON_TEXT}
        bannerPromotions={bannerPromotionsList}
      />
      {isMobile ? (
        <div className="w-full">
          <Image
            src={BANNER_IMAGE_URL_MOBILE}
            alt="Banner Image"
            width="1000"
            height="1000"
            style={{ width: "100vw", height: "auto" }}
          />
        </div>
      ) : null}
    </div>
  );
};
