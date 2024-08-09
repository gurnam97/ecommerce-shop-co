import { Button } from "../ui/button";
import { Container } from "../Container";
import { BannerPromotions } from "./BannerPromotions";

export interface BannerPromotionsType {
  /**
   * Add heading to the component
   */
  heading: string;
  /**
   * Add subheading to the component
   */
  subheading: string;
  /**
   * Add Border line on the right
   */
  isBorder?: boolean;
}

export interface BannerContentProps {
  /**
   * Add heading to the component
   */
  heading: string;
  /**
   * Add subheading to the component
   */
  subheading?: string;
  /**
   * Add button text to the component
   */
  buttonText?: string;
  /**
   * Add Banner Promotion to the component
   */
  bannerPromotions?: BannerPromotionsType[];
}

export const BannerContent = ({
  heading,
  subheading,
  buttonText,
  bannerPromotions,
}: BannerContentProps) => {
  return (
    <Container classNames="relative pt-16 lg:pb-16">
      <div className="lg:w-1/2">
        <h2 className="text-4xl lg:text-6xl font-black">{heading}</h2>
        {subheading && (
          <p className="py-8 text-[#00000099] text-xs lg:text-sm">
            {subheading}
          </p>
        )}
        {buttonText && (
          <Button className="py-2 px-16 rounded-full h-[52px]">
            {buttonText}
          </Button>
        )}
        {bannerPromotions && (
          <BannerPromotions bannerPromotions={bannerPromotions} />
        )}
      </div>
    </Container>
  );
};
