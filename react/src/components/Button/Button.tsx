import React, { type ComponentPropsWithoutRef, type ElementType } from "react";
import clsx from "clsx";
import styles from "./Button.module.css";

type ElementPropType<
  E extends ElementType,
  K extends keyof ComponentPropsWithoutRef<E>
> = ComponentPropsWithoutRef<E>[K];

type ButtonPropType<K extends keyof ComponentPropsWithoutRef<"button">> =
  ElementPropType<"button", K>;

type ButtonPorps = {
  children: React.ReactNode;
  size: "small" | "medium" | "large";
  variant: "primary" | "secondary";
  onClick: ButtonPropType<"onClick">;
  type?: ButtonPropType<"type">;
  disabled?: ButtonPropType<"disabled">;
  style?: ButtonPropType<"style">;
};
const Button: React.FC<ButtonPorps> = ({
  children,
  size,
  variant,
  ...rest
}) => {
  console.log(variant);
  console.log(size);
  return (
    <button
      {...rest}
      className={clsx(styles.button, styles[size], styles[variant])}
    >
      {children}
    </button>
  );
};

export default Button;
