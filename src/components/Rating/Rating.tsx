import Image from "next/image";

interface RatingProps {
  /**
   * Add rating of product
   */
  rating: number;
  /**
   * Add maximum rating of product
   */
  maxRating?: number;
  /**
   * Display the average rating number 
   */
  displayNumber?: boolean;
}

export const Rating = ({
  rating,
  maxRating = 5,
  displayNumber,
}: RatingProps) => {
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
      {displayNumber ? (
        <span className="text-xs lg:text-sm text-[#00000099] ml-3">
          {rating.toFixed(1)}/{maxRating}
        </span>
      ) : null}
    </div>
  );
};
