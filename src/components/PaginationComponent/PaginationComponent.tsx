import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useIsBreakpoint } from "@/hooks/useIsBreakpoint/useIsBreakpoint";
import { Breakpoint } from "@/types/breakpoint";

export const PaginationComponent = () => {
  const isMobile = useIsBreakpoint(Breakpoint.Small, Breakpoint.Medium);

  return (
    <Pagination>
      <PaginationContent className="w-full justify-between">
        <PaginationItem>
          <PaginationPrevious
            href="#"
            className="!text-[#000] border border-[#0000001A]"
          />
        </PaginationItem>
        <div className="flex flex-row items-center gap-1">
          <PaginationItem>
            <PaginationLink
              href="#"
              className="text-[#00000080] bg-[#0000000F] border-none"
              isActive
            >
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
          {!isMobile && (
            <>
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
            </>
          )}
          <PaginationItem>
            <PaginationLink href="#" className="text-[#00000080]">
              10
            </PaginationLink>
          </PaginationItem>
        </div>
        <PaginationItem>
          <PaginationNext
            href="#"
            className="!text-[#000] border border-[#0000001A]"
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
