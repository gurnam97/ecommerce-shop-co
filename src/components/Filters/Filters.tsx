import { Filter } from "./Filter";
import { FilterAccordion } from "./FilterAccordion";

export const Filters = () => {
  return (
    <div>
      <Filter type="category" />
      <FilterAccordion />
    </div>
  );
};
