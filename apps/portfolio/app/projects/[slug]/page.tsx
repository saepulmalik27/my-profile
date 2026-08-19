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
    // pt-28/md:pt-32 clears the fixed site nav (ticket 07) — this page
    // used to render flush against the top, partially hidden behind it.
    <div className="min-h-screen bg-background text-foreground px-8 pb-8 pt-28 md:px-16 md:pb-16 md:pt-32 flex justify-center">
      <article className="max-w-3xl w-full">
        <header className="mb-12 border-b border-border pb-8">
          <span className="font-mono text-xs uppercase tracking-widest text-accent">
            Case study
          </span>
          <h1 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            {frontmatter.title || 'Untitled Project'}
          </h1>
          {frontmatter.summary && (
            <p className="text-foreground/70 text-lg mb-4">
              {frontmatter.summary}
            </p>
          )}
          <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
            {frontmatter.company && <span>{frontmatter.company}</span>}
            {frontmatter.period && (
              <>
                <span aria-hidden="true">·</span>
                <span>{frontmatter.period}</span>
              </>
            )}
          </div>
          {Array.isArray(frontmatter.tags) && frontmatter.tags.length > 0 && (
            <div className="mt-4 flex flex-wrap gap-2">
              {frontmatter.tags.map((tag: string) => (
                <span
                  key={tag}
                  className="rounded-md border border-border bg-secondary/40 px-2.5 py-1 font-mono text-xs text-foreground/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </header>

        <main className="prose prose-invert max-w-none">
          <MDXRemote source={content} />
        </main>
      </article>
    </div>
  );
}
