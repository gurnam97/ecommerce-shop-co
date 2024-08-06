import { Container } from "../Container";
import { Logo } from "./Logo";
import { Navigation } from "./Navigation";

export const Header = () => {
  const menuItemsList = [
    { name: "Shop", url: "#" },
    { name: "On Sale", url: "#" },
    { name: "New Arrivals", url: "#" },
    { name: "Brands", url: "#" },
  ];
  return (
    <div>
      <Container classNames="flex items-center gap-x-4">
        <Logo />
        <Navigation menuItems={menuItemsList} />
      </Container>
    </div>
  );
};
