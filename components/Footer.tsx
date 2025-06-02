import { NAVLINKS } from "@/constants/Links";
import Link from "next/link";
import { FaFacebook, FaGoogle, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="z-[9998] border-t border-gray-100 bg-white px-6 py-12">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-8 md:grid-cols-3">
        <div>
          <p className="mb-3 text-lg font-bold">Seovileo</p>
          <p className="fg-light text-sm">
            Profesjonalna fotografia ślubna, rodzinna i portretowa w Siedlcach i
            okolicach.
          </p>
        </div>

        <div>
          <p className="mb-3 font-semibold">Nawigacja</p>
          <ul className="fg-light space-y-2 text-sm">
            {NAVLINKS.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="fg-light fg-light-hover transition-colors"
                  aria-label={link.label}
                >
                  {link.label}
                </Link>
              </li>
            ))}

            <li key="regulamin">
              <Link
                href="/regulamin-i-polityka-prywatnoci"
                aria-label="regulamin polityka-prywatnoci"
                className="fg-light"
              >
                regulamin, polityka-prywatnosci
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <p className="mb-3 font-semibold">Znajdź mnie</p>
          <div className="fg-light mb-4 flex gap-4">
            <Link
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-blue-500"
              aria-label="Facebook"
            >
              <FaFacebook size={20} />
              <span className="sr-only">Facebook</span>
            </Link>
            <Link
              href="/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-pink-400"
              aria-label="Instagram"
            >
              <FaInstagram size={20} />
              <span className="sr-only">Instagram</span>
            </Link>
            <Link
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-emerald-700"
              aria-label="Google"
            >
              <FaGoogle size={20} />
              <span className="sr-only">Google</span>
            </Link>
          </div>
        </div>
      </div>
      <div className="fg-light mt-12 text-center text-sm">
        &copy; {new Date().getFullYear()} Seovileo. Wszelkie prawa zastrzeżone.
      </div>
    </footer>
  );
}
