/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
} from "react";

/**
 * @interface IUserContextInterface - Interface for the user context.
 * @property {boolean} open - Indicates whether the user context is open.
 * @property {Dispatch<SetStateAction<boolean>>} setOpen - Function to set the user context open state.
 */
interface IUserContextInterface {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}

/**
 * Create a context for user data with default values.
 */
export const CreateUserDataContext = createContext<IUserContextInterface>({
  open: false,
  setOpen: function (_value: React.SetStateAction<boolean>): void {
    throw new Error("Function not implemented.");
  },
});

/**
 * @interface IUserDataProps - Props interface for the user data wrapper component.
 * @property {React.ReactNode} children - The child elements to be wrapped with the user data context.
 */
interface IUserDataProps {
  children: React.ReactNode;
}

/**
 * A component that wraps its children with the user data context.
 * @param {IUserDataProps} props - The props for the UserUserDataWrapper component.
 * @returns {JSX.Element} - Returns the JSX element representing the UserUserDataWrapper.
 */
const UseUserDataWrapper = ({ children }: IUserDataProps): JSX.Element => {
  // Initialize state for 'open' and 'setOpen'.
  const [open, setOpen] = useState<boolean>(false);

  return (
    // Provide the user data context with 'open' and 'setOpen' values to its children.
    <CreateUserDataContext.Provider value={{ open, setOpen }}>
      {children}
    </CreateUserDataContext.Provider>
  );
};

export default UseUserDataWrapper;
