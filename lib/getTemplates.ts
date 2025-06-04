// lib/getTemplates.ts
import type { Template } from "@/types/types";
import fs from "fs";
import matter from "gray-matter";
import path from "path";

export async function getTemplates(): Promise<Template[]> {
  const templatesDirectory = path.join(process.cwd(), "content/templates");

  // Sprawdź czy folder istnieje
  if (!fs.existsSync(templatesDirectory)) {
    console.warn("Folder content/templates nie istnieje");
    return [];
  }

  const filenames = fs.readdirSync(templatesDirectory);
  const markdownFiles = filenames.filter((name) => name.endsWith(".md"));

  const templates: Template[] = [];

  for (const filename of markdownFiles) {
    try {
      const filePath = path.join(templatesDirectory, filename);
      const fileContents = fs.readFileSync(filePath, "utf8");

      // Parsuj frontmatter
      const { data } = matter(fileContents);

      // Validacja wymaganych pól
      if (!data.id || !data.name || !data.category) {
        console.warn(
          `Template ${filename} nie ma wymaganych pól (id, name, category)`,
        );
        continue;
      }

      const template: Template = {
        id: data.id,
        name: data.name,
        url: data.url || "",
        category: data.category,
        business: data.business || "",
        price: data.price || 0,
        rating: data.rating || 0,
        description: data.description || "",
        features: data.features || [],
        image: data.image || "/images/templates/default.png",
      };

      templates.push(template);
    } catch (error) {
      console.error(`Błąd podczas ładowania template ${filename}:`, error);
    }
  }

  // Sortuj po id
  templates.sort((a, b) => a.id - b.id);

  return templates;
}
