import { MouseEventHandler } from "react";

export const IconButton = ({
  children,
  onClick,
  className
}: {
  children: React.ReactNode,
  onClick?: MouseEventHandler<HTMLButtonElement>,
  className?: string
}) => {
  return (
    <button className={`flex flex-row
                       aspect-square-500 p-1
                       text-2xl w-fit ${className}`}
            onClick={onClick}
    >
      {children}
    </button>
  );
}