import Link from "next/link";

export interface FooterLinksType {
  id: string | number;
  name: string;
  link: string;
}
export interface FooterLinksProps {
  /**
   * Add Footer Category
   */
  category: string;
  /**
   * Add Footer Links
   */
  links: FooterLinksType[];
}
export const FooterLinks = ({ category, links }: FooterLinksProps) => {
  return (
    <div className="mb-4 md:mb-0">
      <h4 className="font-medium mb-4 text-base uppercase">{category}</h4>
      <div className="flex flex-col space-y-2">
        {links.map((link) => {
          return (
            <Link
              className="text-[#00000099] text-sm"
              href={link.link}
              key={link.id}
            >
              {link.name}
            </Link>
          );
        })}
      </div>
    </div>
  );
};
