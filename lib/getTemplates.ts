// lib/getTemplates.ts
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import type { Template } from "@/types/types";

export async function getTemplates(): Promise<Template[]> {
  const templatesDirectory = path.join(process.cwd(), 'content/templates');
  
  if (!fs.existsSync(templatesDirectory)) {
    console.warn('Folder content/templates nie istnieje');
    return [];
  }

  const filenames = fs.readdirSync(templatesDirectory);
  const markdownFiles = filenames.filter(name => name.endsWith('.md'));

  const templates: Template[] = [];

  for (const filename of markdownFiles) {
    try {
      const filePath = path.join(templatesDirectory, filename);
      const fileContents = fs.readFileSync(filePath, 'utf8');
      
      const { data } = matter(fileContents);
      
      if (!data.id || !data.name || !data.category) {
        console.warn(`Template ${filename} nie ma wymaganych pól (id, name, category)`);
        continue;
      }

      const template: Template = {
        id: data.id,
        name: data.name,
        slug: data.slug || filename.replace('.md', ''),
        url: data.url || '',
        category: data.category,
        business: data.business || '',
        price: data.price || 0,
        originalPrice: data.originalPrice || data.price || 0,
        rating: data.rating || 0,
        reviews: data.reviews || 0,
        description: data.description || '',
        features: data.features || [],
        image: data.image || '/images/templates/default.png',
        stats: {
          downloads: data.stats?.downloads || '0',
          satisfaction: data.stats?.satisfaction || '0%',
          updates: data.stats?.updates || 'Brak danych'
        }
      };

      templates.push(template);
    } catch (error) {
      console.error(`Błąd podczas ładowania template ${filename}:`, error);
    }
  }

  templates.sort((a, b) => a.id - b.id);
  return templates;
}

// Nowa funkcja do ładowania pojedynczego template po slug
export async function loadTemplateBySlug(slug: string): Promise<{ template: Template; content: string } | null> {
  const templatesDirectory = path.join(process.cwd(), 'content/templates');
  const filePath = path.join(templatesDirectory, `${slug}.md`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }

  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    
    if (!data.id || !data.name || !data.category) {
      return null;
    }

    const template: Template = {
      id: data.id,
      name: data.name,
      slug: data.slug || slug,
      url: data.url || '',
      category: data.category,
      business: data.business || '',
      price: data.price || 0,
      originalPrice: data.originalPrice || data.price || 0,
      rating: data.rating || 0,
      reviews: data.reviews || 0,
      description: data.description || '',
      features: data.features || [],
      image: data.image || '/images/templates/default.png',
      stats: {
        downloads: data.stats?.downloads || '0',
        satisfaction: data.stats?.satisfaction || '0%',
        updates: data.stats?.updates || 'Brak danych'
      }
    };

    return { template, content };
  } catch (error) {
    console.error(`Błąd podczas ładowania template ${slug}:`, error);
    return null;
  }
}

// Funkcja do pobrania wszystkich slugów (do generateStaticParams)
export async function getAllTemplateSlugs(): Promise<string[]> {
  const templatesDirectory = path.join(process.cwd(), 'content/templates');
  
  if (!fs.existsSync(templatesDirectory)) {
    return [];
  }

  const filenames = fs.readdirSync(templatesDirectory);
  return filenames
    .filter(name => name.endsWith('.md'))
    .map(name => name.replace('.md', ''));
}