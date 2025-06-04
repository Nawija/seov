import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function SecondBtn({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        "relative cursor-pointer rounded-xl bg-gray-100 px-6 py-2 text-sm font-semibold capitalize shadow-lg shadow-gray-300 transition-colors hover:bg-gray-200",
        className,
      )}
    >
      {children}
    </button>
  );
}
