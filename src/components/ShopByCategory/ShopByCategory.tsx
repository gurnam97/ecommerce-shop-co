import Image from "next/image";
import { Container } from "../Container";
import { classNames } from "@/utils/classNames";

export interface CategoryData {
  id: string | number;
  name: string;
  url: string;
}

export interface ShopByCategoryProps {
  categoryData: CategoryData[];
}

export const ShopByCategory = ({ categoryData }: ShopByCategoryProps) => {
  return (
    <Container>
      <div className="bg-[#f0f0f0] rounded-3xl p-11">
        <h3 className="uppercase text-[32px] lg:text-5xl font-black text-center">
          BROWSE BY dress STYLE
        </h3>
        <div className="flex gap-4 mt-11">
          <div className="grid grid-cols-3 w-full gap-6">
            {categoryData.map((item, index) => (
              <div
                className={classNames(
                  "relative bg-white p-9 rounded-2xl overflow-hidden min-h-72",
                  (index === 1 || index === 2) && "col-span-2"
                )}
                key={item.id}
              >
                <div className="absolute top-0 left-0 w-full h-full">
                  <Image
                    src={item.url}
                    height={300}
                    width={650}
                    alt="Category Image"
                    className="h-full w-full object-fill"
                  />
                </div>
                <h4 className="relative text-3xl font-semibold">{item.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Container>
  );
};
