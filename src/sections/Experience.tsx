import Link from "next/link";
import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";
function Experience() {
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    const transformSelected = () => {
      const underline = document.querySelector<HTMLElement>(".underline");
      underline!.style.top = `${selected * 2.5}rem`;
    };
    transformSelected();
  }, [selected]);

  const expereinces = [
    {
      name: "Swaayatt Robotics",
      role: "Full Stack Developer",
      url: "http://www.swaayattrobots.com/",
      start: "May 2023",
      end: "August 2023",
      shortDescription: [
        " Created a Django-based appointment system, simplifying the scheduling of appointments for new recruits and improving internal coordination.",
        "Collaborated on front-end development for the Swaayatt website, enhancing user interface and overall user experience.",
        "Worked alongside cross-functional teams to gather requirements and ensure seamless integration of systems, contributing to efficient project execution.",
      ],
    },
    {
      name: "GFG CUIT",
      role: "Teach Team Co-ordinator",
      url: "https://gfg-frontend.vercel.app/",
      start: "June 2022",
      end: "Present",
      shortDescription: [
        "Collaborated on the development and launch of the GFG Club website, contributing to its improved online presence and accessibility.",
        "Actively engaged in tech hackathons, demonstrating a commitment to fostering innovation and teamwork within the club.",
        "Participated in knowledge-sharing sessions, workshops, and tech-related events, contributing to the growth of the tech community and enhancing personal skills.",
      ],
    },
  ];
  return (
    <motion.div
      className="experience"
      id="experience"
      initial="hidden"
      whileInView="visible"
      viewport={{once: true}}
      transition={{duration: 0.6}}
      variants={{
        visible: {opacity: 1, y: -50},
        hidden: {opacity: 0, y: 0},
      }}>
      <div className="title">
        <h2>Where I&apos;ve Worked</h2>
      </div>
      <div className="container">
        <ul className="exp-slider">
          <div className="underline"></div>
          {expereinces.map((expereince, index) => {
            return (
              <li
                className={`exp-slider-item ${
                  index === selected && "exp-slider-item-selected"
                }`}
                onClick={() => setSelected(index)}
                key={expereince.name}>
                <span>{expereince.name}</span>
              </li>
            );
          })}
        </ul>
        <div className="exp-details">
          <div className="exp-details-position">
            <h3>
              <span>{expereinces[selected].role}</span>
              <span className="exp-details-position-company">
                &nbsp;@&nbsp;
                <Link href={expereinces[selected].url} className="link">
                  {expereinces[selected].name}
                </Link>
              </span>
            </h3>
            <p className="exp-details-range">
              {expereinces[selected].start} - {expereinces[selected].end}
            </p>
            <ul className="exp-details-list">
              {expereinces[selected].shortDescription.map(
                (description, index) => (
                  <li key={index} className="exp-details-list-item">
                    {description}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Experience;
