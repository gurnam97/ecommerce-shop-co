import { ReactNode } from "react";

export interface ContainerProps {
  /**
   * Element to be wrapped with the container
   */
  children: ReactNode;
  /**
   * Additional classes for the container
   */
  classNames?: string;
  /**
   * Set container type to element
   */
  type?: "container" | "fluid";
}

export const Container = ({
  type = "container",
  children,
  classNames,
}: ContainerProps) => {
  const containerWidth = type === "container" ? "lg:w-[1240px] w-full" : "w-full";
  const classes = `mx-auto px-2 ${containerWidth} ${classNames}`;
  return <div className={classes}>{children}</div>;
};
