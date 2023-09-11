import React from "react";

interface IPageContainerProps {
  children: React.ReactNode;
}

/**
 *
 * @param param0 ReactNode
 * @returns JSX.Element
 * @description function act as base container for website
 */
const PageContainer = ({ children }: IPageContainerProps) => {
  return <div className="container">{children}</div>;
};

export default PageContainer;
