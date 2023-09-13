// Import utility function cn from utils
import { cn } from "@/utils/utils";
import React from "react";

/**
 * @interface ICustomInputProps - Props for the CustomInput component.
 */
interface ICustomInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Additional wrapper style for the input component. */
  wrapperStyle?: string;
  /** Label text for the input. */
  label?: string;
}

/**
 * CustomInput Component
 * @param {ICustomInputProps} props - The component props.
 * @param {React.Ref<HTMLInputElement>} ref - Reference to the input element.
 * @property {string} props.className - The CSS classes for styling.
 * @property {string} props.wrapperStyle - Additional wrapper styles.
 * @property {string} props.label - The label text for the input.
 * @return {React.ReactNode} The rendered component.
 */
const CustomInput = React.forwardRef<HTMLInputElement, ICustomInputProps>(
  ({ className, wrapperStyle, label, ...props }, ref) => {
    // Render the CustomInput component
    return (
      // Main wrapper div for styling and layout
      <div className={cn("flex space-y-1 flex-col", wrapperStyle)}>
        {/* Render label if provided */}
        {label && (
          <label
            htmlFor={label}
            className="text-xs capitalize font-medium text-neutral-500"
          >
            {label}
          </label>
        )}
        {/* Actual input element */}
        <input
          ref={ref}
          id={label}
          // Combine classNames for styling
          className={cn(
            "rounded border focus-visible:outline-none focus-visible:ring-offset-1 focus-visible:ring-blue-500/20 focus-visible:ring-2 text-sm text-stone-500 px-2 tracking-wider focus-visible:ring-offset-primary/70 placeholder:p-3 py-1",
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

export default CustomInput;
