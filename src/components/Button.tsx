import type { FC, HTMLAttributes, ReactNode } from "react";
import spinnerIcon from "../icons/spinner.svg";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode | string;
  loading?: boolean;
  variant?: "primary" | "secondary" | "accent";
  type?: "button" | "submit" | "reset";
}

function classNames(...classes: Array<string>) {
  return classes.filter(Boolean).join(" ");
}

const classes = {
  primary: "bg-primary border-primary text-white text-xl",
  secondary: "bg-secondary border-secondary text-secondary bg-transparent",
  accent: "bg-accent border-accent text-white",
};

const Button: FC<Props> = ({ children, id, variant = "primary", loading = false, type }) => {
  return (
    <button
      id={id}
      type={type}
      className={classNames(
        "px-8 py-3 border-2 rounded-xl font-semibold text-2xl inline-flex w-auto min-w-52 justify-center items-center",
        classes[variant],
        loading ? "cursor-not-allowed" : "cursor-pointer"
      )}
    >
      {loading ? (<img className="stroke-white animate-spin" src={spinnerIcon.src}></img>) : (children)}
    </button>
  );
};

export default Button;
