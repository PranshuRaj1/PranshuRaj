import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import projectDetails from "@/data/projectDetails";
import { personId } from "@/data/person";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projectDetails.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projectDetails.find((item) => item.slug === slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.description,
    alternates: {
      canonical: "/projects/" + project.slug,
    },
    openGraph: {
      title: project.title,
      description: project.description,
      url: "/projects/" + project.slug,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projectDetails.find((item) => item.slug === slug);

  if (!project) {
    notFound();
  }

  const projectSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": "https://pranshuraj.vercel.app/projects/" + project.slug,
    name: project.title,
    description: project.description,
    url: "https://pranshuraj.vercel.app/projects/" + project.slug,
    author: { "@id": personId },
    sameAs: [project.githubUrl, project.liveUrl].filter(Boolean),
  };

  return (
    <article className="container mx-auto max-w-4xl px-4 py-24 md:px-6">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(projectSchema).replace(/</g, "\\u003c"),
        }}
      />
      <Link href="/#projects" className="text-sm text-blue-600 hover:underline dark:text-blue-300">
        Back to projects
      </Link>
      <header className="mt-8">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-blue-600 dark:text-blue-300">
          Project
        </p>
        <h1 className="mt-3 text-4xl font-bold text-neutral-900 dark:text-white md:text-6xl">
          {project.title}
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-neutral-600 dark:text-neutral-300">
          {project.description}
        </p>
      </header>
      <div className="mt-12 space-y-10">
        {project.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
              {section.heading}
            </h2>
            <p className="mt-3 text-base leading-8 text-neutral-600 dark:text-neutral-300">
              {section.body}
            </p>
          </section>
        ))}
      </div>
      <div className="mt-12 flex flex-wrap gap-4 text-sm font-medium">
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline dark:text-blue-300"
        >
          View source on GitHub
        </a>
        {project.exampleUrl && (
          <a
            href={project.exampleUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline dark:text-blue-300"
          >
            View example PR
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline dark:text-blue-300"
          >
            Open live project
          </a>
        )}
      </div>
    </article>
  );
}
