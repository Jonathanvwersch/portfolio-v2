"use client";

import { ProjectAndLearningCard } from "@/components/project-and-learning-card";
import { useState } from "react";

const projects: React.ComponentProps<typeof ProjectAndLearningCard>[] = [
  {
    title: "Version 2 of my Portfolio",
    date: "August 2024",
    leadingLine:
      "This website is version 2 of my portfolio, built with Next.js and Tailwind CSS",
    skills: ["NextJs", "Tailwind CSS", "TypeScript", "React"],
    linkProject: "https://j-vw.com",
    linkCode: "https://github.com/Jonathanvwersch/portfolio-v2",
  },
  {
    title: "Frontend Monorepo",
    date: "July 2024",
    leadingLine:
      "Built an open source frontend monorepo starter pack for scalable web applications.",
    bulletPoints: [
      "Uses Turbo for dependency graph optimization",
      "Uses tsup to orchestrate transpilation and bundling",
      "Contains a custom watcher script to handle limitations in tsup's default configuration",
      "Tested for large-scale applications with many packages",
    ],
    skills: ["Developer tooling", "TypeScript", "Turbo", "Esbuild", "tsup"],
    linkCode:
      "https://github.com/Jonathanvwersch/frontend-monorepo-boilerplate",
  },
  {
    title: "VeriTweet",
    date: "June 2024",
    leadingLine:
      "A tool which uses the Perplexity API that allows for you to fact check tweets",
    bulletPoints: [
      "Built a simple chrome extensions that injects a button next to a tweet that allows you to fact check the tweet",
      "Found that it worked reasonably well but would need full control of the API to get it to work well",
    ],
    skills: [
      "Python",
      "Chrome Extension",
      "React",
      "Vite",
      "TypeScript",
      "FastAPI",
      "Render",
    ],
    linkProject: "https://www.youtube.com/watch?v=9IQIvPRDEy8",
    linkCode: "https://github.com/Jonathanvwersch/ai-community-notes",
  },
  {
    title: "Simple Redux",
    date: "June 2024",
    leadingLine: "A simple implementation of Redux",
    bulletPoints: [
      "Built a simple version of Redux to learn a bit more about a tool I use every day at work",
    ],
    skills: ["Javascript"],
    linkCode: "https://github.com/Jonathanvwersch/simple-redux",
  },
  {
    title: "Cross Browser Window Snake",
    date: "June 2024",
    leadingLine:
      "A version of snake that works across multiple browser windows by storing coordinates in local storage",
    bulletPoints: [
      "I have no idea why I decided to make this, but it was a fun project",
    ],
    skills: ["Javascript"],
    linkCode: "https://github.com/Jonathanvwersch/cross-browser-window-snake",
  },
  {
    title: "Limberr",
    date: "May 2023 - November 2023",
    leadingLine:
      "Co-founded Limberr - a web application that allows fitness content creators to monetise their content",
    skills: [
      "React",
      "Next.js",
      "Typescript",
      "PostgresSQL",
      "Docker",
      "GraphQL",
      "Express",
      "Apollo",
      "AWS (CloudFormation, Lambda, EC2, ECR, S3)",
    ],
    bulletPoints: [
      "Developed our front-end using Next.js and aided in the development of GraphQL APIs using Apollo to serve our back-end",
      "Established a normalized and relational SQL database to optimize data management and retrieval",
      "Orchestrated the development of the site's infrastructure leveraging Docker and AWS services (Lambda, S3, RDS, ECR, EC2, CloudFormation), ensuring robust and scalable solutions",
      "Developed our cross-platform mobile application for iOS and Android using React Native",
    ],
    linkCode:
      "https://github.com/Jonathanvwersch/frontend-monorepo-boilerplate",
  },
  {
    title: "Version 1 of my Portfolio",
    date: "August 2022",
    leadingLine: "Version 1 of my portfolio built with Gatsby",
    skills: ["React", "GraphQL", "Gatsby", "Typescript", "Styled Components"],
    linkCode: "https://github.com/Jonathanvwersch/Portfolio",
    linkProject: "https://v1.j-vw.com",
  },
  {
    title: "Dekked",
    date: "August 2024",
    leadingLine:
      "Dekked is an integrated flashcard and note-taking application",
    bulletPoints: [
      "Dekked was my first foray into programming; prior to this project I had only ever written Matlab for my mechanical engineering degree",
      "Raised £3250 in equity-free funding",
      "Added email and OAuth for authentication",
      "Designed the web app in Figma and developed the front-end using React and Typescript",
      "Created a design system to store all of the common React components",
      "Built the backend using Node.js, Postgres and Express Hosted the web app using Netlify on the front end, and Render for the API and database",
      "Developed tests using Cypress and React Testing Library, and created staging and production environments to allow for the safe development and integration of new code",
    ],
    skills: ["NextJs", "Tailwind CSS", "TypeScript", "React"],
    linkProject:
      "https://www.loom.com/share/folder/3395420ad9fd427bb58329f930c5e288",
  },
];

const learnings: React.ComponentProps<typeof ProjectAndLearningCard>[] = [
  {
    title: "LeetCode",
    date: "December 2023 - Present",
    leadingLine:
      "Spent a lot of time on LeetCode practicing algorithms and data structures",
    linkProject: "https://leetcode.com/u/JvW/",
  },
];

export default function ProjectsAndLearnings() {
  const [activeTab, setActiveTab] = useState<"projects" | "learnings">(
    "projects"
  );

  return (
    <>
      <h1 className="font-bold mb-4">PROJECTS & LEARNINGS</h1>
      <p className="mb-8">
        A collection of projects and other learnings I&apos;ve built and focused
        on outside of my day job. Some of these projects took a day, others a
        week, and some more than a month, but I include all projects regardless
        of how long it took to build them.
      </p>

      <div className="mb-8 flex space-x-2">
        <button
          className={`px-4 py-2 rounded-full text-sm transition-colors duration-200 ease-in-out
            ${
              activeTab === "projects"
                ? "bg-gray-800 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          onClick={() => setActiveTab("projects")}
        >
          PROJECTS
        </button>
        <button
          className={`px-4 py-2 rounded-full text-sm transition-colors duration-200 ease-in-out
            ${
              activeTab === "learnings"
                ? "bg-gray-800 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          onClick={() => setActiveTab("learnings")}
        >
          LEARNINGS
        </button>
      </div>

      {activeTab === "projects" && (
        <ol className="relative ml-0 w-full">
          {projects.map((project) => (
            <li key={project.title} className="mb-6">
              <ProjectAndLearningCard {...project} />
            </li>
          ))}
        </ol>
      )}

      {activeTab === "learnings" && (
        <ol className="relative ml-0 w-full">
          {learnings.map((learning) => (
            <li key={learning.title} className="mb-6">
              <ProjectAndLearningCard {...learning} />
            </li>
          ))}
        </ol>
      )}
    </>
  );
}
