import React from "react";
import { ShoppingCartIcon, UserCircle2Icon } from "lucide-react";
import { Container } from "../Container";
import { Navigation } from "../Navigation";
import { SearchInput } from "../SearchInput";
import { menuItemsList } from "./__fixtures__/menuItems";
import { Logo } from "./Logo";

export const Header = () => {
  return (
    <div className="py-4">
      <Container classNames="grid grid-cols-[auto_1fr_1.5fr_auto] items-center gap-x-8">
        <Logo />
        <Navigation menuItems={menuItemsList} />
        <SearchInput />
        <div className="flex gap-x-3">
          <ShoppingCartIcon />
          <UserCircle2Icon />
        </div>
      </Container>
    </div>
  );
};
