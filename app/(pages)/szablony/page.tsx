// app/szablony/page.tsx
import { TemplatesClient } from "./TemplatesClient";
import { getTemplates } from "@/lib/getTemplates";

export default async function Szablony() {
  const templates = await getTemplates();
  
  return <TemplatesClient initialTemplates={templates} />;
}