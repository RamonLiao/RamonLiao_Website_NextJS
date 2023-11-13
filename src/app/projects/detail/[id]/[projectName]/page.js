"use client";

import styles from "../../../../styles/projectDetail.module.css";
import { useProjectDetail } from "../../../../components/dataManage";
import ProjectFrame from "../../../../components/projectFrame";

export default function Page({ params }) {
  const { data, error, isLoading } = useProjectDetail(params.id);
  console.log(data);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;

  return (
    <>
      <div className={styles.container}>
        <ProjectFrame data={data}></ProjectFrame>
      </div>
    </>
  );
}
