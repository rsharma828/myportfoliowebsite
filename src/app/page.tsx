"use client";

import { HackathonCard } from "@/components/hackathon-card";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import Link from "next/link";
import Markdown from "react-markdown";
import { useState } from "react";

const BLUR_FADE_DELAY = 0.04;

// Define types for the project data
interface ProjectLink {
  type: string;
  href: string;
  icon: React.ReactNode;
}

// Use a more generic type that can accept readonly properties
type Project = {
  title: string;
  href: string;
  dates: string;
  active?: boolean;
  description: string;
  technologies: readonly string[] | string[];
  links: readonly ProjectLink[] | ProjectLink[];
  image?: string;
  video?: string;
  projectTag: string;
};

// Define props interface for ProjectsSection
interface ProjectsSectionProps {
  projects: readonly Project[] | Project[];
}

export default function Page() {
  return (
    <main className="flex flex-col min-h-[100dvh] space-y-10">
      <section id="hero">
        <div className="mx-auto w-full max-w-2xl space-y-8">
          <div className="gap-2 flex justify-between">
            <div className="flex-col flex flex-1 space-y-1.5">
              <BlurFadeText
                delay={BLUR_FADE_DELAY}
                className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
              />
              <BlurFadeText
                className="max-w-[600px] md:text-xl"
                delay={BLUR_FADE_DELAY}
                text={DATA.description}
              />
            </div>
            <BlurFade delay={BLUR_FADE_DELAY}>
              <Avatar className="size-28 border">
                <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                <AvatarFallback>{DATA.initials}</AvatarFallback>
              </Avatar>
            </BlurFade>
          </div>
        </div>
      </section>

      <section id="projects" className="py-12">
        <div className="space-y-12 w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-8">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Check out my latest work
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-3xl mx-auto">
                  I&apos;ve worked on a variety of projects, from simple
                  websites to complex web applications. Here are a few of my
                  favorites.
                </p>
              </div>
            </div>
          </BlurFade>
          
          <ProjectsSection projects={DATA.projects as unknown as readonly Project[]} />
        </div>
      </section>



      <section id="skills" className="w-full max-w-5xl mx-auto px-6">
        <div className="flex min-h-0 flex-col gap-y-6">
          <BlurFade delay={BLUR_FADE_DELAY * 7}>
            <h2 className="text-2xl font-bold mb-4">Skills</h2>
          </BlurFade>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {Object.entries(DATA.skillCategories).map(([category, skills], categoryIndex) => (
              <BlurFade key={category} delay={BLUR_FADE_DELAY * 8 + categoryIndex * 0.1}>
                <div className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                  <h3 className="text-lg font-semibold mb-3">{category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {(skills as readonly string[]).map((skill, skillIndex) => (
                      <BlurFade key={skill} delay={BLUR_FADE_DELAY * 9 + skillIndex * 0.05}>
                        <Badge className="px-3 py-1 text-sm" key={skill}>{skill}</Badge>
                      </BlurFade>
                    ))}
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-16">
        <div className="space-y-12 w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 16}>
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  My Services
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  What I Can Build For You
                </h2>
                <p className="text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed max-w-3xl mx-auto">
                  I offer professional web development services to help bring your ideas to life.
                </p>
              </div>
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1500px] mx-auto px-6 mt-10">
            <BlurFade delay={BLUR_FADE_DELAY * 17}>
              <div className="border rounded-lg p-8 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-3">Landing Pages</h3>
                <p className="text-muted-foreground">Attractive, conversion-focused landing pages to showcase your product or service.</p>
              </div>
            </BlurFade>
            
            <BlurFade delay={BLUR_FADE_DELAY * 17.1}>
              <div className="border rounded-lg p-8 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-3">Business Websites</h3>
                <p className="text-muted-foreground">Professional websites that represent your brand and help you reach more customers.</p>
              </div>
            </BlurFade>
            
            <BlurFade delay={BLUR_FADE_DELAY * 17.2}>
              <div className="border rounded-lg p-8 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-3">SaaS Applications</h3>
                <p className="text-muted-foreground">Custom software-as-a-service applications with subscription models and user management.</p>
              </div>
            </BlurFade>
            
            <BlurFade delay={BLUR_FADE_DELAY * 17.3}>
              <div className="border rounded-lg p-8 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-3">AI-Powered Apps</h3>
                <p className="text-muted-foreground">Applications leveraging AI capabilities to provide intelligent features and automation.</p>
              </div>
            </BlurFade>
            
            <BlurFade delay={BLUR_FADE_DELAY * 17.4}>
              <div className="border rounded-lg p-8 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-3">RAG Applications</h3>
                <p className="text-muted-foreground">Retrieval-augmented generation systems that combine search with AI to provide accurate responses.</p>
              </div>
            </BlurFade>
            
            <BlurFade delay={BLUR_FADE_DELAY * 17.5}>
              <div className="border rounded-lg p-8 hover:shadow-md transition-shadow">
                <h3 className="text-xl font-bold mb-3">E-commerce Solutions</h3>
                <p className="text-muted-foreground">Online stores with payment processing, inventory management, and customer accounts.</p>
              </div>
            </BlurFade>
          </div>
          
          <div className="flex justify-center mt-12">
            <BlurFade delay={BLUR_FADE_DELAY * 18}>
              <Link href="https://wa.me/919973370694" target="_blank" rel="noopener noreferrer">
                <Button className="bg-green-600 hover:bg-green-700 px-8 py-2 text-base">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp mr-2" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                  </svg>
                  Contact Me on WhatsApp
                </Button>
              </Link>
            </BlurFade>
          </div>
        </div>
      </section>

      <section id="contact" className="py-16">
        <div className="grid items-center justify-center gap-4 px-6 text-center md:px-6 w-full">
          <BlurFade delay={BLUR_FADE_DELAY * 19}>
            <div className="space-y-4">
              <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                <div>Contact</div>
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Get in Touch
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Want to chat? Just shoot me a dm{" "}
                <Link
                  href={DATA.contact.social.X.url}
                  className="text-blue-500 hover:underline"
                >
                  with a direct question on twitter
                </Link>{" "}
                or{" "}
                <Link
                  href="mailto:rksharmagmo@gmail.com"
                  className="text-blue-500"
                >
                  Gmail
                </Link>{" "}
                and I&apos;ll respond whenever I can. I will ignore all
                soliciting.
              </p>
              <div className="mt-6">
                <Link href="https://wa.me/919973370694" target="_blank" rel="noopener noreferrer">
                  <Button className="bg-green-600 hover:bg-green-700 px-8 py-2 text-base">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp mr-2" viewBox="0 0 16 16">
                      <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                    </svg>
                    Contact Me on WhatsApp
                  </Button>
                </Link>
              </div>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}

function ProjectsSection({ projects }: ProjectsSectionProps) {
  const [showAll, setShowAll] = useState(false);
  const displayedProjects = showAll ? projects : projects.slice(0, 9);
  
  return (
    <>
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-[1500px] mx-auto px-6">
        {displayedProjects.map((project, id: number) => (
          <BlurFade
            key={project.title}
            delay={BLUR_FADE_DELAY * 4 + id * 0.05}
          >
            <ProjectCard
              href={project.href}
              key={project.title}
              title={project.title}
              description={project.description}
              tags={project.technologies}
              image={project.image}
              video={project.video}
              links={project.links}
              projectTag={project.projectTag}
            />
          </BlurFade>
        ))}
      </div>
      
      {projects.length > 9 && (
        <div className="flex justify-center mt-12">
          <Button 
            onClick={() => setShowAll(!showAll)}
            variant="outline"
            className="px-8 py-2 text-base"
          >
            {showAll ? "Show Less" : "Show More Projects"}
          </Button>
        </div>
      )}
    </>
  );
}
