import { FooterLinks } from "./FooterLinks";
import { footerCategoryDataType } from "./types";

export interface FooterCategoryProps {
  /**
   * Add footer links
   */
  footerCategoryData: footerCategoryDataType[];
}

export const FooterCategory = ({ footerCategoryData }: FooterCategoryProps) => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
      {footerCategoryData.map((catergory, index) => {
        return (
          <FooterLinks
            category={catergory.name}
            links={catergory.links}
            key={index}
          />
        );
      })}
    </div>
  );
};
