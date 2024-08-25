import { CheckIcon } from "lucide-react";
import { useState } from "react";
import { Toggle } from "../ui/toggle";

export interface ColorSwatchesProps {
  isActive?: boolean;
  color: string;
}

export const ColorSwatchComponent = ({
  isActive,
  color,
}: ColorSwatchesProps) => {
  const [toggle, setToggle] = useState(isActive ?? false);

  const onSizeChange = () => {
    setToggle(!toggle);
  };
  return (
    <Toggle className="p-0 !bg-transparent" onPressedChange={onSizeChange}>
      <div
        className="h-9 w-9 bg-[#000] border-2 border-[#00000033] rounded-full flex items-center justify-center"
        style={{ backgroundColor: color }}
      >
        {toggle ? <CheckIcon className="text-white h-4" /> : null}
      </div>
    </Toggle>
  );
};
