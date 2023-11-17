"use client";

import styles from "@/styles/projectDetail.module.css";
import ProjectFrame from "@/components/projectFrame";
import ProjectsAll from "@/api/projects/projects.json";
import { useParams } from "next/navigation";

export default function ShowPage() {
  const props = useParams();
  const data = ProjectsAll.projects.filter((item) => item.id === props.id)[0];

  return (
    <>
      {data ? (
        <div className={styles.container}>
          <ProjectFrame data={data}></ProjectFrame>
        </div>
      ) : (
        <div>Failed to load</div>
      )}
    </>
  );
}
