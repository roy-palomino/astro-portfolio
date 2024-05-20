import type { FC, HTMLAttributes, ReactNode } from "react";
import spinnerIcon from "../icons/spinner.svg";

interface Props extends HTMLAttributes<HTMLButtonElement> {
  children?: ReactNode | string;
  loading?: boolean;
  variant?: "primary" | "secondary" | "accent";
  type?: "button" | "submit" | "reset";
  url?: string;
  className?: string;
  download?: boolean;
}

interface ContentProps {
  loading: boolean;
  children: ReactNode | string;
}

function classNames(...classes: Array<string>) {
  return classes.filter(Boolean).join(" ");
}

const classes = {
  primary: "bg-primary border-primary text-white text-xl",
  secondary: "bg-secondary border-secondary text-secondary bg-transparent",
  accent: "bg-accent border-accent text-white",
};

const genericClass =
  "px-8 py-3 border-2 rounded-xl font-semibold text-2xl inline-flex w-auto min-w-52 justify-center items-center min-h-16 lg:font-normal";

const ButtonContent: FC<ContentProps> = ({ loading, children }) =>
  loading ? (
    <img className="stroke-white animate-spin" src={spinnerIcon.src}></img>
  ) : (
    children
  );

const Button: FC<Props> = ({
  children,
  id,
  type,
  variant = "primary",
  loading = false,
  className = "",
  download = true,
  url,
}) => {
  if (!!url)
    return (
      <a
        id={id}
        download={download}
        className={classNames(
          genericClass,
          classes[variant],
          loading ? "cursor-not-allowed" : "cursor-pointer",
          className,
        )}
        href={url}
      >
        <ButtonContent loading={loading} children={children} />
      </a>
    );
  return (
    <button
      id={id}
      type={type}
      className={classNames(
        genericClass,
        classes[variant],
        loading ? "cursor-not-allowed" : "cursor-pointer",
        className,
      )}
    >
      <ButtonContent loading={loading} children={children} />
    </button>
  );
};

export default Button;
