import { copyrightDataType, footerCategoryDataType } from "../types";

export const footerCategoryData: footerCategoryDataType[] = [
  {
    name: "Company",
    links: [
      { id: 1, name: "About", link: "/about" },
      { id: 2, name: "Features", link: "/features" },
      { id: 3, name: "Works", link: "/works" },
      { id: 4, name: "Career", link: "/career" },
    ],
  },
  {
    name: "Help",
    links: [
      { id: 5, name: "Customer Support", link: "/support" },
      { id: 6, name: "Delivery Details", link: "/delivery" },
      { id: 7, name: "Terms & Conditions", link: "/terms" },
      { id: 8, name: "Privacy Policy", link: "/privacy" },
    ],
  },
  {
    name: "FAQ",
    links: [
      { id: 9, name: "Account", link: "/account" },
      { id: 10, name: "Manage Deliveries", link: "/deliveries" },
      { id: 11, name: "Orders", link: "/orders" },
      { id: 12, name: "Payments", link: "/payments" },
    ],
  },
  {
    name: "Resources",
    links: [
      { id: 13, name: "Free eBooks", link: "/ebooks" },
      { id: 14, name: "Development Tutorial", link: "/tutorials" },
      { id: 15, name: "How-to Blog", link: "/blog" },
      { id: 16, name: "YouTube Playlist", link: "/playlist" },
    ],
  },
];
export const socialMediaData = [
  {
    id: 1,
    name: "twitter",
    url: "/assets/images/twitter.svg",
    alt: "twitter",
  },
  {
    id: 2,
    name: "facebook",
    url: "/assets/images/facebook.svg",
    alt: "facebook",
  },
  {
    id: 3,
    name: "instagram",
    url: "/assets/images/instagram.svg",
    alt: "instagram",
  },
  {
    id: 4,
    name: "git",
    url: "/assets/images/git.svg",
    alt: "git",
  },
];

export const copyrightData: copyrightDataType = {
  copyrightText: "2000-2023 Shop.co, All Rights Reserved",
  paymentMethods: [
    { id: "copyright-1", url: "/assets/images/visa.svg", alt: "visa" },
    { id: "copyright-2", url: "/assets/images/master.svg", alt: "master" },
    { id: "copyright-2", url: "/assets/images/paypal.svg", alt: "paypal" },
    { id: "copyright-2", url: "/assets/images/applepay.svg", alt: "applepay" },
    {
      id: "copyright-2",
      url: "/assets/images/googlepay.svg",
      alt: "googlepay",
    },
  ],
};
