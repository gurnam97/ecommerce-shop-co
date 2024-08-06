import Link from "next/link";

export interface SubMenuItemType {
  name: string;
  url: string;
}

export interface MenuItemType {
  name: string | SubMenuItemType[];
  url?: string;
}

export interface NavigationProps {
  menuItems: MenuItemType[];
}

export const Navigation = ({ menuItems }: NavigationProps) => {
  return (
    <div>
      <ul className="flex gap-4">
        {menuItems.map((item) => (
          <li key={item.url}>
            {typeof item.name === "string" ? (
              <Link href={item.url ?? "#"}>{item.name}</Link>
            ) : (
              <ul>
                {item.name.map((subItem) => (
                  <li key={subItem.url}>
                    <Link href={subItem.url}>{subItem.name}</Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
