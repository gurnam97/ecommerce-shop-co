import Link from "next/link";
import { SIGN_UP_NOW, TOPBAR_SIGNUP_TEXT } from "./constants";

export const TopBar = () => {
  return (
    <div className="bg-black p-3 text-center">
      <p className="text-white text-xs lg:text-sm">
        {TOPBAR_SIGNUP_TEXT}{" "}
        <Link href="#" className="font-semibold underline">
          {SIGN_UP_NOW}
        </Link>
      </p>
    </div>
  );
};
