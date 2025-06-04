// app/szablony/[slug]/page.tsx
import { getAllTemplateSlugs, loadTemplateBySlug } from "@/lib/getTemplates";
import { notFound } from "next/navigation";
import TemplateDetail from "./TemplateDetail";
import { TemplateData } from "@/types/types";

interface TemplatePageProps {
  params: Promise<{ slug: string }>;
}

// Generuj statyczne parametry dla wszystkich templates
export async function generateStaticParams() {
  try {
    const slugs = await getAllTemplateSlugs();

    return slugs.map((slug) => ({
      slug: slug,
    }));
  } catch (error) {
    console.error("Error generating static params:", error);
    return [];
  }
}

// Generuj metadata dla SEO
export async function generateMetadata({ params }: TemplatePageProps) {
  try {
    const { slug } = await params;
    const templateData = await loadTemplateBySlug(slug);

    if (!templateData) {
      return {
        title: "Szablon nie znaleziony - Seovileo",
        description: "Poszukiwany szablon nie został znaleziony.",
      };
    }

    const { template } = templateData;

    return {
      title: `${template.name} - Szablon ${template.category} | Seovileo`,
      description: template.description,
      openGraph: {
        title: `${template.name} - Szablon ${template.category}`,
        description: template.description,
        images: [
          {
            url: template.image,
            width: 1200,
            height: 630,
            alt: template.name,
          },
        ],
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: `${template.name} - Szablon ${template.category}`,
        description: template.description,
        images: [template.image],
      },
    };
  } catch (error) {
    console.error("Error generating metadata:", error);
    return {
      title: "Błąd - Szablon nie znaleziony",
      description: "Wystąpił błąd podczas ładowania szablonu.",
    };
  }
}

export default async function TemplatePage({ params }: TemplatePageProps) {
  try {
    const { slug } = await params;

    // Walidacja slug
    if (!slug || typeof slug !== "string") {
      notFound();
    }

    const templateData: TemplateData | null = await loadTemplateBySlug(slug);

    if (!templateData) {
      notFound();
    }

    const { template, content } = templateData;

    // Walidacja wymaganych danych template
    if (!template.name || !template.description || !template.image) {
      console.error("Template missing required fields:", template);
      notFound();
    }

    return <TemplateDetail template={template} content={content} />;
  } catch (error) {
    console.error("Error loading template page:", error);
    notFound();
  }
}
