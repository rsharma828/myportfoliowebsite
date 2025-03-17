import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates?: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  projectTag?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  projectTag,
  links,
  className,
}: Props) {
  return (
    <Card
      className={
        "flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full"
      }
    >
      <div className="relative">
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-48 w-full object-cover object-top"
          />
        )}
        {!video && image && (
          <iframe
            src={image}
            width="100%"
            height="200"
            allow="autoplay"
            className="w-full"
          ></iframe>
        )}
      </div>
      
      <CardHeader className="px-5 py-4">
        <div className="space-y-3">
          <div className="flex justify-between items-start">
            <CardTitle className="text-xl">{title}</CardTitle>
            {projectTag && (
              <Badge variant="secondary" className="ml-2 px-2 py-1 text-xs">
                {projectTag}
              </Badge>
            )}
          </div>
          {dates && <time className="font-sans text-xs text-muted-foreground block">{dates}</time>}
          <div className="hidden font-sans text-xs underline print:visible">
            {link?.replace("https://", "").replace("www.", "").replace("/", "")}
          </div>
          <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
            {description}
          </Markdown>
        </div>
      </CardHeader>
      
      <CardFooter className="px-5 py-4 mt-auto">
        {href && href !== "#" && (
          <Link href={href} target="_blank" rel="noopener noreferrer" className="w-full">
            <Button variant="outline" className="w-full flex items-center justify-center gap-2">
              <ExternalLink size={16} />
              Visit Website
            </Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  );
}
