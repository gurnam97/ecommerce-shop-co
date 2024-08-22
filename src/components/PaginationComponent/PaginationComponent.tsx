import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export const PaginationComponent = () => {
  return (
    <Pagination>
      <PaginationContent className="w-full justify-between">
        <PaginationItem>
          <PaginationPrevious href="#" className="text-[#00000080]" />
        </PaginationItem>
        <div className="flex flex-row items-center gap-1">
          <PaginationItem>
            <PaginationLink href="#" className="text-[#00000080]" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className="text-[#00000080]">
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className="text-[#00000080]">
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className="text-[#00000080]">
              8
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className="text-[#00000080]">
              9
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" className="text-[#00000080]">
              10
            </PaginationLink>
          </PaginationItem>
        </div>
        <PaginationItem>
          <PaginationNext href="#" className="text-[#00000080]" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
