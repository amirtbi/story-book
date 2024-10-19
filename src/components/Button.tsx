import { ComponentProps } from "react";
import classNames from "./Button.module.scss";
import clsx from "clsx";
export type ButtonProps = ComponentProps<"button"> & {
  variant?: "primary" | "secondary" | "destructive";
  size?: "sm" | "md";
  children: JSX.Element | JSX.Element[] | string;
};
export const Button = ({
  variant = "primary",
  children,
  size = "md",
  className,
  ...otherProps
}: ButtonProps) => {
  const classes = clsx(
    classNames.button,
    classNames[`button-${variant}`],
    classNames[size],
    className
  );

  return (
    <>
      <button {...otherProps} className={classes}>
        {children}
      </button>
    </>
  );
};
