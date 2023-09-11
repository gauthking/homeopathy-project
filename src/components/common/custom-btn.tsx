interface ICustomButton
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {}

const CustomButton = ({ children }: ICustomButton) => {
  return <button>{children}</button>;
};

export default CustomButton;
