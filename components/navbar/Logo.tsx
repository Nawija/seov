import Image from "next/image";

export function Logo({ h, w }: { h: number; w: number }) {
  return (
    <div className="flex items-center justify-center">
      <Image
        src="/seovileo.svg"
        alt="logo seovileo"
        className="mr-1"
        height={h || 27}
        width={w || 27}
      />
      <p className="text-base font-bold">Seovileo</p>
    </div>
  );
}
