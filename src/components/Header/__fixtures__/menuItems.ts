import { MenuItemType } from "@/components/Navigation/types";

export const menuItemsList: MenuItemType[] = [
  {
    name: "Shop",
    url: "/shop",
    dropdownItems: [
      { name: "On Sale", url: "/category" },
      { name: "On Sale", url: "/category" },
    ],
  },
  { name: "On Sale", url: "/sale" },
  { name: "New Arrivals", url: "/new-arrivals" },
  { name: "Brands", url: "/brands" },
];
