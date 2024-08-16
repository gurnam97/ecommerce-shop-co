"use client";

import { FooterBanner } from "./FooterBanner";
import { FooterCategory } from "./FooterCategory";
import { FooterLogo } from "./FooterLogo";
import { Copyright } from "./Copyright";
import { Separator } from "../ui/separator";
import {
  copyrightData,
  footerCategoryData,
  socialMediaData,
} from "./__fixtures__";
import { NEWSLETTER_BUTTON_TEXT, NEWSLETTER_HEADING } from "./constants";

export const Footer = () => {
  return (
    <>
      <FooterBanner
        heading={NEWSLETTER_HEADING}
        buttonText={NEWSLETTER_BUTTON_TEXT}
      />
      <div className="bg-[#F0F0F0] -mt-28 pt-28 pb-16 -z-10 relative px-4 lg:px-24">
        <div className="flex flex-col lg:flex-row pt-[50px] gap-x-10">
          <div className="w-full lg:w-1/4">
            <FooterLogo socialMediaData={socialMediaData} />
          </div>
          <div className="w-full lg:w-3/4">
            <FooterCategory footerCategoryData={footerCategoryData} />
          </div>
        </div>
        <Separator className="border-[#0000001A] my-4 w-auto" />
        <Copyright copyrightData={copyrightData} />
      </div>
    </>
  );
};
