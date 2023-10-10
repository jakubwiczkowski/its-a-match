import { MouseEventHandler } from "react";

export const Button = ({
  children,
  onClick,
  className
}: {
  children: React.ReactNode,
  onClick?: MouseEventHandler<HTMLButtonElement>,
  className?: string
}) => {
  return (
    <button className={`flex flex-row rounded-full
                       shadow-lg aspect-square-500 p-4
                       text-3xl w-fit ${className}`}
            onClick={onClick}
    >
      {children}
    </button>
  );
}