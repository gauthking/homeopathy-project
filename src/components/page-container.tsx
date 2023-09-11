import { cn } from "@/utils/utils";
import React from "react";

interface IPageContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

/**
 * PageContainer is a base container component for a website.
 *
 * @param {IPageContainerProps} props - Props for the PageContainer component.
 * @returns {JSX.Element} - The PageContainer component.
 */

const PageContainer = React.forwardRef<HTMLDivElement, IPageContainerProps>(
  ({ className, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("container mx-auto", className)} {...props}>
        {props.children}
      </div>
    );
  }
);

export default PageContainer;
