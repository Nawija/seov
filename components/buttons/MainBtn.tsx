import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function MainBtn({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        "bg-blue-500 hover:bg-blue-600 text-white rounded-xl relative px-6 py-2 text-xs font-semibold capitalize transition-colors lg:text-sm shadow-lg shadow-blue-300 cursor-pointer",
        className,
      )}
    >
      {children}
    </button>
  );
}
