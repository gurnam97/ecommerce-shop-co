import Image from "next/image";
import { copyrightDataType } from "./types";

export interface CopyrightProps {
  /**
   * Add Copyright data
   */
  copyrightData: copyrightDataType;
}

export const Copyright = ({ copyrightData }: CopyrightProps) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-y-2">
      <div className="text-sm text-[#00000099]">
        © {copyrightData.copyrightText}
      </div>
      <div className="flex justify-between">
        {copyrightData.paymentMethods.map((item) => (
          <Image
            key={item.id}
            src={item.url}
            alt={item.alt ?? ""}
            className="w-auto h-auto"
            width={46}
            height={30}
          />
        ))}
      </div>
    </div>
  );
};
