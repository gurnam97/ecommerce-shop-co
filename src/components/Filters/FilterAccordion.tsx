import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../ui/accordion";
import { Filter } from "./Filter";
import MultiRangeSlider from "../MultiRangeSlider/MultiRangeSlider";

export const FilterAccordion = () => {
  return (
    <Accordion type="multiple" className="w-full text-base">
      <AccordionItem value="item-1">
        <AccordionTrigger className="text-base">
          <span>Price</span>
        </AccordionTrigger>
        <AccordionContent className="border-t py-4">
          <MultiRangeSlider
            min={0}
            max={500}
            onChange={({ min, max }: { min: number; max: number }) =>
              console.log(`min = ${min}, max = ${max}`)
            }
          />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger className="text-base">
          <span>Colors</span>
        </AccordionTrigger>
        <AccordionContent className="border-t py-4">
          <Filter type="color" />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger className="text-base">
          <span>Size</span>
        </AccordionTrigger>
        <AccordionContent className="border-t py-4">
          <Filter type="size" />
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4" className="border-none">
        <AccordionTrigger className="text-base">
          <span>Dress Style</span>
        </AccordionTrigger>
        <AccordionContent className="border-t py-4">
          <Filter type="category" />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};
