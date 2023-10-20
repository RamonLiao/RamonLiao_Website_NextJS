"use client";

import Image from "next/image";
import styles from "../styles/projects.module.css";
// import React from "react";
import useSWR from "swr";

export default function Projects() {
  const { data, error, isLoading } = useSWR("/api/projects", fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <main>
      <div>This is Projects page.</div>
      <div className={styles.container}>
        <div className={styles.card}>
          <div className={styles.cardBody}>
            <div className={styles.cardImg}>
              <Image
                className={styles.cardImgObj}
                src="/images/TravelPic.jpg"
                title="TravelPic"
                alt="TravelPic"
                width={360}
                height={200}
              />
            </div>
            <div className={styles.cardSkills}>
              <div className={styles.cardSkillName}>Front-end</div>
              <div className={styles.cardSkillName}>HTML</div>
              <div className={styles.cardSkillName}>CSS</div>
              <div className={styles.cardSkillName}>JavaScript</div>
              <div className={styles.cardSkillName}>Next.js</div>
            </div>
          </div>
          <div className={styles.cardFeet}>
            <div className={styles.cardFootLeft}></div>
            <div className={styles.cardFootRight}></div>
          </div>
          <div className={styles.cardName}>Portfolio Website</div>
        </div>
        {data &&
          data.projects.map((detail) => <ProjectDetails detail={detail} />)}
      </div>
    </main>
  );
}

const fetcher = (...args) => fetch(...args).then((res) => res.json());

function ProjectDetails({ ...props }) {
  const {
    projectName,
    description,
    architecture,
    techniques,
    repoLink,
    demoLink,
    coverLink,
  } = props.detail;

  const { languages, frameworks, databases, others } = techniques;

  return (
    <div className={styles.card}>
      <div className={styles.cardBody}>
        <div className={styles.cardImg}>
          <Image
            className={styles.cardImgObj}
            src={"/images/project-covers/" + coverLink}
            title={projectName}
            alt={projectName}
            width={360}
            height={200}
          />
        </div>
        <div className={styles.cardSkills}>
          <div className={styles.cardSkillArch}>{architecture}</div>
          {languages &&
            languages.map((tech) => (
              <div className={styles.cardSkillLang}>{tech}</div>
            ))}
          {frameworks &&
            frameworks.map((tech) => (
              <div className={styles.cardSkillFrame}>{tech}</div>
            ))}
          {databases &&
            databases.map((tech) => (
              <div className={styles.cardSkillDb}>{tech}</div>
            ))}
        </div>
        <div className={styles.cardFeet}>
          <div className={styles.cardFootLeft}></div>
          <div className={styles.cardFootRight}></div>
        </div>
      </div>

      <div className={styles.cardName}>{projectName}</div>
    </div>
  );
}
