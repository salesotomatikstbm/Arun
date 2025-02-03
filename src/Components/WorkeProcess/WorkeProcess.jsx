import React from "react";
import Title from "../Shared/Title/Title";
import WorkProcessCard from "./WorkProcessCard";

const processList = [
  {
    id: 1,
    title: "Planning & Research",
    info: "Understanding project requirements, target audience, and setting clear objectives for the website.",
    list: [
      "Gathering client requirements and goals",
      "Researching competitors and industry trends",
      "Defining website structure and functionality",
    ],
  },
  {
    id: 2,
    title: "Design & Prototyping",
    info: "Creating wireframes, selecting UI/UX elements, and designing a visually appealing interface.",
    list: [
      "Developing wireframes and UI mockups",
      "Choosing typography, color schemes, and layout",
      "Ensuring a user-friendly and responsive design",
    ],
  },
  {
    id: 3,
    title: "Development & Deployment",
    info: "Building the website using React and Next.js, followed by testing and deployment.",
    list: [
      "Converting designs into functional React components",
      "Implementing responsiveness and performance optimization",
      "Testing, debugging, and deploying the website",
    ],
  },
];

const WorkeProcess = () => {
  return (
    <section className="process__section pt-120 pb-120">
      <div className="container">
        <Title
          mainTitle="Your Dream Website In Just Few Steps"
          sortTitle="Working Process"
        />
        <div className="row g-4">
          {processList.map(({ id, info, list, title }) => (
            <WorkProcessCard key={id} info={info} list={list} title={title} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkeProcess;
