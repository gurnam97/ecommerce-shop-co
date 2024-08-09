import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { ChevronDown } from "lucide-react";

export interface SubMenuItemType {
  name: string;
  url: string;
}

export interface MenuItemType {
  name: string;
  url?: string;
  dropdownItems?: SubMenuItemType[];
}

export interface NavigationProps {
  /**
   * Add the list of Menu Items
   */
  menuItems: MenuItemType[];
}

export const Navigation = ({ menuItems }: NavigationProps) => {
  return (
    <div>
      <ul className="flex gap-4">
        {menuItems.map((item, index) => (
          <li key={`${item.url}_${index}`}>
            {item.dropdownItems ? (
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <span className="flex gap-1">
                    Shop <ChevronDown className="w-4" />
                  </span>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  {item.dropdownItems.map((subItem) => (
                    <DropdownMenuItem key={subItem.name}>
                      <Link href={subItem.url}>{subItem.name}</Link>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link href={item.url ?? "#"}>{item.name}</Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
