import { Container } from "../Container";
import { Navigation } from "../Navigation";
import { menuItemsList } from "./__fixtures__/menuItems";
import { Logo } from "./Logo";

export const Header = () => {
  return (
    <div>
      <Container classNames="flex items-center gap-x-4">
        <Logo />
        <Navigation menuItems={menuItemsList} />
      </Container>
    </div>
  );
};
