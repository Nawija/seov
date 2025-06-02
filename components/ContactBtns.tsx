import Link from "next/link";

import { FaPhoneAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const contactDetails = [
  {
    href: "tel:507946719",
    icon: FaPhoneAlt,
    text: "507 946 719",
    label: "Zadzwoń do fotografa",
  },
  {
    href: "mailto:kontakt@jarekolszewski.pl",
    icon: IoMdMail,
    text: "kontakt@jarekolszewski.pl",
    label: "Napisz do fotografa",
  },
];

export default function ContactBtns() {
  return (
    <section className="mx-auto my-4 flex flex-col items-center justify-center gap-4 text-white sm:flex-row">
      <div className="bg-brand hidden h-px w-full lg:block" />
      {contactDetails.map(({ href, icon: Icon, text, label }, index) => (
        <Link
          key={index}
          href={href}
          aria-label={label}
          className="bg-brand flex w-full items-center gap-2 px-4 py-2 text-center lg:w-max"
        >
          <Icon className="" />
          <span className="w-max font-medium">{text}</span>
        </Link>
      ))}
      <div className="bg-brand hidden h-px w-full lg:block" />
    </section>
  );
}
