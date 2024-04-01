import { ReactNode } from "react";
import styles from "./styles.module.scss";
import clsx from "clsx";

type ButtonProps = {
  children: ReactNode;
  className?: string;
};

const Button = ({ children, className }: ButtonProps) => {
  return <button className={clsx(styles.button, className)}>{children}</button>;
};

export default Button;
