import Image from "next/image";

interface RatingProps {
  rating: number;
  maxRating?: number;
}

export const Rating = ({ rating, maxRating = 5 }: RatingProps) => {
  const productRating = Math.floor(rating);
  const hasHalfRating = rating % 1 !== 0;

  return (
    <div className="flex items-center space-x-1 pt-2">
      {Array.from({ length: productRating }).map((_, index) => (
        <Image
          alt="full-star"
          key={index}
          src="/assets/images/full-star.svg"
          width={18}
          height={18}
        />
      ))}
      {hasHalfRating && (
        <Image
          alt="half-star"
          src="/assets/images/half-star.svg"
          width={18}
          height={18}
        />
      )}
      <span className="text-xs lg:text-sm text-[#00000099] ml-3">
        {rating.toFixed(1)}/{maxRating}
      </span>
    </div>
  );
};
