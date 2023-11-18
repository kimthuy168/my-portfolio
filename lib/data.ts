import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
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
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
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
      NameSkill: "Figma Design",
      ImagesSkill : "/images/skill/figma.png"
    },
    {
      NameSkill: "TailWind Css",
      ImagesSkill : "/images/skill/tailwind.png"
    },
    {
      NameSkill: "HTM ",
      ImagesSkill : "/images/skill/html.png"
    },
    {
      NameSkill: "CSS ",
      ImagesSkill : "/images/skill/css.png"
    },
    {
      NameSkill: "React Js",
      ImagesSkill : "/images/skill/react.png"
    },
    {
      NameSkill: "Node Js",
      ImagesSkill : "/images/skill/nodsjs.png"
    },
    {
      NameSkill: "Mantine ",
      ImagesSkill : "/images/skill/mantin.png"
    },
    {
      NameSkill: "SCSS ",
      ImagesSkill : "/images/skill/scss.png"
    },
    {
      NameSkill: "Next Js",
      ImagesSkill : "/images/skill/nextjs.png"
    },
    {
      NameSkill: "C#",
      ImagesSkill : "/images/skill/c.png"
    },
    {
      NameSkill: "RadZen Blazor",
      ImagesSkill : "/images/skill/radzen.png"
    },
    {
      NameSkill: "Blazor",
      ImagesSkill : "/images/skill/blazor.png"
    }


] as const;
