import Image from "next/image";
import { Container } from "../Container";
import { classNames } from "@/utils/classNames";
import { useIsBreakpoint } from "@/hooks/useIsBreakpoint/useIsBreakpoint";
import { Breakpoint } from "@/types/breakpoint";
import { LogoInputType } from "./types";

export interface ClientsComponentProps {
  /**
   * Add Clients logos
   */
  logos: LogoInputType[];
}

export const ClientsComponent = ({ logos }: ClientsComponentProps) => {
  const isMobile = useIsBreakpoint(Breakpoint.Small, Breakpoint.Medium);

  return (
    <div className="py-4 lg:py-7 bg-black">
      <Container classNames="flex flex-wrap justify-center items-center">
        {logos.map((logo, index) => (
          <div
            key={logo.url}
            className={classNames(
              "w-1/3 lg:w-[20%] p-3 lg:p-0 flex justify-center",
              isMobile && index > 2 && "w-5/12"
            )}
          >
            <Image
              src={logo.url}
              height={34}
              width={180}
              alt={logo.alt}
              className="w-auto h-6 lg:h-auto"
            />
          </div>
        ))}
      </Container>
    </div>
  );
};
