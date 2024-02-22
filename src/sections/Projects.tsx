import Image from "next/image";
import Link from "next/link";
import React from "react";
import {FiGithub, FiExternalLink} from "react-icons/fi";
import {motion} from "framer-motion";

function Projects() {
  const projectsData = [
    {
      image: "/project1.png",
      projectName: "3-D Protfolio",
      projectLink: "https://abhiraj3dportfolio.netlify.app/",
      projectDescription:
        "Embark on a Visual Journey with Our 3D Portfolio Website Powered by Three.js. Explore a Dynamic Showcase of Creativity, Where Imagination Comes to Life Through Interactive and Immersive Experiences.",
      projectTech: ["React.Js", "Three.js", "Tailwind", "Typescript", "Vite"],
      projectExternalLinks: {
        github: "https://github.com/abhi-cyber/3-D-Portfolio",
        externalLink: "https://abhiraj3dportfolio.netlify.app/",
      },
    },
    {
      image: "/project2.png",
      projectName: "Realtime Chat App",
      projectLink: "https://blitz-chat.netlify.app/",
      projectDescription:
        "This is a chat app made with React and Node.js that sends real-time messages and is highly scalable. It uses advanced JavaScript concepts like debouncing and is optimized for React.",
      projectTech: [
        "React",
        "Sockets",
        "Node.js",
        "Express",
        "MongoDB",
        "Styled Components",
      ],
      projectExternalLinks: {
        github: "https://github.com/abhi-cyber/Blitz-Chat",
        externalLink: "https://blitz-chat.netlify.app/login",
      },
    },
    {
      image: "/project3.png",
      projectName: "MealToGo",
      projectLink: "https://mealtogo-launch.netlify.app/",
      projectDescription:
        "Introducing our cutting-edge food ordering app with integrated Google Maps, bringing local restaurant favorites straight to your doorstep. Explore a diverse range of restaurants, place orders seamlessly, and enjoy hassle-free dining. ",
      projectTech: ["React Native", "Expo", "Firebase", "Redux Toolkit"],
      projectExternalLinks: {
        github: "https://github.com/abhi-cyber/MealToGo",
        externalLink: "https://mealtogo-launch.netlify.app/",
      },
    },
  ];
  return (
    <div className="projects" id="work">
      <motion.div
        className="title"
        initial="hidden"
        whileInView="visible"
        viewport={{once: true}}
        transition={{duration: 0.6}}
        variants={{
          visible: {opacity: 1, y: -50},
          hidden: {opacity: 0, y: 0},
        }}>
        <h2>Some Things I’ve Built</h2>
      </motion.div>
      <div className="projects-container">
        {projectsData.map(
          ({
            image,
            projectDescription,
            projectLink,
            projectExternalLinks,
            projectName,
            projectTech,
          }) => {
            return (
              <motion.div
                className="project"
                key={projectName}
                initial="hidden"
                whileInView="visible"
                viewport={{once: true}}
                transition={{duration: 0.6}}
                variants={{
                  visible: {opacity: 1, y: -50},
                  hidden: {opacity: 0, y: 0},
                }}>
                <div className="project-image">
                  <div className="project-image-overlay"></div>
                  <div className="project-image-container">
                    <Image src={image} fill alt={projectName} quality={100} />
                  </div>
                </div>
                <div className="project-info">
                  <p className="project-info-overline">Featured Project</p>
                  <h3 className="project-info-title">{projectName}</h3>
                  <div className="project-info-description">
                    <p>{projectDescription}</p>
                  </div>
                  <ul className="project-info-tech-list">
                    {projectTech.map((tech) => (
                      <li className="project-info-tech-list-item" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                  <ul className="project-info-links">
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.github}
                        className="project-info-links-item-link">
                        <FiGithub />
                      </Link>
                    </li>
                    <li className="project-info-links-item">
                      <Link
                        href={projectExternalLinks.externalLink}
                        className="project-info-links-item-link">
                        <FiExternalLink />
                      </Link>
                    </li>
                  </ul>
                </div>
              </motion.div>
            );
          }
        )}
      </div>
    </div>
  );
}

export default Projects;
