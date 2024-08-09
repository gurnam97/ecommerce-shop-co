import { SearchIcon } from "lucide-react";
import { Input } from "../ui/input";

export const SearchInput = () => {
  return (
    <div className="relative flex items-center">
      <SearchIcon className="text-[#00000066] absolute left-4" />
      <Input
        placeholder="Search for products..."
        className="bg-[#F0F0F0] pl-14 rounded-full h-[42px]"
      />
    </div>
  );
};
