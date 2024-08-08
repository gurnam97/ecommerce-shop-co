import { MenuItemType } from "@/components/Navigation";

export const menuItemsList: MenuItemType[] = [
  {
    name: "Shop",
    url: "/shop",
    dropdownItems: [
      { name: "On Sale", url: "/sale" },
      { name: "On Sale", url: "/sale" },
    ],
  },
  { name: "On Sale", url: "/sale" },
  { name: "New Arrivals", url: "/new-arrivals" },
  { name: "Brands", url: "/brands" },
];
