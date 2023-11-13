import Image from "next/image";
import styles from "../styles/projectFrame.module.css";

export default function ProjectFrame({ ...props }) {
  const {
    id,
    projectName,
    description,
    architecture,
    techniques,
    repoLink,
    demoLink,
    coverLink,
  } = props.data;

  const { languages, frameworks, databases, others } = techniques;
  return (
    <div className={styles.container}>
      <div className={styles.cardName}>
        <h2>{projectName}</h2>
      </div>
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
            <div className={styles.cardSkillLang} key={`languages${id}`}>
              {tech}
            </div>
          ))}
        {frameworks &&
          frameworks.map((tech) => (
            <div className={styles.cardSkillFrame} key={`frameworks${id}`}>
              {tech}
            </div>
          ))}
        {databases &&
          databases.map((tech) => (
            <div className={styles.cardSkillDb} key={`databases${id}`}>
              {tech}
            </div>
          ))}
      </div>
      <div className={styles.cardDescrip}>
        <p>{description}</p>
      </div>
      <div className={styles.cardLinks}>
        {demoLink && (
          <div>
            <a href={demoLink} target="_blank">
              Demo
            </a>
          </div>
        )}
        {repoLink && (
          <div>
            <a href={repoLink} target="_blank">
              GitHub
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
