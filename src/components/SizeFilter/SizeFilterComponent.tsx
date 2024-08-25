import { classNames } from "@/utils/classNames";
import { Toggle } from "../ui/toggle";
import { useState } from "react";

export interface SizeFilterComponentProps {
  name: string;
  isActive?: boolean;
}

export const SizeFilterComponent = ({
  name,
  isActive,
}: SizeFilterComponentProps) => {
  const [toggle, setToggle] = useState(isActive ?? false);

  const onSizeChange = () => {
    setToggle(!toggle);
  };

  return (
    <Toggle className="p-0 rounded-full" onPressedChange={onSizeChange}>
      <div
        className={classNames(
          "rounded-full bg-[#F0F0F0] py-2.5 px-5 text-[#00000099]",
          toggle && "bg-black text-white"
        )}
      >
        {name}
      </div>
    </Toggle>
  );
};
