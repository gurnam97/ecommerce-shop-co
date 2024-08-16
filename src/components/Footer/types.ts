export interface copyrightDataType {
  copyrightText: string;
  paymentMethods: {
    id: string;
    url: string;
    alt?: string;
  }[];
}

export interface footerCategoryDataType {
  name: string;
  links: {
    id: number;
    name: string;
    link: string;
  }[];
}

export interface socialMediaDataType {
  id: number;
  name: string;
  url: string;
  alt: string;
}
