import React from "react";

interface ButtonProps {
  title: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  id?: string;
  containerClass?: string;
}

export default function Button({
  title,
  rightIcon,
  leftIcon,
  id,
  containerClass,
}: ButtonProps) {
  return (
    <button
      id={id}
      className={` group relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black  ${containerClass}`}
    >
      {leftIcon}
      <span className="relative incline-flex overflow-hidden font-general font-semibold text-xs uppercase">
        <div className="">{title}</div>
      </span>
      {rightIcon}
    </button>
  );
}
