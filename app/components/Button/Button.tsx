import { ReactNode } from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";

type ButtonProps = {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  size?: "md" | "sm";
  fullWidth?: boolean;
};

const Button = ({
  children,
  className,
  variant = "primary",
  size = "md",
  fullWidth = false,
}: ButtonProps) => {
  return (
    <button
      className={clsx(
        styles.button,
        className,
        styles[variant],
        styles[size],
        fullWidth && styles.full_width
      )}
    >
      {children}
    </button>
  );
};

export default Button;
