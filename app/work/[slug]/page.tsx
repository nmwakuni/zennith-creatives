import { notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft, ExternalLink } from 'lucide-react'
import Link from 'next/link'
import { projects } from '@/data/projects'

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug)

  if (!project) {
    notFound()
  }

  return (
    <div className="min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Back Button */}
        <Link
          href="/work"
          className="inline-flex items-center gap-2 text-text-muted hover:text-text-white transition-colors mb-12"
        >
          <ArrowLeft size={20} />
          Back to Work
        </Link>

        {/* Hero Section */}
        <div className="mb-20">
          <div className="max-w-4xl mb-12">
            <div className="flex items-center gap-4 mb-6">
              <span className="px-4 py-1.5 bg-white/10 text-sm font-semibold text-primary-blue uppercase tracking-wider rounded-full">
                {project.category}
              </span>
              <span className="text-text-muted">{project.year}</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">
              {project.title}
            </h1>

            <p className="text-xl text-text-gray leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Hero Image */}
          <div className="relative aspect-[21/9] bg-gradient-to-br from-primary-blue/20 to-primary-violet/20 rounded-2xl overflow-hidden">
            {/* Placeholder for hero image */}
          </div>
        </div>

        {/* Project Info */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-20 pb-20 border-b border-white/10">
          <div>
            <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-3">
              Client
            </h3>
            <p className="text-lg font-semibold">{project.client}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-3">
              Year
            </h3>
            <p className="text-lg font-semibold">{project.year}</p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-3">
              Services
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.services.map((service) => (
                <span
                  key={service}
                  className="text-sm px-2 py-1 bg-white/5 rounded text-text-white"
                >
                  {service}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-text-muted uppercase tracking-wider mb-3">
              Tech Stack
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-sm px-2 py-1 bg-white/5 rounded text-text-white"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Challenge & Solution */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-6">The Challenge</h2>
            <p className="text-lg text-text-gray leading-relaxed">
              {project.challenge}
            </p>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">The Solution</h2>
            <p className="text-lg text-text-gray leading-relaxed">
              {project.solution}
            </p>
          </div>
        </div>

        {/* Results */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-12 text-center">The Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {project.results.map((result, index) => (
              <div
                key={index}
                className="text-center p-8 bg-white/5 rounded-2xl border border-white/10"
              >
                <div className="text-5xl font-black gradient-text mb-3">
                  {result.value}
                </div>
                <div className="text-lg font-semibold mb-2">{result.metric}</div>
                <div className="text-sm text-text-muted">
                  {result.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        {project.testimonial && (
          <div className="mb-20 max-w-4xl mx-auto">
            <div className="p-12 bg-white/5 rounded-2xl border border-white/10">
              <p className="text-2xl text-text-gray mb-8 leading-relaxed">
                "{project.testimonial.text}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-primary" />
                <div>
                  <div className="font-semibold text-lg">
                    {project.testimonial.author}
                  </div>
                  <div className="text-text-muted">
                    {project.testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Live Link */}
        {project.liveUrl && (
          <div className="text-center">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-primary text-white text-lg font-semibold rounded-full hover:shadow-2xl hover:shadow-primary-blue/50 transition-shadow"
            >
              Visit Live Site
              <ExternalLink size={20} />
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
