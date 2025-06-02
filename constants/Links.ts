import {
  BookText,
  Building,
  CloudCog,
  Gauge,
  LayoutDashboard,
  Monitor,
  MoveRight,
  Palette,
  SearchCheck,
  ShoppingCart,
  User,
} from "lucide-react";
export const NAVLINKS = [
  {
    label: "strona główna",
    href: "/",
  },
  {
    label: "szablony",
    href: "/szablony",
  },
  {
    label: "portfolio",
    href: "/portfolio",
  },
  {
    label: "oferta",
    href: "/oferta",
  },
  {
    label: "o mnie",
    href: "/o-mnie",
  },
  {
    label: "kontakt",
    href: "/kontakt",
  },
];

export const SERVICESLINKS = [
  {
    label: "Strona internetowa",
    desc: "Nowoczesny landing page w Next.js",
    href: "/landing-page",
    icon: Monitor,
  },
  {
    label: "Strona firmowa",
    desc: "Wielostronicowa strona z CMS-em i panelem administracyjnym",
    href: "/strona-firmowa",
    icon: Building,
  },
  {
    label: "Sklep internetowy",
    desc: "Integracja z Stripe / PayPal, produkty, koszyk i checkout",
    href: "/sklep-internetowy",
    icon: ShoppingCart,
  },
  {
    label: "Strefa klienta",
    desc: "Logowanie, zarządzanie plikami i panel użytkownika",
    href: "/strefa-klienta",
    icon: User,
  },
  {
    label: "Panel administracyjny",
    desc: "Zarządzanie treścią, użytkownikami i analizami",
    href: "/panel-administracyjny",
    icon: LayoutDashboard,
  },
  {
    label: "Blog / CMS",
    desc: "Blog z Markdown/MDX i edycją treści przez panel",
    href: "/blog-cms",
    icon: BookText,
  },
  {
    label: "Audyt SEO",
    desc: "Techniczna analiza strony, optymalizacja pod Google",
    href: "/audyt-seo",
    icon: SearchCheck,
  },
  {
    label: "Core Web Vitals",
    desc: "Poprawa szybkości i wydajności strony w Lighthouse",
    href: "/core-web-vitals",
    icon: Gauge,
  },
  {
    label: "Migracja strony",
    desc: "Przeniesienie strony do Next.js z WordPressa lub innego CMS-a",
    href: "/migracja-strony",
    icon: MoveRight,
  },
  {
    label: "Strona portfolio",
    desc: "Estetyczne portfolio dla fotografa, artysty lub freelancera",
    href: "/strona-portfolio",
    icon: Palette,
  },
  {
    label: "Integracje z API",
    desc: "Łączenie strony z zewnętrznymi usługami (np. Cloudinary, Instagram)",
    href: "/integracje-api",
    icon: CloudCog,
  },
];
