import { cn } from "@/utils/utils";
import React from "react";

/**
 * @interface ICustomAreaProps - Props for the CustomTextArea component.
 */
interface ICustomAreaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  /** Additional wrapper style for the textarea component. */
  wrapperStyle?: string;
  /** Label text for the textarea. */
  label?: string;
}

/**
 * CustomTextArea Component
 * @param {ICustomAreaProps} props - The component props.
 * @param {React.Ref<HTMLTextAreaElement>} ref - Reference to the textarea element.
 */
const CustomTextArea = React.forwardRef<HTMLTextAreaElement, ICustomAreaProps>(
  ({ className, label, wrapperStyle, ...props }, ref) => {
    return (
      <div className={cn("flex space-y-1 flex-col", wrapperStyle)}>
        <label
          htmlFor={label}
          className="text-xs capitalize font-medium text-neutral-500"
        >
          {label}
        </label>
        <textarea
          id={label}
          ref={ref}
          required
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

export default CustomTextArea;
