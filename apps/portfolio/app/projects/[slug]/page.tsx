import fs from 'fs/promises';
import path from 'path';
import { MDXRemote } from 'next-mdx-remote/rsc';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  let fileContent = '';

  try {
    const filePath = path.join(
      process.cwd(),
      'content/projects',
      `${slug}.mdx`
    );
    fileContent = await fs.readFile(filePath, 'utf-8');
  } catch {
    notFound();
  }

  const { content, data: frontmatter } = matter(fileContent);

  return (
    <div className="min-h-screen bg-background text-foreground p-8 md:p-16 flex justify-center">
      <article className="max-w-3xl w-full">
        <header className="mb-12 border-b border-border pb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            {frontmatter.title || 'Untitled Project'}
          </h1>
          {frontmatter.date && (
            <time className="text-muted-foreground text-lg">
              {frontmatter.date}
            </time>
          )}
        </header>

        <main className="prose prose-invert max-w-none">
          <MDXRemote source={content} />
        </main>
      </article>
    </div>
  );
}
