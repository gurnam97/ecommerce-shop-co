import React from "react";
import { BannerPromotionsType } from "./BannerContent";
import { classNames } from "@/utils/classNames";
import { useIsBreakpoint } from "@/hooks/useIsBreakpoint/useIsBreakpoint";
import { Breakpoint } from "@/types/breakpoint";

export interface BannerPromotionsProps {
  /**
   * Add Banner Promotion to the component
   */
  bannerPromotions?: BannerPromotionsType[];
}

export const BannerPromotions = ({
  bannerPromotions,
}: BannerPromotionsProps) => {
  const isMobile = useIsBreakpoint(Breakpoint.Small, Breakpoint.Medium);

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 py-8 gap-y-4 justify-items-center lg:justify-items-start">
      {bannerPromotions?.map((item, index) => (
        <div
          key={item.subheading}
          className={classNames(
            isMobile && index < 1 && "justify-self-end",
            isMobile && index > 1 && "col-span-2",
            "flex justify-between lg:w-full"
          )}
        >
          <div>
            <h4 className="text-2xl lg:text-[40px] font-semibold">
              {item.heading}
            </h4>
            <p className="text-[#00000099] text-xs lg:text-sm pt-2">
              {item.subheading}
            </p>
          </div>
          {!isMobile && item.isBorder && (
            <div className="block w-[1px] h-full bg-[#0000001A] mr-8" />
          )}
          {isMobile && item.isBorder && index < 1 && (
            <div className="block w-[1px] h-full bg-[#0000001A] ml-8" />
          )}
        </div>
      ))}
    </div>
  );
};
