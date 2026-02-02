import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowUpRight, ExternalLink, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  sqlite: {
    title: "SQLite",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  fastapi: {
    title: "FastAPI",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
};

export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};

const projects: Project[] = [
  {
    id: "due-diligence-copilot",
    category: "AI/Finance",
    title: "Due Diligence Co-Pilot",
    src: "/assets/projects-screenshots/due-diligence/landing.png",
    screenshots: ["landing.png"],
    skills: {
      frontend: [PROJECT_SKILLS.python],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.sqlite, PROJECT_SKILLS.fastapi],
    },
    live: "#",
    github: "https://github.com/ayaangazali",
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center mb-4">
            AI-Powered Financial Document Analysis
          </TypographyP>
          <TypographyP className="font-mono ">
            Due Diligence Co-Pilot is an intelligent system that automates the review of 
            500+ SEC Reg S-K Item 601 filings and financial PDFs, cutting diligence time by 65%.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          
          <TypographyH3 className="my-4 mt-8">Key Features</TypographyH3>
          <ul className="list-disc list-outside ml-6 space-y-2 font-mono">
            <li>Automated review of 500+ SEC filings and financial documents</li>
            <li>Landing AI parsing integrated with multi-agent RAG system</li>
            <li>40% improvement in compliance-gap detection accuracy</li>
            <li>95%+ precision in flagging financial and compliance risks</li>
            <li>Streamlined banker-legal collaboration workflow</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Technical Implementation</TypographyH3>
          <p className="font-mono mb-2">
            Built with Python and Vector DB technology, this system leverages the Gemini API 
            for advanced natural language processing and document understanding. The multi-agent 
            RAG (Retrieval-Augmented Generation) architecture ensures accurate and contextual 
            analysis of complex financial documents.
          </p>

          <TypographyH3 className="my-4 mt-8">Impact</TypographyH3>
          <p className="font-mono mb-2">
            Reduced due diligence time by 65%, allowing financial teams to focus on strategic 
            decision-making rather than manual document review. The system has proven invaluable 
            in supporting high-stakes financial transactions and regulatory compliance.
          </p>
        </div>
      );
    },
  },
  {
    id: "networking-copilot",
    category: "AI/Productivity",
    title: "Networking Co-Pilot",
    src: "/assets/projects-screenshots/networking-copilot/landing.png",
    screenshots: ["landing.png"],
    live: "#",
    github: "https://github.com/ayaangazali",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.react],
      backend: [PROJECT_SKILLS.fastapi, PROJECT_SKILLS.python],
    },
    get content(): JSX.Element {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center mb-4">
            AI-Powered Networking Assistant
          </TypographyP>
          <TypographyP className="font-mono ">
            Networking Co-Pilot is an intelligent assistant that generates contextualized and 
            authentic briefs, shared interests, and reminders for professional networking events. 
            Built with FastAPI and powered by OpenAI's API, it revolutionizes how professionals 
            prepare for networking opportunities.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Features</TypographyH3>
          <ul className="list-disc list-outside ml-6 space-y-2 font-mono">
            <li>Contextualized networking briefs generated in seconds</li>
            <li>Automatic identification of shared interests and conversation starters</li>
            <li>Smart reminders for follow-ups and key talking points</li>
            <li>Improved networking prep efficiency by 80%</li>
            <li>Deployed with 100+ professionals at major events</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Adoption & Impact</TypographyH3>
          <p className="font-mono mb-2">
            The platform has been adopted by 200+ active users and demonstrated 3x higher 
            engagement compared to traditional networking methods. Users report significantly 
            more meaningful connections and better preparation for networking events.
          </p>

          <TypographyH3 className="my-4 mt-8">Technology</TypographyH3>
          <p className="font-mono mb-2">
            Built with FastAPI for high-performance backend operations, integrated with OpenAI's 
            API for natural language processing, and featuring a responsive JavaScript frontend 
            for seamless user experience. The system validates demand for AI-driven, authentic 
            networking workflows in professional settings.
          </p>
        </div>
      );
    },
  },
  {
    id: "opensource-repo-finder",
    category: "Developer Tools",
    title: "Open Source Repo Finder",
    src: "/assets/projects-screenshots/opensource-finder/landing.png",
    screenshots: ["landing.png"],
    live: "#",
    github: "https://github.com/ayaangazali",
    skills: {
      frontend: [PROJECT_SKILLS.js, PROJECT_SKILLS.react],
      backend: [PROJECT_SKILLS.fastapi, PROJECT_SKILLS.python],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono text-2xl text-center mb-4">
            AI-Powered Repository Discovery System
          </TypographyP>
          <TypographyP className="font-mono ">
            Open Source Repo Finder is an intelligent discovery system that helps development 
            teams find the perfect open-source repositories for their needs. By leveraging AI 
            over 1,000+ documentation PDFs, it matches internal requirements with relevant 
            open-source solutions.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />

          <TypographyH3 className="my-4 mt-8">Core Features</TypographyH3>
          <ul className="list-disc list-outside ml-6 space-y-2 font-mono">
            <li>Semantic search across 1,000+ documentation PDFs</li>
            <li>RAG (Retrieval-Augmented Generation) pipelines for accurate matching</li>
            <li>70% reduction in repository scouting time</li>
            <li>45% improvement in match relevance</li>
            <li>Interactive interface for team collaboration</li>
          </ul>

          <TypographyH3 className="my-4 mt-8">Technical Architecture</TypographyH3>
          <p className="font-mono mb-2">
            The system uses FastAPI for the backend, Vector DB for efficient semantic search, 
            and integrates with Gemini API for advanced natural language understanding. The 
            semantic RAG pipelines ensure that recommendations are not just keyword-based but 
            truly understand the context and requirements of each query.
          </p>

          <TypographyH3 className="my-4 mt-8">Results</TypographyH3>
          <p className="font-mono mb-2">
            Successfully doubled adoption speed in pilot programs, with development teams 
            reporting significantly faster discovery of suitable open-source solutions. The 
            interactive interface has streamlined collaboration and decision-making processes 
            across multiple teams.
          </p>
        </div>
      );
    },
  },
];

export default projects;
