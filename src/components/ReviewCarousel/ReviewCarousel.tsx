import {
  Carousel,
  CarouselPrevious,
  CarouselNext,
  CarouselContent,
  CarouselItem,
} from "../ui/carousel";
import { ReviewCard } from "../ReviewCard/ReviewCard";
import { Container } from "../Container";
import { OUR_HAPPY_CUSTOMERS } from "./constants";
import { reviewType } from "../ReviewCard/types";

interface ReviewCarouselProps {
  reviews: reviewType[];
}

export const ReviewCarousel = ({ reviews }: ReviewCarouselProps) => {
  return (
    <Container>
      <Carousel className="pt-20 lg:pb-20 pb-7">
        <div className="flex justify-between items-center">
          <div className="uppercase text-[32px] lg:text-5xl font-black">
            {OUR_HAPPY_CUSTOMERS}
          </div>
          <div className="flex gap-3 justify-between items-center">
            <CarouselPrevious className="h-6 w-6 relative left-0 top-0 border-0 bg-transparent hover:bg-transparent shadow-none translate-y-0" />
            <CarouselNext className="h-6 w-6 relative left-0 top-0 border-0 bg-transparent hover:bg-transparent shadow-none translate-y-0" />
          </div>
        </div>
        <CarouselContent className="pt-6 lg:pt-10">
          {reviews.map((review) => (
            <CarouselItem key={review.id} className="md:basis-1/2 lg:basis-1/3">
              <ReviewCard review={review} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </Container>
  );
};
