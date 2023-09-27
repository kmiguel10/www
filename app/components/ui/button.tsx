import React, { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Button = ({ children }: Props) => {
  return (
    /** TODO will need to fix the styles and make it dynamic. */
    <button className="rounded w-fit flex justify-center items-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-9 px-3 h-8 text-sm space-x-1.5 border data-[variant=primary]:bg-blue-9 data-[variant=primary]:dark:text-gray-12 data-[variant=primary]:text-gray-1 data-[variant=primary]:border-blue-7 data-[variant=primary]:hover:border-blue-8 data-[variant=primary]:active:bg-blue-10 data-[variant=secondary]:bg-blue-4 data-[variant=secondary]:text-blue-11 data-[variant=secondary]:hover:bg-blue-5 data-[variant=secondary]:active:bg-blue-6 data-[variant=outline]:text-blue-9 data-[variant=outline]:border-blue-7 data-[variant=outline]:hover:border-blue-8 data-[variant=outline]:active:bg-blue-3 data-[variant=ghost]:text-blue-9 data-[variant=ghost]:hover:bg-blue-4 data-[variant=ghost]:active:bg-blue-5 data-[variant=text]:text-blue-9">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
        />
      </svg>
      {children}
    </button>
  );
};

export default Button;
