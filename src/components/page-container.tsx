import React from "react";

interface IPageContainerProps {
  children: React.ReactNode;
}

const PageContainer = ({ children }: IPageContainerProps) => {
  return <div className="">{children}</div>;
};

export default PageContainer;
