import { ChevronDown, Link } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export const CategoryHeader = () => {
  return (
    <div className="flex flex-wrap justify-between gap-4 items-end pb-4">
      <div>
        <h3 className="text-[32px] font-semibold">Casual</h3>
      </div>
      <div className="flex flex-wrap justify-between gap-8">
        <div className="text-[#00000099] pb-2">
          <p>Showing 1-10 of 100 Products</p>
        </div>
        <div>
          <span className="text-[#00000099]">Sort by: </span>
          <DropdownMenu>
            <DropdownMenuTrigger>
              <span className="flex gap-1">
                Most Popular <ChevronDown className="w-4" />
              </span>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Most Popular</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};
