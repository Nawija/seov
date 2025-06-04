//app/szablony/page.tsx
import { TemplatesClient } from "./TemplatesClient";
import { templates } from "@/data/templates";

export default function Szablony() {
  return <TemplatesClient initialTemplates={templates} />;
}