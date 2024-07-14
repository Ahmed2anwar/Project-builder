import React, { ButtonHTMLAttributes, FC } from "react";

interface Iprops extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className: string;
  width?: "w-fit" | "w-full";
}

const Button: FC<Iprops> = ({
  children,
  className,
  width = "w-full",
  ...rest
}) => {
  return (
    <button
      className={`${className} ${width} py-2 text-lg text-white  text-center rounded-md`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default Button;
