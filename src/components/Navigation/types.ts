export interface SubMenuItemType {
  name: string;
  url: string;
}

export interface MenuItemType {
  name: string;
  url?: string;
  dropdownItems?: SubMenuItemType[];
}
