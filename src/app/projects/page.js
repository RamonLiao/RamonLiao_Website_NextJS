"use client";

import Image from "next/image";
import styles from "../styles/projects.module.css";
// import React from "react";
import useSWR from "swr";
import Link from "next/link";

export default function Projects() {
  const { data, error, isLoading } = useSWR("/api/projects", fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <main>
      <div className={styles.container}>
        {data &&
          data.projects.map((detail) => (
            <ProjectDetails detail={detail} key="details" />
          ))}
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
  const projectNameNoSpace = projectName.trim().replace(/\s+/g, "-");

  return (
    <div className={styles.card}>
      <Link href={`/projects/detail/${projectNameNoSpace}`}>
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
                <div className={styles.cardSkillLang} key="languages">
                  {tech}
                </div>
              ))}
            {frameworks &&
              frameworks.map((tech) => (
                <div className={styles.cardSkillFrame} key="frameworks">
                  {tech}
                </div>
              ))}
            {databases &&
              databases.map((tech) => (
                <div className={styles.cardSkillDb} key="databases">
                  {tech}
                </div>
              ))}
          </div>
          <div className={styles.cardFeet}>
            <div className={styles.cardFootLeft}></div>
            <div className={styles.cardFootRight}></div>
          </div>
        </div>
      </Link>
      <div className={styles.cardName}>
        <a href={repoLink} target="_blank">
          {projectName}
        </a>
      </div>
    </div>
  );
}
