import classNames from "classnames";
import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  name?: string;
};

export function Button({ children, className, ...props }: ButtonProps) {
  return (
    <button
      {...props}
      className={classNames(
        "flex justify-center rounded-md p-2 pr-3",
        className
      )}
    >
      {children}
    </button>
  );
}

export function PrimaryButton({ className, ...props }: ButtonProps) {
  return (
    <Button
      {...props}
      className={classNames(
        "bg-primary text-white hover:bg-primary-light",
        className
      )}
    />
  );
}
