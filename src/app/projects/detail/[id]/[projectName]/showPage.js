"use client";

import styles from "@/styles/projectDetail.module.css";
import ProjectFrame from "@/components/projectFrame";
import ProjectsAll from "@/api/projects/projects.json";
import useSWR from "swr";
import { useParams } from "next/navigation";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ShowPage() {
  const props = useParams();

  const { id, projectName } = props;
  //   const { data, error, isLoading } = useSWR(
  //     `/api/projects/${id}?id=${id}`,
  //     fetcher
  //   );

  //   if (error) return <div>failed to load</div>;
  //   if (isLoading) return <div>loading...</div>;

  const data = ProjectsAll.projects.filter((item) => item.id === id)[0];

  //   console.log(data);
  if (!data) {
    return <div>failed to load</div>;
  }

  return (
    <>
      <div className={styles.container}>
        {/* <ProjectFrame data={data}></ProjectFrame> */}
        <div>failed to load</div>
      </div>
    </>
  );
}
