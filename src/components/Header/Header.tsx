"use client";
import React from "react";
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserCircle2Icon,
} from "lucide-react";
import { Container } from "../Container";
import { Navigation } from "../Navigation";
import { SearchInput } from "../SearchInput";
import { menuItemsList } from "./__fixtures__/menuItems";
import { Logo } from "./Logo";
import { useIsBreakpoint } from "@/hooks/useIsBreakpoint/useIsBreakpoint";
import { Breakpoint } from "@/types/breakpoint";

export const Header = () => {
  const isMobile = useIsBreakpoint(Breakpoint.Small, Breakpoint.Medium);

  return (
    <div className="py-4">
      <Container classNames="grid grid-cols-[auto_1fr_auto] lg:grid-cols-[auto_1fr_1.5fr_auto] items-center gap-x-4 lg:gap-x-8">
        {isMobile && <MenuIcon />}
        <Logo />
        {!isMobile && <Navigation menuItems={menuItemsList} />}
        {!isMobile && <SearchInput />}
        <div className="flex gap-x-3">
          {isMobile && <SearchIcon />}
          <ShoppingCartIcon />
          <UserCircle2Icon />
        </div>
      </Container>
    </div>
  );
};
