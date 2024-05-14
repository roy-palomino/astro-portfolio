import type { FC } from "react";
import { useEffect, useState } from "react";

interface Props {
  message: string;
  delayInSeconds: string | number;
}

function classNames(...classes: Array<string>) {
  return classes.filter(Boolean).join(" ");
}

const MyComponent: FC<Props> = ({ message, delayInSeconds }) => {
  const [showToast, setShowToast] = useState<boolean>(false);

  useEffect(() => {
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, +delayInSeconds * 1000);
  }, []);

  return (
    <div
      id="toast-default"
      className={classNames(
        "flex items-center w-full max-w-xs p-4 text-smoke primary-gradient rounded-lg shadow fixed top-20 right-5 transition-opacity duration-500",
        showToast ? "opacity-100" : "opacity-0",
      )}
      role="alert"
    >
      <div className="ms-3 text-md font-semibold">{message}</div>
    </div>
  );
};

export default MyComponent;
