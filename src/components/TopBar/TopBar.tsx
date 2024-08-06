import Link from "next/link";

export const TopBar = () => {
  return (
    <div className="bg-black p-3 text-center">
      <p className="text-white">
        Sign up and get 20% off to your first order.{" "}
        <Link href="#" className="font-semibold underline">
          Sign Up Now
        </Link>
      </p>
    </div>
  );
};
