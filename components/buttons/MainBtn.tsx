import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function MainBtn({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        "relative cursor-pointer rounded-xl bg-blue-500 px-6 py-2 text-sm font-semibold text-white capitalize shadow-lg shadow-blue-300 transition-colors hover:bg-sky-500",
        className,
      )}
    >
      {children}
    </button>
  );
}
