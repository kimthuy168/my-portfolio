import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaMicrosoft, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated Information technology",
    location: "Asia Euro University, Phnom Penh",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "Front-End Developer",
    location: "GOGO & CO BOOKING SERVICES CO., LTD, Phnom Penh",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Full-Stack Developer",
    location: "Greenlight, Phnom Penh",
    description:
      "I'm now a full-stack developer working as a Full-time. My stack includes C#, Asp.net core,  and cockroachdb. I'm open to full-time opportunities.",
    icon: React.createElement(FaMicrosoft),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
    {
      nameskill: "Figma Design",
      imagesskill : "/images/skill/figma.png"
    },
    {
      nameskill: "TailWind Css",
      imagesskill : "/images/skill/tailwind.png"
    },
    {
      nameskill: "HTM ",
      imagesskill : "/images/skill/html.png"
    },
    {
      nameskill: "CSS ",
      imagesskill : "/images/skill/css.png"
    },
    {
      nameskill: "React Js",
      imagesskill : "/images/skill/react.png"
    },
    {
      nameskill: "Node Js",
      imagesskill : "/images/skill/nodsjs.png"
    },
    {
      nameskill: "Mantine ",
      imagesskill : "/images/skill/mantin.png"
    },
    {
      nameskill: "SCSS ",
      imagesskill : "/images/skill/scss.png"
    },
    {
      nameskill: "Next Js",
      imagesskill : "/images/skill/nextjs.png"
    },
    {
      nameskill: "C#",
      imagesskill : "/images/skill/c.png"
    },
    {
      nameskill: "RadZen Blazor",
      imagesskill : "/images/skill/radzen.png"
    },
    {
      nameskill: "Blazor",
      imagesskill : "/images/skill/blazor.png"
    }
] as const;
