import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

export function MainBtn({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        "bg hover:bg-hover relative border px-4 py-2 text-xs font-semibold uppercase transition-colors lg:text-sm",
        className,
      )}
    >
      {children}
    </button>
  );
}
