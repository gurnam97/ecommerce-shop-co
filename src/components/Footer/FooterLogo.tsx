"use client";
import { useIsBreakpoint } from "../../hooks/useIsBreakpoint/useIsBreakpoint";
import { cn } from "../../lib/utils";
import { Breakpoint } from "../../types/breakpoint";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FOOTER_DESCRIPTION } from "./constants";
import { socialMediaDataType } from "./types";

export interface FooterLogoProps {
  /**
   * Add Social Media Icons
   */
  socialMediaData: socialMediaDataType[];
}

export const FooterLogo = ({ socialMediaData }: FooterLogoProps) => {
  const isMobile = useIsBreakpoint(Breakpoint.Small, Breakpoint.Medium);
  return (
    <div className="text-left">
      <Link href="/">
        <Image
          alt="logo"
          className={cn("h-[22px] -ml-3", isMobile && "h-[20px]")}
          src="/assets/images/shopCo.svg"
          width={isMobile ? 144 : 160}
          height={isMobile ? 20 : 22}
        />
      </Link>
      <div className="mt-4 text-sm text-[#00000099] pb-5 lg:pb-8">
        {FOOTER_DESCRIPTION}
      </div>
      <div className="flex gap-x-2 pb-6 lg:pb-0">
        {socialMediaData.map((link) => {
          return (
            <Link href="/" key={link.id}>
              <Image
                src={link.url}
                alt={link.alt}
                key={link.id}
                width={28}
                height={28}
              />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
