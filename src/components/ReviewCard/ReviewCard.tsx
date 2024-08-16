import { Rating } from "../Rating";
import Image from "next/image";
import { CarouselItem } from "../ui/carousel";
import { reviewType } from "./types";

export interface ReviewCardProps {
  /**
   * Add review to display on card
   */
  review: reviewType;
}

export const ReviewCard = ({ review }: ReviewCardProps) => {
  return (
    <div className="border border-[#0000001A] rounded-[20px] p-6 lg:p-8 justify-start">
      <Rating rating={review.rating} />
      <div className="flex gap-x-[6px] pt-4">
        <span className="text-base lg:text-xl font-bold">{review.name}</span>
        {review.verified && (
          <Image
            alt="verified-icon"
            className="w-6 h-6"
            src="/assets/images/verified.svg"
            width={24}
            height={24}
          />
        )}
      </div>
      <div className="text-sm lg:text-base pt-3 text-[#00000099]">
        &ldquo;{review.comment}&ldquo;
      </div>
    </div>
  );
};
